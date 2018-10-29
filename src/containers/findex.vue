<template>
	<div id="indexWrapper">
		<simpleHeader></simpleHeader>
		<fHeader></fHeader>
		<indexSlideDown></indexSlideDown>
		<banner></banner>
		<navMenu></navMenu>
		<search></search>
		<router-view></router-view>
	</div>
</template>

<script>
	import simpleHeader from '../components/simpleHeader.vue';
	import fHeader from '../components/fHeader.vue';
	import indexSlideDown from '../components/indexSlideDown.vue';
	import banner from '../components/banner.vue';
	import navMenu from '../components/nav-menu.vue';
	import search from '../components/search.vue';
	
	export default {
		components: {
			simpleHeader,
			fHeader,
			indexSlideDown,
			banner,
			navMenu,
			search
//			newsList
		},
		mounted(){
			location.href="#/zuixin";
		}
	}
</script>

<style>
#indexWrapper{
	width: 100%;
}
</style>