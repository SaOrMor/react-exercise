import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import SearchMovie from './SearchMovie';


function App() {
  return (
    <div className="container">
      
    <h1 className= "title">Movie Search App</h1>
    <SearchMovie />
    </div>
  );
}

export default App;
