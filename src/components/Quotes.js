import axios from "axios"
import React, { useState } from 'react';
const Quotes = () => {
   
   const getRandom = () => {
      axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
         setRandom(data[0])
      });
      };   
   const [random, setRandom] = useState('simpson');
      
   


   return (
      <div>
      
      <div className="container">
               <h1 className="title">{random.character}</h1>
               <img src={random.image} alt={random.character} />
               <div className="content" id="simpson">
               <h4>{random.quote}</h4></div>
            <button onClick={getRandom}> Get New Quote</button>
         </div>
     
  
 </div>
   )
  
}
   export default Quotes;