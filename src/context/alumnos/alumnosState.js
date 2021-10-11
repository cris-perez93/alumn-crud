import { useReducer,} from "react";
import { v4 as uuidv4 } from 'uuid';
import alumnosContext from "./alumnosContext";
import alumnosReducer from "./alumnosReducer";

import {MOSTRAR_FORMULARIO,OBTENER_ALUMNOS,AGREGAR_ALUMNOS,MOSTRAR_ERROR,ALUMNO_CLICK,ELIMINAR_ALUMNO,OBTENER_TEMA,AGREGAR_TEMA,ERROR_FORMULARIO,ELIMINAR_TEMA,ESTADO_TEMA,TEMA_ACTUAL,TEMA_ACTUALIZADO} from "../../types";












const AlumnosState = props =>{

    const alumnosLista = []

    
   
   

    const initialState = {
             alumnosLista : [],
             formulario: false,
             mostrarerror: false,
             alumno: null,
             temas:[],
             temasalumno:null,
             errorformulario:false,
             temaseleccionado: null,
            
    }

    //dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(alumnosReducer, initialState)

    // Serie de funciones para el crud de proyectos



    const mostrarFormulario = ()=>{
        dispatch({
            type: MOSTRAR_FORMULARIO
            
        })
    }

    // Obtener los alumnos
    const obtenerAlumnos = () =>{
        dispatch({
             type: OBTENER_ALUMNOS,
             payload: alumnosLista
        })
    }

    const agregarAlumnos = alumno =>{
        alumno.id = uuidv4()
        dispatch({
            type: AGREGAR_ALUMNOS,
            payload: alumno
        })
    }

    const mostrarError = () =>{
        dispatch({
            type: MOSTRAR_ERROR
        })
    }
    //seleccion el alumno 
    const alumnoClick = alumnoId => {
        dispatch({
            type:ALUMNO_CLICK,
            payload: alumnoId
        })

    }

    const eliminarAlumno = alumnoId =>{
        dispatch({
            type: ELIMINAR_ALUMNO,
            payload: alumnoId
        })
    }

    const obtenerTema = alumnoId =>{
        dispatch({
            type: OBTENER_TEMA,
            payload: alumnoId
        })
    }

    const agregarTema = tema =>{
        tema.id = uuidv4() 
        dispatch({
            
            type: AGREGAR_TEMA,
            payload: tema
        })
    }

    const errorFormulario = () =>{
        dispatch({
            type: ERROR_FORMULARIO

        })
    }

    const eliminarTema = id =>{
        dispatch({
            type: ELIMINAR_TEMA,
            payload: id
        })
    }

    const modificarEstado = tema =>{
        dispatch({
            type: ESTADO_TEMA,
            payload: tema
        })
    }

    // extrae un tema para editarlo
    const setTemaActual = tema =>{
        dispatch({
            type: TEMA_ACTUAL,
            payload: tema
        })
    }

    const actualizarTema = tema =>{
        dispatch({
            type: TEMA_ACTUALIZADO,
            payload:tema
        })
    }

    

    
  
    return (
        <alumnosContext.Provider
           value ={{
                alumnosLista: state.alumnosLista,
                formulario: state.formulario,
                mostrarerror: state.mostrarerror,
                alumno: state.alumno,
                temas: state.temas,
                temasalumno: state.temasalumno,
                errorformulario: state.errorformulario,
                temaseleccionado: state.temaseleccionado,
                
                mostrarFormulario,
                obtenerAlumnos,
                agregarAlumnos,
                mostrarError,
                alumnoClick,
                eliminarAlumno,
                obtenerTema,
                agregarTema,
                errorFormulario,
                eliminarTema,
                modificarEstado,
                setTemaActual,
                actualizarTema,
                
                
           }}
        >
            {props.children}
        </alumnosContext.Provider>
    )
}

export default AlumnosState;