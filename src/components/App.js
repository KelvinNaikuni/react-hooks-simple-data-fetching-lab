import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Send a fetch request to the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image URL and set isLoading to false
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      });
  }, []); // The empty array means this effect runs only once, similar to componentDidMount

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
