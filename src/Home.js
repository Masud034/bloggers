import { useState } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState( [
        { id : 1, title : 'My blog-1', body : 'This is first blog body', author : 'Snoop Dogg' },
        { id : 2, title : 'My blog-2', body : 'This is second blog body', author : '50 Cent' }

    ]);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2> { blog.title } </h2>
                    <p>Written by {blog.author} </p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;