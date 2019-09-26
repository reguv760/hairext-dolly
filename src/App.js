import React from 'react';
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { configureAnchors } from 'react-scrollable-anchor'
import ReactGA from 'react-ga';


//components:::
import Navigation from './components/Navigation';
import HomeSection from './section/Home';
import ServicesSection from './section/Services';
import AboutSection from './section/About';
import GallerySection from './section/Gallery';
import ContactSection from './section/Contact';

import FooterSection from './components/Footer';
import Background from './components/Background';

configureAnchors({ offset: -100, scrollDuration: 750})
ReactGA.initialize('UA-6371690-3');

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
            <Container style={{ backgroundColor: "#fcfcfc" }}>                
                <MainContainer id="main-container">

                    <Navigation/>      

                    <HomeSection />
                    <ServicesSection />
                    <AboutSection />   
                    <GallerySection />               
                    <ContactSection /> 

                    <FooterSection />
                </MainContainer>

                <Background />
            </Container>
        )
    }
}

export default App;