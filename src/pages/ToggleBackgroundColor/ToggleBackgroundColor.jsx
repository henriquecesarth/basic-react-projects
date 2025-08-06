import { useState } from 'react'
import './ToggleBackgroundColor.css'

const ToggleBackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [textColor, setTextColor] = useState('#1b1b1b')
    const [buttonStyle, setButtonStyle] = useState('white')

    const handleClick = () => {
        backgroundColor === 'white' ? setBackgroundColor('#1b1b1b') : setBackgroundColor('white')
        textColor === '#ffa31a' ? setTextColor('#1b1b1b') : setTextColor('#ffa31a')
        buttonStyle === 'white' ? setButtonStyle('#1b1b1b') : setButtonStyle('white')
    }

    return (
        <div className='back-page' style={{ backgroundColor, color: textColor, display: 'flex', justifyContent: 'center'}}>
            <button className='change-button' onClick={handleClick} style={{ buttonStyle, color: textColor, border: `2px solid ${textColor}` }}>
                {backgroundColor === '#1b1b1b' ? 'Black Theme' : 'White Theme'}
            </button>
            <section className='back-content'>
                <h1>
                    Welcome To A <br />
                    Real World...
                </h1>
            </section>
        </div>
    )
}

export default ToggleBackgroundColor