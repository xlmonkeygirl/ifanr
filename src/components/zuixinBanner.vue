<template>
	<div class="vedio-box">
		<div class="swiper-container" id="swiper-container-zuixin">
			<div class="swiper-wrapper" >
				<div class="swiper-slide" v-for="a in data" @click="toArticalDetail(a._id)">
					<img :src="a.imgUrl" alt="" />
					<p>{{a.title}}</p>
					<p>
						<span>{{a.type}}</span>&nbsp;|
						<span>{{a.time}}</span>
					</p>
					<div class="vedio-play">
						<i class="iconfont">&#xe635;</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
	import Swiper from 'swiper';
	import '../../node_modules/swiper/dist/css/swiper.css';
	import $ from 'jquery';

	export default {
		data() {
			return {
				data: [{
					"_id": 1.0,
					"title": "iOS 12 最好用的功能！这个实用捷径，帮你 1 秒轻松付款",
					"category": "AppSo",
					"type": "视频",
					"imgUrl": "./imgs/yqg-2.jpg",
					"time": "00:56",
					"contents": "升级了iOS 12 却不知道怎么使用捷径？每次付款都要耗半天，这个实用捷径帮你轻松扫码付款，解锁新姿势",
					"vedioUrl": "./uploads/vedio/h0753qdtuzw.mp4",
					"tags": []
				}]
			}
		},
		methods: {
			getBanner() {
				var _this = this;
				$.ajax({
					type: "get",
					url: "http://localhost:12348/vediolist",
					async: true,
					success: function(data) {
						_this.data = data;
					}
				});
			},
			toArticalDetail(id){
//				$.ajax({
//					type:'get',
//					url:'http://localhost:12348/vedio',
//					data:{
//						id:id
//					},
//					success:function(data){
//						location.href='#/articalDetail?id='+id;
//					}
//				})
				location.href = '#/articalDetail?id='+id;
			}
		},
		mounted() {
			this.getBanner();
			var s2 = new Swiper('#swiper-container-zuixin', {
				//				loop: true,
				speed: 1000,
				freeMode: true,
				frooMode: true,

				observer: true,
				observeParents: true

			});
		}
	}
</script>

<style scoped>
	.vedio-box {
		padding: 15px 0;
		border-top: 1px dotted #adadad;
		border-bottom: 1px dotted #adadad;
		height: 230px;
		position: relative;
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.vedio-box .swiper-slide {
		width: 80%!important;
		margin-right: 15px;
		height: 100%;
		font-size: 0.666666rem;
		text-align: center;
		line-height: 4.666666rem;
		color: #000;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	
	.vedio-box .swiper-slide img {
		flex: 6;
		margin-bottom: 10px;
	}
	
	.vedio-box .swiper-slide p {
		flex: 2;
		line-height: 18px;
		text-align: left;
		font-size: 14px;
		font-weight: 600;
	}
	
	.vedio-box .swiper-slide p:last-child {
		font-weight: 12px;
		font-weight: normal;
		padding-top: 5px;
	}
	
	.vedio-box .swiper-slide p:last-child span {
		vertical-align: middle;
	}
	
	.vedio-box .swiper-slide .vedio-play {
		width: 40px;
		height: 40px;
		background: #ec1700;
		border: 2px solid #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		border-radius: 50%;
		transform: translate(-50%,-145%);
	}
	
	.vedio-box .swiper-slide .vedio-play i {
		line-height: 40px;
		border: 10px solid transparent;
		border-left-color: #fff;
		border-radius: 3px;
		font-size: 0;
		width: 0;
		height: 0;
		padding: 0;
		position: absolute;
		top:50%;
		height: 50%;
		margin:-25% 0 0 -8%;
	}
</style>