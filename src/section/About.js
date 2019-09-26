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

                        <p>I have been in the hair styling business for over 20 years and have been using Hairdreams for over 10 years. Over the years, I have been trained and educated in several different areas of hair extensions. After attending several conferences and trade shows, I have found the highest quality hair extensions on the market to be <span className="bold-text"><a href="http://Hairdreamsusa.com" target="_blank" rel="noopener noreferrer">Hairdreams</a>.</span> I strive to meet the needs of my clients and continue to attend trade shows and conferences so that I can continue to give my clients what they deserve: only the best.</p>

                        <p>I believe hair extensions are a true art. Imagine having the hair of your dreams that will not tangle, matt or turn into dreads. I will educate you on home care and coming in for tidy cuts. I will show you the difference in 5-star and 7-star hair. <span className="bold-text"><a href="http://Hairdreamsusa.com" target="_blank" rel="noopener noreferrer">Hairdreams</a></span> is the only hair extension that offers the best European hair.</p>

                        <p>Trust me, the possibilities are endless. Whether you want to add length, volume, color or just upgrade a hairstyle, I can make your dream hair come true!</p>

                        
                        <p>I also serve two locations: Buena Park, CA and Mission Viejo, CA.</p>

                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default AboutSection;