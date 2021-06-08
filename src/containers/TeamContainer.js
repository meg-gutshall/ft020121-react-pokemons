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
            <>
                <h1>You have no Pokemon on your team. </h1>
                <img src="https://media.tenor.com/images/7c355668e41f8cf511fe30c8483379d0/tenor.gif" />
            </>
        </div>
    )
}

export default TeamContainer
