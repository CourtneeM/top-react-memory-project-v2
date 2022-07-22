import React, { useEffect, useState } from 'react';
import HeaderBar from './Components/HeaderBar';
import Card from './Components/Card';
import imageData from './imageData';


function App() {
  const [images, setImages] = useState(imageData);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const randomizeImages = () => {
      const imagesCopy = [...images];
      const randomizedImages = [];
  
      while (imagesCopy.length > 0) {
        randomizedImages.push(imagesCopy.splice(Math.floor(Math.random() * imagesCopy.length), 1)[0])
      }
  
      setImages(randomizedImages);
    }

    randomizeImages();
  }, [score]);

  const incrementScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);
  const newHighScore = () => setHighScore(score);
  
  const markImageClicked = (i) => {
    const modifiedImage = Object.assign({}, [...images][i]);
    modifiedImage.clicked = true;

    const imagesCopy = [...images];
    imagesCopy[i] = modifiedImage;

    setImages(imagesCopy);
  }
  
  const resetImageClicks = () => {
    const imagesCopy = [...images];
    setImages(imagesCopy.map(({name, src, _}) => ({name, src, clicked: false})));
  }

  const handleCardClick = (i) => {
    if (images[i].clicked) {
      if (highScore < score) newHighScore();
      resetScore();
      resetImageClicks();
    } else {
      markImageClicked(i);
      incrementScore();
    }
  }

  return (
    <div className="App">
      <HeaderBar score={score} highScore={highScore} />
      <div className="cards-container">
        { images.map((imgData, i) => <Card imgData={imgData} index={i} handleCardClick={handleCardClick} />) }
      </div>
    </div>
  );
}

export default App;
