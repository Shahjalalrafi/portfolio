import './App.css';
import Home from './Component/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import "aos/dist/aos.css"
import About from './Component/About/About/About';
import Work from './Component/Work/Work/Work';
import Blog from './Component/Blog/Blog/Blog';
import ContactInfo from './Component/ContactInfo/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          
          <Route path='/about'>
            <About />
          </Route>
          
          <Route path='/work'>
            <Work />
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>
          
          <Route path='/contact'>
            <ContactInfo />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route  path='*'>
            page not found
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
