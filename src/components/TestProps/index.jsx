import React from 'react'
import { useFetch } from '../Utils/Hooks';

function TestProps() {
    const { data, isLoading, error } = useFetch(
		`http://127.0.0.1:3000/json/logements.json`
	)
	if (error) {
		return <span>Il y a un problème</span>
	}
    return isLoading ? (<div>Chargement...</div>) : 
    (
        <>
        {data.map(({id, title}) =>
            (
            <>
                <div className='title' key={id+'nbre'}>{title}</div>
                <div key={id+'gros'}></div>
            </>
            )
        )}
        </>
     )
    
};

export default TestProps;