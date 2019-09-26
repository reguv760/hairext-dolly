import React from 'react';

class BeforeAfterImage extends React.Component
{
    state = {
        afterImageLoaded: false
    }

    toggleImage = () =>
    {
        this.setState(state => ({ afterImageLoaded: !state.afterImageLoaded }))
    }

    getImageName = () => this.state.afterImageLoaded ? 'afterImage' : 'beforeImage'

    render()
    {      
        const imagesPath = {
            beforeImage: this.props.before,
            afterImage: this.props.after
        }
        
        const imageName = this.getImageName();

        return(
            <div className="beforeAfter-image">
                <img src={imagesPath[imageName]} onClick={this.toggleImage}  alt={this.props.text} />
                
            </div>
        )
    }
}

export default BeforeAfterImage;