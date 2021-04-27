export default function({store, redirect}) {
	if (!store.getters['auth/isAuthorized']) {
		return redirect('/auth')
	}
}
