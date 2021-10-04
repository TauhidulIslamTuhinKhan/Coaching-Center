import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Success from './components/Success/Success';
import AllServices from './components/AllServices/AllServices';


function App() {
  
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/services">
          <AllServices></AllServices>
        </Route>

        <Route path="/success">
          <Success></Success>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
