import React, { useState } from 'react';
import './pintura.css';
import ModalImage from 'react-modal-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../img/pinturas_jpg', false, /\.(png|jpe?g|svg)$/));

const Pintura = () => {
    // Utiliza las imágenes importadas
    const imagenes = Object.values(images);
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(imagenes);

    const previousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
    };


    return (

        <div className="pintura">
            <div className="imagen-columna">
                <br/>
                <div className="carousel-container">
                    <button className="carousel-button" onClick={previousImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <img
                        src={imagenes[currentIndex]}
                        alt={`Imagen ${currentIndex + 1}`}
                        className="carousel-image"
                    />
                    <button className="carousel-button" onClick={nextImage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
           
        </div>







    );
};

export default Pintura;
