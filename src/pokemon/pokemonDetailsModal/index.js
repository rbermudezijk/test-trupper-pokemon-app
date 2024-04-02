import React from "react";
import "./index.css";
import ReactModal from 'react-modal';

class PokemonDetailsModal extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
          showModal: true
        };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }

    handleCloseModal () {
      this.setState({ showModal: false });
      this.props.onClose();
    }

    render() {
        const pokemon = this.props.pokemon;
        return (
        <ReactModal isOpen={this.state.showModal}>
          <button onClick={()=>this.handleCloseModal()}>Cerrar</button>
          <div className="first">
            <div><span>Id</span>: <span>{pokemon.id}</span></div>
            <div><span>Nombre</span>: <span>{pokemon.name}</span></div>
          </div>
          <div className="images">
            <img src={pokemon.sprites.front_default} className="sprite"/>
            <img src={pokemon.sprites.back_default} className="sprite"/>
          </div>
            <div><span>Peso</span>: <span>{pokemon.weight}</span></div>
            <div><span>Altura</span>: <span>{pokemon.height}</span></div>
            <div>
                <h3>Movimientos</h3>
                <div className="pokemon-moves">
                    {pokemon.moves.map(({move}) => <p>{move.name}</p>)}
                </div>
            </div>
          <div>
          </div>
        </ReactModal>
        );
    }
}

export default PokemonDetailsModal;