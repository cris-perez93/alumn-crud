import { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import clienteAxios from "../../config/axios";


import { REGISTRO_EXITOSO,REGISTRO_ERROR,OBTENER_USUARIO,LOGIN_ERROR,LOGIN_EXITOSO,CERRAR_SESION } from "../../types";


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch ] = useReducer(AuthReducer, initialState);

    // funciones
    const registrarUsuario = async datos => {
        try {

            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
            
        } catch (error) {
           // console.log(error.response.data.msg);
           const alerta = {
               msg: error.response.data.msg,
               categoria: 'alerta-error'
           }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
            
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if(token) {
            //TODO: funcion para enviar el token por headers
        }

        try {

            const respuesta = await clienteAxios.get('/api/auth')
            
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            })
            
        }
    }



    return (
        <AuthContext.Provider
            value = {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario


            }}
        >
           {props.children}
        </AuthContext.Provider>

    )

}
export default AuthState;