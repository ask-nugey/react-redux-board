import "App.css";
import { addPost, deletePost } from "features/Posts";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const postList = useSelector((state) => state.posts.value);

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
    <>
      <header>
        <h1>React-Redux 掲示板</h1>
      </header>
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
      <main>
        <div className="c-postList">
          {postList.map((post) => (
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
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
