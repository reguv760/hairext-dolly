import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

import DollySalon from './../img/dolly-salon.jpg';
import DollySelfie from './../img/dolly-selfie.jpg';


import CBDPackages from './../img/cbd-packages.jpg';

const AboutSection = () =>
{
    return (
        <ScrollableAnchor id={'about'}>
            <section>
            <Container className="section-container">
                    <div className="section-container__text">
                        <h1>About</h1>

                        <div className="about-me">
                            <div className="col">
                                <img src={DollySalon} alt="Salon" />
                            </div>
                            <div className="col">
                               
                                <img src={DollySelfie} alt="Dolly Hoffman selfie" />
                            </div>
                        </div>

                        <p>I have been in the hair styling business for over <span className="bold-text">20 years</span> and have been using <span className="bold-text"><a href="https://www.hairdreams.com/en-us/" target="_blank" rel="noopener noreferrer">Hairdreams</a></span> for over <span className="bold-text">10 years.</span> Over the years, I have been trained and educated in several different areas of hair extensions. After attending several conferences and trade shows, I have found the highest quality hair extensions on the market to be <span className="bold-text"><a href="https://www.hairdreams.com/en-us/" target="_blank" rel="noopener noreferrer">Hairdreams</a>.</span> I strive to meet the needs of my clients and continue to attend trade shows and conferences so that I can continue to give my clients what they deserve: <span className="italic-text">only the best.</span></p>

                        <p>I believe hair extensions are a true art. Imagine having the hair of your dreams that will not tangle, matt or turn into dreads. I will educate you on home care and coming in for tidy cuts. I will show you the difference in 5-star and 7-star hair. <span className="bold-text"><a href="https://www.hairdreams.com/en-us/" target="_blank" rel="noopener noreferrer">Hairdreams</a></span> is the only hair extension that offers the best European hair.</p>

                        <p>Trust me, the possibilities are <span className="italic-text">endless!</span>
                        <br/> Whether you want to add length, volume, color or just upgrade a hairstyle, I can make your dream hair come true!</p>

                        
                        <p>I also serve two locations: Buena Park, CA and Mission Viejo, CA.</p>
                       

                        <div className="about-cbd">
                            <div className="col">
                                <img src={CBDPackages} alt="CBD products" />
                                <p>I now offer CBD creams and serums that are made with <span className="italic-text">all natural ingredients.</span> They are manufactured by <span className="italic-text">Earthly Body</span>, a trusted manufacturer with quality ingredients since 1996. They are 100% vegan! If you’re living with aches and pains, you will <span className="italic-text">love</span> these products! </p>

                                <p>Also there is <span className="italic-text">no THC</span> in the products!</p>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default AboutSection;