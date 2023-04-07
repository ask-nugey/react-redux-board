import React from "react";
import PostList from "component/PostList";
import AddPost from "component/AddPost";

const Main = () => {
  return (
    <main className="c-main">
      <AddPost />
      <PostList />
    </main>
  );
};

export default Main;
