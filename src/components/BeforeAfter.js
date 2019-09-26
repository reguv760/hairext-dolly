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
                after: JeanetteAfter
            },
            {
                
                before: NinaBefore,
                after: NinaAfter
            },
            {
                
                before: VanessaBefore,
                after: VanessaAfter
            },
            {
                before: BlondeBefore,
                after: BlondeAfter
            },
            {
                
                before: BrunetteBefore,
                after: BrunetteAfter
            },
            {
                
                before: RedHairBefore,
                after: RedHairAfter
            },
        ]
    }

    render()
    {
        const ImageList = this.state.BeforeImageArray.map((image, i) =>
        {
            return (
                <li key={"Before After Image" + i}><BeforeAfterImage before={image.before} after={image.after} />  </li>
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