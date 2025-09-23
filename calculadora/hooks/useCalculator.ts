import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subs = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState<string>('');

    const [number, setNumber] = useState<string>('0');
    const [prevNumber, setPrevNumber] = useState<string>('0');

    const lastOperator = useRef<Operator>(null);


    useEffect(() => {
        if (lastOperator.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number, formula]);

    useEffect(() => {
        const subResult = calculateResult();
        setPrevNumber(`${subResult}`)
    }, [formula])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');

        lastOperator.current = null;
    };

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        setNumber('-' + number);
    }

    const deleteLast = () => {

        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }
        setNumber('0');
    }

    const setLastNumber = () => {
        calculateResultTotal();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }
        setPrevNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.multiply;
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.subs;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.add;
    }

    const calculateResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subs:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                throw new Error(`Operación ${operation} Invalida`);
        }
    }

    const calculateResultTotal = () => {
        const result = calculateResult();
        setFormula(`${result}`);

        lastOperator.current = null;
        setPrevNumber('0');
    }

    const buildNumber = (numStr: string) => {
        //Verificar si ya existe el punto decimal

        if (number.includes('.') && numStr === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numStr === '.') {
                return setNumber(number + numStr);
            }

            //Evaluar si es otro cero y no hay punto
            if (numStr === '0' && number.includes('.')) {
                return setNumber(number + numStr);
            }

            //Evaluar si es diferente de cero, no hay punto y es el pimer numero
            if (numStr !== '0' && !number.includes('.')) {
                return setNumber(numStr);
            }

            //Evitar 0000000000
            if (numStr === "0" && !number.includes('.')) {
                return;
            }
        }
        setNumber(number + numStr);
    }

    return {
        //Props
        formula,
        number,
        prevNumber,

        //Metodos
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateResultTotal
    }

}