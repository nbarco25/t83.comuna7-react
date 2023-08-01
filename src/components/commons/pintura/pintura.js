import React from 'react';
import './pintura.css';
import ModalImage from 'react-modal-image';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../img/pinturas_jpg', false, /\.(png|jpe?g|svg)$/));

const Pintura = () => {
    // Utiliza las imágenes importadas
    const imagenes = Object.values(images);
    console.log(imagenes);
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
