<template>
	<div id="vedio-wrapper">
		<div class="vedio-box">
			<div class="video-play">
				<video :src="vedioInfo[0].vedioUrl" controls="controls"></video>
			</div>
			<p class="video-type"><span>{{vedioInfo[0].type}}</span>&nbsp;&nbsp;<span>{{vedioInfo[0].time}}</span></p>
			<p class="video-title">{{vedioInfo[0].title}}</p>
			<p class="video-category">{{vedioInfo[0].category}}</p>
			<p class="video-contents">{{vedioInfo[0].contents}}</p>
			<div class="video-actions">
				<p class="video-button">
					<span class="like"><i class="iconfont">&#xe62c;</i></span>
					<span class="share"><span><i class="iconfont">&#xe600;</i></span></span>
				</p>
				<p class="video-button-tag">
					<span class="like">收藏</span>
					<span class="share">分享</span>
				</p>
			</div>
			<div class="hot-comments">
				<div class="comments-title">
					<span>最热评论</span>(0)
				</div>
				<div class="comments-list">
					<span class="no-comment">
						目前还没有人来参与，快来做第一个
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				vedioInfo: [{
					vedioUrl: '',
					title: '',
				}]
			}
		},
		created() {},
		mounted() {
			var str = location.href.split('?')[1];
			var id = str.split('=')[1] * 1;
			id = id.toFixed(1);
			console.log(id);
			var self = this;
			$.ajax({
				type: 'get',
				url: 'http://localhost:12348/vedio',
				data: {
					id: id
				},
				success: function(data) {
					self.vedioInfo = data;
				}
			});
		}
	}
</script>

<style>
	#vedio-wrapper {
		width: 100%;
		flex: 4;
	}
	
	#vedio-wrapper .vedio-box {
		display: flex;
		flex-direction: column;
	}
	
	#vedio-wrapper .vedio-box .video-play {
		height: 40%;
		flex: 3;
	}
	
	#vedio-wrapper .vedio-box .video-play video {
		width: 100%;
		height: 100%;
	}
	
	#vedio-wrapper .vedio-box .video-type {
		padding: 20px 25px 20px 25px;
		/*color:red;*/
		flex: 1;
	}
	
	#vedio-wrapper .vedio-box .video-type span:first-child {
		color: #f00;
		font-weight: 600;
	}
	
	#vedio-wrapper .vedio-box .video-title {
		flex: 1;
		padding: 0 25px;
		font-size: 20px;
		font-weight: 800;
	}
	
	#vedio-wrapper .vedio-box .video-category {
		flex: 1;
		margin: 30px 25px 30px 25px;
		/*padding-bottom: 30px;*/
	}
	
	#vedio-wrapper .vedio-box .video-contents {
		flex: 4;
		border-top: 1px solid #efefef;
		padding-top: 30px;
		margin: 0 25px;
		font-size: 18px;
		line-height: 28px;
		margin-bottom: 50px;
	}
	#vedio-wrapper .vedio-box .video-actions{
		margin:20px 25px 0px 25px;
		padding-bottom: 30px;
		border-bottom:2px solid #ff902f;
	}
	#vedio-wrapper .vedio-box .video-actions p span{
		display: inline-block;
		width: 40%;
		color:#a8a8a8;
		box-sizing: border-box;
	}
	#vedio-wrapper .vedio-box .video-actions p:first-child span i{
		font-size: 40px;
	}
	#vedio-wrapper .vedio-box .video-actions p:first-child span:first-child{
		margin-right: 20px;
		text-align: right;
	}
	#vedio-wrapper .vedio-box .video-actions p:first-child span:last-child{
		margin-left: 20px;
		text-align: left;
		
	}
	#vedio-wrapper .vedio-box .video-actions p:first-child span:first-child{
		margin-right: 20px;
		text-align: right;
	}
	#vedio-wrapper .vedio-box .video-actions .video-button-tag  span:first-child{
		display: inline-block;
		width: 40%;
		margin-right: 16px;
		padding-right: 8px;
		text-align: right;
		font-weight: 600;
	}
	#vedio-wrapper .vedio-box .video-actions .video-button-tag  span:last-child {
		margin-left: 28px;
		text-align: left;
		display: inline-block;
		width: 40%;
		font-weight: 600;
		padding-left: 24px;
	}
	#vedio-wrapper .vedio-box .hot-comments{
		padding:40px 25px 30px 25px;
	}
	#vedio-wrapper .vedio-box .hot-comments .comments-title{
		padding-bottom: 30px;
		font-size: 16px;
		font-weight: 600;	
	}
	#vedio-wrapper .vedio-box .hot-comments .comments-list span{
		display: block;
		width: 90%;
		height:40px;
		border:1px solid #FADC23;
		border-radius: 5px;
		background: #FADC23;
		margin: 0 auto;
		line-height: 40px;
		font-size:12px;
		text-align: center;
		padding:0 20px;
		font-weight: 600;
	}
</style>