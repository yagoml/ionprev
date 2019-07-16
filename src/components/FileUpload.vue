<template>
	<div class="file-upload">
		<form enctype="multipart/form-data">
			<label for="csvFile">Arquivo CSV:</label>&nbsp;
			<input type="file" name="csvFile" @change="onFileChange" />
			<button type="reset" @click="resetFile()" v-show="fileData.length">Remover</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fileData: []
		}
	},
	methods: {
		onFileChange(e) {
			const files = e.target.files || e.dataTransfer.files
			if (!files.length) return
			this.createInput(files[0])
		},
		createInput(file) {
			const reader = new FileReader()
			reader.onload = (e) => {
				this.processFileData(reader.result)
			}
			reader.readAsText(file)
		},
		processFileData(input) {
			this.fileData = []
			const lines = input.replace(/\r/, '').split(/\n/)
			const fields = lines[0].split(',')

			for(let i = 1; i < lines.length - 1; i++) {
				let result = {}
				const lineData = lines[i].split(',')

				for(let j = 0; j < fields.length; j++) {
					result[fields[j]] = lineData[j]
				}

				this.fileData.push(result)
				this.$emit('fileProcessed', this.fileData)
			}
		},
		resetFile() {
			this.fileData = []
			this.$emit('fileProcessed', this.fileData)
		}
	}
}
</script>

<style lang="sass" scoped>

</style>
