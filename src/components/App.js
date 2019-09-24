import React from 'react';
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { configureAnchors } from 'react-scrollable-anchor'


//style::
import './../style/style.scss';

//components:::
import Navigation from './Navigation';
import HomeSection from './../section/Home';
import AboutSection from './../section/About';
import ContactSection from './../section/Contact';

import FooterSection from './Footer';
import Background from './Background';

configureAnchors({ offset: -100, scrollDuration: 750})

const MainContainer = styled.div`  
    top: 4.5rem;
    padding: 0;
    width: 80vw;
    margin:0 auto;
    z-index: 1000;
    backgroundColor:#cc3355;
`
class App extends React.Component 
{
    render()
    {
        return (
            <Container >                
                <MainContainer id="main-container">

                    <Navigation/>      

                    <HomeSection />
                    <AboutSection />                  
                    <ContactSection /> 

                    <FooterSection />
                </MainContainer>

                <Background />
            </Container>
        )
    }
}

export default App;