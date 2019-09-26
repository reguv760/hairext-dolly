import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

import BeforeAfter from './../components/BeforeAfter';

const GallerySection = () =>
{
    return (
        <ScrollableAnchor id={'gallery'}>
            <section>
            <Container className="section-container" >
                    <div className="section-container__text">
                        <h1>Gallery</h1>
                        <p>Click on the samples below to see what I can do for you.</p>

                        < BeforeAfter />
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default GallerySection;