export default {
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
	css: ['~/assets/style'],
	plugins: [
		'~plugins/vuelidate.js',
		'~plugins/vue-content-placeholder.client.js'
	],
	components: true,
	buildModules: ['@nuxtjs/style-resources', '@nuxtjs/moment'],
	modules: [
		'@nuxtjs/axios',
		'cookie-universal-nuxt'
	],
	// axios: {
  //   baseURL: process.env.BASE_URL || 'http://localhost:3000'
  // },
	styleResources: {
		scss: '~assets/variables.scss'
	},
	// env: {
	// 	firebaseStorageItemsUrl: process.env.FIREBASE_STORAGE_ITEMS,
	// 	firebaseApi: process.env.FIREBASE_API,
	// 	firebaseWebApi: process.env.FIREBASE_WEB_API
	// },
	loading: '~/components/UI/Loading.vue',
	build: {},
	// server: {
  //   port: process.env.PORT || 3000
  // }
}
