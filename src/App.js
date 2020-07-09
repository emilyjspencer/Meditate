import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Welcome from './meditationApp/Welcome/Welcome';
import WhyMeditation from './meditationApp/WhyMeditation/WhyMeditation';
import Meditate from './meditationApp/Meditate/Meditate';


const App = () => {
  return (
    <Fragment>
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/whymeditation" exact>
            <WhyMeditation />
          </Route>
          <Route path="/meditate" exact>
            <Meditate />
          </Route>
          <Redirect to="/">

          </Redirect>
        </Switch>
      </main>
    </Router>
    </Fragment>
  );
}

export default App;
