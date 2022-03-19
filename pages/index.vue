<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const name = ref('山田')
		const testFunc = () => {
			return '太郎'
		}
		return {
			name,
			testFunc
		}
	}
})

</script>

<template>
	<div>
		テスト: {{ name }}  {{ testFunc() }}
	</div>
</template>
