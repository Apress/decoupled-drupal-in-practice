// src/App.js
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Article from './Article.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      errored: false
    };
  }
  componentWillMount() {
    axios.get('http://jsonapi-test.dd:8083/jsonapi/node/article')
      .then(res => this.setState({ articles: res.data.data }))
      .catch(err => {
        console.log(err);
        this.setState({ errored: true });
      })
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        {this.state.errored ? (
          <p>Sorry, {'this'} information is not available at the moment.</p>
        ) : (
          <section>
            {this.state.loading ? (
              <p>Loading ...</p>
            ) : (
              <Router>
                <div className="articles">
                  <ul>
                    {this.state.articles && this.state.articles.map(article => (
                      <li key={article.id}>
                        <Link to={`/article/${article.id}`}>{article.attributes.title}</Link>
                      </li>
                    ))}
                  </ul>
                  {this.state.articles &&
                    <Route path="/article/:articleID" render={
                      ({match}) => {
                        let article = this.state.articles.find(article => article.id === match.params.articleID);
                        return (<Article article={article}/>);
                      }
                    }/>
                  }
                </div>
              </Router>
            )}
          </section>
        )}
      </div>
    );
  }
}

export default App;
