import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Button = ({ value, title, activeIndex, handleIndex, dispatch }) => {
  const [buttonSelected, setButtonSelected] = useState(false)
  const id = uuidv4()
  useEffect(() => {
    setButtonSelected(value === activeIndex ? true : false)
  },[activeIndex])
  
  const selectButton = e => {
    handleIndex(e)
    dispatch(value)
  }

  return (
    <button onClick={selectButton} value={value} className={buttonSelected ? 'btns active' : 'btns'}>{title}</button>
  )
}

export default Button