import Vue from 'vue'
import Vuex from 'vuex'
import Request from './request-helper'

const SERVER_URL = 'http://localhost:3000/'

Vue.use(Vuex)

const state = {
	fileData: {},
	users: [],
	companies: [],
	reportCompany: []
}

const mutations = {
	setFileData(state, fileData) {
		state.fileData = fileData
	},
	setUsers(state, users) {
		state.users = users
	},
	setCompanies(state, companies) {
		state.companies = companies
	},
	setReportCompany(state, data) {
		state.reportCompany = data
	}
}

const actions = {
	getUsers(context) {
		Request.get({
			route: `${ SERVER_URL }users`,
			data: null,
			callback: (users) =>
				context.commit('setUsers', users)
		})
	},
	saveFileData(context, data) {
		Request.post({
			route: `${ SERVER_URL }files/save`,
			data: data,
			callback: (res) =>
				context.commit('setFileData', data)
		})
	},
	getCompanies(context) {
		Request.get({
			route: `${ SERVER_URL }companies`,
			data: null,
			callback: (companies) =>
				context.commit('setCompanies', companies)
		})
	},
	reportCompany(context, data) {
		Request.post({
			route: `${ SERVER_URL }companies/reports`,
			data: data,
			callback: (responseData) =>
				context.commit('setReportCompany', responseData)
		})
	}
}

export default new Vuex.Store({
	state,
	getters: {
		fileData: state => state.fileData,
		users: state => state.users,
		companies: companies => state.companies,
		reportCompany: reportCompany => state.reportCompany
	},
	mutations,
	actions
})