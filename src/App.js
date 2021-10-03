import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {
  
  return (
    <Router>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </Router>
  );
}

export default App;
