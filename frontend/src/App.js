import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';
import './App.css';

function App() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.get('projects').then(res => {
			setProjects(res.data);
		});
	}, []);

	//useState retorna array com 2 posições [state, setState]
	// 1. A variavel com o valor inicial
	// 2. Função para atualizar o valor da variavel

	function handleAddProject() {
		//projects.push(`Web Development [${Date.now()}]`);
		setProjects([...projects, `Web Development [${Date.now()}]`]);

		console.log(projects);
	}

	return (
		<>
			<Header title="Projects" />
			<ul>
				{projects.map(project => (
					<li key={project.id}>{project.title}</li>
				))}
			</ul>
			<button type="button" onClick={handleAddProject}>
				Add Project
			</button>
		</>
	);
}

export default App;
