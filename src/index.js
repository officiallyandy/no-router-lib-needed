import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.addEventListener('hashchange', function() {
    ReactDOM.render(<App />, document.getElementById('root'))

    console.log('re-rendered?')
});