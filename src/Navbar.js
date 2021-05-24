import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>the dojo blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/*  anchor tag sends a new requst to server every
         time its clicked , Link tag doesnt send reqst everytime and 
        inturn saves time in routing  */}
        <Link className="newbloglink" to="/create">
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

//sfc
