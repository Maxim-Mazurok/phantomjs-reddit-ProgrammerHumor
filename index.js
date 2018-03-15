const phantom = require('phantom');
let _ph, _page;

phantom
    .create()
    .then(ph => {
        _ph = ph;
        return _ph.createPage();
    })
    .then(page => {
        _page = page;
        return _page.open('https://www.reddit.com/r/ProgrammerHumor/');
    })
    .then(status => {
        console.log(status);
        return _page.evaluate(function () {
            // noinspection ES6ConvertVarToLetConst
            var array = [];
            $('a.title').each(function () {
                array.push($(this).text());
            });
            return array;
        })
    })
    .then(array => {
        console.log(array);
        _page.close();
        _ph.exit();
    })
    .catch(e => console.log(e));