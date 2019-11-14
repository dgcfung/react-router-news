import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://newsapi.org/v2/";

const fetchTopicsArticles = async topic => {
  const resp = await axios(
    `${BASE_URL}everything?q=${topic}&sortby=popularity&apiKey=${TOKEN}`
  );
  return resp.data.articles;
};

const fetchTopUSArticles = async topic => {
  const resp = await axios(
    `${BASE_URL}top-headlines?country=us&apiKey=${TOKEN}`
  );
  return resp.data.articles;
};

export { fetchTopicsArticles, fetchTopUSArticles };
