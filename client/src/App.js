import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Types from './components/Types/Types';
import DestinationDetails from './components/Details/Details';
import EditDestinationForm from './components/Edit/EditForm';


function App() {
  return (
    <div className="container">
      <Header/>
     

        <Switch>
          <Route path="/" exact component={Types} />
          <Route path="/types/:type" component={Types} />
          <Route path="/destinations/details/:destinationId" exact component={DestinationDetails} />
          <Route path="/destinations/details/:petId/edit" component={EditDestinationForm } />
        </Switch>
        
        
      <Footer/>
    </div>
  );
}

export default App;
