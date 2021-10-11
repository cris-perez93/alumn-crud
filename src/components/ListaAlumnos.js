import { useState, useContext, useEffect } from "react";
import alumnosContext from "../context/alumnos/alumnosContext";






const ListaAlumnos = () => {

     const alumnoContext = useContext(alumnosContext);
     const {formulario, mostrarerror, mostrarFormulario, alumnosLista, obtenerAlumnos, agregarAlumnos, mostrarError, alumnoClick, obtenerTema} = alumnoContext;

     const [alumno, setAlumno] = useState({
         nombre: ''
     });

     const {nombre} = alumno;

     const onChangeAlumno = e =>{
         setAlumno({
             ...alumno,
             [e.target.name] : e.target.value
         })
     }

     const onSubmitAlumno = e =>{
         e.preventDefault();

         //Validar campos vacios
          if (nombre ===''){
              mostrarError()
              return;
          }

         //agregar al state

         agregarAlumnos(alumno)

         //Reiniciar el form

         setAlumno({
             nombre :''
         })
     }

     

     const onClickFormulario = () =>{
        mostrarFormulario()
     }

  
     useEffect(()=>{
        obtenerAlumnos();
        // eslint-disable-next-line
     },[])

    

     const seleccionarAlumno = id =>{
        alumnoClick(id); // fijar un alumno
        obtenerTema(id); // filtrar los temas 

     }

     
    
     
    
    
 return (
     
        <div className="container-lista">
                 

                 <h1 className="title-alumnos">Lista de alumnos</h1>

                 <button
                   type ="button"
                   className="btn-agregar-alumno"
                   onClick={onClickFormulario}
                 >Nuevo Alumno</button>

                {formulario ?  <form
                   className="form-agregar-alumno"
                   onSubmit ={onSubmitAlumno}
                 >
                     <input
                      className="input-text"
                      placeholder="Nombre Alumno"
                      type="text"
                      name="nombre"
                      value = {nombre}
                      onChange={onChangeAlumno}

                     ></input>

                     <input
                       type="submit"
                       className="btn-enviar-alumno"
                       value="Agregar a la lista"
                     ></input>

                 </form> : null}

                 { mostrarerror ? <p className="error_formulario">Añade un alumno</p>    :null}

                 <h2>Alumnos</h2>

                

                 <ul className="listado-alumnos">
                     {alumnosLista.length === 0 
                       ? (<p>Agrega un nuevo alumno</p>)
                       
                       :alumnosLista.map(alumno =>(
                        <li key ={alumno.id} >
                        <button
                          onClick={()=> seleccionarAlumno(alumno.id)}
                          type="button"
                          className="nombre-alumnos"
                        >{alumno.nombre}</button>
                    </li>
                    ))
                     }
                         
                 </ul>
                 
                   
                 
            </div>
      );
}
 
export default ListaAlumnos;