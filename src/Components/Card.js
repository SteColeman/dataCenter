import React from "react";
import "./Card.css";

//function to build card component
function Card(props) {
    return (
        <div className="cardContainer">
            <h1>{props.title}</h1>
            <div className="imageContainer">
                <img src={props.imageUrl} alt="" />
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    )
  }


export default Card