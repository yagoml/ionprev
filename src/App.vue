<template>
	<div id="app">
		<FileUpload @fileProcessed="showData" />
		<br>
		<FileData :fileData="fileData" />
	</div>
</template>

<script>
import FileUpload from './components/FileUpload.vue'
import FileData from './components/FileData.vue'

export default {
	name: 'app',
	components: {
		FileUpload,
		FileData
	},
	data() {
		return {
			fileData: []
		}
	},
	methods: {
		showData(fileData) {
			this.fileData = fileData
		}
	}
}
</script>

<style lang="scss">

</style>
