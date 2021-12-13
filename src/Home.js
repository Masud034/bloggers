import BlogList from "./BlogList.";
import { useState, useEffect } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState(null);

 //   const [name, setName] = useState('Mario');

     const handleDelete = (id) => {
         console.log(id);
         const newBlogs = blogs.filter( blog => blog.id !== id)
         setBlogs(newBlogs);
     }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            console.log(blogs);
          })
      }, [])

    return ( 
        <div className="home">
            {blogs && <BlogList blogs = {blogs} title = "All blogs" handleDelete = {handleDelete}/> }
        </div>
     );
}
 
export default Home;