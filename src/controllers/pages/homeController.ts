import { useState } from 'react'
import { loginUser, getUserLoginData, checkUser, signOut } from '../../modules/auth'

export const homeController = () => {
    const [showLoginCard, setShowLoginCard] = useState<boolean>(false)
    const toggleLoginCard = () => {
        setShowLoginCard(!showLoginCard)
    }

    const handleLogin = () => {
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