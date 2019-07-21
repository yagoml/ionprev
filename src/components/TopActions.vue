<template>
<div>
	<p>Email: <strong>{{ topActions.email }}</strong></p>
	<p>Empresa: <strong>{{ topActions.company }}</strong></p>
	<span>Quantidade de Ações: <strong>{{ topActions.count }}</strong></span>
</div>
</template>

<script>
export default {
	created() {
		if (!this.topActions.email)
			this.$store.dispatch('getTopActions')
	},

	computed: {
		topActions() {
			return this.$store.getters.topActions
		}
	}
}
</script>
