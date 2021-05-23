import { computeHeadingLevel } from "@testing-library/dom";
import { useState, useEffect } from "react";
import { isDOMComponentElement } from "react-dom/cjs/react-dom-test-utils.production.min";
import { isElementOfType } from "react-dom/test-utils";
import BlogList from "./BlogList";

const Home = () => {
  //hooks
  const [blogs, setblog] = useState(null);
  const [isloading, setloading] = useState(true);

  // { title: "My new website", body: "about website", author: "Mario", id: 1 },
  // {
  //   title: "Welcome party",
  //   body: "party preparations",
  //   author: "Yoshi",
  //   id: 2,
  // },
  // { title: "Web dev tips", body: "filler text", author: "Rohith", id: 3 },
  // { title: "Mobile dev tips", body: "filler text", author: "Rohith", id: 4 },
  // ]);

  // const handleDelete = (id) => {
  //   const copyblogs = blogs.filter((blog) => blog.id !== id);
  //   setblog(copyblogs);
  // };

  const [name, setname] = useState("Bottle");

  // func runs on every render
  // useEffect second argument is dependency when the func should run (when there is change in dependency here ie name)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setblog(data);
          setloading(false);
        });
    }, 500);
  }, []);

  return (
    <div className="home">
      {isloading && <div>Loading ...</div>}

      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Rohith")}
        title="Rohith's blogs"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's blogs"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;

// useState hook  hook starts with use
// props si used to pass data from parent comp to child comp
