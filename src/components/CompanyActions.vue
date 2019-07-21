<template>
<div>
	<div>
		<form @submit="submit">
			<div>
				<label for="companies">Empresa:</label>
				<select name="companies" v-model="formData.companyID">
					<option value="0">Selecione</option>
					<option
						v-for="company in companies"
						:value="company.id"
						:key="company.id"
					>{{ company.name }}</option>
				</select>
			</div>

			<div>
				<label for="from">De:</label>
				<input type="date" name="from" v-model="formData.from" />
			</div>
			<div>
				<label for="to">Até:</label>
				<input type="date" name="to" v-model="formData.to" />
			</div>

			<div class="error" v-if="error">
				{{ errorMessage }}
			</div>

			<button type="reset" @click="resetReport()">Resetar</button>
			<button type="submit">Consultar</button>
		</form>
	</div>

	<div v-if="reportCompany.length">
		<table>
			<thead>
				<th>Usuário</th>
				<th>Evento</th>
				<th>Ação</th>
				<th>Data e Hora</th>
				<th>Email</th>
			</thead>
			<tbody>
				<tr v-for="(report, index) in reportCompany" :key="index">
					<td>{{ report.name }}</td>
					<td>{{ report.event_name }}</td>
					<td>{{ report.action }}</td>
					<td>{{ getDate(report.date_time) }}</td>
					<td>{{ report.email }}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<button @click="$emit('back')">Voltar</button>
</div>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				companyID: 0,
				from: null,
				to: null
			},
			error: false,
			errorMessage: ''
		}
	},

	created() {
		if (!this.companies.length)
			this.$store.dispatch('getCompanies')
	},

	computed: {
		companies() {
			return this.$store.getters.companies
		},
		reportCompany() {
			return this.$store.getters.reportCompany
		}
	},

	methods: {
		submit(event) {
			event.preventDefault()

			if (!this.formData.companyID || this.formData.from === '' || this.formData.to === '' ) {
				this.errorMessage = 'Preencha todos os campos.'
				this.error = true
			} else {
				this.$store.dispatch('reportCompany', this.formData)
			}
		},
		resetReport() {
			this.$store.commit('setReportCompany', [])
		},
		getDate(time) {
			time = new Date(time)
			return time.toLocaleDateString() + ' - ' + time.toLocaleTimeString()
		}
	}
}
</script>
