import { useContext } from "react";
import alumnosContext from "../context/alumnos/alumnosContext";
import {FaSmile} from 'react-icons/fa'
import {FaSadCry} from 'react-icons/fa'
import {RiEdit2Fill,RiDeleteBin5Fill} from "react-icons/ri";




const Tema = ({tema}) => {

    const alumnoContext = useContext(alumnosContext);
     const {alumno,eliminarTema, obtenerTema, modificarEstado, setTemaActual} = alumnoContext;

     const [alumnoClick] = alumno;

     const onClickEliminarTema = id =>{
        eliminarTema(id)
        obtenerTema(alumnoClick.id)
     }

     const onClickModificarEstado = tema =>{
           if(tema.estado) {
               tema.estado =false;
           }else {
               tema.estado =true;
           }
           modificarEstado(tema);
     }

     const seleccionarTema = tema =>{
        setTemaActual(tema)
     }
   


    return (
        <li className="card-tema">
            <p className="container-tema">{tema.nombre}</p>
            <p className="container-nota">Nota:{tema.nota}</p>
            <div className="estado">
                {tema.estado 
                
                ? 
                
                (
                    <button
                      className="btn-aprovado"
                      type="button"
                      onClick={()=>onClickModificarEstado(tema)}


                    >
                        <FaSmile/>
                    </button>
                )

                :
                    <button
                    className="btn-suspendido"
                    type="button"
                    onClick={()=>onClickModificarEstado(tema)}
                    

                >
                    <FaSadCry/>
                </button>
                
                }
            </div>

            <div className="acciones">
                <button onClick={()=>seleccionarTema(tema)} type="button" className="btn-acciones-editar">
                   <RiEdit2Fill/>
                </button>
                <button onClick={()=>onClickEliminarTema(tema.id)} type="button" className="btn-acciones-eliminar">
                   <RiDeleteBin5Fill/>
                </button>
            </div>
        </li>
      );
}
 
export default Tema;