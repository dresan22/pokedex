import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import EditableRow from "../Rows/EditableRow";
import useApi from "../../utils/api";
import usePokemons from "../../store/context";
import './table.styles.scss'
import PokemonModal from "../Modals/PokemonModal";

export function Table() {
    const [isOpen, setIsOpen] = useState(false);
    const [pokemon, setPokemon] = useState();

    const fieldsFilter = ['name', 'type', 'attack', 'defense']
    const { fetchPokemon, deletePokemon, editPokemon } = useApi()
    const { query, list, setList, editFormData, setEditFormData, editPokemonId, setEditPokemonId } = usePokemons()

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = async () => {
        const { data } = await fetchPokemon()
        setList(data)
    }

    function handleDeleteClick() {
        deletePokemon(this)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditPokemonId(contact.id);

        const formValues = {
            name: contact.name,
            image: contact.image,
            attack: contact.attack,
            defense: contact.defense,
        };
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditPokemonId(null);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        editPokemon()
        setEditPokemonId(null);
    }

    function handlePokemonModal() {
        setPokemon(this)
        setIsOpen(!isOpen);


    }

    return (
        <>
            {!list && <div>Loading...</div>}

            {list && <form onSubmit={handleEditFormSubmit} >
                <table style={{ width: '100%' }} data-testid='pokemon-table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Ataque</th>
                            <th>Defensa</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list?.filter(pokemon => {
                            return fieldsFilter?.some((key => String(pokemon[key]).toLowerCase().includes(query)))
                        }).map(pokemon => {
                            return (<tr key={pokemon.id} className='table-pokemon-title'>
                                {editPokemonId !== pokemon.id ? (
                                    <>
                                        <td onClick={handlePokemonModal.bind(pokemon)}>
                                            <span>{pokemon.name}</span></td>
                                        <td onClick={handlePokemonModal.bind(pokemon)}><img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />  </td>
                                        <td onClick={handlePokemonModal.bind(pokemon)}>{pokemon.attack}</td>
                                        <td onClick={handlePokemonModal.bind(pokemon)}>{pokemon.defense}</td>
                                        <td><AiFillEdit onClick={e => handleEditClick(e, pokemon)} /> <AiFillDelete onClick={handleDeleteClick.bind(pokemon)} /></td>
                                    </>
                                ) : (<EditableRow
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick} />
                                )}
                            </tr>)
                        })}
                    </tbody>

                </table>
                <PokemonModal isOpen={isOpen}
                    onRequestClose={handlePokemonModal}
                    pokemon={pokemon}
                />
            </form>}
        </>
    )
}

