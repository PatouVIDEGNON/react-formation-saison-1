import React, {useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const LoginPage = () => {

    const [credentials, setCredentials] = useState({
        email: "sulei@gmail.com",
        password: "123456"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://192.168.100.65:8000/api/login_check", credentials)
            .then(response => {
              //  console.log(response.data.token)
                const token = response.data.token;
                 toast.success("Vous etes maintenant connecté !!!")
                //enregistrement de la variable dans le local storage
                localStorage.setItem("token", token)
                console.log(axios.defaults.headers)
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;

                axios.get("http://192.168.100.65:8000/api/clients")
                    //  axios.get("https://jsonplaceholder.typicode.com/users")
                    .then(r => {
                        console.log(r.data["hydra:member"])
                       // setCredentials(r.data["hydra:member"])

                        //setClients(r.data)
                        //console.log(r.data)
                    })
            })
        //   console.log(postClient)
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setCredentials({...credentials, [name]: value,})
    }

    return (
        <div className= "container mt-3">
            <div className="container">
                <form  className="form-inline" onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="form-control"
                                    name="email"
                                    onChange={handleChange}
                                    value={credentials.email}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="form-control"
                                    name="password"
                                    onChange={handleChange}
                                    value={credentials.password}
                                />
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <button className="btn btn-dark">Se Connecter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;