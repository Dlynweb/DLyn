import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

function Card(props) {
    const genderIcon = props.gender === 'M' ? faMars : faVenus;

    return (
        <div className="card">
            <img src={props.img} alt={props.name} className="card__image" />
            <h2 className="card__name">{props.name}</h2>
            <p className="card__info">{` ${props.fitSize} | `}
                <FontAwesomeIcon icon={genderIcon} />
            </p>
        </div>
    );
}

export default Card;