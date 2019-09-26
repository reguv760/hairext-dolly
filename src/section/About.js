import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutSection = () =>
{
    return (
        <ScrollableAnchor id={'about'}>
            <section>
            <Container className="section-container">
                    <div className="section-container__text">
                        <h1>About</h1>

                        <p>Laborum nisi cupidatat duis eu aliquip esse ad dolore amet laboris fugiat excepteur eiusmod. Nulla do enim amet tempor cupidatat sint labore excepteur cupidatat voluptate enim elit laborum ex. Fugiat incididunt consectetur ut sunt labore. Ut nostrud eu deserunt do sit dolor duis officia commodo ipsum amet consequat et adipisicing. Velit labore elit ipsum in officia cupidatat laboris ex anim. Tempor non occaecat et labore ullamco dolore non commodo duis adipisicing in anim. Anim sunt irure reprehenderit nisi id non mollit et amet et.

Ut pariatur id enim id non. Officia adipisicing elit do aute aliqua. Sunt sit duis ex laboris tempor laboris tempor enim. Reprehenderit ipsum mollit ullamco reprehenderit et veniam fugiat nulla reprehenderit aliqua sint. Amet excepteur aute ea eiusmod aliqua quis Lorem sunt.</p>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default AboutSection;