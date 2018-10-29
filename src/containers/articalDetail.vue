<template>
	<div id="artical-detail-wrapper">
		<aHeader></aHeader>
		<avedio></avedio>
		<articalFooter></articalFooter>
		<relativeArtical></relativeArtical>
		<indexSlideDown></indexSlideDown>
		<search></search>
	</div>
</template>

<script>
	import aHeader from '../components/articalDetailHeader.vue';
	import avedio from '../components/vedio.vue';
	import relativeArtical from '../components/relativeArtical.vue';
	import articalFooter from '../components/artical-footer.vue';
	import indexSlideDown from '../components/indexSlideDown.vue';
	import search from '../components/search.vue';
	export default{
		data(){
			return {
				
			}
		},
		components:{
			aHeader,
			avedio,
			relativeArtical,
			articalFooter,
			indexSlideDown,
			search
		}
	}
</script>

<style>
	#artical-detail-wrapper{
		display: flex;
		flex-direction: column;
	}
	
</style>