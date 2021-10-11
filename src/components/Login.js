
import {useContext } from 'react';
import alumnosContext from "../context/alumnos/alumnosContext";
import { Link } from 'react-router-dom';





const Login = ({usuario, guardarUsuario}) => {


    const alumnoContext = useContext(alumnosContext);
    const {mostrarUsuario} = alumnoContext;
      
   
    const {nombre} = usuario;


    
    
    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
         e.preventDefault();

         //Validación
         if (nombre.trim() === '' ) {
             return;
         }

         //Pasarlo al action
         mostrarUsuario(usuario)
    }



    return (
        <div className="container">
            
            <form onSubmit={onSubmit} method="post" className="form">

                <h1 className="title-login">Login</h1>

                <div className="form__field">
                    <label>User</label>
                  <input
                    type="text"
                    name='nombre'
                    value= {nombre}
                    onChange ={onChange}
                 />
                </div>

             

                <div className="form__field">
                  
                    <Link
                      to = 'alumn-crud/crud'
                      
                          
                    ><button  className="btn-login" type="submit" value="Login">Login</button></Link>
                </div>
 

                </form>

                

        </div>
      );
}
 
export default Login;