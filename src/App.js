import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodData from './foods.json';
import Foods from './components/Foods';

function App() {
  return (
    <div className="App">
        <Foods />
    </div>
  );
}

export default App;
