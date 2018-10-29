<template>
	<div id="artical-list">
		<div id="artical-item" class="artical-item" v-for="(a,index) in data" :key="a.id">
			<a href="javascript:;">
				<div class="left-box">
					<img :src="newsImgsList[index]" alt="" />
				</div>
				<div class="right-box">
					<p class="artical-title">
						<h3>{{a.title}}</h3>
					</p>
					<p>
						<span class="time">{{a.time}}</span>
						<span class="zan"><i class="iconfont">&#xe629;</i><span>{{a.zan}}</span></span>
						<span class="comments"><i class="iconfont">&#xe63a;</i>{{a.comments.num}}</span>
					</p>
				</div>
			</a>
		</div>
		<zuixinBanner></zuixinBanner>
		<zuixinlist></zuixinlist>
	</div>
</template>

<script>
	import $ from 'jquery';
	import zuixinBanner from '../components/zuixinBanner.vue';
	import zuixinlist from '../components/zuixinlist.vue';
	export default {
		data() {
			return {
				newsImgsList: [require('../assets/imgs/zuixin1.jpg'), require('../assets/imgs/zuixin2.jpg'), require('../assets/imgs/zuixin3.jpg'), require('../assets/imgs/zuixin4.jpg'), require('../assets/imgs/zuixin5.jpg')],
				data: ''
			}
		},
		methods: {
			getnews() {
				var _this = this;
				$.ajax({
					url: 'http://localhost:12348/newslist',
					type: 'get',
					async: true,
					success: function(data) {
						_this.data = data;
					}
				})
			}
		},
		components:{
			zuixinBanner,
			zuixinlist
		},
		mounted() {
			this.getnews();
		}
	}
</script>

<style>
	#artical-list {
		display: flex;
		width: 90%;
		margin: 0 auto;
		flex-direction: column;
		overflow: hidden;
	}
	
	.artical-item {
		flex: 1;
		margin-bottom: 15px;
		/*height: 84px;*/
	}
	
	.artical-item a {
		color: #7d7d7d;
		display: flex;
		flex-direction: row;
	}
	
	.artical-item a>div {
		display: inline-block;
	}
	
	.artical-item a .left-box {
		height: 84px;
		width: 40%;
	}
	
	.artical-item a .left-box img {
		width: 100%;
		height: 100%;
	}
	
	.artical-item a .right-box {
		padding-left: 8px;
		width: 60%;
		display: flex;
		flex-direction: column;
	}
	
	h3 {
		flex: 8;
		font-size: 14px;
		font-weight: 600;
		color: #333;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		line-height: 16px;
	}
	.artical-item a .right-box p:last-child{
		flex: 2;
		display: flex;
		flex-direction: row;
		font-size:12px;
	}
	.artical-item a .right-box p:last-child span:first-child{
		flex: 6;
	}
	.artical-item a .right-box p:last-child span:nth-child(2){
		flex: 2;
	}
	.artical-item a .right-box p:last-child span:nth-child(2) span span{
		vertical-align: middle;
	}
	.artical-item a .right-box p:last-child span:last-child{
		flex: 2;
	}
</style>