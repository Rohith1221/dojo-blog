const BlogList = (props) => {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>
            Written by <i>{blog.author}</i>
          </p>
          {/* <button
            className="delBtn"
            onClick={() => props.handleDelete(blog.id)}
          >
            Delete blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
