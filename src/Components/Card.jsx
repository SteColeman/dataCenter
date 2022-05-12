import React from "react";
import "./Card.css";
// import App from "./App.jsx"
//  import data from '../content.json'

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyzpKdKzXgaZVthy'}).base('appyBShMIPOgtSJpN');
class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            fetchLoaded: false
        };
    }

    componentDidMount() {
        var recordArray = [];
        // function cards() {
          base('Articles').select({
            // Selecting the first 3 records in Grid view:
            // maxRecords: 100,
            // view: "Grid view"
        }).eachPage(function page(records) {
            // This function (`page`) will get called for each page of records.
            recordArray = records;
        
            records.forEach(function(record) {
                recordArray.push(record)
            });
            this.setState({
                cards: recordArray,
                fetchLoaded: true,
            })


        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        fetch('https://api.airtable.com/v0/appyBShMIPOgtSJpN/Articles?api_key=keyzpKdKzXgaZVthy')
        .then(response => response.json())
        .then(data => 
            this.setState({
                cards: data,
                fetchLoaded: true,
            })
            //   console.log({data});
            
          )


    }



    render() {
        const {fetchLoaded, cards } = this.state;
        if(fetchLoaded) {
             return (
            <div>
            {                
                // console.log('returned crads: ' + cards)
                cards.map((data) =>
                <h1>{data.title}</h1>

                
                 )
            }
            </div>
        ) 
        } else {
            return <div><h1>Error</h1></div>
        }

        
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