import BlogList from "./BlogList.";
import { useState } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState( [
        { id : 1, title : 'blog-1', body : 'This is first blog body', author : 'Snoop Dogg' },
        { id : 2, title : 'blog-2', body : 'This is second blog body', author : '50 Cent' },
        { id : 3, title : 'blog-3', body : 'This is third blog body', author : 'Snoop Dogg' }

    ]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All blogs"/>
            <BlogList blogs = {blogs.filter( (blog) => blog.author === 'Snoop Dogg')} title = "Mario's blogs"/>
        </div>
     );
}
 
export default Home;