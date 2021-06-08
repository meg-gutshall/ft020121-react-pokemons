import './App.css';
import NavBar from './components/NavBar';
import PokemonsContainer from './containers/PokemonsContainer';
import TeamContainer from './containers/TeamContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        {true ? <PokemonsContainer /> : <TeamContainer />}
    </div>
  );
}

export default App;
