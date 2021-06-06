import React, { useState, useEffect } from 'react'

import axios from './AxiosInterceptor'

import DetailBoisson from './DetailBoisson'

const ListeBoissons = props => {
    const [boissons, setBoissons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('api/boissons')
            .then((response) => {
                console.log(response)
                setBoissons(response.data)
            }, (error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [])

    return (
        <div className="container">
            <h1>Nos boissons</h1>
            <ul>
                {boissons.map(boissonsAct => (
                    <DetailBoisson key={boissonsAct.id} boisson={boissonsAct}/>
                ))}
            </ul>
        </div>
    )
}

export default ListeBoissons