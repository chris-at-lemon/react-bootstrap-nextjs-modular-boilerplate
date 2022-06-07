import { useState } from "react";
import { loginUser } from '../../modules/auth'
import { useRouter } from 'next/router'

export const LoginCardController = () => {
	const router = useRouter()

	const [userName, setUserName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [errorMsg, setErrorMsg] = useState<string>('');

	const handleUserName = (data: string) => {
		setUserName(data);
	}

	const handlePassword = (data: string) => {
		setPassword(data);
	}

	//  const handleLogin = async () => {
	//  	const login = await loginUser({ username: userName, password: password });
	//  	if (login.isValid) {
	//  		router.push('/profile')
	//  	} else {
	//  		setErrorMsg(login)
	//  	}
	//  }

	const handleLogin =  async (e: any) => {
		e.preventDefault();
		const login =  await loginUser({ username: userName, password: password });
	 	if (login.isValid) {
	 		router.push('/profile')
	 	} else {
	 		setErrorMsg(login)
	 	}
	}


	return {
		errorMsg,
		fn: {
			handleUserName,
			handlePassword,
			handleLogin
		}
	}
}