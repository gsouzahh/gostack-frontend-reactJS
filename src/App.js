import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';




const App = () => {
    const [projects, setProjects] = useState(["Alcance", "Ativamente", "Frisbee", "Planeta Saber", "Calesita"])
    const handleAddProject = () => { setProjects([...projects, `Novo Projeto ${Date.now()}`]); }

    return (
        <>
            <fieldset>
                <legend><Header title="Netbil Educacional" /></legend>
                <fieldset id="menu">
                    <legend><h3>Projetos</h3></legend>
                    <ul>
                        {projects.map(project => <li key={project}>{project}</li>)}
                    </ul>
                    <button type="button" onClick={handleAddProject}>Adicionar</button>
                </fieldset>
            </fieldset>
        </>
    )
}
export default App;