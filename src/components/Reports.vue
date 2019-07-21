<template>
<div>
	<a href="javascript:" @click="usersClicked()">Usuários</a> |
	<a href="javascript:" @click="companyActionsClicked()">Ações de Empresas</a>

	<users v-if="showUsers" @back="showUsers = false" />
	<companyActions v-if="showCompanyAcions" @back="showCompanyAcions = false" />
</div>
</template>

<script>
import Users from './Users'
import CompanyActions from './CompanyActions'

export default {
	components: {
		Users,
		CompanyActions
	},
	computed: {
		fileData() {
			return this.$store.getters.fileData
		}
	},
	data() {
		return {
			showUsers: false,
			showCompanyAcions: false
		}
	},
	methods: {
		usersClicked() {
			this.showCompanyAcions = false
			this.showUsers = true
		},
		companyActionsClicked() {
			this.showUsers = false
			this.showCompanyAcions = true
		}
	}
}
</script>
