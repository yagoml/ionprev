import Vue from 'vue'
import VueRouter from 'vue-router'
import ImportFile from './components/ImportFile'
import Reports from './components/Reports'

const routes = [
	{ path: '', component: ImportFile },
	{ path: '/reports', component: Reports }
]

Vue.use(VueRouter)

export default new VueRouter({
	routes
})