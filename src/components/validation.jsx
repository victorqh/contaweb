// validation.js
export const validate = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = 'El nombre es obligatorio';
    if (!formData.email) {
        errors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'El correo electrónico no es válido';
    }
    return errors;
};
