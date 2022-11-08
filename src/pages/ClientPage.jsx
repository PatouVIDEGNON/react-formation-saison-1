import React, {useEffect, useState} from 'react';
import axios from "axios";

const ClientPage = () => {

    const [clients, setClients] = useState([]);

    useEffect(()=>{
       // console.log(clients)
         axios.get("http://192.168.100.65:8000/api/clients")
      //  axios.get("https://jsonplaceholder.typicode.com/users")
            .then(r => {
                 setClients(r.data["hydra:member"])
              //setClients(r.data)
                 //console.log(r.data)
            }).catch(function (error) {
             console.log(error.message)
         })

    }, [])


    const handleDelete = (id) => {
        const clientOriginal = [...clients];
        setClients(clients.filter(client => client.id !== id))
       // console.log(clientOriginal)
        axios.delete(`http://192.168.100.65:8000/api/clients/${id} `)
            .then(r => console.log(r))
            .catch(function (error) {
                setClients(clientOriginal);
            })

    }




    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-8">
                    <h1>Client</h1>
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telephone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            clients.map((client, index) => {
                                return(

                                    <tr key={index}>
                                        <td >{client.id}</td>
                                        <td>{client.nom}</td>
                                        <td>{client.tel}</td>
                                        <td>{client.email}</td>
                                        <td>
                                            <button className="btn btn-warning m-lg-2">Voir</button>
                                            <button className="btn btn-danger " onClick={() => handleDelete(client.id)}>supprimer</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ClientPage;