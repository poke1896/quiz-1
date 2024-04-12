import React, { useState } from 'react';
import './Calc.css';

const Calc = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(0);

    const handleSum = () => {
        setResult(Number(num1) + Number(num2));
    };

    const handleSubtract = () => {
        setResult(Number(num1) - Number(num2));
    };

    const handleReset = () => {
        setNum1('');
        setNum2('');
        setResult(0);
    };

    return (
        <div className="container">
            <div className="inputs">
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Primer valor" />
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Segundo valor" />
            </div>
            <div className="buttons">
                <button onClick={handleSum}>Sumar</button>
                <button onClick={handleSubtract}>Restar</button>
                <button onClick={handleReset}>Reiniciar</button>
            </div>
            <hr />
            <h2>El resultado es: {result}</h2>
        </div>
    );
};

export default Calc;

