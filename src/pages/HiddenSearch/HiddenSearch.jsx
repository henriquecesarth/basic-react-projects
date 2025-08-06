import { useState } from 'react'
import './HiddenSearch.css'
import { FaSearch } from 'react-icons/fa'

const HiddenSearch = () => {
    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState('white')

    const handleClick = (e) => {
        setBgColor('#1a1a1a')

        if (e.target.className === 'search-container'){
            setShowInput(false)
            setBgColor('#fff')
        }
    }


  return (
    <section className='search-container' style={{backgroundColor: bgColor}} onClick={handleClick}>
        {
            showInput ?(
                <input className='hidden-input' type="text" placeholder='Search...' />
            ) : (
                <FaSearch className='search' onClick={ () => setShowInput(true) } />
            )
        }
    </section>
  )
}

export default HiddenSearch