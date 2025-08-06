import Nav from './components/Nav/Nav.jsx'
import {useReducer} from 'react'
import pageReducer from './utils/pageReducer.jsx'

const App = () => {
  
  const [pageState, pageDispatch] = useReducer(pageReducer,<div></div>)

  const handleDispatch = (type) => {
    pageDispatch({type: type})
  }

  console.log(pageState)
  return (
    <>
      <Nav dispatch={handleDispatch}/>
      {pageState}
    </>
  )
}

export default App