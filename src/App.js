import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Home} />  
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp;