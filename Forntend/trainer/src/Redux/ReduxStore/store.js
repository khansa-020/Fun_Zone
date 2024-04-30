// ReduxStore/store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Example middleware, if used
import rootReducer from '../Reducers/RootReducer'; // Your root reducer

const middleware = [thunk]; // Array of middleware, if used

const store = createStore(
  rootReducer, // Combined reducers
  applyMiddleware(...middleware) // Apply middleware
);

export default store;
