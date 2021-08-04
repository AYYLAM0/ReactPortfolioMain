import Header from './component/Header';
import Footer from './component/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/applications" component={Projects} />
    </Switch>

    <Footer />

    </Router>
  );
}

export default App;
