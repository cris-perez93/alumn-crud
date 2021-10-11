import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Crud from './components/Crud';
import AlumnosState from './context/alumnos/alumnosState'
import { useState } from 'react';



function App() {

  const [usuario, guardarUsuario] = useState({
    nombre:''
 })

   

  return (
    
    <AlumnosState>
      
        <Router>
          <Switch>
            <Route exact path ="/alumn-crud"
             render= {props => (
               <Login {...props} usuario= {usuario} guardarUsuario = {guardarUsuario}/>
             )}/>
            <Route exact path = "/alumn-crud/crud" render = {props => (
              <Crud {...props} usuario= {usuario} guardarUsuario = {guardarUsuario}/>
            )}/>
          </Switch>
       </Router>
       
    
  </AlumnosState>
  );
}

export default App;
