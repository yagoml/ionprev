import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	fileData: {}
}

const mutations = {
	setFileData(state, fileData) {
		state.fileData = fileData
	}
}

const actions = {

}

export default new Vuex.Store({
	state,
	getters: {
		fileData: state => state.fileData
	},
	mutations,
	actions
})