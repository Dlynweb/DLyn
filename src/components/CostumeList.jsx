import React from 'react';
import Card from './Card';
import './CostumeList.css';

function CostumeList(props) {
    const { costumes } = props;

    return (
        <div className="costume-list">
            {costumes.map((costume, index) => (
                <Card
                    key={index}
                    name={costume.name}
                    img={costume.img}
                    fitSize={costume.fitSize}
                    gender={costume.gender}
                />
            ))}
        </div>
    );
}

export default CostumeList;