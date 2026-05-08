import React from "react";
import { useState } from 'react';

function Form({onAdd}) {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    if (!title || !description) return;

    onAdd({
    id: Date.now(),
    title,
    description,
    category: category.trim().toLowerCase(),
    });

    setTitle('');
    setDescription('');
    setCategory('');
    }

return (
    <div className='form'>
        <h2>Add New Project</h2>
        <form onSubmit ={handleSubmit}>
            <input
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">Add Project</button>
        </form>
    </div>
)
}

export default Form;