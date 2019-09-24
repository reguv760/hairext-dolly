import React from 'react';
import styled from 'styled-components'
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

configureAnchors({ offset: -100, scrollDuration: 500})

const MainContainer = styled.div`    
    position: relative;
    top: 3rem;
    padding: 0;
    width: 75vw;
    margin:0 auto;
    z-index: 1000;
`
class App extends React.Component 
{
    render()
    {
        return (
            <div>                
                <MainContainer>

                    <Navigation/>      

                    <HomeSection />
                    <AboutSection />                  
                    <ContactSection /> 

                    <FooterSection />
                </MainContainer>

                <Background />



            </div>
        )
    }
}

export default App;