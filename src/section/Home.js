import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Container from '@material-ui/core/Container';


const HomeSection = () =>
{
    return (
        
        <ScrollableAnchor id={'home'}>
            <section>
                <Container className="section-container">
                    <div className="section-container__text">
                        <h1>Home</h1>

                        <h2>HairDreams</h2>

                        <p>Styling hair out of my salon located in Buena Park, CA. I offer a new and different type of hair extension directly from Europe. Hairdreams Hair Extensions are the diamond among all other hair extensions. Stylish and safe, let me make your dreams of long, full beautiful hair come true in a matter of hours.</p>                                
                        
                        <br/>
                        
                        <h2>Locations:</h2>
                        <div className="home-locations">
                            <div className="col">
                                <p className="location">
                                    <span className="bold-text">Tommies Hair Stylist</span><br/>
                                    8951 Knott Ave., #I<br/>
                                    Buena Park, CA 90620<br/>
                                </p>
                            </div>
                            <div className="col">
                                <p className="location"> 
                                    <span className="bold-text">Always Hair</span><br/>
                                    27001 La Paz Rd Suite 192<br/>
                                    Mission Viejo, CA 92691<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default HomeSection;