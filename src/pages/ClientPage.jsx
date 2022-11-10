import React, {useEffect, useState} from 'react';
import axios from "axios";

const ClientPage = () => {

    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState( true);
    const [erreur, setErreur] = useState("")
    const [postClient, setPostClient] = useState({
        nom: "",
        email: "",
        tel: "",
    })


    useEffect(()=>{
       // console.log(clients)
         axios.get("http://192.168.100.65:8000/api/clients")
      //  axios.get("https://jsonplaceholder.typicode.com/users")
            .then(r => {
                 setClients(r.data["hydra:member"])
                setErreur("okkkkkkkkkk!")
              //setClients(r.data)
                 //console.log(r.data)
            })
             .catch(function (error) {
            // console.log(typeof error.message)
             setErreur("Pas de connexion ");
             //console.log(erreur)
         })
          setIsLoading(false)
        console.log(erreur)

    }, [])


    const handleDelete = (id) => {
       // console.log(id)
        const clientOriginal = [...clients];
        setClients(clients.filter(client => client.id !== id))
       // console.log(clientOriginal)
        axios.delete(`http://192.168.100.65:8000/api/clients/${id} `)
            .then(r => console.log(r))
            .catch(function (error) {
                setClients(clientOriginal);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://192.168.100.65:8000/api/clients", postClient)
            .then(response => {
                console.log(response)
            })
     //   console.log(postClient)
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setPostClient({...postClient, [name]: value,})
    }

    // const handleChange = (e) => {
    //     const value = e.currentTarget.value;
    //     const name = e.currentTarget.name;
    //
    //
    //     setPostClient({...postClient, [name]: value,})
    //     console.log("Spread Operator", {...postClient});
    //     console.log(" name de l'input sur lequel on est : ", name );
    //     console.log("Clé du name de l'input sur lequel on est : ", [name]);
    //     console.log("Valeur de l'input sur lequel on est : ",value);
    //     // console.log({...postClient, [name]: value,});
    //     console.log({...postClient, [name]: value,})
    // }



    if(isLoading) {
        return (
            <div style={{color: "red"}}>
                Chargement des clients en cours...
            </div>
        )
    }

    // if(erreur){
    //     return (
    //         <div style={{marginBottom: "100px"}}>
    //             {erreur}
    //         </div>
    //     )
    // }


    return (
        <div className="container mt-3 ">

            <div className="container">
                <form  className="form-inline" onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="nom"
                                    className="form-control"
                                    name="nom"
                                    onChange={handleChange}
                                    value={postClient.nom}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="form-control"
                                    name="email"
                                    onChange={handleChange}
                                    value={postClient.email}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="Tel"
                                    className="form-control"
                                    name="tel"
                                    onChange={handleChange}
                                    value={postClient.tel}
                                />
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <button className="btn btn-dark">Ajouter un client</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
                <br/>
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