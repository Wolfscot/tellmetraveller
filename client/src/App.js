import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Common/Header/Header';

import Footer from './components/Common/Footer/Footer';
import Home from './components/Common/Home/Home';
import About from './components/Common/About/About';

// import StoryCard from './components/Story/StoryCard/StoryCard'
import StoryDetails from './components/Story/Details/Details';
import EditForm from './components/Story/StoryForms/Edit/EditForm';
import CreateForm from './components/Story/StoryForms/Create/CreateForm';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';




function App() {
  return (
    <div className="container">
      <Header/> 
     

        <Switch>
          <Route path="/"component={Home} />          
          <Route path="/story/details/:storyId" component={StoryDetails} />
          <Route path="/story/details/:storyId/edit" component={EditForm } />
          <Route path="/story/create" component={CreateForm} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          
        </Switch>
        
        
      <Footer/>
    </div>
  );
}

export default App;
