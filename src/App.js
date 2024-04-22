import { useState } from 'react';
import './App.css';
import { data } from './Data.js';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

function App() {
  const [places, setPlaces] = useState(data);
  const [imagesIndex, setImagesIndex] = useState(0);
  const [newImageIndex, setNewImageIndex] = useState(0);


  const changeImage = (id) => {
    setPlaces(places.map(place =>
      place.id === id
        ? { ...place, changeImage: true }
        : { ...place, changeImage: false }
    ));
  };

  const nextImage = (id) => {
    const currentPlace = places.find(place => place.id === id);
    const { image } = currentPlace;
    if (newImageIndex === image.length - 1) {
      setNewImageIndex(0);
    } else {
      setNewImageIndex(newImageIndex + 1);
    }

    changeImage(id);
  };

  const previousImage = (id) => {
    const currentPlace = places.find(place => place.id === id);
    const { image } = currentPlace;
    if (newImageIndex === 0) {
      setNewImageIndex(image.length - 1);
    } else {
      setNewImageIndex(newImageIndex - 1);
    }

    changeImage(id);
  };

  const deletePlace = (id) => {
    const newPlaces = places.filter(place => place.id !== id);
    setPlaces(newPlaces);
  };

  const deleteAllPlaces = () => {
    const newAllPlaces = [];
    setPlaces(newAllPlaces);
  };

  return (
    <div className='App'>
      <h1>{places.length} places to visit in Canada</h1>
      <div>
        {places.map((place) => {
          const { id, name, province, description, image, changeImage } = place;
          return (
            <div key={id}>
              <h2>{id} - {name}</h2>
              <p>{province}</p>
              <p>{description}</p>
              <div style={{ position: 'relative' }}>
                <img
                  src={changeImage ? image[newImageIndex] : image[imagesIndex]}
                  alt={name} width='500px' height='300px' />
                <button style={{ left: '29%' }}
                  className='arrow-btn'
                  onClick={() => previousImage(id)}>
                  <ArrowBigLeft />
                </button>
                <button style={{ right: '29%' }}
                  className='arrow-btn'
                  onClick={() => nextImage(id)}>
                  <ArrowBigRight />
                </button>
              </div>
              <button onClick={() => deletePlace(id)}>Mark as visited</button>
            </div>
          );
        })}
      </div >
      <div >
        {places.length > 0 ? <button className='btn-all'
          onClick={deleteAllPlaces}
        >Mark all as visited</button> : null}
      </div>
    </div >
  );
};

export default App;
