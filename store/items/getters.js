export default {
	isOwner: state => id => {
		if (state.userItems.find(item => item.id == id)) {
			return true
		} else {
			return false
		}
	}
}
