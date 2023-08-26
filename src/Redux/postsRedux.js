
import shortid from 'shortid';

// selectors
export const getPostById = (state, id) => state.posts.find((post) => post.id === id);
export const getAllPosts = (state) => state.posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
//const CATEGORY_SELECT = createActionName('CATEGORY_SELECT');

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const addPost = (payload) => ({
  type: ADD_POST,
  payload
});

export const editPost = (payload) => ({
  type: EDIT_POST,
  payload
});

// export const categorySelect = (id, name) => ({
//   type:'CATEGORY_SELECT',
//   payload: id, name,
// });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_POST:
      return  [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
      // case CATEGORY_SELECT:
      //   return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
      

  }
};

export default postsReducer;
