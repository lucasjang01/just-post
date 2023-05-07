import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    newPost: {
      title: "new title",
      body: "new body",
    },
  },
  reducers: {
    fetch: (state, { payload }) => {
      state.posts = payload;
    },
    create: (state, { payload }) => {
      state.newPost = payload;
      state.posts.unshift(payload);
    },
    edit: (state, { payload }) => {
      const { id, title, body } = payload;
      const editPost = state.posts.find((post) => post.id === id);
      if (editPost) {
        editPost.title = title;
        editPost.body = body;
      }
    },
  },
});

export const fetchPostsAction = () => async (dispatch) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    await dispatch(postSlice.actions.fetch(posts));
  } catch (error) {
    console.log(error);
  }
};

export const createPostAction = (post) => async (dispatch) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    });
    const postData = await res.json();
    await dispatch(postSlice.actions.create(postData));
  } catch (error) {
    console.log(error);
  }
};

export const { edit } = postSlice.actions;

export default postSlice.reducer;
