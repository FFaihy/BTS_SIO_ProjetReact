import React, { useState, useEffect } from 'react'

import axios from './AxiosInterceptor'

import DetailAtelier from './DetailAtelier'

const ListeAteliers = props => {
    const [ateliers, setAteliers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('api/ateliers')
            .then((response) => {
                console.log(response)
                setAteliers(response.data)
            }, (error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [])

    return (
        <div className="container">
            <h1>Nos ateliers</h1>
            <ul>
                {ateliers.map(ateliersAct => (
                    <DetailAtelier key={ateliersAct.id} atelier={ateliersAct}/>
                ))}
            </ul>
        </div>
    )
}

export default ListeAteliers