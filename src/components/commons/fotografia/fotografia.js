import React from 'react';
import './fotografia.css';
import ModalImage from 'react-modal-image';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../img/fotografias_jpg', false, /\.(webp|jpe?g|svg)$/));

const Fotografia = () => {
    //Imágenes importadas desde la carpeta img
    const imagenes = Object.values(images);

    return (
        <div className="fotografia">
            <h1>Galería de Fotos</h1>
            <div className="fotografias">
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

export default Fotografia;
