import React, { useState } from 'react';
import './Pops.css';

const Pops = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="container">
            {isOpen ? (
                <div className="modal">
                    <h2>Bienvenidos al curso Multimedios</h2>
                    <button onClick={handleClose}>Cerrar</button>
                </div>
            ) : (
                <button onClick={handleOpen}>Abrir</button>
            )}
        </div>
    );
};

export default Pops;

