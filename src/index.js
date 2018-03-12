import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './Button2';
//import { data, CardList} from './CardList'
import AppCardList from './AppCardList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppCardList />, document.getElementById('root'));
registerServiceWorker();
