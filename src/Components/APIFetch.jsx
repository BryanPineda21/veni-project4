import React, { useEffect, useState } from "react";

const APIFetch = ({onBanAttribute, bannedAttributes, onUnbanAttribute}) => {
  const [catData, setCatData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const ENDPOINT = "https://api.api-ninjas.com/v1/cats?offset=1&max_weight=35";

  const apiCall = async () => {
    try {
      const response = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
          'X-Api-Key': '/D3FtOMMRm54sDu/T1wWlA==dxUmcBanCURgjxWp', 
          'Content-Type': 'application/json',
        },
      });
      const request = await response.json();
      const randomCat = request[Math.floor(Math.random() * request.length)];
      console.log(randomCat);
      setCatData(randomCat);
      setDataFetched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);



  const isAttributeBanned = (attribute) => bannedAttributes.includes(attribute);

  const banAttribute = (attribute) => {
    if (isAttributeBanned(attribute)) {
      onUnbanAttribute(attribute);
    } else {
      onBanAttribute(attribute);
    }
  };

  return (
    <div className="catFetch-container">
      <h1>Cat Discovery Exploratory</h1>
      <h3>Discover lots of cat's </h3>
      <h4>🐱🐱😺😺😻</h4>
      {dataFetched && catData && (
        <div>
          <img className ="cat-image" src={catData.image_link} alt={catData.name} />
          <h3>{catData.name}</h3>
          <div className="cat-info">
          <button
              onClick={() => banAttribute(catData.origin)}
              className={isAttributeBanned(catData.origin) ? "banned" : "notbanned"}
            >
              {isAttributeBanned(catData.origin) ? `origin: ${catData.origin}` : `origin: ${catData.origin}`}
      
            </button>
            <button
              onClick={() => banAttribute(catData.length)}
              className={isAttributeBanned(catData.length) ? "banned" : "notbanned"}
            >
              {isAttributeBanned(catData.length) ?  `Length: ${catData.length}` : `Length: ${catData.length}`}
            </button>
            <button
              onClick={() => banAttribute(catData.playfulness)}
              className={isAttributeBanned(catData.playfulness) ? "banned" : "notbanned"}
            >
              {isAttributeBanned(catData.playfulness) ? `Playfullness: ${catData.playfulness}` : `Playfullness ${catData.playfulness}`}
            </button>
          </div>
        </div>
      )}

<button className="fetch-data-btn" onClick={apiCall}> 🔁 Discover</button>
    </div>
  );
};

export default APIFetch;
