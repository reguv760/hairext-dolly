import React from 'react';

/* component */
import BeforeAfterImage from './BeforeAfterImage';

/* images */
import JeanetteBefore from './../img/beforeAfter/JeanetteBefore.jpg';
import JeanetteAfter from './../img/beforeAfter/JeanetteAfter.jpg';
import NinaBefore from './../img/beforeAfter/NinaBefore.jpg';
import NinaAfter from './../img/beforeAfter/NinaAfter.jpg';
import VanessaBefore from './../img/beforeAfter/VanessaBefore.jpg';
import VanessaAfter from './../img/beforeAfter/VanessaAfter.jpg';


import BlondeBefore from './../img/beforeAfter/BlondeBefore.jpg';
import BlondeAfter from './../img/beforeAfter/BlondeAfter.jpg';
import BrunetteBefore from './../img/beforeAfter/BrunetteBefore.jpg';
import BrunetteAfter from './../img/beforeAfter/BrunetteAfter.jpg';
import RedHairBefore from './../img/beforeAfter/RedHairBefore.jpg';
import RedHairAfter from './../img/beforeAfter/RedHairAfter.jpg';

class BeforeAfter extends React.Component 
{
    state = {
        BeforeImageArray: [
            {
                before: JeanetteBefore,
                after: JeanetteAfter,
                text: "Jeanette"
            },
            {
                
                before: NinaBefore,
                after: NinaAfter,                
                text: "Nina"
            },
            {
                
                before: VanessaBefore,
                after: VanessaAfter,                
                text: "Vanessa"
            },
            {
                before: BlondeBefore,
                after: BlondeAfter,
                text: "Blonde extensions"
            },
            {
                
                before: BrunetteBefore,
                after: BrunetteAfter,
                text: "Brunete extensions"
            },
            {
                
                before: RedHairBefore,
                after: RedHairAfter,
                text: "Red hair extensions"
            },
        ]
    }

    render()
    {
        const ImageList = this.state.BeforeImageArray.map((image, i) =>
        {
            return (
                <li key={"Before After Image" + i}><BeforeAfterImage before={image.before} after={image.after} text={image.text} />  </li>
            )
        })

        return(
            <div className="beforeAfter">
                <ul className="beforeAfter-container">
                    { ImageList }
                </ul>
            </div>
        )
    }
}

export default BeforeAfter;