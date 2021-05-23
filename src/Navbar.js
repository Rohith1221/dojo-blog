const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>the dojo blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a className="newbloglink" href="/create">
          New blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

//sfc
