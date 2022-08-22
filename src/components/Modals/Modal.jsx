import './modal.styles.scss'
import Modal from "react-modal";
import Button from '../Button/Button';
import { AiOutlineClose, AiFillSave } from 'react-icons/ai';
import { useFormik } from 'formik'
import { schema } from '../../schema';
import useApi from '../../utils/api';


const NewModal = ({ isOpen, onRequestClose }) => {
    const { postPokemon } = useApi()

    const onSubmit = (values, actions) => {
        postPokemon(values)
        actions.resetForm();
        onRequestClose()
    };
    const {
        values,
        errors,
        touched,
        isValid,
        dirty,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            name: '',
            image: '',
            attack: 50,
            defense: 50,
            hp: '100',
            type: 'Normal',
            idAuthor: ''
        },
        validationSchema: schema,
        onSubmit,
    })

    function handleCheckbox() {
        if (document.getElementById("is_random").checked) {
            document.getElementById("image").classList.add('disable_section')
        } else {
            document.getElementById("image").classList.remove('disable_section')
        }
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='modal' ariaHideApp={false}>
            <div >
                <div className="modal-card">
                    <header className="modal-card-head">
                        <h3 className="modal-card-title">Nuevo Pokemon</h3>
                    </header>
                    <section className="modal-card-body">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className='form'>
                                <div className="field">
                                    <label className="label" htmlFor="name">Nombre</label>
                                    <input
                                        id='name'
                                        type="text"
                                        placeholder="Nombre"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input-text ${touched.name && errors.name ? 'input-error' : ''}`}
                                    />
                                    {errors.name && touched.name && <p className="error">{errors.name}</p>}
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor="attack">Ataque</label>
                                    1<input
                                        id='attack'
                                        type="range"
                                        placeholder="Tipo"
                                        min="1"
                                        max="100"
                                        value={values.attack ?? 50}
                                        onChange={handleChange}
                                        className={` ${touched.attack && errors.attack ? 'input-error' : ''}`}
                                    />100
                                    {errors.attack && touched.attack && <p className="error">{errors.attack}</p>}
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor="image">Imagen</label>
                                    <input
                                        id='image'
                                        type="text"
                                        placeholder="Url de la imagen"
                                        value={values.image}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`disable_section input-text ${touched.image && errors.image ? 'input-error' : ''}`}
                                    />
                                    <label htmlFor="is_random"> <input type="checkbox" name="is_random" id="is_random" onClick={handleCheckbox} defaultChecked />Random</label>
                                    {errors.image && touched.image && <p className="error">{errors.image}</p>}
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor="defense">Defensa</label>
                                    1<input
                                        id='defense'
                                        type="range"
                                        placeholder="def"
                                        min="1"
                                        max="100"
                                        value={values.defense ?? 50}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={` ${touched.defense && errors.defense ? 'input-error' : ''}`}
                                    />100
                                    {errors.defense && touched.defense && <p className="error">{errors.defense}</p>}
                                </div>
                            </div>
                            <footer className="modal-card-foot">
                                <Button icon={<AiFillSave />} className="button is-success" disabled={!(isValid && dirty)}>Guardar</Button>
                                <Button icon={<AiOutlineClose />} onPress={onRequestClose}>Cancelar</Button>
                            </footer>
                        </form>
                    </section>

                </div>
            </div>
        </Modal >

    );
}

export default NewModal;