export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'thrift-shop',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/style'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['~plugins/vuelidate.js'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/style-resources'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios'
	],
	styleResources: {
		scss: '~assets/variables.scss'
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	// axios: {
	// 	headers: {
	// 		common: {
	// 			'Content-Type': 'multipart/form-data'
	// 		}
	// 	}
	// },

	env: {
		firebaseStorageItemsUrl: process.env.FIREBASE_STORAGE_ITEMS,
		firebaseApi: process.env.FIREBASE_API
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
