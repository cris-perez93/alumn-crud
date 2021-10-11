import { Fragment, useContext } from "react";
import Tema from "./Tema";
import alumnosContext from "../context/alumnos/alumnosContext";
import avatar from '../img/avatar.png'





const ListaTemas = () => {

    const alumnoContext = useContext(alumnosContext);
     const { alumno, temasalumno, eliminarAlumno } = alumnoContext;

     // si no hay alumno seleccionado
     if(!alumno ) return <h2>Alumno</h2>

     //Array destrcuturing
     const [alumnoClick] = alumno;
    
    
   

    const onClickEliminar = () =>{
        eliminarAlumno(alumnoClick.id)
    }


    return (
        
        <Fragment>
            <div className="container-alumno">
              <div className="card-profile">
                <img alt="profile" className="img-profile"src={avatar}/>
                <p>Alumno: {alumnoClick.nombre}</p>
                
              </div>
            </div>
            <ul className="listado-temas">
                {temasalumno.length === 0
                    ?(<li><p>No hay información</p></li>)

                    :temasalumno.map(tema =>(
                        <Tema
                           key={tema.id}
                           tema ={tema}
                        />
                    ))
                }
                <p onClick={onClickEliminar} className="borrar-alumno">Borrar Alumno &times;</p>
            </ul>
            
        </Fragment>
      );
}
 
export default ListaTemas;