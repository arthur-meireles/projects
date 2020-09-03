import { Request, Response, response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response) {
	const user = createUser({
		email: 'arthurmeireles11@gmail.com',
		password: '123123',
		techs: [
			'Node.js',
			'React',
			'React Native',
			{ title: 'javascript', experience: 100 },
		],
		hobbies: ['Correr', 'Jogar aquele CS'],
	});

	console.log(user.name);

	return response.json({ message: 'Hello World' });
}
