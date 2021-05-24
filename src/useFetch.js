import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    {
      /*we can assoicate with certain fetch requst , 
  then we can use abortcontroller to cancel the fetch*/
    }
    setTimeout(() => {
      //   fetch("http://localhost:8000/blogs")
      fetch(url, { signal: abortCont.signal })
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
          if (e.name === "AbortError") {
            console.log("fetch aborted ");
          } else {
            seterror(e.message);
            setloading(false);
          }
        });
    }, 500);

    return () => {
      console.log("cleanup");
      abortCont.abort();
    };
  }, [url]);

  return { data, isloading, error };
};

export default useFetch;
