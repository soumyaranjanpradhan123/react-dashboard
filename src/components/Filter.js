import React from 'react';

function Filter({ label, options, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <select onChange={onChange}>
                <option value="">All</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
