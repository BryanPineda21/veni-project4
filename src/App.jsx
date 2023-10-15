import React, { useState, useEffect } from 'react';
import APIFetch from './Components/APIFetch';
import './App.css';
const ACCESS_KEY = import.meta.env.CAT_API_ACCESS_KEY

function App() {
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const handleBanAttribute = (attribute) => {
    setBannedAttributes([...bannedAttributes, attribute]);
  };
   

  const handleUnbanAttribute = (attribute) => {
    const updatedAttributes = bannedAttributes.filter((attr) => attr !== attribute);
    setBannedAttributes(updatedAttributes);
  };

  return (

    <div className='App'>
      
       <APIFetch 
        onBanAttribute={handleBanAttribute} 
        bannedAttributes={bannedAttributes} 
        onUnbanAttribute={handleUnbanAttribute}
       />


      <div className="BannedAttributes">
        <h2>Ban List</h2>
        <ul>
          <p>Select an attribute in your listing to ban it</p>
          {bannedAttributes.map((attribute, index) => (
            <li className='list-attribute' key={index} onClick={() => handleUnbanAttribute(attribute)}>{attribute}</li>
          ))}
        </ul>
      </div>


    </div>
  
  )
}

export default App;



