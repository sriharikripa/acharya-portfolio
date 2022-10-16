import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar.js'

function App() {
  return (
    <Router>     
      <Navbar />
      <div className="App">
      <h1>Home</h1>
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <h3>Comming Soon</h3>
            </Route>
            <Route path="/abc"> 
              <h2>abc</h2>
            </Route>
            <Route path="*">
              <h3>404</h3>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
