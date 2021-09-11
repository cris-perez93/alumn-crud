


const AgregarTema = () => {
    return (
        <div className="container-banner">
            <div className="container-hola-usuario">
                  <p>Bienvenido Usuario!</p>
            </div>
            <div className="container-agregar-examen">
                    <h1>Agregar examen</h1>
                    <form className="form-banner">
                        <div className="container-input">
                            <input
                            type ="text"
                            className="input-temas"
                            placeholder="Tema a examinar..."
                            name="nombre"
                            />
                        </div>

                        <div className="contenedor-input">
                            <input
                            type="submit"
                            className="btn-temas"
                            value ="Agregar temas"
                            />
                        </div>

                    </form>
              </div>
         </div>
      );
}
 
export default AgregarTema;