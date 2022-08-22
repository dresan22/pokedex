import * as Yup from 'yup';

export const schema = Yup.object({
    name: Yup.string()
        .max(15, 'Deber ser 15 caracteres o menos')
        .required('Requerido'),
    image: Yup.string()
        .url('Debe ser una URL'),
    defense: Yup.number()
        .min(0, 'Debe ser un número mayor a 0')
        .max(100, 'Must be 100 or less')
        .required('Requerido'),
    attack: Yup.number()
        .min(0, 'Debe ser un número mayor a 0')
        .max(100, 'Must be 100 or less')
        .required('Requerido'),
})


