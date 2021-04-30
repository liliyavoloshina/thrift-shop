export default {
	addNewImage(state, imageUrl) {
		state.imageUrl = imageUrl
	},
	addNewItem(state, item) {
		console.log(state.items)
		state.items.push(item)
	},
	setItems(state, items) {
		state.items = items
	},
	sortItems(state, sortKey) {
		const items = state.items
		if (sortKey === 'newest') {
			items.sort(function(a, b) {
				let c = new Date(a.createdAt)
				let d = new Date(b.createdAt)
				return d - c
			})
			state.items = items
		}
		if (sortKey === 'oldest') {
			items.sort(function(a, b) {
				let c = new Date(a.createdAt)
				let d = new Date(b.createdAt)
				return c - d
			})
			state.items = items
		}
		if (sortKey === 'popular') {
			items.sort(function(a, b) {
				let c = a.favorite
				let d = b.favorite
				return d - c
			})
			state.items = items
		}
		if (sortKey === 'unpopular') {
			items.sort(function(a, b) {
				let c = a.favorite
				let d = b.favorite
				return c - d
			})
			state.items = items
		}
	},
	filterItems(state, {category, gender}) {
		if (category && gender) {
			console.log('cat and gend')
			state.items = state.items.filter(item => {
				item.category == category && item.gender == gender
			})
		} else if (gender) {
			console.log('gend')
			state.items = state.items.filter(item => {
				item.gender == 'female'
			})
		} else if (category) {
			console.log('cat')
			state.items = state.items.filter(item => {
				item.category == category
			})
		}
	}
}
