<template>
	<div class="news-list">
		<router-view></router-view>
		<p>路由</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		}
	}
</script>

<style>
	.news-list{
		width: 90%;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
</style>