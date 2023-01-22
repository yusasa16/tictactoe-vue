<script setup lang="ts">
import { ref } from 'vue'
// import Square from './Square.vue'

const squareNum = 3 * 3;
let clickedNum = 0;

const squareList = ref(Array(squareNum).fill(null));

function onClickBtn(num: Number) {
	if(clickedNum > squareNum) return;

	if(clickedNum % 2 === 0) {
		squareList.value[num] = 'o';
	} else {
		squareList.value[num] = 'x';
	}

	clickedNum++;
}
</script>

<template>
	<div class="board">
		<div v-for="(value, index) in squareList" class="square">
			<button
				type="button"
				:disabled="value"
				@click="onClickBtn(index)"
				>
				<span v-if="value === null">null</span>
				<span v-else-if="value === 'o'">まる</span>
				<span v-else-if="value === 'x'">ばつ</span>
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board {
	display: flex;
	flex-wrap: wrap;
	width: 300px;
	margin-inline: auto;

	> .square {
		border: 1px solid #000;
		width: calc(100% / 3);
		height: 100px;
		box-sizing: border-box;

		> button {
			background-color: #fff;
			border: 0;
			width: 100%;
			height: 100%;

			&[disabled] {
				color: red;
			}
		}
	}
}
</style>
