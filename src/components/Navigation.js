import React from 'react';
//import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

class Navigation extends React.Component
{
    render()
    {
        return(
            <AppBar 
                position="fixed" 
                style={{
                    backgroundColor: '#FF00FF', height:'3rem', 
                    margin: '0', 
                    padding:"0", 
                    display: "flex", justifyContent: "center"
                }}>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                </ul>
            </AppBar>
        )
    }
}

export default Navigation;