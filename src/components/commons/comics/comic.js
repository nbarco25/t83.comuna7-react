import React from 'react';
import './ComicViewer.css';
import pdf1 from '../../../data/pdfs/terremotocomic.pdf'
import pdf2 from '../../../data/pdfs/TumbaRotacomic.pdf'

const ComicViewer = () => {
    return (
        <div className="container">
            <h1>Biblioteca de Cómics</h1>
            <div className="buttons">
                <button className="card">
                    <a href={pdf1} target="_blank" rel="noopener noreferrer">
                        Abrir cómic 1
                    </a>
                </button>
                <button className="card">
                    <a href={pdf2} target="_blank" rel="noopener noreferrer">
                        Abrir cómic 2
                    </a>
                </button>
            </div>
        </div>
    );
};

export default ComicViewer;
