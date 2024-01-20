/* export const authLogin = (user: IUser) => {
    import { authApi } from "../../api/apiCore"
	return async (dispatch: any) => {
		dispatch(checkingCredentials())
		const { data } = await loginWithEmailPassword(user.email, user.password)
		if (data) {
			const { data: userData } = await UserServices.getUserData(data.uid)

			welcomeMessage()
			dispatch(
				login({
					uid: data?.uid,
					displayName: userData.displayName,
					photoURL: userData.photoURL,
					email: data?.email,
				})
			)
		} else {
			dispatch(logout({ errorMessage: 'Error al iniciar sesión' }))
			notifications.show({
				id: 'auth-error',
				title: 'Error al iniciar sesión',
				message: 'verifica tus credenciales 🤥',
				color: 'red',
			})
		}
	}
} */

import axios from "axios"
import { login } from "../features/authSlice";

export const authSingUp = (user,callback) => {
	return async (dispatch) => {
		const {data} = await  axios.post('http://authorization-7v3n.onrender.com/api/auth/signup',user)
		if (data) {
            console.log(data);
			dispatch(
				login({
                    token: data.token,
                    email: user.email,
                    displayName: user.username,
				})
			)
            
		} else {
			
		}
	}
}