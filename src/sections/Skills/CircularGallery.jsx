import React from 'react';
import './CircularGallery.css';

import pythonLogo from "../../assets/python-logo.png"
import reactLogo from "../../assets/react-logo.png"

const skills = [
    { name: 'JavaScript', image: 'https://via.placeholder.com/80?text=JS' },
    { name: 'React', image: reactLogo },
    { name: 'Node.js', image: 'https://via.placeholder.com/80?text=Node' },
    { name: 'CSS', image: 'https://via.placeholder.com/80?text=CSS' },
    { name: 'HTML', image: 'https://via.placeholder.com/80?text=HTML' },
    { name: 'Python', image: pythonLogo },
    { name: 'Git', image: 'https://via.placeholder.com/80?text=Git' },
    { name: 'Docker', image: 'https://via.placeholder.com/80?text=Docker' },
    { name: 'SQL', image: 'https://via.placeholder.com/80?text=SQL' },
];

const CircularGallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-scroll">
                {skills.map((skill, index) => (
                    <div key={index} className="gallery-item">
                        <img src={skill.image} alt={skill.name} />
                        <div className="tooltip">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CircularGallery;