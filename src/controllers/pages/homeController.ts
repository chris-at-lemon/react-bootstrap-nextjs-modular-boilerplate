import { loginUser } from '../../modules/auth'

export const homeController = () => {
    const handleLogin = () => {
        loginUser({username: 'userChris', password: 'test'})
    }

    return {
        fn: {
            handleLogin
        }
    }
}