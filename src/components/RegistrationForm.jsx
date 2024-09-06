import { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Manejar el envío del formulario
        console.log(formData);
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
                />
            </label>
            <label>
                Correo Electrónico:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Registrar</button>
        </form>
    );
}

export default RegistrationForm;