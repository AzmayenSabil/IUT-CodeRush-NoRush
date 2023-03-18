
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'rsuite';
import logo from "../../assets/cvfusion-logo.png"

import './styles.css';


function Navigation() {
  return (
    <div>
      {/* <img src={logo} width={100} height={75} /> */}
      <Navbar className='navbar'>
        <Navbar.Brand><Link to='/'>CVFusion</Link></Navbar.Brand>    
        <Nav pullRight>
          <Nav.Item><Link to='/login'>Sign in</Link></Nav.Item>
          <Nav.Item><Link to='/register'>Sign up</Link></Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Templates</Nav.Item>
          <Nav.Item>Examples</Nav.Item>
          <Nav.Item>Guidelines</Nav.Item>
        </Nav>   
      </Navbar>
    </div>
    
  );
}

export default Navigation;
