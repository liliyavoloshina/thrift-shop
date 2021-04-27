import Cookie from 'js-cookie'

export const state = () => ({
	token: null,
  user: {}
})

export const mutations = {
  authUser(state, payload) {
    state.token = payload.idToken
    state.userId = payload.localId
  }
}

export const actions = {
  async authUser({commit}, authInfo) {
    let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseWebApi}`

    if (!authInfo.isSignin) {
      authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseWebApi}`
    }

    try {
      const res = await this.$axios.$post(authUrl, {
        email: authInfo.email,
        password: authInfo.password,
        returnSecureToken: true
      })

      localStorage.setItem('token', res.idToken)
      localStorage.setItem('userId', res.localId)
      Cookie.set('token', res.idToken)
      Cookie.set('userId', res.localId)

      commit('authUser', res)

    } catch (e) {
      console.log(e)
    }
  },
  initAuth({commit}, req) {
    console.log(req)
    // commit('authUser')
  }
}

export const getters = {
  isAuthorized(state) {
    return state.token !== null
  }
}