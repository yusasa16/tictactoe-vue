<script setup lang="ts">

const props = defineProps({
	value: String,
	num: Number
});

const emit = defineEmits(['btn-click']);

function onClickBtn() {
	emit('btn-click', props.num);
}
</script>

<template>
	<button
		type="button"
		:disabled="props.value"
		@click="onClickBtn"
		>
		<span v-if="props.value === null">null</span>
		<span v-else-if="props.value === 'o'">まる</span>
		<span v-else-if="props.value === 'x'">ばつ</span>
	</button>
</template>

<style lang="scss" scoped>
button {
	background-color: #fff;
	border: 0;
	width: 100%;
	height: 100%;

	&[disabled] {
		color: red;
	}
}
</style>
