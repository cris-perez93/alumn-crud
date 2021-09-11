import { useReducer } from "react";
import alumnosContext from "./alumnosContext";
import alumnosReducer from "./alumnosReducer";
import { ALUMNO_ACTUAL } from "../../types";



const AlumnosState = props =>{
    const initialState = {
             alumno: null
    }

    //dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(alumnosReducer, initialState)

    // Serie de funciones para el crud de proyectos

    // Seleccion el alumno que el usuario le dio click
    const alumnoActual = alumno =>{
        dispatch({
            type: ALUMNO_ACTUAL,
            payload: alumno
        })
    }

    return (
        <alumnosContext.Provider
           value ={{
                alumno: state.alumno,
                alumnoActual
           }}
        >
            {props.children}
        </alumnosContext.Provider>
    )
}

export default AlumnosState;