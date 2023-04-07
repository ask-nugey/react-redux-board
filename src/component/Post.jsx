import React from 'react'
import { deletePost } from 'features/Posts';
import { useDispatch } from 'react-redux';

const Post = ({post}) => {
  const dispatch = useDispatch();

  return (
    <article key={post.id} className="c-post item">
      <h2 className="title">{post.name}</h2>
      <p className="content">{post.content}</p>
      <button
        className="delete"
        onClick={() => dispatch(deletePost({ id: post.id }))}
      >
        削除
      </button>
    </article>
  );
}

export default Post
