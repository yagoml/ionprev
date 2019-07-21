<template>
<div>
	<p>A parte mais accessada é: <strong>{{ topAccess.event_name }}</strong></p>
	<p>Foi acessada: <strong>{{ topAccess.count }} vezes</strong></p>
</div>
</template>

<script>
export default {
	created() {
		if (!this.topAccess.event_name)
			this.$store.dispatch('getTopAccess')
	},

	computed: {
		topAccess() {
			return this.$store.getters.topAccess
		}
	}
}
</script>
