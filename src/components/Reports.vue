<template>
<div>
	<div>
		<a
			href="javascript:"
			@click="toggleView('users')"
			title="Usuários cadastrados"
		>Usuários</a> |
		<a
			href="javascript:"
			@click="toggleView('companyActions')"
			title="Ações que a empresa X executou nos últimos X dias"
		>Relatório de empresas</a>
		<a
			href="javascript:"
			@click="toggleView('topActions')"
			title="Email e empresa do usuário que realizou a maior quantidade de ações dentro do sistema"
		>Maior qtd. de ações</a>
		<a
			href="javascript:"
			@click="toggleView('topAccess')"
			title="Parte do sistema que os usuários mais acessam"
		>Parte mais acessada</a>
		<a
			href="javascript:"
			@click="toggleView('companiesActions')"
			title="Ações realizadas por cada empresa"
		>Ações por empresa</a>
	</div>

	<users v-if="showUsers" @back="showUsers = false" />
	<companyActions v-if="showCompanyAcions" @back="showCompanyAcions = false" />
	<topActions v-if="showTopActions" @back="showTopActions = false" />
	<topAccess v-if="showTopAccess" @back="showTopAccess = false" />
	<companiesActions v-if="showCompActions" @back="showCompActions = false" />
</div>
</template>

<script>
import Users from './Users'
import CompanyActions from './CompanyActions'
import TopActions from './TopActions'
import TopAccess from './TopAccess'
import CompaniesActions from './CompaniesActions'

export default {
	components: {
		Users,
		CompanyActions,
		TopActions,
		TopAccess,
		CompaniesActions
	},
	computed: {
		fileData() {
			return this.$store.getters.fileData
		}
	},
	data() {
		return {
			showUsers: false,
			showCompanyAcions: false,
			showTopActions: false,
			showTopAccess: false,
			showCompActions: false
		}
	},
	methods: {
		toggleView(view) {
			this.showUsers = false
			this.showCompanyAcions = false
			this.showTopActions = false
			this.showTopAccess = false
			this.showCompActions = false

			switch(view) {
				case 'users':
					this.showUsers = true
					break
				case 'companyActions':
					this.showCompanyAcions = true
					break
				case 'topActions':
					this.showTopActions = true
					break
				case 'topAccess':
					this.showTopAccess = true
					break
				case 'companiesActions':
					this.showCompActions = true
					break
				default:
					break
			}
		}
	}
}
</script>
