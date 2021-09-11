import Image from '../img/login-img.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
      
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    })

    //destructuring
    const {email,password} = usuario;
    
    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
         e.preventDefault();

         //Validación

         //Pasarlo al action
    }



    return (
        <div className="container">
            <div className="container-image-login">
            
            <img className="login-image" src ={Image} alt="library"/>
            </div>
            <form onSubmit={onSubmit} method="post" className="form">

                <h1 className="title-login">Login</h1>

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
                <button className="btn-login" type="submit" value="Login">Login</button>
                </div>
                <p>Not have an accout?<Link to ='/nueva-cuenta'>Sign Up</Link></p>

                </form>

                

        </div>
      );
}
 
export default Login;