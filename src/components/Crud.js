
import AgregarTema from './AgregarTema'
import ListaAlumnos from "./ListaAlumnos";
import ListaTemas from "./ListaTemas";

const Crud = () => {

    

return (
        <div className="container-crud">
             
             <ListaAlumnos/>

            <div className="container-content">
                <AgregarTema/>
                <div className="tareas">
                 <ListaTemas/>     
                </div>
            </div>
        </div>
      );
}
 
export default Crud;