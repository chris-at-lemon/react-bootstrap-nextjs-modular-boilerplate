import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getUserLoginData, signOut } from '../../modules/auth'
import { IUser } from '../../interfaces/iUser'

export const ProfileController = () => {
	const router = useRouter()

	const [userData, setUserData] = useState<IUser>();

	useEffect(() => {
		console.log('doing stuff')
		async function userCheck() {
			const loginStatus = await getUserLoginData();
			
			
			if (loginStatus.isloggedIn) {
				setUserData(
					{
						loggedIn: true,
						firstName: loginStatus.decodedJwt.firstName,
						lastName: loginStatus.decodedJwt.lastName
					}
				)
			}
	
			if (typeof window !== 'undefined') {
				if (!loginStatus.isloggedIn) {
					router.push('/')
				}
			}
		}

		userCheck();
	}, [])


	// Always check if user is logged in
	// userCheck();
	// console.log(userCheck())

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