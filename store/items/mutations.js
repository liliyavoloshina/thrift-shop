import * as Filters from '~/helpers/filters'

export default {
	addNewImage(state, imageUrl) {
		state.imageUrl = imageUrl
	},
	addNewItem(state, item) {
		state.items.push(item)
	},
	setItems(state, items) {
		state.items = items
	},
	setFilteredItems(state, items) {
		state.filteredItems = items
	},
	setSortingOrder(state, value) {
		state.filters.order = value
	},
	sortItems(state) {
		const items = [...state.filteredItems]
		state.filteredItems = Filters.sortItems(state.filters.order, items)
	},
	setFilterGender(state, value) {
		state.filters.gender = value
	},
	setFilterCategory(state, value) {
		state.filters.category = value
	},
	filterItems(state) {
		const items = [...state.items]
		state.filteredItems = items
		state.filteredItems = Filters.filterItems(state.filters, items)
	}
}
