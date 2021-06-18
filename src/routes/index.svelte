<script lang="ts">
	let a: string = 'sai';
</script>

{a}

<div class="bg-green-200">hi</div>
<div class="bg-red-200">hi</div>

<style>
	:global(body) {
		@apply m-2 bg-gray-100;
	}
	div {
		@apply text-gray-700 p-3 m-2;
	}
</style>
