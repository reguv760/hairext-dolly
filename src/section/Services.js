import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

const ServicesSection = () =>
{
    return (
        <ScrollableAnchor id={'services'}>
            <section>
            <Container className="section-container">
                    <div className="section-container__text">
                        <h1>Services</h1>
                        <p>Excepteur enim et magna reprehenderit. Qui exercitation fugiat consectetur officia qui culpa dolor non laborum tempor mollit. Proident magna minim dolor amet. Lorem veniam consectetur elit incididunt fugiat aliqua aute ex dolore dolore nulla culpa. Irure voluptate aute et commodo anim officia enim ad fugiat irure nostrud tempor do dolor. Minim ex qui enim voluptate Lorem nulla occaecat do.</p>

                        <p>Occaecat mollit adipisicing ea eu fugiat nulla veniam voluptate nisi velit voluptate. Reprehenderit aliquip est consectetur eiusmod ut id. Dolore eu id ut esse irure laboris velit ex fugiat occaecat Lorem sunt esse. Ut exercitation laboris mollit cupidatat ea aliquip. Sunt anim consequat ullamco reprehenderit eu aliqua laborum nulla adipisicing velit aliqua nostrud aliqua.</p>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default ServicesSection;