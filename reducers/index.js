import { combineReducers } from "redux";
import img__isClicked from './img__isClicked';
import tag from "./tag";
import img__data from "./img__data";

const rootReducers = combineReducers({
  img__isClicked,
  tag,
  img__data
})

export default rootReducers;