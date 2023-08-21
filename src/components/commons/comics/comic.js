import React from 'react';
import './ComicViewer.css';

function importAll(r) {
    let pdfs = {};
    r.keys().map((item, index) => { pdfs[item.replace('./', '')] = r(item); });
    return pdfs;
}

// Importa todos los PDFs de la carpeta de datos
const pdfs = importAll(require.context('../../../data/pdfs', false, /\.pdf$/));

const ComicViewer = () => {
    // Usa los PDFs importados
    const archivos = Object.values(pdfs);

    return (
        <div className="container">
            <h1>Biblioteca de Cómics</h1>
            <div className="buttons">
                {archivos.map((pdf, index) => (
                    <button key={index} className="card">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            Abrir cómic {index + 1}
                        </a>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ComicViewer;
