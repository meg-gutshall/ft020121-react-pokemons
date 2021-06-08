import React from 'react'

function PokemonCard({
    id,
    name,
    type,
    weight,
    frontImage,
    backImage,
    caught = false,
}) {
    return (
        <div 
            id={`pokemon-card-${id}`}
            className="card"
            style={{
                     backgroundColor: `var(--${type})`, 
                     backgroundImage: `var(--${caught ? "caught" : "unCaught"})`
                    }}
        >
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Weight: {weight}</p>
            <button>
                {caught ? "Remove From Team" : "Add To Team"}
            </button>
            <br />
            <img alt={name + " image"} src={frontImage} />
        </div>
    )
}

export default PokemonCard
