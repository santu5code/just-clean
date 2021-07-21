
import { Route} from 'react-router';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Review from './components/Review';
import Workplaces from './components/Workplaces';

function App() {
  return (
    <>
     
       <Route exact path="/" component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/contacts" component={Contact}></Route>
       <Route path="/workplace" component={Workplaces}></Route>
       <Route path="/review" component={Review}></Route>
    </>
    );
}

export default App;
