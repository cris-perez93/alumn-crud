import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import NuevaCuenta from './components/NuevaCuenta';
import Crud from './components/Crud';

import AlumnosState from './context/alumnos/alumnosState'

function App() {
  return (
    <AlumnosState>
      <Router>
      <Switch>
        <Route exact path ="/" component={Login} />
        <Route exact path = "/nueva-cuenta" component = {NuevaCuenta} />
        <Route exact path = "/crud" component = {Crud} />
      </Switch>
    </Router>
  </AlumnosState>
  );
}

export default App;
