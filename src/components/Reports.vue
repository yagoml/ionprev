<template>
	<div>
		<a href="javascript:">Ações de Empresas</a>
	</div>
</template>

<script>
export default {
	computed: {
		fileData() {
			return this.$store.getters.fileData
		}
	}
}
</script>
