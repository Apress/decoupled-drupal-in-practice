// src/Article.js
import React from 'react';
import PropTypes from 'prop-types';

const Article = ({article}) => (
  <div className="article-detail">
    {article && (
      <article>
        <h2>{article.attributes.title}</h2>
        <ul>
          <li>{article.id}</li>
          <li>{article.attributes.created}</li>
        </ul>
        <div>{article.attributes.body.value}</div>
      </article>
    )}
  </div>
);

Article.propTypes = {
  article: PropTypes.object
};

export default Article;
