import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar.js'
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer.js';
import whatsapp from './images/wp.webp'

function App() {
  return (
    <Router>     
      <a className='whatsapp-imglink' href="https://api.whatsapp.com/send?phone=919721604436"><img className='whatsapp-img' src={whatsapp} alt="whatsapp" /></a>
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
              <h3>Will be live on this page <br></br> Stay Tunned </h3>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
