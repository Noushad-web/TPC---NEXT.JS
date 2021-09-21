import { combineReducers } from "redux";
import img__isClicked from './img__isClicked';
import tag from "./tag";
import img__data from "./img__data";
import counter from "./counter";
import saved__data from "./saved__data";

const rootReducers = combineReducers({
  img__isClicked,
  tag,
  img__data,
  counter,
  saved__data
})

export default rootReducers;