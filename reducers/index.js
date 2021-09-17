import { combineReducers } from "redux";
import img__isClicked from './img__isClicked';
import feature__tag from './feature__tag';

const rootReducers = combineReducers({
  img__isClicked,
  feature__tag
})

export default rootReducers;