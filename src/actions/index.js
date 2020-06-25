import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get ('/posts');

//     dispatch ({
//       type: 'FETCH_POSTS',
//       payload: response,
//     });
//   };
// };

// see shorhand of above code here
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get ('/posts');

  dispatch ({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get (`/users/${id}`);

//   dispatch ({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// };


export const fetchUser = id => dispatch => {
  _fetchUser (id, dispatch);
};

// private function

const _fetchUser = _.memoize (async (id, dispatch) => {
  const response = await jsonPlaceholder.get (`/users/${id}`);

  dispatch ({
    type: 'FETCH_USER',
    payload: response.data,
  });
});



// fine if we not using middleware and return plain object
// export const plainActionObjWithoutMiddleware = () => {
//     return {
//         type: 'FETCH_POSTS'
//     }
// }
