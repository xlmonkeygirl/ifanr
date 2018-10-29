<template>
	<div id="artical-detail-header">
		<div>
			<span>
				<img :src="logoUrl" alt="" />
			</span>
		</div>
		<div>
			<span @click="setIsShowSlideDown">
				<i class="iconfont">&#xe601;</i>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logoUrl: require('../assets/imgs/logo (1).svg')
			}
		},
		methods: {
			setIsShowSlideDown() {
				this.$store.state.isShowSlideDown = !this.$store.state.isShowSlideDown;
			}
		}
	}
</script>

<style>
	#artical-detail-header {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #efefef;
	}
	
	#artical-detail-header div {
		/*flex: 5;*/
		width: 50%;
		height: 50px;
		padding: 15px 10px 10px 0px;
		line-height: 50px;
	}
	
	#artical-detail-header div span:first-child {
		display: block;
		height: 80%;
	}
	
	#artical-detail-header div span img {
		width: 100%;
		height: 100%;
		vertical-align: top;
		transform: translateX(-30px);
	}
	
	#artical-detail-header div:last-child span {
		display: block;
		text-align: right;
		/*height: 80%;*/
		line-height: 20px;
	}
	
	#artical-detail-header div:last-child span i {
		font-size: 20px;
		vertical-align: top;
	}
</style>