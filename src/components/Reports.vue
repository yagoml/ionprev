<template>
<div>
	<a href="javascript:" @click="usersClicked()">Usuários</a> |
	<a href="javascript:">Ações de Empresas</a>

	<users v-if="showUsers" @back="showUsers = false" />
</div>
</template>

<script>
import Users from './Users'

export default {
	components: {
		Users
	},
	computed: {
		fileData() {
			return this.$store.getters.fileData
		}
	},
	data() {
		return {
			showUsers: false
		}
	},
	methods: {
		usersClicked() {
			this.showUsers = true
		},
	}
}
</script>
