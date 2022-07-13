import { useState } from 'react'
import { loginUser, getUserLoginData, checkUser, signOut } from '../../modules/auth'

export const HomeController = () => {
    const [showLoginCard, setShowLoginCard] = useState<boolean>(false)
    const toggleLoginCard = () => {
        setShowLoginCard(!showLoginCard)
    }

    const handleLogin = async () => {
        loginUser({username: 'userChris', password: 'test'})
    }

    return {
        showLoginCard,
        fn: {
            handleLogin,
            getUserLoginData,
            checkUser,
            signOut,
            toggleLoginCard
        }
    }
}