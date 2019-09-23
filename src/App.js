import React from 'react';
import styled from 'styled-components'
//import Container from '@material-ui/core/Container';

//style::
import './style/style.scss';

//components:::
import Navigation from './components/Navigation';
import AboutSection from './section/About';

const MainContainer = styled.div`    
    position: relative;
    top: 3rem;
    padding: 0;
    background-color:#666;
    width: 75vw;
    height: calc(100vh - 5rem);
    margin:0 auto;
`
class App extends React.Component 
{
    render()
    {
        return (
            <MainContainer id="main-container">
                <Navigation/>
                <div>                    
                    <h1>hello world!</h1>                    
                    <AboutSection />                   
                    <AboutSection />                   
                    <AboutSection />                   
                    <AboutSection />                   
                    <AboutSection />
                </div>
            </MainContainer>
        )
    }
}

export default App;