import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const RickApi = () => {
    const [rick, setRick] = useState({ results: []})
    const [currentIndex, setCurrentIndex] = useState(0)
    const url = 'https://rickandmortyapi.com/api/character'
    useEffect (() => {
        axios(url)
        .then((response) => setRick(response.data))
        .catch(err => console.log(err))
    }, [])
    const handleNextClink = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rick.results.length)
    }
   
    return (
        <div>
            <button onClick={handleNextClink}>Next</button>
            {rick.results.length > 0 && (
                <img src={rick.results[currentIndex].image}/>
            )}
            
        </div>
    )
}

export default RickApi