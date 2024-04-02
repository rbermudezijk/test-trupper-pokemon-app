import React from 'react';
import pokemonApi from '../apis/pokemonApi';
import PokemonCard from './pokemonCard';
import PokemonDetailsModal from '../pokemonDetailsModal';


export default class MainPage extends React.Component {

  constructor(...props){
    super(...props);
    this.state = { 
      loadText: 'Cargando información de pokemon...',
      pokemons: [],
      selectedItem: null,
    };
  }

  cleanSelection() {
    this.setState({...this.state, selectedItem: null})
  }

  setSelectedItem(pokemon) {
    this.setState({...this.state, selectedItem: pokemon})
  }

  async componentDidMount() {
    try{
      const pokemons = await pokemonApi.loadPokemonData();
      this.setState({ ...this.state, pokemons });
    } catch(e) {
      this.setState({ 
        ...this.state, 
        loadText: 'Ocurrió un problema al cargar la información, recargue la página.', 
      });
    }
  }

  render() {
    return (
      <>
        {this.state.pokemons.length
        ?<>
          {this.state.selectedItem?
          <PokemonDetailsModal
            pokemon={this.state.selectedItem}
            onClose={() => this.cleanSelection()}
          />
          :<></>}
          {this.state.pokemons.map( pokemon => <PokemonCard 
            key={pokemon.id}
            pokemon={pokemon}
            onClick={()=> this.setSelectedItem(pokemon)}/>
          )}
        </>
        :<p>{this.state.loadText}</p>}
      </>
    );
  }
}