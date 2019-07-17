<template>
	<div>
		<FileUpload @fileProcessed="showData" />
		<br>
		<FileData />
	</div>
</template>

<script>
import FileUpload from './FileUpload.vue'
import FileData from './FileData.vue'

export default {
	components: {
		FileUpload,
		FileData
	},
	methods: {
		showData(fileData) {
			this.$store.commit('setFileData', fileData)
		}
	}
}
</script>

