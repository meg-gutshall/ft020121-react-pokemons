import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonsContainer from './containers/PokemonsContainer';
import TeamContainer from './containers/TeamContainer';

class App extends Component {
  state = {
    page: "pokemons",
    pokemons: [],
    team: [],
    loading: true,
  }
  
  render(){
    return (
    <div className="App">
        <NavBar />
        {this.state.page === "pokemons" ? <PokemonsContainer pokemons={this.state.pokemons} /> : <TeamContainer team={this.state.team} />}
    </div>
  )}
}

export default App;
