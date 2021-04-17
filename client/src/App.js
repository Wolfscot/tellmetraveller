import React, { Fragment } from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';


import EditForm from "./components/Story/StoryForms/Edit/EditForm";
import CreateForm from "./components/Story/StoryForms/Create/CreateForm";

import StoryDetails from "./components/Story/Details/Details";


import StoryCategory from "./components/Categories/CategoryDisplay";
import MyStories from "./components/Categories/MyDisplay";
import AllStories from "./components/Categories/AllDisplay";


import Home from "./components/Common/Home/Home";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";

import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';


import UserContext from './utils/UserContext';

import userServices from './services/userServices';



class App extends React.Component {

    static contextType = UserContext; 

    signin = (values) => {
        userServices.login(values).then((res) => {
            if (res === undefined) {
                
                userServices.reset()
                return;
            }
            this.context.signIn(res)            
            this.props.history.push('/')
            userServices.reset(6000) 
        })
   }

    signout = () => {
        userServices.logout()
        .then(() => {
            this.props.history.push('/login');
            this.context.signOut()            
            return null;
        })
    }

    render() {
        return (
        <Fragment>
            <Header signOut={this.signOut} />

            <Switch>
                <Route exact path="/">
                    {this.context.signedIn ? <Home/> : <Redirect to="/register"/> }     
                </Route> 
                
                
                <Route path="/create">
                    {this.context.signedIn ? <CreateForm/> : <Redirect to="/register"/> }     
                </Route> 
                <Route path="/edit">
                    {this.context.signedIn ? <EditForm/> : <Redirect to="/register"/> }     
                </Route> 
                <Route path="/edit/:id" component={EditForm} /> 
                
                <Route path="/all" component={AllStories} /> 
                <Route path="/my" component={MyStories} /> 
                <Route path="/category/:id" component={StoryCategory} />
                <Route path="/details/:id" component={StoryDetails} />
               
                <Route path="/register">
                    {!this.context.signedIn ? <Register/> : <Redirect to="/"/> }     
                </Route> 
                <Route path="/login"> 
                    {!this.context.signIn ? <Login login={this.login} /> : <Redirect to="/"/> } 
                </Route> 
                
            </Switch>
            
            <Footer/>  
                      
        
      
        </Fragment>
        )
    }
}

export default withRouter(App);
