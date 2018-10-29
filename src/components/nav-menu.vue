<template>
	<div class="swiper-container nav-container">
		<!--<ul class="swiper-wrapper" ref="banner">
			<li v-for="(a,index) in titleArr" :key="a.id">
				<a href="javascript:;" @click="changestyle(index)" :class="{'active':page==index}">{{a}}</a>
			</li>
		</ul>-->
		<div class="swiper-container" id="swiper-container-nav">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(a,index) in titleArr" :key="a.id">
					<span  @click="changestyle(index)" :class="{'active':page===index}">{{a}}</span>
				</div>
			</div>
			<!--分页-->
		</div>
	</div>
</template>

<script scoped>
	import Swiper from 'swiper';
	import '../../node_modules/swiper/dist/css/swiper.css';
	export default {
		data() {
			return {
				page: 0,
				titleArr: ['最新', 'AppSo', '玩物志', '每日早报', '新锐产品', '董车汇', '评测', '视频', '行业', '小程序', '游戏', '生活', '人物']
			}
		},
		methods: {
			changestyle(index) {
				//				console.log(index)
				this.page = index;
				switch(index) {
					case 0:
						location.href = '#/zuixin';
						break;
					case 1:
						location.href = '#/appso';
						break;
					case 2:
						location.href = '#/wanwuzhi';
						break;
				}
			}
		},
		mounted() {
			var nav = new Swiper('#swiper-container-nav', {
				speed: 1000,
				freeMode: true,
				frooMode: true,
				observer: true,
				observeParents: true,
			});
		}
	}
</script>

<style scoped>
.nav-container {
		/*display: flex;*/
		/*flex-direction: row;*/
		position: relative;
		height: 40px;
	}
.swiper-container {
	width: 100%;
	height: 4.666666rem;
}
.swiper-slide {
	width: 70px!important;
	height: 40px;
	/*font-size: 0.666666rem;*/
	text-align: center;
	line-height: 40px;
	color: #000;
}
.swiper-slide span{
	/*padding: 0 10px;*/
	font-size:16px;
	font-weight:600;
	margin-right: 5px;
	display: inline-block;
	/*border-bottom:2px solid #F13B03;*/
}
.active{
	color:#F13B03!important;
	text-decoration: underline;
}
</style>