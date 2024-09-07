import { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        course: ''
    });
    const [errors, setErrors] = useState({});
    const [showGeneralError, setShowGeneralError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Manejar el envío del formulario
            console.log(formData);
            setShowGeneralError(false);
        } else {
            setErrors(validationErrors);
            setShowGeneralError(true);
        }
    };

    const validate = (formData) => {
        const errors = {};
        if (!formData.name) errors.name = true;
        if (!formData.lastName) errors.lastName = true;
        if (!formData.email) {
            errors.email = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = true;
        }
        if (!formData.phone) errors.phone = true;
        if (!formData.course) errors.course = true;
        return errors;
    };

    return (
        <form onSubmit={handleSubmit} className="RegistrationForm">
            <label>
                Nombre:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error-input' : ''}
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error-input' : ''}
                />
            </label>
            <label>
                Correo Electrónico:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error-input' : ''}
                />
            </label>
            <label>
                Teléfono:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error-input' : ''}
                />
            </label>
            <label>
                Curso de Interés:
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={errors.course ? 'error-input' : ''}
                >
                    <option value="">Selecciona un curso</option>
                    <option value="Finanzas en casa">Finanzas en casa</option>
                    <option value="Derecho Tributario">Derecho Tributario</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="Gestión de Proyectos">Gestión de Proyectos</option>
                    <option value="Desarrollo Web">Desarrollo Web</option>
                </select>
            </label>
            <button type="submit" className="submit-button">LLÁMAME</button>
            {showGeneralError && <p className="general-error">Rellena los espacios obligatorios</p>}
        </form>
    );
}

export default RegistrationForm;
