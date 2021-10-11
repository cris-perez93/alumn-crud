import {MOSTRAR_FORMULARIO,OBTENER_ALUMNOS,AGREGAR_ALUMNOS,MOSTRAR_ERROR,ALUMNO_CLICK,ELIMINAR_ALUMNO,OBTENER_TEMA,AGREGAR_TEMA,ERROR_FORMULARIO,ELIMINAR_TEMA,ESTADO_TEMA, TEMA_ACTUAL,TEMA_ACTUALIZADO} from "../../types";


export default (state, action) => {
    switch(action.type){
        
        case MOSTRAR_FORMULARIO:
             return{
                 ...state,
                 formulario: true
                 
             }
        case OBTENER_ALUMNOS:
            return {
                ...state,
                alumnosLista: action.payload
            }

        case AGREGAR_ALUMNOS:
            return{
                ...state,
                alumnosLista: [...state.alumnosLista, action.payload],
                formulario:false,
                mostrarerror:false
            }

        case MOSTRAR_ERROR: 
        return{
            ...state,
            mostrarerror: true
        }

        case ALUMNO_CLICK:
            return{
                ...state,
                alumno: state.alumnosLista.filter(alumno => alumno.id === action.payload)
            }

        case ELIMINAR_ALUMNO:
            return{
                ...state,
                alumnosLista: state.alumnosLista.filter(alumno=> alumno.id !== action.payload),
                alumno:null
            }

        case OBTENER_TEMA:
            return{
                ...state,
                temasalumno: state.temas.filter(tema => tema.alumnoId === action.payload)

            }

        case AGREGAR_TEMA:
            return{
                ...state,
                temas: [...state.temas, action.payload],
                errorformulario:false
            }

        case ERROR_FORMULARIO:
            return{
                ...state,
                errorformulario:true
            }

        case ELIMINAR_TEMA:
            return{
                ...state,
                temas: state.temas.filter(tema => tema.id !== action.payload)
            }


        case TEMA_ACTUALIZADO:
        case ESTADO_TEMA:
            return {
                ...state,
                temas: state.temas.map(tarea=>tarea.id === action.payload.id ? action.payload   :tarea),
                temaseleccionado:null
                // si el id coincide con el 'click' se ejecuta la fn,
                //sino coincide, entonces se queda el estado como esta.
            }

        case TEMA_ACTUAL:
        return{
            ...state,
            temaseleccionado : action.payload
        }

       

       default:
             return state;
    }
}
 