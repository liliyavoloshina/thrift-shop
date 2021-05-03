export default {
	getItemById: state => id => {
		return state.items.find(item => item.id === id)
	}
	// getFilteredItems(state)
	// openTodos: state => {
	//   return state.todos.filter(todo => !todo.done);
	// },
	// getTodoById: state => id => {
	//   return state.todos.find(todo => todo.id === id);
	// },
	// sortedTodos: state => {
	//   //remember sort mutates the original array so, copy it first with a spread.
	//   return [...state.todos].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
	// }
}
