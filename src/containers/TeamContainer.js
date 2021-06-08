import React from 'react'

function TeamContainer(props) {
    const mappedTeam = props.teams.map(pokemon => (
        <div className='card'>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.type}</p>
            <img src={pokemon.back_image} />
        </div>)
    )
    
    return (
        <div id="team-container">
            {mappedTeam}
        </div>
    )
}
    
export default TeamContainer
