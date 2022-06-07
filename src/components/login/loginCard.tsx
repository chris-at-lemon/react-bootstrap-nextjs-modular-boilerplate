import { Card, CardBody } from 'reactstrap';

import { LoginCardController } from '../../controllers/components/loginCardController';
import styles from '../../styles/components/login/loginCard.module.scss'

export default function LoginCard() {
	const { errorMsg, fn } = LoginCardController();

	return (
		<Card className={`${styles['card']}`}>
			<CardBody className={`${styles['card-body']}`}>
				<form onSubmit={fn.handleLogin}>
				<input
						className={`${styles['form-control']} ${styles['mb-1rem']}`}
						type="text"
						name='username'
						placeholder='Chris'
						onChange={(e) => fn.handleUserName(e.target.value)}
					/>
					<input
						className={`${styles['form-control']}`}
						type="text"
						name='password'
						placeholder='test'
						onChange={(e) => fn.handlePassword(e.target.value)}
					/>
					
					<button type='submit' className={`${styles['btn']} ${styles['btn-primary']} ${styles['d-block']} ${styles['w-100']} ${styles['mt-1rem']}`}>
						Log in
					</button> 

					{errorMsg &&
						<div className={`${styles['alert']} ${styles['alert-danger']} ${styles['mt-1rem']} ${styles['text-center']} ${styles['mb-0']}`}>{errorMsg}</div>
					}
				</form>
			</CardBody>
		</Card>
	)
}