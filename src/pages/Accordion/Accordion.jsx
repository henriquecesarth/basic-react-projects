import { useState } from 'react'
import './Accordion.css'
import { v4 as uuidv4 } from 'uuid'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)
    const id = uuidv4();
    console.log(id)

    return (
        <section className='accordion-card' key={id}>
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <p className="icon">{isActive ? '-' : '+'}</p>
            </div>

            <div className="accordion-content">
                {isActive && <p className='card-info'>{content}</p>}
            </div>
        </section>


    )
}

export default Accordion