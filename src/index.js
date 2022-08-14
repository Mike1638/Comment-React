import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentApp from './CommentApp';

const root = document.getElementById('root')
const RootReactDom = ReactDOM.createRoot(root)
RootReactDom.render(
  <div>
    <CommentApp></CommentApp>
  </div>
)