import BlogList from "./BlogList.";
import { useState, useEffect } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState( [
        { id : 1, title : 'blog-1', body : 'This is first blog body', author : 'Snoop Dogg' },
        { id : 2, title : 'blog-2', body : 'This is second blog body', author : '50 Cent' },
        { id : 3, title : 'blog-3', body : 'This is third blog body', author : 'Snoop Dogg' }

    ]);

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        console.log(id);
        const newBlogs = blogs.filter( blog => blog.id !== id)
        console.log(newBlogs);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('use effect ran');
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All blogs" handleDelete = {handleDelete}/>
            <h2>Hello, {name} </h2>
            <button onClick = { ()=> setName('George')}> Change Name</button>
        </div>
     );
}
 
export default Home;