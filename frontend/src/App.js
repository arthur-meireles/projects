import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
	const [projects, setProjects] = useState(['Web Dev', 'Web Production']);

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
					<li key={project}>{project}</li>
				))}
			</ul>
			<button type="button" onClick={handleAddProject}>
				Add Project
			</button>
		</>
	);
}

export default App;
