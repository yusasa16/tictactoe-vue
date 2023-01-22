<script setup lang="ts">
const props = defineProps({
	num: Number
})
</script>

<template>
	<button
		type="button"
		>
		{{ props.num }}
	</button>
</template>

<style lang="scss" scoped>
button {
	background-color: #fff;
	border: 0;
}
</style>
