export default {
	isOwner: (state, rootGetters) => id => {
		if (rootGetters.isAuthorized == false) {return} 
		if (state.userItems.find(item => item.id == id)) {
			return true
		} else {
			return false
		}
	}
}
