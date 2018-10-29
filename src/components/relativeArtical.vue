<template>
	<div id="relative-artical-wrapper">
		<div class="relative-artical">
			<div class="relative-header">
				<span>相关文章</span>
			</div>
			<div class="relative-artical-list">
				<ul>
					<li v-for="a in listarr" :key="a.id">
						<div class="left-box">
							<span><img :src="a.cover_img" alt="" /></span>
						</div>
						<div class="right-box">
							<p class="artical-title">
								<h3>{{a.title}}</h3>
							</p>
							<p>
								<span class="time">{{a.date}}</span>
								<span class="zan"><i class="iconfont">&#xe629;</i><span>{{a.zan}}</span></span>
								<span class="comments"><i class="iconfont">&#xe63a;</i>{{a.comments}}</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				listarr: [{
					_id: '',
					category: "",
					post_id: '',
					date: '',
					title: "",
					cover_img: "",
					link: "",
					author: "",
					excerpt: "",
					comments: 0,
					zan: 0,
				}],
				bannerarr: [{
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
				type: 'get',
				url: 'http://localhost:12348/relative',
				data: '',
				success: function(data) {
					//					console.log(data)
					self.listarr = data.slice(0, 4);
					self.bannerarr = data.slice(4);
				}

			})
		}
	}
</script>

<style>
	#relative-artical-wrapper {
		width: 100%;
	}
	
	#relative-artical-wrapper .relative-artical {
		padding: 20px 25px;
	}
	
	#relative-artical-wrapper .relative-artical .relative-header {
		font-size: 16px;
		font-weight: 600;
		line-height: 40px;
	}
	
	#relative-artical-wrapper .relative-artical ul {
		display: flex;
		flex-direction: column;
		padding-bottom:80px;
	}
	
	#relative-artical-wrapper .relative-artical ul li {
		flex: 1;
		display: flex;
		flex-direction: row;
		margin: 10px 0;
		height: 25%;
	}
	
	#relative-artical-wrapper .relative-artical ul li .left-box {
		flex: 4;
		margin-right: 10px;
	}
	
	#relative-artical-wrapper .relative-artical ul li .left-box span {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	#relative-artical-wrapper .relative-artical ul li .left-box span img {
		width: 100%;
		height: 100%;
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box {
		flex: 6;
		display: flex;
		flex-direction: column;
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box h3 {
		padding-top: 5px;
		flex: 7;
		font-size: 12px!important;
		/*line-height: 14px;*/
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box p:last-child {
		/*padding-top: 4px;*/
		flex: 3;
		display: flex;
		flex-direction: row;
		color: #7d7d7d;
		padding: 0;
		margin: 0;
		line-height: 16px;
		margin-top: 10px;
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box p:last-child .time {
		flex: 6;
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box p:last-child .zan {
		flex: 2;
		vertical-align: middle;
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box p:last-child span i {
		vertical-align: middle;
	}
	
	#relative-artical-wrapper .relative-artical ul li .right-box p:last-child .comments {
		flex: 2;
		vertical-align: middle;
	}
</style>