import Vue from 'vue'
import Vuex from 'vuex'
import Request from './request-helper'

const SERVER_URL = 'http://localhost:3000/'

Vue.use(Vuex)

const state = {
	fileData: {},
	users: []
}

const mutations = {
	setFileData(state, fileData) {
		state.fileData = fileData
	},
	setUsers(state, users) {
		state.users = users
	}
}

const actions = {
	getUsers(context, data) {
		Request.get({
			route: `${ SERVER_URL }users`,
			data: null,
			callback: (users) =>
				context.commit('setUsers', users)
		})
	},
	saveFileData(context, data) {
		context.commit('setFileData', data)

		Request.post({
			route: `${ SERVER_URL }files/save`,
			data: data,
			callback: (res) => {
				console.log(res)
			}
				
		})
	}
}

export default new Vuex.Store({
	state,
	getters: {
		fileData: state => state.fileData,
		users: state => state.users
	},
	mutations,
	actions
})