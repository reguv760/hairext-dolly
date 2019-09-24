import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Container from '@material-ui/core/Container';


const HomeSection = () =>
{
    return (
        
        <ScrollableAnchor id={'Home'}>
            <section>
                <Container className="section-container">
                    <div className="section-container__text">
                        <h1>Home section</h1>
                        <p>Excepteur enim et magna reprehenderit. Qui exercitation fugiat consectetur officia qui culpa dolor non laborum tempor mollit. Proident magna minim dolor amet. Lorem veniam consectetur elit incididunt fugiat aliqua aute ex dolore dolore nulla culpa. Irure voluptate aute et commodo anim officia enim ad fugiat irure nostrud tempor do dolor. Minim ex qui enim voluptate Lorem nulla occaecat do.</p>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default HomeSection;