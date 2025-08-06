import { useRef, useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [inputValue, setInputValue] = useState('')
    const calcRef = useRef('')
    const operatorRef = useRef('')

    const clear = () => {
        setInputValue('')
        operatorRef.current = ''
        calcRef.current = ''
    }

    const display = (char) => {
        if (operatorRef.current !== '') {
            setInputValue(char)
            return
        }

        setInputValue(inputValue => (inputValue + char))
    }

    const handleOperator = (inputOperator) => {
        if (operatorRef.current !== '')
            calculate()
        else
            calcRef.current = inputValue
        
        operatorRef.current = inputOperator;

    }

    const calculate = () => {
        switch (operatorRef.current) {
            case '+':
                calcRef.current = parseFloat(calcRef.current) + parseFloat(inputValue)
                setInputValue(calcRef.current.toString())
                break;
            case '-':
                calcRef.current = parseFloat(calcRef.current) - parseFloat(inputValue)
                setInputValue(calcRef.current.toString())
                break;
            case '*':
                calcRef.current = parseFloat(calcRef.current) * parseFloat(inputValue)
                setInputValue(calcRef.current.toString())
                break;
            case '/':
                calcRef.current = parseFloat(calcRef.current) / parseFloat(inputValue)
                setInputValue(calcRef.current.toString())
                break;
            default:
                break;
        }

        operatorRef.current = ''
    }

    return (
        <div className="calculator-page">
            <form className='calculator' name='calc'>
            <input type="text" className="value" value={inputValue} onChange={e => setInputValue(e.target.value)} />

            <span className="num clear" onClick={() => clear()}>c</span>
            <span onClick={() => handleOperator('/')}>/</span>
            <span onClick={() => handleOperator('*')}>*</span>
            <span onClick={() => display('7')}>7</span>
            <span onClick={() => display('8')}>8</span>
            <span onClick={() => display('9')}>9</span>
            <span onClick={() => handleOperator('-')}>-</span>
            <span onClick={() => display('4')}>4</span>
            <span onClick={() => display('5')}>5</span>
            <span onClick={() => display('6')}>6</span>
            <span className='plus' onClick={() => handleOperator('+')}>+</span>
            <span onClick={() => display('1')}>1</span>
            <span onClick={() => display('2')}>2</span>
            <span onClick={() => display('3')}>3</span>
            <span onClick={() => display('0')}>0</span>
            <span onClick={() => display('00')}>00</span>
            <span onClick={() => display('.')}>.</span>
            <span className='num equal' onClick={() => calculate()} >=</span>
        </form>
        </div>
    )
}

export default Calculator