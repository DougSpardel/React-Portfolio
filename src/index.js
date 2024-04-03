import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure you have an index.css for global styles
import App from './App';
//import reportWebVitals from './reportWebVitals'; // This is optional and can be removed if not used

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// Optional, and can be removed if you're not using it
//reportWebVitals();
