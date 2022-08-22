import ReactModal from "react-modal";
import './pokemon-modal.styles.scss'

const PokemonModal = ({ isOpen, onRequestClose, pokemon }) => {
    // console.log(pokemon)
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className='pokemon-modal' overlayClassName="Overlay" ariaHideApp={false}>
            <div className="Pokecard">
                <h3 className="Pokecard-title">{pokemon?.name}</h3>

                <div className="Pokecard-image">
                    <img
                        alt="pok"
                        src={pokemon?.image}
                    />
                </div>
                <div className="pokecard-data"> Attaque: {pokemon?.defense}</div>
                <div className="pokecard-data">Defensa: {pokemon?.attack}</div>
            </div>
        </ReactModal>
    );
}

export default PokemonModal;