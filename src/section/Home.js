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

                        <p>I believe hair extensions are a true art. Imagine having the hair of your dreams that will not tangle, matt or turn into dreads. I will educate you on home care and coming in for tidy cuts. I will show you the difference in 5-star and 7-star hair. <b>Hairdreams</b> is the only hair  extension that offers the best European hair. Trust me. The possibilities are endless. Whether you want to add length, volume, color or just upgrade a hairstyle, I can make your dream hair come true!</p>

                        <p>I now have 3 options for the person with fine thinning hair. A microline stays in for up to 4 weeks and can be worn while swimming, sweating or showering.</p>

                        <p>I also offer a highline or top-hair to take care of any hairloss issues. A top-up is done after 4 weeks to tighten up your hairpiece. You can combine a microline with extensions to make your hair beautiful, thick and luxurious for the ultimate combination!</p>

                        <p>I also offer Quickies, our new tape-in extensions that stay in for 6-8 weeks. They are the same beautiful hair but a little more affordable for the person who would like a non permanent extension.</p>

                        <h2>Locations:</h2>
                        <div className="home-locations">
                            <div className="col">
                                <p>
                                    Tommies Hair Stylist<br/>
                                    8951 Knott Ave., #I<br/>
                                    Buena Park, CA 90620<br/>
                                </p>
                            </div>
                            <div className="col">
                                <p>
                                    Always Hair<br/>
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