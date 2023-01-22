<script setup lang="ts">
import { ref, Ref } from 'vue'

const props = defineProps({
	num: Number
});

const state: Ref<null | boolean> = ref(null);

function onClickBtn() {
	state.value = true;
}
</script>

<template>
	<button
		type="button"
		:aria-label="props.num + '番目のボタン'"
		@click="onClickBtn"
		>
		{{ state ? '❌' : ''}}
	</button>
</template>

<style lang="scss" scoped>
button {
	background-color: #fff;
	border: 0;
}
</style>
