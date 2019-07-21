<template>
<div>
	<table v-if="users.length">
		<tr>
			<th>ID</th>
			<th>Nome</th>
			<th>E-mail</th>
			<th>Empresa</th>
		</tr>
		<tr v-for="user in users" :key="user.id">
			<th>{{ user.id }}</th>
			<th>{{ user.name }}</th>
			<th>{{ user.email }}</th>
			<th>{{ user.company_id }}</th>
		</tr>
	</table>

	<button @click="$emit('back')">Voltar</button>
</div>
</template>

<script>
export default {
	created() {
		if (!this.users.length)
			this.$store.dispatch('getUsers')
	},

	computed: {
		users() {
			return this.$store.getters.users
		}
	}
}
</script>
