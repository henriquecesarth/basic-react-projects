import Counter from '../pages/Counter/Counter.jsx';
import Todo from '../pages/Todo/Todo';
import Meals from '../pages/Meals/Meals.jsx';
import Calculator from '../pages/Calculator/Calculator.jsx';
import ToggleBackgroundColor from '../pages/ToggleBackgroundColor/ToggleBackgroundColor.jsx';
import HiddenSearch from '../pages/HiddenSearch/HiddenSearch.jsx';
import Testimonials from '../pages/Testimonials/Testimonials';
import { accordionData } from '../utils/content.js';
import Accordion from '../pages/Accordion/Accordion.jsx';
import Form from '../pages/Form/Form.jsx';
import {v4 as uuidv4} from 'uuid'

const pageReducer = (state, action) => {
  switch (action.type) {
    case 'accordion':
      return (
        <div className='accordion'>
          {accordionData.map(({ title, content }) => (
            <Accordion key={uuidv4()} title={title} content={content} />
          ))}
        </div>
      );
    case 'calculator':
      return <Calculator />;
    case 'counter':
      return <Counter />;
    case 'form':
      return <Form />;
    case 'hiddenSearch':
      return <HiddenSearch />;
    case 'meals':
      return <Meals />;
    case 'testimonials':
      return <Testimonials />;
    case 'todo':
      return <Todo />;
    case 'toggleBackgroundColor':
      return <ToggleBackgroundColor />;
    default:
      return state;
  }
};

export default pageReducer