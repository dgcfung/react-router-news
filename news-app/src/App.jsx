import React from 'react';
import Axios from 'axios'
import { NavLink, Route } from 'react-router-dom'

import Bitcoin from './Bitcoin'
import Business from './Business'
// import { BITCOIN } from './data/bitcoinSeed'
// import { BUSINESS } from './data/businessSeed'

import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      businessArticles: [],
      bitcoinArticles: []
    }
  }

  fetchBusinessArticles = async () => {
    const response = await Axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
    const businessArticles = response.data.articles
    // const businessArticles = await BUSINESS.articles
    this.setState({ businessArticles })
  }

  fetchBitcoinArticles = async () => {
    const response = await Axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-14&sortBy=publishedAt&apiKey=${API_KEY}`)
    const bitcoinArticles = response.data.articles
    // const bitcoinArticles = await BITCOIN.articles
    this.setState({ bitcoinArticles })
  }

  async componentDidMount() {
    await this.fetchBusinessArticles()
    await this.fetchBitcoinArticles()
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
            <NavLink exact to="/business">
              Business
          </NavLink>
            <NavLink exact to="/bitcoin">
              Bitcoin
          </NavLink>
        </nav>
        <main>
          <Route
            exact
            path="/business"
            component={() => <Business articles={this.state.businessArticles} />}
          />
          <Route
            exact
            path="/bitcoin"
            component={() => <Bitcoin articles={this.state.bitcoinArticles} />}
          />
        </main>
      </div>
    )
  }
}

export default App;
