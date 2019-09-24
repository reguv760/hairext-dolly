import React from 'react';
//import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import AppBar from '@material-ui/core/AppBar';


class Navigation extends React.Component
{
    render()
    {
        return(
            <AppBar 
                position="fixed" 
                style={{
                    backgroundColor: '#e45095', 
                    height:'5rem', 
                    margin: '0', 
                    padding:"0", 
                    display: "flex", 
                    flexFlow: "row nowrap",
                    justifyContent: "center",
                    alignItems:"center"
                }}>

                <div className="col logo">
                    Logo                   
                </div>
                <div className="col">
                    <MobileMenu />
                    <ul className="wide-menu">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Gallery">Gallery</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </AppBar>
        )
    }
}

export default Navigation;