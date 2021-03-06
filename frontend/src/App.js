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

	async function handleAddProject() {
		//setProjects([...projects, `Web Development [${Date.now()}]`]);

		const response = await api.post('projects', {
			title: `Web Development [${Date.now()}]`,
			owner: 'Arthurito',
		});
		const project = response.data;

		setProjects([...projects, project]);
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
