import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from 'features/Posts';
import { v4 as uuidv4 } from "uuid";

const AddPost = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: uuidv4(),
        name: name,
        content: content,
      })
    );
  };

  return (
    <div className="c-addPost">
      <input
        type="text"
        placeholder="お名前"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="投稿内容"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => handleClick()}>投稿</button>
    </div>
  );
}

export default AddPost
