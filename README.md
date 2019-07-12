# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# React-Router and the News API

#### React, React-Router, and the News, together at last!

This assignment is meant to reinforce what we have already learned and for you get into a good workflow as we approach Project 2. We want you to flex your creative muscles by building out a simple app.

![](https://res.cloudinary.com/jkarlin929/image/upload/v1550694937/ScreenshotNews_p8j2ul.png)

## Getting Started with React:
- Fork and Clone this repo then `cd` into the repo name.
- Run `create-react-app news-app` and `cd` into the `news-app`.
- Make sure that your react app has `react router` installed (hint: refer back to the [React Router](https://git.generalassemb.ly/sei-nyc-cicadas/react-router) lesson).
- Run `npm start`.
- Remove or delete the pre-loaded `create-react-app` stuff that comes with it (`logo.svg, app.test.js, serviceWorker`, the code in `App.css`). _This step is mandatory_.

## React-Router:
- We're building this app first with the provided data in [`/data/article-data.json`](/data/article-data.json).
- Using the provided data, create: 
  - a navigation menu
  - a page that renders all "top news" articles
  - a page that renders all "cicadas" articles
- Create at least **4 components** (including the above components) to use for your app.
- Use **react router** to switch between looking at _top headlines_ and _at least one other category_ of news articles.


## Adding the API:
- Go to the [News API](https://newsapi.org/), create an account and sign up for an API key, it should be autogenerated.
- For this assignment, we want you to use the [Everything](https://newsapi.org/docs/endpoints/everything) and top headlines [Top Headlines](https://newsapi.org/docs/endpoints/top-headlines) endpoints. Take a look through the docs to read through the data response object and request parameters(what is required?). Then, plan out what data you want to use in your app. (ex. Title and Description seem like a good start).
- **Make sure you are able to see your data before you do this step!** Create a `.env` file in the `news-app` directory. `REACT_APP_API_KEY` would be a good variable name to assign to your API key!  
- Restart your server!
- Put the `.env` file and your `node_modules` (this might already be there) in a `.gitignore` file.
- Now replace the provided data with data you use in your API calls. 

**Styling is required for this assignment.** You may style your App in `App.css`.


## Deliverables
- A **styled**, News App that has at least 4 components and makes a GET request to the News API!

![](https://media.giphy.com/media/147JO3pIxNJ4oo/giphy.gif)


## Tips:
- [React Router](https://git.generalassemb.ly/sei-nyc-cicadas/react-router) lesson
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) and [basic example](https://reacttraining.com/react-router/web/example/basic)
- [Lifting State Up](https://git.generalassemb.ly/sei-nyc-cicadas/lifting-state-up) lesson

## Bonus
- Create an input field that allows you to query for different topics. Hmmm, I wonder how many articles there are about cicadas???
- A button that filters out articles by news source.  (i.e., a button that returns all the news from The New York Times)
- Use [Moment](https://momentjs.com/) to format the `publishedAt` date. Hmmm, what format is it in right now?  
- Use a component library to style your app! [React Bootstrap](https://react-bootstrap.github.io/) or [Ant-Design](https://ant.design/) (These are just examples, there are many others).  
