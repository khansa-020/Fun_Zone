import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";
import noteReducer from "./NoteReducer";
export const reducers = combineReducers({
  authReducer,
  postReducer,
  noteReducer,
});


// import { combineReducers } from 'redux';
// import signInReducer from './containers/auth/reducers';

// const rootReducer = combineReducers({
//     auth: signInReducer,
   
// });

// export default rootReducer;