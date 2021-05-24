import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      //   fetch("http://localhost:8000/blogs")
      fetch(url)
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("Couldn't fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setloading(false);
          seterror(null);
        })
        .catch((e) => {
          // console.log(e.message);
          seterror(e.message);
          setloading(false);
        });
    }, 500);
  }, [url]);

  return { data, isloading, error };
};

export default useFetch;
