import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

const ContactSection = () =>
{
    return (
        <ScrollableAnchor id={'contact'}>
            <section>
            <Container className="section-container">
                    <div className="section-container__text">
                        <h1>Contact</h1>

                        <p>To setup an appointment, please <span className="bold-text">email</span> or <span className="bold-text">call:</span></p>      
                        <h1 className="email">
                            <a href="mailto:hcoolhouse56@yahoo.com?subject=Hair%20Extensions%20by%20Dolly%20Website">hcoolhouse56@yahoo.com</a>
                        </h1>

                        <h1 className="phoneNumber">
                            <a href="tel:714 235 3002">
                            714 235 3002</a>
                        </h1>
                        
                        <p>I'm available <span className="italic-text">Monday thru Friday, 9am – 5pm.</span> <br/>I can be available evenings and Saturdays upon special requests.</p>
                        <p>Mention this website and receive <span className="bold-text">10% off your first visit!</span></p>


                        <div className="map-locations">
                            <div className="col">
                                <h2>Buena Park location</h2>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.2204273347766!2d-118.01480488435615!3d33.83242563672852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd295155beab0d%3A0x7fdd045e56d9ce0!2s8951%20Knott%20Ave%2C%20Buena%20Park%2C%20CA%2090620!5e0!3m2!1sen!2sus!4v1569528251989!5m2!1sen!2sus"  frameBorder="0" allowFullScreen="" title="Buena Park location" className="google-mapLocation"/>   
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default ContactSection;