export function sortItems(order, items) {
	const orderedItems = [...items]

	if (order === 'newest') {
		orderedItems.sort(function(a, b) {
			let c = new Date(a.createdAt)
			let d = new Date(b.createdAt)
			return d - c
		})
	} else if (order === 'oldest') {
		orderedItems.sort(function(a, b) {
			let c = new Date(a.createdAt)
			let d = new Date(b.createdAt)
			return c - d
		})
	} else if (order === 'popular') {
		orderedItems.sort(function(a, b) {
			let c = a.favorite
			let d = b.favorite
			return d - c
		})
	} else if (order === 'unpopular') {
		orderedItems.sort(function(a, b) {
			let c = a.favorite
			let d = b.favorite
			return c - d
		})
	}

	return orderedItems
}

export function filterItems(filters, items) {
	let filteredItems = [...items]

	if (filters.gender != '') {
		const filtered = filteredItems.filter(
			item => item.gender == filters.gender
		)
		filteredItems = filtered
	}

	if (filters.category != 'all') {
		const filtered = filteredItems.filter(
			item => item.category == filters.category
		)
		filteredItems = filtered
	}
	return filteredItems
}
