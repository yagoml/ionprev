<template>
<div>
	<table v-if="companiesActions.length">
		<thead>
			<th>Empresa</th>
			<th>Ações</th>
		</thead>
		<tbody>
			<tr v-for="(companyAction, index) in companiesActions" :key="index">
				<td>{{ companyAction.name }}</td>
				<td>{{ companyAction.actions }}</td>
			</tr>
		</tbody>
	</table>
</div>
</template>

<script>
export default {
	created() {
		if (!this.companiesActions.length)
			this.$store.dispatch('getCompaniesActions')
	},

	computed: {
		companiesActions() {
			return this.$store.getters.companiesActions
		}
	}
}
</script>
