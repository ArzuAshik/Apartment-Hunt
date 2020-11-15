import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Apartments from './Component/Apartments/Apartments';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Details from './Component/Details/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>This Will Be Header</h1>
          <Apartments />
          <Services />
          <Footer />
        </Route>
        <Route path="/apartment/:name" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
