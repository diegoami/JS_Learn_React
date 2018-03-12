import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './Button2';
import { data, CardList} from './CardList'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CardList cards={data} />, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
