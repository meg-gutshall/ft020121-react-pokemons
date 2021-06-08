import React, { Component } from 'react'
import FilterBar from '../components/FilterBar'
import PokemonCard from '../components/PokemonCard'

class PokemonsContainer extends Component {
    
    render(){
        const pokemons = this.props.pokemons.map(pokemon => (
            <PokemonCard 
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.poke_type}
                weight={pokemon.weight}
                frontImage={pokemon.front_image}
                backImage={pokemon.back_image}
                caught={pokemon.caught} 
            />)
        )
        // Above Functions returns an array of pokemon cards.
        
        return (
            <div id="poke-container">
                <FilterBar />
                {pokemons}
            </div>
    )}
}

export default PokemonsContainer
