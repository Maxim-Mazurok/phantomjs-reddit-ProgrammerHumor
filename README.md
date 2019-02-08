# PhantomJS Reddit ProgrammerHumor Parser
Parse [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/) from Reddit 
using [PhantomJS](https://www.npmjs.com/package/phantom) 
in [NodeJS](https://nodejs.org/),
sort titles depending on likes and output as a JSON.

## Getting started
1. Clone: 
```
bash git clone https://github.com/Maxim-Mazurok/phantomjs-reddit-programmer-humor-parser
```
2. Install dependencies: 
```
bash cd phantomjs-reddit-programmer-humor-parser && npm install
```
3. Run: 
```
bash npm start
```
4. Example output:
```JSON
[
  {
    "likes": 1900,
    "title": "When asking that one coworker about their favourite IDE"
  },
  {
    "likes": 2000,
    "title": "Everybody loves JS. Part 2"
  },
  {
    "likes": 2800,
    "title": "how to build a horse with Programming"
  },
  {
    "likes": 3000,
    "title": "#10YearChallenge"
  },
  {
    "likes": 6800,
    "title": "Wait a second... I did this before..."
  },
  {
    "likes": 50400,
    "title": "Spotted on GitHub 🤓"
  },
  {
    "likes": 153000,
    "title": "UML diagram / Source code"
  },
  {
    "likes": 176000,
    "title": "How to learn programming in one day"
  },
  {
    "likes": 176000,
    "title": "I was told there would be karma on cake day"
  },
  {
    "likes": 177000,
    "title": "But if they do it in the movies..."
  },
  {
    "likes": 254000,
    "title": "somebody did an oopsie"
  },
  {
    "likes": 286000,
    "title": "Survey for our Upcoming Hackathon"
  },
  {
    "likes": 459000,
    "title": "REMINDER: This is NOT a general tech humor subreddit"
  },
  {
    "likes": 802000,
    "title": "And what was your first step?"
  },
  {
    "likes": 913000,
    "title": "Truly a miracle"
  }
]
```

##TODO:
- [ ] Use promises to wait for jQuery to load, or get rid of it
- [ ] Make it less spaghetti, probably create helper functions
- [ ] Create an HTML-output demo
- [ ] Deploy demo to [Heroku](https://heroku.com)


## Disclaimer:
This project was created only in educational purposes.

It may not work later, if Reddit changes their HTML markup.

---
"Reddit" is a [registered trademark](https://trademarks.justia.com/864/21/reddit-86421757.html) 
of [Reddit Corporation](https://www.reddit.com/)
