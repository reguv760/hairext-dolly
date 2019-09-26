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
                        <p>I now have 3 options for the person with fine thinning hair. A microline stays in for up to 4 weeks and can be worn while swimming, sweating or showering.</p>                        

                        <p>I also offer a <span className="italic-text">highline</span> or <span className="italic-text">top-hair </span>to take care of any hairloss issues. A top-up is done after 4 weeks to tighten up your hairpiece. You can combine a microline with extensions to make your hair beautiful, thick and luxurious for the ultimate combination!</p>

                        <p>I also offer <span className="italic-text">Quickies</span>, our new tape-in extensions that stay in for 6-8 weeks. They are the same beautiful hair but a little more affordable for the person who would like a non permanent extension.</p>

                        <h2>FAQ</h2>    
                        <h3>What color options do I have?  </h3>  
                        <p>The possibilities are endless. You can even have glow in the dark strands, pearls and crystal strands featuring swarvoski crystals.</p>

                        <h3>How long does it take? </h3>   
                        <p>On average, it takes about <span className="italic-text">3 hours</span> to get it done. Time varies depending on the length of hair, etc.</p>

                        <h3>Will it damage my current hair?</h3>    
                        <p>No, I don't use glue, chemicals or any of the older methods. With Hairdreams hair extensions, there will be no damage in the application or removal of the hair extensions. Even with the hair extensions, with proper care, your natural hair will continue to grow free of damage.
                        </p>
                        <h3>How much does it cost?</h3> 
                        <p>The price depends on what length you are looking for and what style and/or thicker or fullness you are going for.</p>

                        <h3>How long does it last?</h3>
                        <p>My hair extensions stay in for up to 8 months and the hair extensions are reusable.</p>

                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default ServicesSection;