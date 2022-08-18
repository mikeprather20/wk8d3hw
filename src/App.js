import React, { Component } from 'react'
import Feed from './Feed'
import Signup from './Signup'
import Login from './Login'
import ToDoList from './ToDoList'
import Home from './Home'
import Nav from './Nav'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {


  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }




  render() {
    return (

      <BrowserRouter>

        <div className='main'>

          <Nav />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ToDoList' element={<ToDoList />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Login' element={<Login logMeIn={this.logMeIn} />} />
            <Route path='/Feed' element={<Feed />} />
          </Routes>

        </div>

      </BrowserRouter>

    )
  }
}
