import React from 'react'
import Post from 'component/Post';
import { useSelector } from 'react-redux';

const PostList = () => {
  const postList = useSelector((state) => state.posts.value);

  return (
    <div className="c-postList">
      {postList.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default PostList
