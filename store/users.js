export const state = () => ({
	userItems: [],
	favoriteItems: []
})

export const mutations = {
	setUserItems(state, items) {
		state.userItems = items
	},
	setFavoriteItems(state, items) {
		state.favoriteItems = items
	},
	addToFavorite(state, item) {
		state.favoriteItems.push(item)
	}
}
export const actions = {
	async getFavoriteItems({commit}, uuid) {
		try {
			const res = await this.$axios.$get(
				`${process.env.firebaseApi}users/${uuid}/favorite.json`
			)
			const items = []
			for (let item in res) {
				items.push({...res[item]})
			}
			commit('setFavoriteItems', items)
		} catch (e) {
			console.log(e)
		}
	},
	async addToFavorite({commit}, {item, uuid}) {
		try {
			await this.$axios.$post(
				`${process.env.firebaseApi}users/${uuid}/favorite.json`,
				item
			)
			commit('addToFavorite', item)
		} catch (e) {
			console.log(e)
		}
	},
	async getUserItems({commit}, uuid) {
		try {
			let params = {
				orderBy: "ownerId",
				equalTo: `${uuid}`
			}
			const res = await this.$axios.$get(
				`${process.env.firebaseApi}items.json`, {
					params: {
						orderBy: 'ownerId'
					}
			}
				// `${process.env.firebaseApi}items.json`, {params: params}
			)
			console.log(res)
			const items = []
			for (let item in res) {
				items.push({...res[item], id: item})
			}
			commit('setUserItems', items)
		} catch (e) {
			console.log(e)
		}
	}
}

export const getters = {
	isFavorite: state => id => {
		if (state.favoriteItems.find(item => item.id === id)) {
			return true
		} else {
			return false
		}
	},
	isOwner: state => id => {
		if (state.userItems.find(item => item.id === id)) {
			return true
		} else {
			return false
		}
	}
}
