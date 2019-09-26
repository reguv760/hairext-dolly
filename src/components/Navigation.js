import React from 'react';
//import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import AppBar from '@material-ui/core/AppBar';

import dollyLogo from "./../img/dollyLogo.svg";

class Navigation extends React.Component
{
    render()
    {
        return(
            <AppBar
                className="navbar"
                position="fixed" 
                style={{
                    background: "linear-gradient(90deg, rgba(228, 80, 149, 1) 0%, rgba(0, 0, 0, 1) 70%",
                    height:'5rem', 
                    margin: '0', 
                    padding:"0", 
                    display: "flex", 
                    flexFlow: "row nowrap",
                    justifyContent: "center",
                    alignItems:"center"
                }}>

                <div className="col logo">
                    <a href="/">
                        <img className="logo" src={dollyLogo} alt="Hair Extensions by Dolly logo" />
                    </a>
                </div>
                <nav className="col">
                    
                    <MobileMenu />
                    <ul className="wide-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                                
                    </ul>
                </nav>
            </AppBar>
        )
    }
}

export default Navigation;