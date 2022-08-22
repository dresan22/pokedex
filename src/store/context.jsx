
import React, { useState, useContext } from 'react'
export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
    const [editPokemonId, setEditPokemonId] = useState(null)

    const [list, setList] = useState(null)
    const [query, setQuery] = useState('')
    const [editFormData, setEditFormData] = useState({
        name: "",
        image: "",
        attack: "",
        defense: "",
    });

    const systemVariables = {
        query, setQuery, list, setList, editFormData, setEditFormData, editPokemonId, setEditPokemonId
    };
    return (
        <ThemeContext.Provider value={systemVariables}>
            {children}
        </ThemeContext.Provider>
    )
}

const usePokemons = () => {
    const context = useContext(ThemeContext);
    return context;
}

export default usePokemons
