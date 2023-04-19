import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [name, setName] = useState('');
    const [costumeName, setCostumeName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Costume Name:', costumeName);
        console.log('Phone Number:', phoneNumber);
    };

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleCostumeNameChange = event => {
        setCostumeName(event.target.value);
    };

    const handlePhoneNumberChange = event => {
        setPhoneNumber(event.target.value);
    };

    return (
        <div className="footer">
            <h2 id="footer" className="footer-title">Reservar</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="costume-name">Nombre del disfraz:</label>
                    <input
                        type="text"
                        id="costume-name"
                        name="costume-name"
                        value={costumeName}
                        onChange={handleCostumeNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">No. de Telefono:</label>
                    <input
                        type="tel"
                        id="phone-number"
                        name="phone-number"
                        pattern="[0-9]{8}"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Footer;