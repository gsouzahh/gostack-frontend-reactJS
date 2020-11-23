import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';
import Header from './components/Header';


const App = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('repositories').then(response => {
            setProjects(response.data);
        })
    }, [])

    async function handleAddProject () {
        // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        const response = await api.post('repositories', {
            title: `Novo Lindao: ${Date.now()}`,
            url: "https://api.github.com/users/Diego3g",
            techs: ["teste1", "teste2", "teste3"]
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <fieldset>
                <legend><Header title="Netbil Educacional" /></legend>
                <fieldset id="menu">
                    <legend><h3>Projetos</h3></legend>
                    <ul>
                        {projects.map(project => <li key={project.id}>{project.title}</li>)}
                    </ul>
                    <button type="button" onClick={handleAddProject}>Adicionar</button>
                </fieldset>
            </fieldset>
        </>
    )
}
export default App;