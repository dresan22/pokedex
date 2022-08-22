import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillSave } from 'react-icons/ai';

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,

}) => {
    return (
        <>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="image"
                    value={editFormData.image}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="range"
                    required="required"
                    placeholder=""
                    name="attack"
                    value={editFormData.attack}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td >
                <input
                    type="range"
                    required="required"
                    placeholder=""
                    name="defense"
                    value={editFormData.defense}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <div style={{}}>

                    <button className='save-edit' type="submit"><AiFillSave /></button>


                    <AiOutlineClose onClick={handleCancelClick} />
                </div>
            </td>
        </>
    );
};

export default EditableRow;
