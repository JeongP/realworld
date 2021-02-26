import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArticleList from '../components/ArticleList';

const YourFeedTab = props => {
  return (
    <li class="nav-item">
      <a class="nav-link disabled" href="">Your Feed</a>
    </li>
  );
}

const GlobalFeedTab = props => {
  return (
    <li class="nav-item">
      <a class="nav-link active" href="">Global Feed</a>
    </li>
  );
}


const MainView = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(
        'https://conduit.productionready.io/api/articles?limit=20'
      );
      setArticles(response.data.articles)
    }
    callApi();
  },[]);

  if(!articles) return null;
  console.log(typeof(articles))
  console.log(articles[0])
  return (
    <div class="col-md-9">
      <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
          <YourFeedTab />
          <GlobalFeedTab />
        </ul>
      </div>
      {articles.map(article => (
        <li>
          {article.title}
        </li>
      ))}
      <ArticleList />
    </div>
  );
};

export default MainView;