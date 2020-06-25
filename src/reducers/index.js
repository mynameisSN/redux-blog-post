import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers ({
   // replaceMe: ()=> 'Hi there' // return dummy text
   posts: postsReducer,
   users: usersReducer
});
