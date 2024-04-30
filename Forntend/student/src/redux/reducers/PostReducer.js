// const postReducer = (
//     state = { posts: null, loading: false, error: false, uploading: false },
//     action
//   ) => {
//     switch (action.type) {
//       // belongs to PostShare.jsx
//       case "UPLOAD_START":
//         return { ...state, error: false, uploading: true };
//       case "UPLOAD_SUCCESS":
//         return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
//       case "UPLOAD_FAIL":
//         return { ...state, uploading: false, error: true };
//       // belongs to Posts.jsx
//       case "RETREIVING_START":
//         return { ...state, loading: true, error: false };
//       case "RETREIVING_SUCCESS":
//         return { ...state, posts: action.data, loading: false, error: false };
//       case "RETREIVING_FAIL":
//         return { ...state, loading: false, error: true };
//       default:
//         return state;
//     }
//   };
  
//   export default postReducer;




// Redux/Reducers/PostReducer.js
import * as actionTypes from '../../ActionTypes/PostactionTypes';

const postReducer = (
    state = { posts: null, loading: false, error: false, uploading: false },
    action
) => {
    switch (action.type) {
        case actionTypes.UPLOAD_START:
            return { ...state, error: false, uploading: true };
        case actionTypes.UPLOAD_SUCCESS:
            return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
        case actionTypes.UPLOAD_FAIL:
            return { ...state, uploading: false, error: true };
        case actionTypes.RETRIEVING_START:
            return { ...state, loading: true, error: false };
        case actionTypes.RETRIEVING_SUCCESS:
            return { ...state, posts: action.data, loading: false, error: false };
        case actionTypes.RETRIEVING_FAIL:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default postReducer;
