const Home = () => {

    const handleClick = () => {
        console.log("Hello there")
    }

    const handleClickAgain = (name) => {
        console.log("Hello," +name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click me</button>
            <button onClick = {()=> handleClickAgain("Mofiz")}>Click me again</button>
        </div>
     );
}
 
export default Home;