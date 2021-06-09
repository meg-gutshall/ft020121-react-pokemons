import React from 'react'

function NavBar({changePage}) {
    return (
        <div id="nav-bar">
            <h1 id="pokemons" onClick={changePage} >Pokemons</h1>
            <h1 id="teams" onClick={changePage}>View Team</h1>
        </div>
    )
}

export default NavBar
