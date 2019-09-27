import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import styled from "styled-components"

const LinkStyle = styled.a`
    text-decoration:none;
    text-transform: uppercase;
    color: #e45095;
    letter-spacing: 0.1em;
    font-weight:bold;
    margin: 1rem;
`

class MobileMenu extends React.Component
{
    state = 
    {
        anchorEl: null,
    }

    handleClick = (e) => {
        this.setState({anchorEl:e.currentTarget });
    };

    handleClose = (e) => {        
        this.setState({anchorEl:null });
    };

    render()
    {
        //extract and destructure anchorEl variable:::
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div className="mobileMenu" style={{justifyContent:"flex-end"}}>
                <Button aria-label="Mobile Menu" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} >
                    <MenuIcon fontSize="large" htmlColor="#fff" titleAccess="Menu"/>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}><LinkStyle href="#home">Home</LinkStyle></MenuItem>
                    <MenuItem onClick={this.handleClose}><LinkStyle href="#services">Services</LinkStyle></MenuItem>
                    <MenuItem onClick={this.handleClose}><LinkStyle href="#about">About</LinkStyle></MenuItem>
                    <MenuItem onClick={this.handleClose}><LinkStyle href="#gallery">Gallery</LinkStyle></MenuItem>
                    <MenuItem onClick={this.handleClose}><LinkStyle href="#contact">Contact</LinkStyle></MenuItem>
                </Menu>
            </div>
        )
    }
}

export default MobileMenu;