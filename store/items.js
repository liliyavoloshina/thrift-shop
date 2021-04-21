import {v4 as uuidv4} from 'uuid'

export const state = () => ({
	items: [],
	imageUrl: null
})

export const mutations = {
	addNewImage(state, imageUrl) {
		state.imageUrl = imageUrl
	},
	addNewItem(state, item) {
		state.items.push(item)
	}
}

export const actions = {
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
			id: uuidv4(),
			name: itemData.name,
			description: itemData.description,
			category: itemData.category,
			gender: itemData.gender,
			imageUrl: state.imageUrl,
			owner: 'Liliya',
			favorite: 0,
			createdAt: itemData.createdAt
		}

		try {
      await this.$axios.$post(`${process.env.firebaseApi}items.json`, dataToSend)
			commit('addNewItem', dataToSend)
		} catch (e) {
			console.log(e)
		}
	}
}
