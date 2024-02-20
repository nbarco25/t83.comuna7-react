import React, { useState } from 'react';
import './fotografia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../img/fotografias_jpg', false, /\.(webp|jpe?g|svg)$/));

const Fotografia = () => {
    const imagenes = Object.values(images);
    const [currentIndex, setCurrentIndex] = useState(0);
    const nombres = [
        "Bella Maria Calucé",
        "Andres", 
        "Blanca Nubia Escobar", 
        "Gabriela Rodríguez",
        "Israel Zúñiga",
        "Hipólita Uní",
        "Pedro Sánchez",
        "Maria Fernanda Rodriguez",
        "Pedro Camacho",
        "Danrley Kimo Cruz", 
        "Wilson Omen", 
        "Adolfo Omen", 
        "Luz Marina Pérez", 
        "Rosa María Chito", 
        "Luz Fanny Paz", 
        "Erik Garcés", 
        "Andrea Guerrero Pino", 
        "Magnolia Pino", 
    ]
    const descriptions = [
        "Bella Maria Calucé Vive en el barrio Retiro bajo, llegó a este lugar con su hija recién nacida, 4 días después del terremoto, ya que no tenían donde vivir porque la casa donde vivían en el centro de la ciudad se derrumbó. Desde ese entonces ha sido una lideresa que luchado por los derechos de las mujeres y niños más desfavorecidos.",
        "Actualmente se dedica a la barberia en el barrio El Nuevo Milenio ubicado en la comuna 7, lugar donde nació y ha vivido toda su vida, desde que su madre llegó de Almaguer, hace más de 30 años, a comprar un lote en ese barrio.",
        "Llegó al barrio El Mirador hace 10 años, desde que llegó montó su puesto de arepas junto a las canchas del barrio El Mirador, debido a que vio que en este lugar había bastante flujo de personas y además estaba cerca al CAI de policía y a los paraderos de buses, lo que ha permitido que sus arepas sean fácilmente comercializadas.",
        "Actualmente vive en el barrio solidaridad, ubicado al sur occidente de la capital Caucana, comenzó su negocio de venta de empanadas en las afueras del Colegio El Mirador, espera que sus productos se vendan y crezca si negocio para obtener una mejoría económica en su hogar.",
        "Llegó al barrio San José, el 16 de mayo del 2010, gracias a que su hija le regaló una casa en este sector para que pudiera vivir junto a su esposa.",
        "Es fundadora del barrio El Mirador, llegó en el año de 1983 cuando escuchó que estaban invadiendo, decidió ir con su esposo y tomar un lote, para no seguir pagando arriendo. Cuando ella llegó al lugar, estaba lleno de barro, no contaba con servicios públicos y abundaba la escasez de comida. Hoy en día se dedica a vender helados en los alrededores de la cancha del barrio El Mirador.",
        "Es fundador del barrio el Mirador, llegó junto a su esposa Hipolita en el año 1983, cuando lograron invadir un lote del sector. Él recuerda cuando en este lugar no había más que monte, una vaca y una casona. Actualmente, se dedica a vender helados en el polideportivo del Mirador.",
        "Es fundador del barrio Las Vegas, llegó ahí meses después del terremoto de 1983, con la esperanza de encontrar una mejor vida para su esposa e hijos. Él recuerda cuando el lugar era una finca grande, llena de cultivos de café, mango y zarzales.",
        "Llegó al barrio La Heroica con apenas 8 años en el 2007 junto a sus padres, para él las mejores del barrio se han visto en las remodelaciones de las casas y en lo comercial que se ha vuelto este sector. Actualmente se dedica a terminar de estudiar Filosofía y gestión contable.",
        "Nació en el barrio la Libertad, comuna 7 de Popayán, ya que sus padres llegaron a esta zona cuando era una invasión.Él recuerda que en su niñez, habian bastantes casas, pero que aun se encontraban en obra negra. Actualmente se dedica a terminar su carrera de Greografía.",
        "Vive en el barrio La Libertad, a pesar de ser oriundo del municipio de Río Blanco, al sur del Cuaca, llegó a Popayán en 1983 desde el Quindio donde trabajaba como mayordomo, buscando a su familia. Al llegar y ver que no tenían un lugar donde vivir, decidió instalarse en uno de los asentamientos que se estaban conformando, lugar donde actualmente está su casa y vive con su esposa y sus dos hijos.",
        "Vive en el barrio Solidaridad, su llegada a este sector, surge a raíz del terremoto de 1983, ya anteriormente, vivía en el barrio Tomás Cipriano de Mosquera, pero al ver que el lugar donde pagaba arriendo se cayó, se vio en la necesidad de tomar un lote en el asentamiento que hoy en día es el barrio Solidaridad.",
        "Es fundadora del barrio Solidaridad, luego a este lugar en butacas de su hermana que habita venido desde la Sierra, al llegar al barrio y ver la situación de las personas decidió quedarse y apoyar en la construcción de los barrios de esta comuna.",
        "Vive en el barrio el Mirador, llegó a este sector desde octubre del 2022, debido a la falta de empleo, decidió colocar un puesto de mango y chontaduro en el polideportivo de este lugar para vender junto a su madre.",
        "Nació en el barrio El Retiro Bajo, ya que, hace más de 30 años su abuela materna, se ganó un chance, con lo que pudo comprar un lote en el sector y construir su casa en ese lugar, donde actualmente vive con su familia. Actualmente estudia Licenciatura en Educación Física en la Universidad del Cauca. ",
        "Nació y creció en el bario El Mirador, es fisioterapeuta. Sus padres le han contado que ellos llegaron a invadir el lugar donde hoy está ubicada su casa, días después del terremoto ocurrido el 31 de marzo de 1983. Ahí construyeron en primer lugar un rancho, el cuál con el tiempo se convirtió en la casa que hoy en día habitan.",
        "Nació y creció en el bario El Mirador, es fisioterapeuta. Sus padres le han contado que ellos llegaron a invadir el lugar donde hoy está ubicada su casa, días después del terremoto ocurrido el 31 de marzo de 1983. Ahí construyeron en primer lugar un rancho, el cuál con el tiempo se convirtió en la casa que hoy en día habitan.",
        "Llegó al barrio el Mirador 15 días después del terremoto, cuando su esposo ya había tomado un lote en este sector, actualmente viven ahí."

    ];

    const previousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="fotografia">
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
            <div className="card">

            <div className="descripcion-columna">
                    <h1 className="font-extrabold md:text-5xl dark:text-white titulo-galeria">{nombres[currentIndex]}</h1>
                    <p className='descripcion-imagen'>{descriptions[currentIndex]}</p>
                    {/* Aquí puedes agregar más contenido de la tarjeta si es necesario */}
                </div>
            </div>
        </div>
    );
};

export default Fotografia;
