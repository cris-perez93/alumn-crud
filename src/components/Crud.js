


import AgregarTema from './AgregarTema'
import ListaAlumnos from "./ListaAlumnos";
import ListaTemas from "./ListaTemas";
import Banner from './Banner';

const Crud = ({usuario, guardarUsuario}) => {

 

return (
        <div className="container-crud">
             
             <ListaAlumnos
             
             />

            <div className="container-content">
                <Banner
                   usuario = {usuario}
                   guardarUsuario = {guardarUsuario}
                />
                <AgregarTema
                  

                />
                <div className="tareas">
                 <ListaTemas
                   
                 />     
                </div>
            </div>
        </div>
      );
}
 
export default Crud;