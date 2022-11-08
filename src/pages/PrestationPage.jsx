import React, {useEffect, useState} from 'react';
import axios from "axios";

const PrestationPage = () => {

    const [prestations, setPrestations] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(r => {
                //console.log(r.data)
                setPrestations(r.data)
            })
    }, [])

    return (
        <div className="container mt-3">
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
                                console.log(prestation.completed);
                           return (
                               <tr>
                                   <th scope="row" key={prestation.id}>{prestation.id}</th>
                                   <td>{prestation.title}</td>
                                   <td>{prestation.completed ? (<span>Disponible </span>) : (<span>indisponible</span>)}</td>
                                   <td>
                                       <button className="btn btn-warning m-lg-2">Modifier</button>
                                       <button className="btn btn-danger ">supprimer</button>
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