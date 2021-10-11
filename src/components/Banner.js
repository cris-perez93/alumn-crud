import { Link } from "react-router-dom";





const Banner = ({usuario}) => {

    

      const {nombre} = usuario

  

  
    
    return (
        <div className="container-hola-usuario">
              <div className="container-bienvenido">
                  <h4>Bienvenid@ <span>{nombre}</span></h4>
                 <Link to = '/alumn-crud'><p>Cerrar sesión</p></Link>
                 </div>
            </div>
      );
}
 
export default Banner;