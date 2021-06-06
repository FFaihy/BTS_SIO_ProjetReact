import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Table from "react-bootstrap/Table"
import axios from "./AxiosInterceptor"

const Atelier = () => { 
    const [atelier, setAtelier] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`api/ateliers/${id}`  )
                .then((response) => {
                    console.log(response )
                    setAtelier(response.data)
                }, (error) => {
                    console.log(error)
                });
        };
        fetchData();
    }, [id]);


    if (atelier) {
        return (
            <div className="container">
                <h3>Atelier : {atelier.titre} </h3>
                <Table> {
                         }
                    <tbody>
                        <tr>
                            <td>Description</td>
                            <td>{atelier.description}</td>
                        </tr>
                        <tr>
                            <td>Unité d'intensité</td>
                            <td>{atelier.unitedintensite}</td>
                        </tr>
                        <tr>
                            <td>Unité de performance</td>
                            <td>{atelier.unitedeperformance}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    else {
        return <div className="container">
            En chargement...
        </div>
    }

}
export default Atelier