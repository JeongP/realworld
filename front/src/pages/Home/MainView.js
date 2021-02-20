import React from 'react';
import ArticleList from '../../components/ArticleList';

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
  return (
    <div class="col-md-9">
      <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
          <YourFeedTab />
          <GlobalFeedTab />
        </ul>
      </div>
      
      <ArticleList />
    </div>
  );
};

export default MainView;