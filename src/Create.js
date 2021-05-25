import { useState } from "react";
import { Route } from "react-router";
import Home from "./Home";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("rohith");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory(); // we can use several methods on history object to goo forward history and redirect user

  const handleSubmit = (e) => {
    e.preventDefault(); // doesnt refresh
    const blog = { title, body, author }; // creating blog object

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      // this asynchrounous and returns a promise , we can use then method
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1); // goes back to previous page in history
      history.push("/"); // goes back to specific route
    });
  };

  // now we should send a post request to json server to add the object to json file

  return (
    <div className="create">
      <h2>Add a new blog </h2>
      <form onSubmit={handleSubmit}>
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
        {/* <button>Add blog</button> */}

        {isPending && <button disabled>Adding blog ...</button>}
        {!isPending && <button>Add blog</button>}

        <p>{/* {title} {body} {author} */}</p>
      </form>
    </div>
  );
};

export default Create;
