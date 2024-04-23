// import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

function Sliders({
    id, image, name, newImageIndex, setNewImageIndex, imagesIndex, setPlaces, places, changeImage }) {
    const switchImage = (id) => {
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

        switchImage(id);
    };

    const previousImage = (id) => {
        const currentPlace = places.find(place => place.id === id);
        const { image } = currentPlace;
        if (newImageIndex === 0) {
            setNewImageIndex(image.length - 1);
        } else {
            setNewImageIndex(newImageIndex - 1);
        }

        switchImage(id);
    };

    return (
        <div style={{ position: 'relative' }}>
            <img
                src={changeImage ? image[newImageIndex] : image[imagesIndex]}
                alt={name} width='500px' height='300px' />
            <button style={{ left: '29%' }}
                className='arrow-btn'
                onClick={() => previousImage(id)}>
                {/* <ArrowBigLeft /> */}
            </button>
            <button style={{ right: '29%' }}
                className='arrow-btn'
                onClick={() => nextImage(id)}>
                {/* <ArrowBigRight /> */}
            </button>
        </div>
    );
}

export default Sliders;