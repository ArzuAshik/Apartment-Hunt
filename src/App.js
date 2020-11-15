import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Apartments from './Component/Apartments/Apartments';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Details from './Component/Details/Details';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Login from './Component/Login/Login';

function App() {
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Header />
          <Apartments />
          <Services />
          <Footer />
        </Route>
        <Route path="/apartment/:name" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
