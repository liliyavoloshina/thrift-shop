export const state = () => ({
	token: null,
	user: []
})

export const mutations = {
	setToken(state, payload) {
		state.token = payload
	},
	setUser(state, payload) {
		state.user = payload
	}
}

export const actions = {
	async authUser({commit}, authInfo) {
		let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseWebApi}`

		if (!authInfo.isSignin) {
			authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseWebApi}`

			const newUserInfo = {
				name: authInfo.name,
				email: authInfo.email,
				location: authInfo.location
			}

			try {
				const res = await this.$axios.$post(
					`${process.env.firebaseApi}users.json`,
					newUserInfo
				)
				commit('setUser', {...newUserInfo, id: res.name})

				this.$cookies.set('uuid', res.name)
			} catch (e) {
				console.log(e)
			}
		} else {
			try {
				const res = await this.$axios.$get(
					`${process.env.firebaseApi}users.json?orderBy="email"&equalTo="${authInfo.email}"`
				)
				const uuid = Object.keys(res)[0]
				const userInfo = await this.$axios.$get(
					`${process.env.firebaseApi}users/${uuid}.json`
				)
				commit('setUser', {...userInfo, id: uuid})
				this.$cookies.set('uuid', uuid, {
					maxAge: 3600
				})
			} catch (e) {
				console.log(e)
			}
		}

		try {
			const res = await this.$axios.$post(authUrl, {
				email: authInfo.email,
				password: authInfo.password,
				returnSecureToken: true
			})

			this.$cookies.set('token', res.idToken, {
				maxAge: res.expiresIn
			})

			commit('setToken', res.idToken)
		} catch (e) {
			console.log(e)
		}
	},
	async nuxtServerInit({commit}, {app}) {
		let token = app.$cookies.get('token')
		let uid = app.$cookies.get('uuid')

		if (token === undefined || uid === undefined) {
			token = this.$cookies.get('token')
			uid = this.$cookies.get('uuid')
		}

		try {
			const res = await this.$axios.$get(
				`${process.env.firebaseApi}users/${uid}.json`
			)
			commit('setUser', {...res, id: uid})
		} catch (e) {
			console.log(e)
		}

		commit('setToken', token)
	},
	logout({commit}) {
		this.$cookies.remove('token')
		this.$cookies.remove('uuid')
		commit('setToken', null)
		commit('setUser', null)
	}
}

export const getters = {
	isAuthorized(state) {
		return state.token !== null && state.token !== undefined
	}
}
