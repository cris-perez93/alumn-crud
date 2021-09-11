

const Tema = ({tema}) => {
    return (
        <li className="card-tema">
            <p className="container-tema">{tema.nombreTema}</p>
            <p className="container-nota">Nota:{tema.nota}</p>
            <div className="estado">
                {tema.estado 
                
                ? 
                
                (
                    <button
                      className="btn-aprovado"
                      type="button"


                    >
                        Aprovado
                    </button>
                )

                :
                    <button
                    className="btn-suspendido"
                    type="button"
                    

                >
                    Suspendido
                </button>
                
                }
            </div>

            <div className="acciones">
                <button type="button" className="btn-acciones-editar">
                    Editar
                </button>
                <button type="button" className="btn-acciones-eliminar">
                    Eliminar
                </button>
            </div>
        </li>
      );
}
 
export default Tema;