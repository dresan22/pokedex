import React, { useState } from "react";
import usePokemons from "../../store/context";
import { AiOutlinePlus } from 'react-icons/ai'
import Button from "../Button/Button";
import NewModal from "../Modals/Modal";

export default function Header() {
    const { setQuery, setList } = usePokemons()
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleChange = (e) => {
        setQuery(e.target.value.toLowerCase())
    }
    return <div>
        <span className='title'>Listado de Pokemon</span>
        <div className='toolbar'>
            <input type="text" className='input-text' placeholder='🔍  Pokemon' data-testid="search-input" onChange={handleChange} />
            <Button icon={<AiOutlinePlus />} onPress={toggleModal}>Nuevo</Button>
        </div>

        <NewModal isOpen={isOpen}
            onRequestClose={toggleModal}
            setList={setList}
        />
    </div>;
}
