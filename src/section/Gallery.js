import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

import BeforeAfter from './../components/BeforeAfter';

const GallerySection = () =>
{
    return (
        <ScrollableAnchor id={'Gallery'}>
            <section>
            <Container className="section-container" >
                    <div className="section-container__text">
                        <h1>Gallery section</h1>
                        <p>Excepteur enim et magna reprehenderit. Qui exercitation fugiat consectetur officia qui culpa dolor non laborum tempor mollit. Proident magna minim dolor amet. Lorem veniam consectetur elit incididunt fugiat aliqua aute ex dolore dolore nulla culpa. Irure voluptate aute et commodo anim officia enim ad fugiat irure nostrud tempor do dolor. Minim ex qui enim voluptate Lorem nulla occaecat do.</p>

                        {/* < BeforeAfter /> */}
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default GallerySection;