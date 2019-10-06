import React from 'react';
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { configureAnchors } from 'react-scrollable-anchor'
import Helmet from 'react-helmet';

//section components:::
import Navigation from './components/Navigation';
import HomeSection from './section/Home';
import ServicesSection from './section/Services';
import AboutSection from './section/About';
import GallerySection from './section/Gallery';
import ContactSection from './section/Contact';

import FooterSection from './components/Footer';
import Background from './components/Background';

const MainContainer = styled.div`  
    font-family: 'Open Sans', Arial, sans-serif;
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
    componentDidMount()
    {
        configureAnchors({ offset: -100, scrollDuration: 750});        
    }

    render()
    {
        return (
            <Container style={{ backgroundColor: "#fff" }}>
                <Helmet>
                    <meta name="Keywords" content="Hair Extensions, thickening, lengthening, microline, dream hair, Quickies, human hair, nylon bond or bonded, Buena Park, Hair Dreams, Southern California, Orange County, Los Angeles, Anaheim, La Palma, Cerritos, Cypress, Long Beach, Salon, CBD" />

                    <meta name="Description" content="Styling hair out of my salon located in Buena Park, CA., I offer a new and different type of hair extension directly from Europe: Hairdreams Hair Extensions. They are the diamond among all other hair extensions." />

                    <meta name="Author" content="reguv760@gmail.com"></meta>

                    <link rel="preconnect" href="https://maps.gstatic.com" />
                    
                </Helmet>    

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