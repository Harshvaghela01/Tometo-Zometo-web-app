import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Home,AllShop} from './components';


const App = () => {
  return (
    <div>
      <Router>
          <Route exact path="/all_shops" component={AllShop} />
          <Route exact path="/" component={Home} />
      </Router>
    </div>
  )
}

export default App
