import React from 'react';
import './fotografia.css';
import ModalImage from 'react-modal-image';

// Importa las imágenes desde tu carpeta de imágenes
import img1 from '../../../img/fotografias_jpg/BellaMaría-01.webp';
import img2 from '../../../img/fotografias_jpg/Retrato-1.webp';
import img3 from '../../../img/fotografias_jpg/Retrato-2.webp';
import img4 from '../../../img/fotografias_jpg/Retrato-3.webp';
import img5 from '../../../img/fotografias_jpg/Retrato-4.webp';
import img6 from '../../../img/fotografias_jpg/Retrato-5.webp';
import img7 from '../../../img/fotografias_jpg/Retrato-6.webp';
import img8 from '../../../img/fotografias_jpg/Retrato-7.webp';
import img9 from '../../../img/fotografias_jpg/Retrato-8.webp';
import img10 from '../../../img/fotografias_jpg/Retrato-9.webp';
import img11 from '../../../img/fotografias_jpg/Retrato-10.webp';
import img12 from '../../../img/fotografias_jpg/Retrato-11.webp';
import img13 from '../../../img/fotografias_jpg/Retrato-12.webp';
import img14 from '../../../img/fotografias_jpg/Retrato-13.webp';
import img16 from '../../../img/fotografias_jpg/Retrato-15.webp';
import img17 from '../../../img/fotografias_jpg/Retrato-16.webp';
import img19 from '../../../img/fotografias_jpg/retrato-18.webp';
import img20 from '../../../img/fotografias_jpg/retrato-19.webp';


// Importa más imágenes aquí

const Fotografia = () => {
    // Podrías reemplazar este array con tus propias imágenes
    const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 ,img13, img14, img16, img17, img19, img20 ];

    return (
        <div className="fotografia">
            <h1>Galería de Fotos</h1>
            <div className="fotografias">
                {imagenes.map((foto, index) => (
                    <ModalImage
                        key={index}
                        small={foto}
                        large={foto}
                        alt={`Imágen ${index + 1}`}
                        className="image-small"
                    />
                ))}
            </div>
        </div>
    );
};

export default Fotografia;
