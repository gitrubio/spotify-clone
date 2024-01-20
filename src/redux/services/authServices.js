

import axios from "axios"
import { login, logout } from "../features/authSlice";

export const authSingUp = (user,callback) => {
	return async (dispatch) => {
		try {
            const {data} = await axios.post('https://authorization-7v3n.onrender.com/api/auth/signup',user,{headers : {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }})
		if (data) {
			dispatch(
				login({
                    token: data.token,
                    email: user.email,
                    displayName: user.username,
				})
			)
            callback()
		} else {
            callback('Ups! Something went wrong')
		}
        } catch (error) {
         const message = error?.response?.data?.message ?? 'Something went wrong'
         callback(message)
        }
	}
}

export const authLogin = (user,callback) => {
	return async (dispatch) => {
		try {
            const {data} = await axios.post('https://authorization-7v3n.onrender.com/api/auth/signin',user,{headers : {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }})
		if (data) {
			dispatch(
				login({
                    token: data.token,
                    email: user.email,
                    displayName: user.username,
				})
			)
            callback()
		} else {
            callback('Ups! Something went wrong')
		}
        } catch (error) {
         const message = error?.response?.data?.message ?? 'Something went wrong'
         callback(message)
        }
	}
}
