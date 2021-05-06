export default {
	async postImage({commit}, {imageData, imageName}) {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		try {
			const res = await this.$axios.$post(
				`${process.env.firebaseStorageItemsUrl}items%2F${imageName}?alt=media`,
				imageData,
				config
			)
			const imageUrl = `${process.env.firebaseStorageItemsUrl}items%2F${imageName}?alt=media&token=${res.downloadTokens}`
			commit('addNewImage', imageUrl)
		} catch (e) {
			console.log(e)
		}
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
			favorite: 0,
			createdAt: itemData.createdAt
		}
		try {
			const res = await this.$axios.$post(
				`${process.env.firebaseApi}items.json`,
				dataToSend
			)
			await this.$axios.$post(
				`${process.env.firebaseApi}users/${itemData.ownerId}/items.json`,
				{...dataToSend, id: res.name}
			)
			commit('addNewItem', {...dataToSend, id: res.name})
		} catch (e) {
			console.log(e)
		}
	},
	async getItems({commit}) {
		const res = await this.$axios.$get(
			`${process.env.firebaseApi}items.json`
		)
		const items = []
		for (let item in res) {
			items.push({...res[item], id: item})
		}
		commit('setItems', items)
		commit('setFilteredItems', items)
	},
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
	},
	async getFavoriteItems({commit}, uuid) {
		try {
			const res = await this.$axios.$get(
				`${process.env.firebaseApi}users/${uuid}/favorite.json`)
				console.log(res)
			commit('setFavoriteItems', res)
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
	}
}
