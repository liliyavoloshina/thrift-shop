export const state = () => ({
	items: [],
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
			const res = await this.$axios.$post(
				`${process.env.firebaseApi}users/${uuid}/favorite.json`,
				item
			)
			commit('addToFavorite', item)
		} catch (e) {
			console.log(e)
		}
	},
	async getUserItems({commit}, uuid) {
		const user = await this.$axios.$get(
			`${process.env.firebaseApi}users/${uuid}.json`
		)
		this.userInfo = {
			email: user.email,
			name: user.name,
			location: user.location
		}
		const userItems = []
		for (let item in user.items) {
			userItems.push({...user.items[item]})
		}
		console.log(userItems)
		this.userItems = userItems
	}
}

export const getters = {
	isFavorite: state => id => {
		if (state.favoriteItems.find(item => item.id === id)) {
			return true
		} else {
			return false
		}
	}
}
