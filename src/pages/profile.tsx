import type { NextPage } from 'next'
import { ProfileController } from '../controllers/pages/profileController';

import styles from '../styles/pages/profile/profile.module.scss'

const Profile: NextPage = () => {
	const { userData, fn } = ProfileController();

	return (
		<div className={`${styles['profileContainer']}`}>
			<h1>Hello {userData?.firstName} {userData?.lastName}</h1>
			<button onClick={fn.logOut} className={`${styles['btn']} ${styles['btn-primary']}`}>sign out</button>
		</div>
	)
}

export default Profile;