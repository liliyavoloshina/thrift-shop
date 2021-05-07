export default function({store, redirect, route}) {
	if (!store.getters['isAuthorized']) {
		return redirect(`/auth?redirect=${route.path}`)
	}
}
