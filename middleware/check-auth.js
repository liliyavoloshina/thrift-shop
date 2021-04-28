export default function({store, redirect}) {
	if (!store.getters['isAuthorized']) {
		return redirect('/auth')
	}
}
