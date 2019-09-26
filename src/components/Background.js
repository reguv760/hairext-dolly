import React from 'react';

//images

import Model1 from './../img/Home-model1.jpg';
import Model2 from './../img/Home-model2.jpg';
import Model3 from './../img/Home-model3.jpg';

const RandomModelIMG = [Model1, Model2, Model3];
let RandomNum;

class Background extends React.Component
{
    state = {
        currentImage: ''
    };

    componentDidMount() {
        RandomNum = Math.floor(Math.random() * RandomModelIMG.length);
        this.setState({ currentImage: RandomModelIMG[RandomNum]}); 
    }

    render()
    {
        return(
            <div id="image-background" style={{background:"linear-gradient(90deg, rgba(228,80,149,1) 0%, rgba(0,0,0,1) 70%)"}}>
                <div className="col image" >
                    <img src={this.state.currentImage} alt="Hair Extensions by Dolly: Model" />
                </div>
                <div className="col right" >
                </div>
            </div>
        )
    }
}

export default Background;