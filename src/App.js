import React, { useState } from 'react';
import HeaderBar from './Components/HeaderBar';
import Card from './Components/Card';
import img1 from '../src/images/the_knight.webp';
import img2 from '../src/images/hornet.webp';
import img3 from '../src/images/grimm.webp';
import img4 from '../src/images/zote.webp';
import img5 from '../src/images/paintmaster.webp';

function App() {
  const [images, setImages] = useState([
    { name: 'The Knight',
      src: img1,
      clicked: false,
    },
    {
      name: 'Hornet',
      src: img2,
      clicked: false,
    },
    {
      name: 'Grimm',
      src: img3,
      clicked: false,
    },
    {
      name: 'Zote',
      src: img4,
      clicked: false,
    },
    {
      name: 'Paintmaster',
      src: img5,
      clicked: false,
    },
  ]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
      incrementScore();
      markImageClicked(i);
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
