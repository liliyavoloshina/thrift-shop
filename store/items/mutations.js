export default {
	addNewImage(state, imageUrl) {
		state.imageUrl = imageUrl
	},
	addNewItem(state, item) {
		state.items.push(item)
	},
	setItems(state, items) {
		state.items = items
	}
}
