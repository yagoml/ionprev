import Vue from 'vue'
import Vuex from 'vuex'
import Request from './request-helper'

const SERVER_URL = 'http://localhost:3000/'

Vue.use(Vuex)

const state = {
	fileData: {},
	users: [],
	companies: [],
	reportCompany: [],
	topActions: {},
	topAccess: {},
	companiesActions: []
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
	},
	setTopActions(state, topActions) {
		state.topActions = topActions
	},
	setTopAccess(state, topAccess) {
		state.topAccess = topAccess
	},
	setCompaniesActions(state, companiesActions) {
		state.companiesActions = companiesActions
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
	},
	getTopActions(context) {
		Request.get({
			route: `${ SERVER_URL }users/topActions`,
			data: null,
			callback: (topActions) =>
				context.commit('setTopActions', topActions)
		})
	},
	getTopAccess(context) {
		Request.get({
			route: `${ SERVER_URL }users/topAccess`,
			data: null,
			callback: (topAccess) =>
				context.commit('setTopAccess', topAccess)
		})
	},
	getCompaniesActions(context) {
		Request.get({
			route: `${ SERVER_URL }companies/actions`,
			data: null,
			callback: (companiesActions) =>
				context.commit('setCompaniesActions', companiesActions)
		})
	}
}

export default new Vuex.Store({
	state,
	getters: {
		fileData: state => state.fileData,
		users: state => state.users,
		companies: state => state.companies,
		reportCompany: state => state.reportCompany,
		topActions: state => state.topActions,
		topAccess: state => state.topAccess,
		companiesActions: state => state.companiesActions
	},
	mutations,
	actions
})