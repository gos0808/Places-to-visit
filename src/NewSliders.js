import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NewSliders = ({ images, name }) => {

    const [index, setIndex] = useState(0);

    const previos = () => {
        setIndex((index => {
            index--;
            if (index < 0) {
                return images.length - 1;
            }
            return index;
        }));
    };

    const next = () => {
        setIndex((index => {
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            return index;
        }));
    };

    return (
        <div className='image-container'>
            <img
                src={images[index]}
                alt={name} />
            <button className='arrow-btn arrow-btn-left'
                onClick={previos}>
                <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
            <button
                className='arrow-btn arrow-btn-right'
                onClick={next}>
                <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
        </div>
    );
};

export default NewSliders;