import { Card, CardBody } from 'reactstrap';

import styles from '../../styles/components/login/loginCard.module.scss'

export default function LoginCard() {
	return (
		<Card className={`${styles['card']}`}>
			<CardBody className={`${styles['card-body']}`}>
				<form>
					<input
            className={`${styles['form-control']} ${styles['mb-1rem']}`}
						type="text"
						name='username'
						placeholder='userChris'
					/>
					<input
            className={`${styles['form-control']}`}
						type="text"
						name='password'
						placeholder='test'
					/>
					<button className={`${styles['btn']} ${styles['btn-primary']} ${styles['d-block']} ${styles['w-100']} ${styles['mt-1rem']}`}>
						Log in
					</button>
				</form>
			</CardBody>
		</Card>
	)
}