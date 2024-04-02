import "./index.css";

const PokemonCard = ({pokemon, onClick}) => (
  <div className='card' onClick={onClick}>
    <img src={pokemon.sprites.back_default} className='card--image'/>
    <div className="card--content">
      <div>
        <span>Id</span>: <span>{pokemon.id}</span>
      </div>
      <div>
        <span>Nombre</span>: <span>{pokemon.name}</span>
      </div>
      <div>
        <span>Peso</span>: <span>{pokemon.weight}</span>
      </div>
      <div>
        <span>Altura</span>: <span>{pokemon.height}</span>
      </div>
    </div>
  </div>
)

export default PokemonCard;