import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutSection = () =>
{
    return (
        <ScrollableAnchor id={'About'}>
            <section>
                <Container>

                    <h1>About section</h1>
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default AboutSection;