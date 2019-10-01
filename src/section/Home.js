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

                        <p>Styling hair out of my salon located in Buena Park, CA., I offer a new and different type of hair extension directly from Europe: <a href="https://www.hairdreams.com/en-us/" target="_blank" rel="noopener noreferrer">Hairdreams Hair Extensions</a>. They are the diamond among all other hair extensions. Stylish and safe, let me make your dreams of long, full beautiful hair come true in a matter of <span className="italic-text">hours!</span></p>                                
                        
                        <br/>

                        <div className="home-locations">
                            <div className="col">
                                <p>To setup an appointment, please <span className="bold-text">visit</span> or <span className="bold-text">call:</span></p>                          
                                <p className="location">
                                    <address style={{fontStyle: "normal"}}>
                                        <span className="bold-text">Tommie's Hair Stylist</span><br/>
                                        8951 Knott Ave., #I<br/>
                                        Buena Park, CA 90620<br/>     
                                    </address>                               
                                </p>
                                <h1 className="phoneNumber">
                                    <a href="tel:714 235 3002">
                                    714 235 3002</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default HomeSection;