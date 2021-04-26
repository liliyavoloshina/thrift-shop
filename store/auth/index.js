import Cookie from 'js-cookie'

export const state = () => ({
	token: null
})

export const mutations = {
	setToken(state, payload) {
		state.token = payload
	},
	clearToken(state) {
		state.token = null
	}
}

export const actions = {
	async authUser({commit}, userInfo) {
		let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.firebaseWebApi}`

		if (!userInfo.isSignin) {
			authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseWebApi}`
		}

		try {
			const res = await this.$axios.$post(authUrl, {
				email: userInfo.email,
				password: userInfo.password,
				returnSecureToken: true
			})
			commit('setToken', res.idToken)
			localStorage.setItem('token', res.idToken)
			localStorage.setItem(
				'tokenExpiration', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000
			)
			Cookie.set('jwt', res.idToken)
			Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000
			)
		} catch (e) {
			console.log(e)
		}
	}
}
