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
	},
	deleteUserItem(state, id) {
		const item = state.userItems.find((item) => item.id === id)
    const index = state.userItems.indexOf(item)
    if (index !== -1) {
      state.userItems.splice(index, 1)
    }
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
			const res = await this.$axios.$get(
				`${process.env.firebaseApi}items.json?orderBy="ownerId"&equalTo="${uuid}"`
			)
			const items = []
			for (let item in res) {
				items.push({...res[item], id: item})
			}
			commit('setUserItems', items)
		} catch (e) {
			console.log(e)
		}
	},
	async deleteUserItem({commit}, id) {
		await this.$axios.$delete(
			`${process.env.firebaseApi}items/${id}.json`
		)
		await this.$axios.$delete(
			`${process.env.firebaseApi}users/favorite.json`, {query: {orderBy: 'id', equalTo: `${id}`}}
		)
		commit('deleteUserItem', id)
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
		if (state.userItems.find(item => item.id == id)) {
			return true
		} else {
			return false
		}
	}
}
