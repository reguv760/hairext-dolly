import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Container from '@material-ui/core/Container';


const HomeSection = () =>
{
    return (
        
        <ScrollableAnchor id={'Home'}>
            <section>
                <Container>

                    <h1>Home section</h1>
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default HomeSection;