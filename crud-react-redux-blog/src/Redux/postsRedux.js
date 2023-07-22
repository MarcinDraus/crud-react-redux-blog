//import shortid from 'shortid';

//selectors

// actions
// eslint-disable-next-line no-unused-vars
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
//export const addPosts = (payload) => ({ type: 'ADD_POSTS', payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    // case addPosts:
    //     return[...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default postsReducer;
