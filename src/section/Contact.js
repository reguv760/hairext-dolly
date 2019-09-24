import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor'

const ContactSection = () =>
{
    return (
        <ScrollableAnchor id={'Contact'}>
            <section>
            <Container className="section-container">
                    <div className="section-container__text">
                        <h1>Contact section</h1>
                        <p>Occaecat mollit adipisicing ea eu fugiat nulla veniam voluptate nisi velit voluptate. Reprehenderit aliquip est consectetur eiusmod ut id. Dolore eu id ut esse irure laboris velit ex fugiat occaecat Lorem sunt esse. Ut exercitation laboris mollit cupidatat ea aliquip. Sunt anim consequat ullamco reprehenderit eu aliqua laborum nulla adipisicing velit aliqua nostrud aliqua.</p>

                        <p>Anim pariatur duis adipisicing ea labore eu et aute consequat dolore laboris mollit consequat. Duis veniam mollit est irure exercitation proident ipsum sint sit nisi laborum mollit officia. Irure adipisicing nostrud dolore fugiat. Ullamco sunt ex ipsum quis incididunt nulla Lorem esse mollit fugiat velit culpa aliquip. Cupidatat sit in laborum est aliqua pariatur cillum commodo ex aute. Amet incididunt voluptate duis Lorem Lorem consectetur mollit cupidatat eu consectetur dolore excepteur adipisicing non. Ad consequat pariatur ad ipsum minim.</p>
                    </div>
                    
                </Container>
            </section>
        </ScrollableAnchor>
    )
}

export default ContactSection;