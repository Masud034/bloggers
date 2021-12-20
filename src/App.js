import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogList from './BlogList.';
import BlogDetais from './BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">
       <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = '/'>
              <Home/>
            </Route>

            <Route exact path = '/create'>
              <Create/>
            </Route>
          </Switch>

          <Route exact path = "/blogs/:id">
            <BlogDetais/>
          </Route>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
