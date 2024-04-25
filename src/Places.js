import { useState } from 'react';
import { data } from './Data.js';
import NewSliders from './NewSliders.js';

function Places() {
    const [places, setPlaces] = useState(data);

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
                            <NewSliders images={image} name={name} />
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