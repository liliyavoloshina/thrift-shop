import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// import {helpers} from 'vuelidate/lib/validators'

// export const isValidFileSize = (options = {}) => {
// 	return helpers.withParams(options, value => {
// 		if (!value) {
// 			return true
// 		}
// 		const fileSizeinKb = value.size / 1024
// 		const size = Math.round(fileSizeinKb * 100) / 100
// 		return size <= options.maxFileSizeInB / 1024
// 	})
// }

// export const file_size_validation = (value, vm) => {
// 	if (!value) {
// 		return true
// 	}
// 	let file = value
// 	return file.size < 6291456
// }
