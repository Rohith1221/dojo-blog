import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams(); // allows to  grabs route params

  const {
    data: blog,
    isloading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {isloading && <div>Loading ..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writen by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
