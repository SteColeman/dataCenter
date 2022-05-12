import React from 'react';
import './App.css';
import Card from './Components/Card.jsx';
// import { data } from './content';

function App() {
    /*
  *  loop through the api json array data and push data to relevant variables. 
  *  push whole card COMPONENT to 'cards' array for react to render all.
  */

  
  return (
    <div className="cardsContainer">

      <Card />
    </div>
    
  )  

}

export default App;
