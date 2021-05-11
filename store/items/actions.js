export default {
	async postImage({commit}, {imageData, imageName}) {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		const res = await this.$axios.$post(
			`https://firebasestorage.googleapis.com/v0/b/thrift-shop-2b434.appspot.com/o/items%2F${imageName}?alt=media`,
			// `${process.env.firebaseStorageItemsUrl}items%2F${imageName}?alt=media`,
			imageData,
			config
		)
		const imageUrl = `https://firebasestorage.googleapis.com/v0/b/thrift-shop-2b434.appspot.com/o/items%2F${imageName}?alt=media&token=${res.downloadTokens}`
		// const imageUrl = `${process.env.firebaseStorageItemsUrl}items%2F${imageName}?alt=media&token=${res.downloadTokens}`
		commit('addNewImage', imageUrl)
	},
	async postNewItem({state, commit}, itemData) {
		const dataToSend = {
			name: itemData.name,
			description: itemData.description,
			category: itemData.category,
			gender: itemData.gender,
			imageUrl: state.imageUrl,
			ownerId: itemData.ownerId,
			ownerName: itemData.ownerName,
			createdAt: itemData.createdAt
		}
		const res = await this.$axios.$post(
			`https://thrift-shop-2b434-default-rtdb.firebaseio.com/items.json`,
			// `${process.env.firebaseApi}items.json`,
			dataToSend
		)
		commit('addNewItem', {...dataToSend, id: res.name})
		commit('addToUserItems', {...dataToSend, id: res.name})
	},
	async getItems({commit}) {
		const res = await this.$axios.$get(
			`https://thrift-shop-2b434-default-rtdb.firebaseio.com/items.json`
			// `${process.env.firebaseApi}items.json`
		)
		const items = []
		for (let item in res) {
			items.push({...res[item], id: item})
		}
		commit('setItems', items)
		commit('setFilteredItems', items)
	},
	async getUserItems({commit}, uuid) {
		const res = await this.$axios.$get(
			`https://thrift-shop-2b434-default-rtdb.firebaseio.com/items.json?orderBy="ownerId"&equalTo="${uuid}"`
			// `${process.env.firebaseApi}items.json?orderBy="ownerId"&equalTo="${uuid}"`
		)
		const items = []
		for (let item in res) {
			items.push({...res[item], id: item})
		}
		commit('setUserItems', items)
	},
	async deleteUserItem({commit}, id) {
		await this.$axios.$delete(`https://thrift-shop-2b434-default-rtdb.firebaseio.com/items/${id}.json`)
		// await this.$axios.$delete(`${process.env.firebaseApi}items/${id}.json`)
		await this.$axios.$delete(
			`https://thrift-shop-2b434-default-rtdb.firebaseio.com/users/favorite.json`,
			// `${process.env.firebaseApi}users/favorite.json`,
			{query: {orderBy: 'id', equalTo: `${id}`}}
		)
		commit('deleteUserItem', id)
	},
	// filtering actions
	async sortItems({commit}, value) {
		await commit('setSortingOrder', value)
		await commit('sortItems')
	},
	async filterItemsGender({commit}, value) {
		await commit('setFilterGender', value)
		await commit('filterItems')
	},
	async filterItemsCategory({commit}, value) {
		await commit('setFilterCategory', value)
		await commit('filterItems')
	},
	async resetFilters({commit}) {
		await commit('setFilterGender', '')
		await commit('setFilterCategory', 'all')
		await commit('filterItems')
	}
}
