<script setup lang="ts">
const name = ref('山田')
const testFunc = () => {
	return '太郎'
}

onMounted(() => {
	console.log('onMounted')
})

// useFetch を使って API 叩く
// 参考: https://zenn.dev/coedo/articles/cc000738a0f069
const { data } = useFetch('/api/hello')
console.log(data.value)

const foo = useFoo()
</script>

<template>
	<div>
		テスト: {{ name }}  {{ testFunc() }}
		<button>
			<!-- components は自動でインポートされる -->
			<AtomsTheButton name="送信する" />
		</button>

		{{ foo }}
	</div>
</template>
