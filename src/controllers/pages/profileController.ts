import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getUserLoginData, signOut } from '../../modules/auth'
import { IUser } from '../../interfaces/iUser'

export const ProfileController = () => {
	const router = useRouter()

	const loginStatus = getUserLoginData();

	// Push to homepage if not logged in, make sure only executes on client side 
	if (typeof window !== 'undefined') {
		if (!loginStatus.isloggedIn) {
			router.push('/')
		}
	}

	// set user Data state using data returned above
	const [userData, setUserData] = useState<IUser>();

	// Return user Data object to use in userData state. Needs useEffect to prevent infinite loop 
	useEffect(() => {
		if (loginStatus.isloggedIn) {
			setUserData({
				loggedIn: true,
				firstName: loginStatus.decodedJwt.firstName,
				lastName: loginStatus.decodedJwt.lastName
			}) 
		} else {
			setUserData({
				loggedIn: false,
				firstName: '',
				lastName: ''
			}) 
		}
	}, []);

	const logOut = () => {
		signOut;
		router.push('/')
	}

	return {
		userData,
		fn: {
			logOut
		}
	}
}