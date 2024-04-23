import { useState } from 'react';
import { data } from './Data.js';
import Sliders from './Sliders.js';

function Places() {
    const [places, setPlaces] = useState(data);
    const [imagesIndex, setImagesIndex] = useState(0);
    const [newImageIndex, setNewImageIndex] = useState(0);

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
                    const { id, name, province, description, image } = place;
                    return (
                        <div key={id}>
                            <h2>{id} - {name}</h2>
                            <p>{province}</p>
                            <p>{description}</p>
                            <Sliders id={id} image={image} name={name} newImageIndex={newImageIndex} setNewImageIndex={setNewImageIndex} setImagesIndex={setImagesIndex} imagesIndex={imagesIndex} setPlaces={setPlaces} places={places} changeImage={place.changeImage} />
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
}

export default Places;