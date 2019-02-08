const phantom = require("phantom");

let _phantom,
    _page;

phantom
    .create()
    .then(ph => {
        _phantom = ph;
        return _phantom.createPage();
    })
    .then(page => {
        _page = page;
        return _page.open("https://www.reddit.com/r/ProgrammerHumor/");
    })
    .then(() => {
        return new Promise(resolve => {
            let array = false;

            _page.on("onResourceReceived", (resource) => {
                if (resource.url.indexOf("code.jquery.com/jquery-latest.min.js") !== -1) {
                    _page.off("onResourceReceived");
                    // Get data
                    array = _page.evaluate(function () {
                        const array = [];
                        // noinspection JSUnresolvedFunction
                        jQuery(".scrollerItem:not(.Blank)").each(function () {
                            // noinspection JSUnresolvedFunction
                            const title = jQuery(this).find("h2").text();
                            // noinspection JSUnresolvedFunction, SpellCheckingInspection
                            const likes = jQuery(this).find("> div:first > div:first > div:first").text();
                            array.push({
                                title: title,
                                likes: likes,
                            });
                        });
                        return array;
                    });
                }
            });
            // Inject jQuery
            _page.evaluate(function () {
                const e = document.createElement("script");
                e.src = "//code.jquery.com/jquery-latest.min.js";
                e.onload = function () {
                    // noinspection JSUnresolvedVariable, JSUnresolvedFunction
                    jQuery.noConflict();
                };
                document.head.appendChild(e);
            });

            function waitForArray() {
                if (array === false) {
                    setTimeout(waitForArray, 50);
                } else {
                    array.then((array) => {
                        array = array.map(function (x) {
                            if (x.likes === undefined) x.likes = 0;
                            if (x.likes.indexOf("k")) x.likes = parseFloat(x.likes) * 1000;
                            x.likes = parseInt(x.likes);
                            return x;
                        });
                        array = array.sort((a, b) => a.likes - b.likes);
                        resolve(array);
                    });
                }
            }

            waitForArray();
        });
    })
    .then((array) => {
        console.log(JSON.stringify(array));

        _page.close().then(() => {
            _phantom.exit();
        });
    })
    .catch(exception => {
        console.warn("Exception: ", exception);
    });
