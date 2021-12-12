import BlogList from "./BlogList.";
import { useState } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState( [
        { id : 1, title : 'My blog-1', body : 'This is first blog body', author : 'Snoop Dogg' },
        { id : 2, title : 'My blog-2', body : 'This is second blog body', author : '50 Cent' }

    ]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All blogs"/>
        </div>
     );
}
 
export default Home;