import React from 'react';
import ReactDOM from 'react-dom';

//style
import CssBaseline from '@material-ui/core/CssBaseline'
//style::
import './style/style.scss';

//main component
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CssBaseline><App/></CssBaseline>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//hrs4.25 - wip
//hrs1 - wire
serviceWorker.unregister();
