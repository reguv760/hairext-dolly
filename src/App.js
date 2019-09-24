import React from 'react';
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { configureAnchors } from 'react-scrollable-anchor'



//components:::
import Navigation from './components/Navigation';
import HomeSection from './section/Home';
import AboutSection from './section/About';
import ContactSection from './section/Contact';

import FooterSection from './components/Footer';
import Background from './components/Background';

configureAnchors({ offset: -100, scrollDuration: 750})

const MainContainer = styled.div`  
    top: 4.5rem;
    padding: 0;
    width: 80vw;
    margin:0 auto;
    z-index: 1000;
    display: flex;
    flex-flow: column nowrap;
`
class App extends React.Component 
{
    render()
    {
        return (
            <Container style={{backgroundColor: "#335533"}}>                
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