import React from 'react'

function TeamContainer(props) {
    const mappedTeam = props.team.map(pokemon => (
        <div className='card'>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.poke_type}</p>
            <img src={pokemon.back_image} />
        </div>)
    )
    const noTeamHtml = 
        <>
            <h1>You have no Pokemon on your team. </h1>
            <img src="https://media.tenor.com/images/7c355668e41f8cf511fe30c8483379d0/tenor.gif" />
        </>
    
    return (
        <div id="team-container">
            { (mappedTeam.length === 0) ? noTeamHtml : mappedTeam }
        </div>
    )
}

export default TeamContainer
