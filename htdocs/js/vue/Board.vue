<script setup lang="ts">
import Square from './Square.vue'

const squareList = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
]
</script>

<template>
	<div v-for="row in squareList" class="row">
		<div v-for="item in row" class="col">
			<Square :num="item" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.row {
	display: flex;
	width: 300px;
	margin-inline: auto;
}

.col {
	border: 1px solid #000;
	width: calc(100% / 3);
	height: 100px;

	button {
		width: 100%;
		height: 100%;
	}
}
</style>
