import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="container">
      <Header/>
     

        {/* <Switch>
          <Route path="/" exact component={} />
          <Route path="/categories/:category" component={} />
          <Route path="/pets/details/:petId" component={} />
        </Switch> */}
        
        
      <Footer/>
    </div>
  );
}

export default App;
