import { Fragment } from "react";
import Tema from "./Tema";


const ListaTemas = () => {
    
    const Temas = [
        {nombreTema:'Matematicas I', nota: '6', estado:true},
        {nombreTema:'Matematicas II', nota: '7', estado:false},
        {nombreTema:'Fisica I', nota: '6', estado:true},
        {nombreTema:'Fisica II', nota: '5', estado:false},
    ]


    return (
        
        <Fragment>
            <div className="container-alumno">
               <h1>Alumno: NombreAlumno</h1>
               <img></img>
               <p>Correo</p>
            </div>
            <ul className="listado-temas">
                {Temas.length === 0
                    ?(<li><p>No hay información</p></li>)

                    :Temas.map(tema =>(
                        <Tema
                           tema ={tema}
                        />
                    ))
                }
            </ul>
        </Fragment>
      );
}
 
export default ListaTemas;