import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from 'features/Posts';
import { v4 as uuidv4 } from "uuid";

const AddPost = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (name === "" || content === "") return;

    dispatch(
      addPost({
        id: uuidv4(),
        name: name,
        content: content,
      })
    );
    setName("")
    setContent("");
  };

  return (
    <div className="c-addPost">
      <input
        className="name"
        type="text"
        value={name}
        placeholder="お名前"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="content"
        type="text"
        value={content}
        placeholder="投稿内容"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => handleClick()}>投稿</button>
    </div>
  );
}

export default AddPost
