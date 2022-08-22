import axios from 'axios';
import usePokemons from '../store/context';
const API_URL = 'https://bp-pokemons.herokuapp.com/?idAuthor=10'
axios.defaults.baseURL = API_URL;


const useApi = () => {
    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const { setList, editFormData, editPokemonId } = usePokemons();
    const randomNumber = Math.floor(Math.random() * Math.floor(400))


    const fetchPokemon = async () => await axios.get(`${API_URL}`)

    async function deletePokemon(pokemon) {
        const response = await axios.delete(`https://bp-pokemons.herokuapp.com/${pokemon.id}`)
        if (response) {
            const { data } = await fetchPokemon()
            setList(data)
        }

    }
    const editPokemon = async () => {
        const response = await axios.put(`https://bp-pokemons.herokuapp.com/${editPokemonId}`, {
            ...editFormData,
            hp: 200,
            type: 'normal',
            idAuthor: 10,
        })
        if (response) {
            const { data } = await fetchPokemon()
            setList(data)
        }
    }

    const postPokemon = async (values) => {
        const response = await axios.post(`https://bp-pokemons.herokuapp.com/`, {
            name: values.name,
            image: values.image || (imageUrl + randomNumber + '.png'),
            attack: values.attack,
            defense: values.defense,
            hp: values.hp,
            type: values.type,
            idAuthor: 10,
        })
        if (response) {
            const { data } = await fetchPokemon()
            setList(data)
        }
    }


    return { fetchPokemon, deletePokemon, editPokemon, postPokemon }
}

export default useApi;