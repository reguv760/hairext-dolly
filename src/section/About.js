import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.div`
    height: 60rem;
    margin: 2rem 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cc99aa;
`

const AboutSection = () =>
{
    return (
        <SectionStyle>
            <h1>About section</h1>
        </SectionStyle>
    )
}

export default AboutSection;