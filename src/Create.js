import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("rohith");

  return (
    <div className="create">
      <h2>Add a new blog </h2>
      <form>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="rohith">Rohith</option>
          <option value="haywood">Haywood</option>
        </select>
        <button>Add blog</button>
        <p>
          {title} {body} {author}
        </p>
      </form>
    </div>
  );
};

export default Create;
