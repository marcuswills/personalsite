import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import RecReads from './components/pages/recreads';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import SignIn from './components/pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/readinglist' component={RecReads} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
