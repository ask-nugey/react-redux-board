import "App.css";
import { useSelector } from "react-redux";

function App() {
  const postList = useSelector((state) => state.posts.value);
  return (
    <>
      <header>
        <h1>React-Redux 掲示板</h1>
      </header>
      <div className="c-addPost">
        <input type="text" placeholder="お名前" />
        <input type="text" placeholder="投稿内容" />
        <button>投稿</button>
      </div>
      <main>
        <div className="c-postList">
          {postList.map((post) => (
            <article key={post.id} className="c-post item">
              <h2 className="title">{post.name}</h2>
              <p className="content">{post.content}</p>
              <button className="delete">削除</button>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
