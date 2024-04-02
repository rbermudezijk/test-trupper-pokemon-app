

const getAllPokemonList = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon')
  .then(rs => rs.json());
}

const getPokemonDetails = (detailsUrl) => {
    return fetch(detailsUrl)
    .then(rs => rs.json());
}

const loadPokemonData = async () => {
    const pokemonData = await getAllPokemonList();

    const pokemonListDetails = await Promise.all(
        pokemonData.results.map( pokemon => getPokemonDetails(pokemon.url) )
    );

    return pokemonListDetails;
}

export default {
    getAllPokemonList,
    getPokemonDetails,
    loadPokemonData,
}