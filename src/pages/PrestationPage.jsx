import React, {useEffect, useState} from 'react';
import axios from "axios";

const PrestationPage = () => {

    const [prestations, setPrestations] = useState([]);
    const [erreur, setErreur] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [postPrestation, setPostPrestation] = useState({
        title: "",
        completed: "",
    })

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(r => {
                //console.log(r.data)
                setPrestations(r.data);
                setIsLoading(false);

            })
            .catch( (error) => {
                setErreur(error.message)
                //console.log(error.message)
        })
    }, [])



    if(erreur){
        return (
            <div style={{color: "red", textAlign:"center",marginTop: "35%"}}>
                          {erreur}
            </div>
        )
    }

    if(isLoading){
        return (
            <div style={{color: "red", textAlign:"center", marginTop: "35%"}}>
                Chargement des prestation en cours...
            </div>
        )
    }


    const handleDelete = (id) => {
       // console.log(id)
        const prestationOriginal = [...prestations];
        setPrestations(prestations.filter(prestation => prestation.id !== id))
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then( r => console.log(" "))
            .catch( (error) => {
                setPrestations(prestationOriginal)
            })
    }

    const handleChange = (e) => {
        // e.preventDefault();
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setPostPrestation({...postPrestation, [name] : value,})
        console.log(name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/todos", postPrestation)
            .then(response => {
              //  console.log(erererrer)
            })
        console.log(postPrestation)
    }


    return (
        <div className="container mt-3">

            <div className="container">
                <form  className="form-inline" onSubmit={handleSubmit} >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Entrer intituler de votre profession"
                                    value={postPrestation.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <button className="btn btn-dark">Ajouter votre prestation</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>

            <div className="row">
                <div className="col-8">
                    <h1>Prestation</h1>
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Intitulé</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            prestations.map( (prestation) => {
                             //   console.log(prestation.id);
                           return (
                               <tr key={prestation.id}>
                                   <th scope="row">{prestation.id}</th>
                                   <td>{prestation.title}</td>
                                   <td>{prestation.completed ? (<span>Disponible </span>) : (<span>indisponible</span>)}</td>
                                   <td>
                                       <button className="btn btn-warning m-lg-2">Modifier</button>
                                       <button className="btn btn-danger " onClick={()=> handleDelete(prestation.id)}>supprimer</button>
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
export default PrestationPage;