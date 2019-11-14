<p align="center">
  <img src="news-app.gif" width="50%"/>
</p>

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

1. Fork
1. Clone
1. PR

# News App

**Task**: Your task is to build a News App 
- Use React Router and [seed data](data/seed.js)
- Once your app is working with the seed data, integrate a third-party [News API](https://newsapi.org)

## Getting Started
- Fork and Clone this repo then `cd` into the repo name.
- Run `npx create-react-app news-app`
- cd into `news-app`
- Install react router dom by running `npm install react-router-dom` 
- Run `npm start`. 

## 1. React-Router & Seed Data
- Move the `data` folder in the root of your repo into your `news-app/src/` folder
- We're building this app first with the provided data in [`/data/seed.js`](/data/seed.js).
- Create your routes in your App component
- Create a component for All News
- Create a component of Top News

## 2. Adding the API

Your task is integrate a third-party news api and remove the seed data

> Architecture Thought Question: Where will you be doing your Axios API calls?

- Go to the [News API](https://newsapi.org/), create an account and sign up for an API key
- For this assignment, we want you to use the [Everything](https://newsapi.org/docs/endpoints/everything) and [Top Headlines](https://newsapi.org/docs/endpoints/top-headlines) endpoints. Take a look through the docs to read through the data response object and request parameters(what is required?). Then, plan out what data you want to use in your app. (ex. Title and Description seem like a good start).
- **Make sure you are able to see your data in Postman before you do this step!** Create a `.env.local` file in the `news-app` directory. `REACT_APP_API_KEY` would be a good variable name to assign to your API key!  
- Restart your server!
- Now replace the provided seed data you used above with data returned from your API calls. 

![](https://media.giphy.com/media/147JO3pIxNJ4oo/giphy.gif)


## Tips:
- [React Router](https://git.generalassemb.ly/sei-nyc-owls/react-router) lesson
- [Lifting State Up](https://git.generalassemb.ly/sei-nyc-owls/lifting-state-up) lesson
- [Forms in React](https://git.generalassemb.ly/sei-nyc-owls/react-forms) lesson
- refer to the [react-api](https://git.generalassemb.ly/sei-nyc-owls/react-api-practice) practice


## Bonus
- Create an input field that allows you to query for different topics. Hmmm, I wonder how many articles there are about owls???
- A button that filters out articles by news source.  (i.e., a button that returns all the news from The New York Times)
- Use [Moment](https://momentjs.com/) to format the `publishedAt` date. Hmmm, what format is it in right now?  
- Use a component library to style your app! [React Bootstrap](https://react-bootstrap.github.io/) or [Ant-Design](https://ant.design/) (These are just examples, there are many others)
