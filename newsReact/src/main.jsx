import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Comments from "./data/Comments.js";
import Posts from "./data/Posts.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App comments={Comments} posts={Posts} />
  </React.StrictMode>,
)
