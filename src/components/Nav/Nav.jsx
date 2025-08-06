import './Nav.css'
import { useState, useEffect } from 'react'
import Button from '../Button/Button'

const Nav = ({ dispatch }) => {
  const [activeIndex, setActiveIndex] = useState('accordion')
  const handleIndex = e => setActiveIndex(e.target.value)
  
  useEffect(() => {
    dispatch('accordion')
  },[])

  return (
    <nav>
      <span className='nav-title'>Basic React Projects</span>
      <div className="nav-container">
        <Button value="accordion" title="Accordion" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="calculator" title="Calculator" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="counter" title="Counter" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="form" title="Form" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="hiddenSearch" title="HiddenSearch" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="meals" title="Meals" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="testimonials" title="Testimonials" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="todo" title="To-do" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
        <Button value="toggleBackgroundColor" title="Toggle Background Color" activeIndex={activeIndex} handleIndex={handleIndex} dispatch={dispatch} />
      </div>
    </nav>
  )
}

export default Nav