export default {
	isFavorite: state => id => {
		return state.favoriteItems.find(item => item.id === id)
	}
}
