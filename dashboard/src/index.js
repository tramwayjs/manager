import ReactDOM from 'react-dom';
import App from './App';
import * as parameters from './config/parameters';
import services from './config/services';
import registerServiceWorker from './registerServiceWorker';

const app = App.initialize('dashboard', services, parameters);
const router = app.getDependencyResolver().getService('router').initialize();

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();