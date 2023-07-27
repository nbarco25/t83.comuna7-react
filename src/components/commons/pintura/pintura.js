import React from 'react';
import './Pintura.css';
import ModalImage from 'react-modal-image';

// Importa las imágenes desde tu carpeta de imágenes
import img1 from '../../../img/pinturas_jpg/image00002.jpeg';
import img2 from '../../../img/pinturas_jpg/image00003.jpeg';
import img3 from '../../../img/pinturas_jpg/image00004.jpeg';
import img4 from '../../../img/pinturas_jpg/image00005.jpeg';
import img5 from '../../../img/pinturas_jpg/image00006.jpeg';
import img6 from '../../../img/pinturas_jpg/image00007.jpeg';
import img7 from '../../../img/pinturas_jpg/image00008.jpeg';
import img8 from '../../../img/pinturas_jpg/image00009.jpeg';
import img9 from '../../../img/pinturas_jpg/image00010.jpeg';

// Importa más imágenes aquí

const Pintura = () => {
    // Podrías reemplazar este array con tus propias imágenes
    const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div className="pintura">
            <h1>Galería de Pinturas</h1>
            <div className="imagenes">
                {imagenes.map((imagen, index) => (
                    <ModalImage
                        key={index}
                        small={imagen}
                        large={imagen}
                        alt={`Imágen ${index + 1}`}
                        className="image-small"
                    />
                ))}
            </div>
        </div>
    );
};

export default Pintura;
