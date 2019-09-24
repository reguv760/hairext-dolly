import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

const ContactSection = () =>
{
    return (
        <ScrollableAnchor id={'Contact'}>
            <section>
                <Container>
                    <h1>Contact section</h1>
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default ContactSection;