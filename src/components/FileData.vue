<template>
	<div>
		<table v-if="fileData.length">
			<thead>
				<tr>
					<td>Usuário</td>
					<td>Empresa</td>
					<td>Evento</td>
					<td>Ação</td>
					<td>Momento</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, index) in fileData" :key="index">
					<td>{{ data.user_id }}</td>
					<td>{{ data.company_id }}</td>
					<td>{{ data.event_name }}</td>
					<td>{{ data.action }}</td>
					<td>{{ data.date_time }}</td>
				</tr>
			</tbody>
		</table>
		<div v-else>
			Sem dados para exibir.
		</div>
	</div>
</template>

<script>
export default {
	props: {
		fileData: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style lang="sass" scoped>

</style>
