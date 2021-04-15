import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import DestinationDetails from './components/Details/Details';
import EditDestinationForm from './components/DestinationForms/Edit/EditForm';
import CreateDestinationForm from './components/DestinationForms/Create/CreateForm';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';
import About from './components/About/About';


function App() {
  return (
    <div className="container">
      <Header/> 
     

        <Switch>
          <Route path="/"component={Home} />          
          <Route path="/destinations/details/:destinationId" component={DestinationDetails} />
          <Route path="/destinations/details/:destinationId/edit" component={EditDestinationForm } />
          <Route path="/destinations/create" component={CreateDestinationForm} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          
        </Switch>
        
        
      <Footer/>
    </div>
  );
}

export default App;
