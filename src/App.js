import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Posts/PostForm";

// import store from './store'

function App() {
  return (
    <Router>
      <Navbar />
      <Route
        exact
        path="/"
        render={(props) => (
          <>
            <Header
              bgImage={"./Images/main-bg.jpg"}
              title={"Post your favourite things!!"}
              text={
                "It is a great website to share and see what other people share to connect with them!"
              }
            />
            <div className="container">
              <PostForm />
              <Posts />
            </div>
          </>
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <>
            <Header
              bgImage={"./Images/about-bg.jpg"}
              title={"About us"}
              text={
                "We are a creative and wonderful team that just wants to become better at programming!"
              }
            />
            <div className="container">
              <PostForm />
              <Posts />
            </div>
          </>
        )}
      />
      <Route
        exact
        path="/store"
        render={(props) => (
          <>
            <Header
              bgImage={"./Images/store-bg.jpg"}
              title={"Store"}
              text={"Not selling anything at the moment"}
            />
            <div className="container">
              <PostForm />
              <Posts />
            </div>
          </>
        )}
      />
    </Router>
  );
}

export default App;
