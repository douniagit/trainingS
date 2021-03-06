import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Diet from './Diet/Diet.jsx';
import Programme from './Programme/Programme.jsx';
import NotFound from './NotFound/NotFound.jsx';
import Inscription from './Inscription/Inscription.jsx';
import Connexion from './Connexion/Connexion.jsx';
import Activite from './Activite/Activite.jsx';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/diet" component={Diet} />
    <Route path="/programme" component={Programme} />
    <Route path="/activites" component={Activite} />
	<Route path="/inscription" component={Inscription} />
    <Route path="/connexion" component={Connexion} />
    <Route path="*" component={NotFound} />
  </Router>
);


export default Routes;
