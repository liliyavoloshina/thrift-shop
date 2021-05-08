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
	async postNewItem({state, commit, rootState}, itemData) {
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
		try {
			const res = await this.$axios.$post(
				`${process.env.firebaseApi}items.json`,
				dataToSend
			)
			commit('addNewItem', {...dataToSend, id: res.name})
			// также добавление в товары именно этого юзера, чтобы определять, какие в фаворитах, какие нет без обращния к серверу
			commit('users/addToUserItems', {...dataToSend, id: res.name}, {root: true})
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
	}
}
