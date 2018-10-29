<template>
	<div id="artical-footer">
		<div class="swiper-container" id="swiper-container3">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="a in footerArr">
					<img :src="a.cover_img" alt="" />
					<h3>{{a.title}}</h3>
					<span class="button">
						打开APP
					</span>
					<!--<a href="">12345</a>-->
				</div>
			</div>
			<!--分页-->
			<!--<div class="swiper-pagination3"></div>-->
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import '../../node_modules/swiper/dist/css/swiper.css';
	import $ from 'jquery';
	export default {
		data() {
			return {
				footerArr: [{
					_id: '',
					category: "",
					post_id: '',
					date: '',
					title: "",
					cover_img: "",
					link: "",
					author: "",
					excerpt: ""
				}]
			}
		},
		mounted() {
			var self = this;
			$.ajax({
				type: "get",
				url: "http://localhost:12348/relative",
				async: true,
				success: function(data) {
					self.footerArr = data.slice(4);
				}
			});
			var s3=new Swiper('#swiper-container3',{
				autoplay:{
					delay:1000,
					disableOnInteraction:false//设置成拖拽后还能继续运行
				},
				loop:true,
				speed:3000,
//				freeMode: true,
//				frooMode: true,

				observer: true,
				observeParents: true,
//				pagination:{
//					el:'.swiper-pagination3'
//				},
			});
		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 4.666666rem;
	}
	
	.swiper-slide {
		width: 100%;
		height: 160px;
		font-size: 0.666666rem;
		text-align: center;
		line-height: 4.666666rem;
		color: #000;
	}
	
	#artical-footer{
		position: fixed;
		bottom: 0;
		left: 0;
	}
	#artical-footer .swiper-slide{
		border-top:1px solid #efefef;
		background: #fff;
		padding:10px 20px 10px 20px;
		overflow: hidden;
	}
	#artical-footer .swiper-slide img{
		width:100px;
		height:60px;
		float: left;
		margin-right:15px
	}
	#artical-footer .swiper-slide h3{
		width: 100px!important;
		font-size:12px;
		margin-right: 20px;
		font-weight: 600;
		float: left;
	}
	#artical-footer .swiper-slide span{
		display: inline-block;
		width:60px;
		height:30px;
		line-height:30px;
		text-align: center;
		vertical-align: middle;
		float: left;
		background: #FADC23;
		border:1px solid #FADC23;
		border-radius:5px;
		margin-top: 10px;
	}
</style>