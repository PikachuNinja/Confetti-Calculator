import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import Confetti from './components/Confetti';
import './styles/Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [confetti, setConfetti] = useState(false);
    const [memory, setMemory] = useState(0);
    const [degreeMode, setDegreeMode] = useState(true);

    const handleClick = (value) => {
        if (value === '=') {
            try {
                const evalResult = eval(input.replace(/÷/g, '/').replace(/×/g, '*'));
                setResult(evalResult);
                setInput(evalResult.toString());
                if (input.includes('5') && input.includes('6')) {
                    setConfetti(true);
                    setTimeout(() => setConfetti(false), 2000);
                }
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === 'MC') {
            setMemory(0);
        } else if (value === 'M+') {
            setMemory(memory + parseFloat(result));
        } else if (value === 'M-') {
            setMemory(memory - parseFloat(result));
        } else if (value === 'MR') {
            setInput(memory.toString());
        } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'sinh' || value === 'cosh' || value === 'tanh') {
            const angle = degreeMode ? (parseFloat(input) * Math.PI) / 180 : parseFloat(input);
            const trigResult = Math[value](angle);
            setInput(trigResult.toString());
        } else if (value === 'Rad') {
            setDegreeMode(!degreeMode);
        } else if (value === 'π') {
            setInput(input + Math.PI);
        } else if (value === 'e') {
            setInput(input + Math.E);
        } else if (value === 'x²') {
            setInput(Math.pow(parseFloat(input), 2).toString());
        } else if (value === 'x³') {
            setInput(Math.pow(parseFloat(input), 3).toString());
        } else if (value === 'xʸ') {
            setInput(input + '^');
        } else if (value === '√x') {
            setInput(Math.sqrt(parseFloat(input)).toString());
        } else if (value === '∛x') {
            setInput(Math.cbrt(parseFloat(input)).toString());
        } else if (value === 'ʸ√x') {
            setInput(input + '^(1/');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display value={input || result} />
            <div className="buttons">
                {[
                    '(', ')', 'MC', 'M+', 'M-', 'MR', 'C', '+/-','/','%', 
                    '2ⁿᵈ', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '*', 
                    '⅟ₓ', '√x', '∛x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-', 
                    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+', 
                    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
                ].map(val => (
                    <Button key={val} value={val} onClick={handleClick} />
                ))}
            </div>
            <Confetti trigger={confetti} />
        </div>
    );
};

export default Calculator;
