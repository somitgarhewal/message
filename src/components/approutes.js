import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/index'
import User from './Pages/User/index'
import AddNewUser from './Pages/AddNewUser';
import ChatWindow from './Pages/Home/chatWindow';

const AppRoutes = () => { 
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/user/:_id" component={User} />
      <Route path="/userForm/:_id" component={AddNewUser} />
      <Route path="/chatWindow/:_id" component={ChatWindow} />
    </Switch>
  )
}

export default AppRoutes
