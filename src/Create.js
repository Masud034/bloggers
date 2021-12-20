import { useState } from "react/cjs/react.development";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPendiing, setIsPending] =useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'post',
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        })
        .then( () => {
            console.log("New Blog Added");
            setIsPending(false);
        })
    }
    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                    type = 'text'
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                />
            
                <label>Blog Body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value)}
                > </textarea>
                
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">oshi</option>
                </select>

               { !isPendiing && <button>Add blog</button> }
               { isPendiing && <button disabled>Adding blog</button>}
            </form>
        </div>
     );
}
 
export default Create;