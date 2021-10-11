import { useContext, useState, useEffect } from "react";
import Image from '../img/login-img.jpg'
import { Link } from "react-router-dom";

import AlertaContext from "../context/alertas/alertaContext";
import AuthContext from "../context/autenticacion/authContext";




const NuevaCuenta = (props) => {

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje,autenticado,registrarUsuario} = authContext;

    // en caso de que el usuario se haya autenticado . registrado o sea un registro duplicado
    useEffect(()=>{
        if(autenticado) {
            props.history.push('/crud')
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    },[mensaje,autenticado, props.history])

    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:'',
    })

    //destructuring
    const {email,password, nombre,confirmar} = usuario;
    
    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
         e.preventDefault();

         //Validación
         if(nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' ||
            confirmar.trim() === '' ){

                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
                return;
            }

        // password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // revisar el password de confirmacion
        if(password !== confirmar){
            mostrarAlerta('Los password deben ser iguales', 'alerta-error');
            return;
        }


         //Pasarlo al action
         registrarUsuario({
             nombre,
             email,
             password
         });
         
    }

    


    return ( 
        <div className="container">
            
            <div className="container-image-login">
            
            <img className="login-image" src ={Image} alt="library"/>
            </div>
            <form onSubmit={onSubmit} method="post" className="form">

                <h1 className="title-login">Sign Up</h1>

                <div className="form__field">
                    <label>Nombre</label>
                  <input
                    type="text "
                    placeholder="info@mailaddress.com"
                    name='nombre'
                    value= {nombre}
                    onChange ={onChange}
                 />
                </div>

                <div className="form__field">
                    <label>Email</label>
                  <input
                    type="email"
                    placeholder="info@mailaddress.com"
                    name='email'
                    value= {email}
                    onChange ={onChange}
                 />
                </div>

                <div className="form__field">
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••••••"
                    name='password'
                    value= {password}
                    onChange ={onChange}
                />
                </div>
                <div className="form__field">
                <label>Repetir Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••••••"
                    name='confirmar'
                    value= {confirmar}
                    onChange ={onChange}
                />
                </div>

                <div className="form__field">
                <button className="btn-login" type="submit" value="Sign Up">SignUp</button>
                </div>
                <p>Already have an accout?<Link to ='/'>Login</Link></p>
                { alerta ? (<div className = {`alerta ${alerta.categoria}`}>{alerta.msg}</div>)  : null}
               
                </form>

                

        </div>
     );
}
 
export default NuevaCuenta;