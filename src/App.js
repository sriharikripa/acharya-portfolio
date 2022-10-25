import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home/Home.js';

function App() {
  return (
    <Router>     
      <Navbar />
      <div className="App">      
        <div className="content">
          <Switch>
            <Route exact path="/acharya-portfolio/"> 
              <Home/>
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
