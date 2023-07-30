import shortid from 'shortid';


//selectors
export const getPostById = (state, id) => state.posts.find((post) => post.id === id);
export const getAllPosts = (state) => state.posts;
// actions
// eslint-disable-next-line no-unused-vars
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
//const DELETE_POST = 'app/posts/DELETE_POST';
//const ADD_POST = 'app/posts/ADD_POST'; 

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const addPost = (postData) => ({
    type: ADD_POST,
    payload: postData,
  });
  
//export const addPosts = (payload) => ({ type: 'ADD_POSTS', payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_POST:
          return [...statePart, { ...action.payload, id: shortid.generate() }];
    default:
      return statePart;
  };
};

export default postsReducer;
