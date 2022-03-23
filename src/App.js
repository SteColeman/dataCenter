import React from 'react';
import './App.css';
import Card from './Components/Card.js'


function App() {

  //array is temperory until api is added
  const cardData = [
    {
    "title" : "title", 
    "imageURL" : "url", 
    "description" : "description"
  },
  {
    "title" : "title 1", 
    "imageURL" : "url 1", 
    "description" : "description 1"
  },
  {
    "title" : "title 2", 
    "imageURL" : "url 2", 
    "description" : "description 2"
  }
  ];

  /*
  *  loop through the api json array data and push data to relevant variables. 
  *  push whole card COMPONENT to 'cards' array for react to render all.
  */
    var cards = [];
    for(var i=0; i<cardData.length; i++) {
      cards.push(
        <Card
        title = {cardData[i].title}
        imageUrl = {cardData[i].imageUrl}
        description = {cardData[i].description}
        />
      )
    }


    //return all elements to the DOM
    return (
      <div>
        {cards}
      </div>
      
    )
}


export default App;
