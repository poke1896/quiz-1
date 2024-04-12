import React, { useState } from 'react';

const Name = () => {
    const [name, setName] = useState('No definido');

    const handleNameChange = (event) => {
        if (event.target.value === '') {
            setName('No definido');
        } else {
            setName(event.target.value);
        }
    };

    return (
        <div>
            <h2>Nombre: {name}</h2>
            <input type="text" onChange={handleNameChange} placeholder="Ingresa tu nombre" />
        </div>
    );
};

export default Name;
