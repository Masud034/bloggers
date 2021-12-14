import BlogList from "./BlogList.";
import { useState, useEffect } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogss')
          .then(res => {
              if( !res.ok) {
                  throw Error("Could not fetch");
              }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
          })
          .catch(err => {
              setError(err.message);
              setIsPending(false);
          })
      }, [])

    return ( 
        <div className="home">
            { error && <div className="err"> {error} </div> }
            { isPending && <div className="loading">Loading...</div> }
            { blogs && <BlogList blogs = {blogs} title = "All blogs" /> }
        </div>
     );
}
 
export default Home;