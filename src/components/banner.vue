<template>
	<div class="banner-container">
		<div class=" swiper-container " id="swiper-container " ref="aa">
			<div class="swiper-wrapper ">
				<div class="swiper-slide " v-for="a in bannerImgs " :key="a.id ">
					<img :src="a " alt=" " />
				</div>
			</div>
			<!--分页-->
			<div class="swiper-pagination "></div>
		</div>
		<div class="banner-box">
			<div v-for="a in bannerNextArr" class="banner-next-item" @click="toArticalDetail(a.id)">
				<a>
					<img :src="a.url" alt="" />
					<p>{{a.title}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import '../../node_modules/swiper/dist/css/swiper.css';
	export default {
		data() {
			return {
				bannerImgs: [
					require('../assets/imgs/banner1.jpg'),
					require('../assets/imgs/banner2.jpeg'),
					require('../assets/imgs/banner1.jpg')
				],
				bannerNextArr: [{
					id:5,
					title: '用户数是《王者荣耀》的百分之一，收入却是全球第一！这个小众游戏究竟有什么魔力？',
					url: require('../assets/imgs/bannerNext1.jpg')
				}, {
					id:9,
					title: '替苹果想方案：应该重塑 iOS 消息推送系统',
					url: require('../assets/imgs/bannerNext2.jpg')
				}, {
					id:8,
					title: '联想带来了五款新品，还想给你偶像自拍的感觉。',
					url: require('../assets/imgs/bannerNext3.gif')
				}, {
					id:6,
					title: '「云玩家」捧红的《底特律：变人》，到底值不值得买？',
					url: require('../assets/imgs/bannerNext4.jpg')
				}]
			}
		},
		mounted() {
			var oBox = this.$refs.aa;
			var s1 = new Swiper(oBox, {
				autoplay: {
					delay: 1000,
					disableOnInteraction: false //设置成拖拽后还能继续运行
				},
				loop: true,
				speed: 2000,
				pagination: {
					el: '.swiper-pagination'
				},
				//				effect:'cube'
			});
		},
		methods:{
			toArticalDetail(id){
				location.href = '#/articalDetail?id='+id;
			}
		}
	}
</script>

<style scoped>
	.banner-container {
		width: 90%;
		/*justify-content: space-between;*/
		margin: 0px 16px;
		position: relative;
		margin-top: -64px;
		border: 2px solid #fff;
		/*width: 288px;*/
		height: 442px;
		padding-bottom:5px;
		border-bottom: 2px solid #ff902f;
		margin-bottom: 12px;
	}
	
	.swiper-container {
		width: 100%;
		height: 170px;
	}
	
	.swiper-slide {
		width: 100%;
		height: 4.666666rem;
		font-size: 0.666666rem;
		text-align: center;
		line-height: 4.666666rem;
		color: #000;
	}
	.swiper-slide img{
		width: 100%;
	}
	.banner-container .banner-box {
		display: flex;
		font-size: 12px;
		flex-direction: row;
		width: 100%;
		flex-wrap: wrap;
	}
	
	.banner-container .banner-box a p {
		color: #333;
		font-weight: 500;
	}
	
	.banner-container .banner-box .banner-next-item {
		width: 49%;
		display: inline-block;
	}
	
	.banner-container .banner-box .banner-next-item a img {
		width: 100%;
		height: 92px;
	}
	
	.banner-container .banner-box .banner-next-item a p {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		line-height:18px;
	}
	
	.banner-container .banner-box .banner-next-item:nth-child(odd) {
		border-right: 2px solid #fff;
	}
	
	.banner-container .banner-box .banner-next-item:nth-child(even) {
		border-left: 1px solid #fff;
	}
</style>