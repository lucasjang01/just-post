import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as LoupeIcon } from "../../icons/loupe.svg";

// import React, { Component } from "react";
// import { connect } from "react-redux";

import { fetchPostsAction } from "../../slice/postSlice";
import "./Posts.css";
import Post from "./Post";

// Functional Component with Redux

const Filter = styled.input`
  width: 100%;
  height: 100%;
  margin: 20px 0 20px 0;
  outline: none;
  border: none;
  font-size: 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  border-radius: 10px;
  border: 1px solid #333;
  height: 50px;
  padding: 0.5rem 0.1rem 0.5rem 0.8rem;
  & svg {
    fill: #848484;
    padding: 6px;
    width: 40px;
    height: 40px;
  }
`;

export default function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => setFilteredPosts(posts), [posts]);

  const search = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.title.toLowerCase().indexOf(inputValue) !== -1 ||
          post.body.toLowerCase().indexOf(inputValue) !== -1
      )
    );
  };

  return (
    <div>
      <h1 className="section-header">Posts</h1>
      <SearchBar>
        <Filter type="text" placeholder="Search a Post..." onKeyUp={search} />
        <LoupeIcon />
      </SearchBar>
      {filteredPosts.map((post) => (
        <Post key={post.body} post={post} />
      ))}
    </div>
  );
}

// Class Component with Redux

// const mapDispatch = { fetchPostsAction };

// const mapState = (state) => ({ posts: state.posts });

// class Posts extends Component {
//   componentDidMount() {
//     this.props.fetchPostsAction();
//   }
//   render() {
//     return (
//       <div>
//         <h1 className="section-header">Posts</h1>
//         {this.props.posts.map((post) => (
//           <Post key={post.body} post={post} />
//         ))}
//       </div>
//     );
//   }
// }

// export default connect(mapState, mapDispatch)(Posts);
