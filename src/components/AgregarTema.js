import { useContext, useEffect, useState } from "react";
import alumnosContext from "../context/alumnos/alumnosContext";



const AgregarTema = () => {

    const alumnoContext = useContext(alumnosContext);
    const {temaseleccionado,errorformulario, alumno, agregarTema,errorFormulario, obtenerTema, actualizarTema} = alumnoContext;

     useEffect(()=>{
          if (temaseleccionado !== null){
              setTema(temaseleccionado)
          }else {
              setTema({
                  nombre:'',
                  nota:''

              })
          }
     },[temaseleccionado]);



    const [tema, setTema] = useState({
        nombre:'',
        nota:''
    })

    // extraer valores del state 

    const {nombre, nota} = tema;

    if( !alumno ) return null;

     //Array destrcuturing
     const [alumnoClick] = alumno;

     //Leer los valores del input
     const handleChange = e =>{
        setTema({
            ...tema,
            [e.target.name] : e.target.value
        })
     }

     


     const onSubmit = e =>{
        e.preventDefault();

        //validar
        if (nombre ==='' || nota === ''){
            errorFormulario()
            return;
        }

        // revisa si es edicion o nuevo examen
        if(temaseleccionado===null){
            tema.alumnoId = alumnoClick.id;
            tema.estado = false;
            agregarTema(tema);

        } else {
            //actualizar tarea existente
           actualizarTema(tema)
        }

    
        //obtener y filtrar los temas del alumno(mostrarlo)
        obtenerTema(alumnoClick.id)

        //reiniciar form 
        setTema({
            nombre:'',
            nota :''
        })
    };
    

    


    return (
        <div className="container-banner">
            
            <div className="container-agregar-examen">
                   

                    <form onSubmit={onSubmit} className="form-banner">
                        <div className="container-input">
                            <label>Agrega examen</label>
                            <input
                            type ="text"
                            className="input-temas"
                            placeholder="Tema a examinar..."
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                            />
                        </div>

                        
                    
                        <div className="container-input">
                        <label>Agrega una califación</label>
                            <input
                            type ="text"
                            className="input-temas"
                            placeholder="Nota examen"
                            name="nota"
                            value={nota}
                            onChange={handleChange}
                            />
                        </div>

                       
                       <div className="container-btn-temas">
                            <input
                            type="submit"
                            className="btn-temas"
                            value ={temaseleccionado ? 'Editar Examen' : 'Agregar Examen'}
                            />
                        </div>
                        
                        

                    </form>
                    {errorformulario ? <p className="error-formulario">Rellena los campos</p> :null}
              </div>
         </div>
      );
}
 
export default AgregarTema;