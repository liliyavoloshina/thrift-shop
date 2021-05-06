export default {
	isFavorite: state => id => {
		if (state.favoriteItems.find(item => item.id === id)) {
			return true
		} else {
			return false
		}
	}
}
