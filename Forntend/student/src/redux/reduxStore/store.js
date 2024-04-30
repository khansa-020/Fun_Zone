import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Example middleware, if used
import rootReducer from '../reducers/rootReducer'; 

const middleware = [thunk]; // Array of middleware, if used

const store = createStore(
  rootReducer, // Combined reducers
  applyMiddleware(...middleware) // Apply middleware
);

export default store;





// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './rootreducer';
// import rootSaga from './rootsaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware)),
// );

// // then run the saga
// sagaMiddleware.run(rootSaga);

// export default store;