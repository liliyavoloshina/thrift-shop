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
			{hid: 'description', name: 'description', content: 'Online shop for exchanging things'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
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
	plugins: [
		'~plugins/vuelidate.js',
		'~plugins/vue-content-placeholder.client.js'
	],
	// '~plugins/moment.client.js'

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/style-resources', '@nuxtjs/moment'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'cookie-universal-nuxt'
	],
	styleResources: {
		scss: '~assets/variables.scss'
	},
	axios: {
    baseURL: 'https://thrift-shop.herokuapp.com/'
  },

	env: {
		firebaseStorageItemsUrl: process.env.FIREBASE_STORAGE_ITEMS,
		firebaseApi: process.env.FIREBASE_API,
		firebaseWebApi: process.env.FIREBASE_WEB_API
	},

	loading: '~/components/UI/Loading.vue',

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
