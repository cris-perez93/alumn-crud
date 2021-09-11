
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';




const ListaAlumnos = () => {

    const [users,setUsers] = useState([])

    useEffect(() => {
           
        obtenerUsers()
               
    }, [])
    
    const obtenerUsers = ()=>{
        axios.get ('https://randomuser.me/api/?results=5')
            .then(res=>{
                console.log(res.data.results)
                setUsers(res.data.results)
            })
    }
    
    const nameId = uuidv4();
    

    return (
        <div className="container-lista">
                 <h1>Lista de alumnos</h1>
                 
                    {
                        users.map(item =>(
                            <ul className="container-profiles">
                                <div className ="card-profile">
                                    <img className="img-profile" src={item.picture.large}/>
                                <div>
                                    <p>{item.name.first}</p>
                                    <p>{item.email}</p>
                                 </div>
                                </div>
                            </ul>
                            
                            
                        ))
                    }
                 
            </div>
      );
}
 
export default ListaAlumnos;