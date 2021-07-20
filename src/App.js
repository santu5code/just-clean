
import { Route, Switch } from 'react-router';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Workplaces from './components/Workplaces';

function App() {
  return (
    <>
     
       <Route exact path="/" component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/contacts" component={Contact}></Route>
       <Route path="/workplace" component={Workplaces}></Route>
    </>
    );
}

export default App;
