import jwt from 'jsonwebtoken';
import getConfig from 'next/config';
import { setHttpAgentOptions } from 'next/dist/server/config';

const { serverRuntimeConfig } = getConfig();

// users in JSON file for simplicity, store in a db for production applications
import users from '../../../data/users.json';

function authenticate(req: any, res: any) {

	const { username, password } = req.body;
	const user = users.find((u: { username: string; password: string; }) => u.username === username && u.password === password);

	if (!user) {
		return res.status(401).json({
			message: 'Not authorised'
		})
	}	else {
		const token = jwt.sign(
			{
				username: 'userChris',
				firstName: 'Chris',
				lastName: 'Test',
			},
			serverRuntimeConfig.secret,
			{ expiresIn: '1h' });
	
		return res.status(200).json({
			jwt: token
		});
	}
	
	// create a jwt token that is valid for 7 days

}

export default authenticate;
