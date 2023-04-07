import React from 'react'
import { deletePost } from 'features/Posts';
import { useDispatch } from 'react-redux';

const Post = ({post,childClassName}) => {
  const dispatch = useDispatch();

  return (
    <article key={post.id} className={`c-post ${childClassName}`}>
      <p className="content">{post.content}</p>
      <p className="name">{post.name}</p>
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
