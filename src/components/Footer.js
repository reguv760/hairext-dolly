import React from 'react';
//import Modal from '@material-ui/core/Modal';

import Privacy from './Privacy';

const currentYear = new Date();

class FooterSection extends React.Component
{
    render()
    {
        return(
            <footer>
                <p>&copy; { currentYear.getFullYear() } Hair Extensions by Dolly<br/>
                <Privacy />
                Site Designed by <a href="http://reguv760.github.io/portfolio" target="_blank" rel="noopener noreferrer">Reginald Galang</a> using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React JS</a>
                
                </p>
            </footer>
        )
    }
}

export default FooterSection;