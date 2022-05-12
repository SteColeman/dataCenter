import React from "react";
import "./Card.css";

class Card extends React.Component {

    render() { 
        return (
            <div className="card">
                <div className='cardImage'>
                    <img src='' alt="" />
                </div>

                <div className="cardTitle">
                    <h2>props.name</h2>
                </div>


            </div>
        )

    }
}

    
      
     // }
    
//     //  console.log('data before render' + cards)

//     render(cards) {
//         return (
//             <div>
//             {
//               cards.map((data) =>
//               console.log('data in render' + data)
//                 // <Card 
//                 //   name={data.name}
//                 // />
//               )
              
//             }
//           </div>
//         )
//     }

// }

export default Card;


//function to build card component
// function Card(props) {
//     return (
//         <div className="card">
//             <h1>{props.name}</h1>
//             <div className="imageContainer">
//                 <img src={props.imageUrl} alt="" />
//             </div>
//             <div>
//                 <p>{props.description}</p>
//             </div>
//         </div>
//     )
//   }


//   function Card(data) {

// fetch('https://api.airtable.com/v0/appyBShMIPOgtSJpN/Articles?api_key=keyzpKdKzXgaZVthy')
// .then(response => response.json())
// .then(data => data
// //   console.log(data.records.length)

//     //const cardData=
// data.map(data) => (

//             return (
//                 <div>
//                     <h1>{props.name}</h1>
//                     <div className="imageContainer">
//                         <img src={props.imageUrl} alt="" />
//                     </div>
//                     <div>
//                         <p>{props.description}</p>
//                     </div>
//                 </div>
//             )
        
//     )
//             }

//     // return(
//     // {Card}
//     // )
//     return(
//         <div className='card'>
//         {Card}
//     </div>
//     )


// }









// export default Card;