<template>
	<div class="zuixin-list-container">
		<!--<mu-paper :z-depth="1" class="demo-loadmore-wrap">
			<mu-container ref="container" class="demo-loadmore-content">
				<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
					<mu-list>
						<template v-for="i in data">
							<mu-list-item>
								<div class="left-box">
									<img :src="i.image" alt="" />
								</div>
								<mu-list-item-title class="right-box">
									<p class="artical-title">
										<h3>{{i.title}}</h3>
									</p>
									<p>
										<span class="time">{{i.pubDate.slice(5,-3)}}</span>
										<span class="zan"><i class="iconfont">&#xe629;</i><span>{{i.like}}</span></span>
										<span class="comments"><i class="iconfont">&#xe63a;</i>{{i.comments}}</span>
									</p>
								</mu-list-item-title>
							</mu-list-item>
							<mu-divider />
						</template>
					</mu-list>
				</mu-load-more>
			</mu-container>
		</mu-paper>-->
		<ul>
			<li v-for="(a,index) in data" :key="a.id">
				<div class="left-box">
					<span><img :src="a.image" alt="" /></span>
				</div>
				<div class="right-box">
					<p class="artical-title">
						<h3>{{a.title}}</h3>
					</p>
					<p>
						<span class="time">{{a.pubDate.slice(5,-3)}}</span>
						<span class="zan" @click="like(a.id,index,a.image,a.title)"><i class="iconfont">&#xe629;</i><span>{{a.like}}</span></span>
						<span class="comments"><i class="iconfont">&#xe63a;</i>{{a.comments}}</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from 'jquery'
	//	export default {
	//		data() {
	//			return {
	//				data: ''
	//			}
	//		},
	//		methods: {
	//			getNews() {
	//				var _this = this;
	//				$.ajax({
	//					type: "get",
	//					url: "http://localhost:12348/zuixinlist",
	//					async: true,
	//					success: function(data) {
	//						console.log(data);
	//						_this.data = data;
	//					}
	//				})
	//			}
	//		},
	//		mounted() {
	//			this.getNews();
	//		}
	//	}
	export default {
		data() {
			return {
				num: 10,
				refreshing: false,
				loading: false,
				text: 'List',
				data: [],
				page: 0,
			}
		},
		methods: {
			refresh() {
				this.refreshing = true;
				this.$refs.container.scrollTop = 0;
				setTimeout(() => {
					this.refreshing = false;
					this.text = this.text === 'List' ? 'Menu' : 'List';
					this.num = 10;

				}, 2000)
			},
			load() {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.getNews();
				}, 2000)
			},
			getNews() {
				var _this = this;
				$.ajax({
					type: "get",
					url: "http://localhost:12348/zuixinlist",
					async: true,
					data: {
						page: ++_this.page,
						limit: 5
					},
					success: function(data) {
						_this.data = _this.data.concat(data);
						console.log(_this.data);
					}
				})
			},
			like(id, index, img, title) {
				var now = new Date();
				var mon = now.getMonth() + 1; //月份是从0-11，所以加1
				var date = now.getDate();
				var day = now.getDay();
				var hour = now.getHours();
				var min = now.getMinutes();
				var nowtime = mon + '- ' + date + ' ' + hour + ':' + min;
				var ocookie = document.cookie;
				if(ocookie !== "") {
					var self = this;
					var p1 = new Promise((resolve, reject) => {
						$.ajax({
							type: 'get',
							url: 'http://localhost:12348/like',
							data: {
								username: ocookie.split('=')[1],
								id: id
							},
							success: function(data) {
								if(data.length < 1) {
									self.data[index].like++;
									//									console.log(123);
									resolve([ocookie.split('=')[1], id, img, title, nowtime]);
								}
							}
						});
					});
					p1.then(([a, b]) => {
						console.log(a, b);
						$.ajax({
							type: "get",
							url: "http://localhost:12348/likeAdd",
							async: true,
							data: {
								name: a,
								id: b,
								img: img,
								title: title,
								time: nowtime
							},
							success: function(data) {
								console.log(data);
							}
						});
					})
				} else {
					location.href = '#/login';
				}
			}
		},
		mounted() {
			this.getNews();
			var self = this;
			$(window).scroll(function() {　　
				var scrollTop = $(this).scrollTop();　　
				var scrollHeight = $(document).height();　　
				var windowHeight = $(this).height();　　
				if(scrollTop + windowHeight == scrollHeight) {　　　　
					self.getNews();　
				}
			});
		}
	};
</script>

<!--<style>-->
<!--.zuixin-list-container {
		padding-top: 20px;
	}
	
	.zuixin-list-container ul li {
		padding-top: 10px;
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 15px;
		height: 84px;
	}
	
	.zuixin-list-container ul li .mu-item-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.left-box {
		width: 130px;
		height: 70px;
		margin-right: 10px;
	}
	
	.left-box img {
		width: 100%;
		height: 100%;
	}
	
	.right-box {
		height: 70px!important;
	}
	
	.right-box h3 {
		line-height: 16px;
		flex: 8;
		font-size: 14px;
		font-weight: 600;
		color: #333;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	
	.mu-item .right-box p:nth-child(4) {
		padding-top: 20px;
	}
	
	.mu-item .right-box p span {
		font-size: 12px;
		color: #7d7d7d;
	}
	
	.mu-item .right-box p span:first-child {
		padding-right: 10px;
	}
	
	.mu-item .right-box p .time {
		margin-right: 28px;
	}
	
	.mu-item .right-box p .zan {
		margin-right: 14px;
	}
	
	.mu-item .right-box p .zan i {
		vertical-align: bottom;
	}
	
	.mu-item .right-box p .zan span {
		vertical-align: bottom;
	}
	
	.mu-item .right-box p .comments i {
		vertical-align: bottom;
	}
	
	.mu-item .right-box p .comments span {
		vertical-align: bottom;
	}
	
	.demo-loadmore-wrap {
		width: 100%;
		max-width: 360px;
		height: auto;
		display: flex;
		flex-direction: column;
		.mu-appbar {
			width: 100%;
		}
	}
	
	.demo-loadmore-content {
		flex: 1;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.mu-item {
		height: 100%!important;
		width: 100%!important;
		padding: 0!important;
	}
	
	.mu-divider {
		height: 0px!important;
	}
</style><-->
<style>
	.zuixin-list-container {
		width: 100%;
		margin-top: 20px;
	}
	
	.zuixin-list-container ul {
		display: flex;
		flex-direction: column;
	}
	
	.zuixin-list-container ul li {
		flex: 1;
		display: flex;
		flex-direction: row;
		margin: 10px 0;
		height: 25%;
	}
	
	.zuixin-list-container ul li .left-box {
		flex: 4;
		margin-right: 10px;
	}
	
	.zuixin-list-container ul li .left-box span {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.zuixin-list-container ul li .left-box span img {
		width: 100%;
		height: 100%;
	}
	
	.zuixin-list-container ul li .right-box {
		flex: 6;
		display: flex;
		flex-direction: column;
	}
	
	.zuixin-list-container ul li .right-box h3 {
		padding-top: 5px;
		flex: 7;
		font-size: 12px!important;
	}
	
	.zuixin-list-container ul li .right-box p:last-child {
		flex: 3;
		display: flex;
		flex-direction: row;
		color: #7d7d7d;
		padding: 0;
		margin: 0;
		line-height: 16px;
		margin-top: 10px;
	}
	
	.zuixin-list-container ul li .right-box p:last-child .time {
		flex: 6;
	}
	
	.zuixin-list-container ul li .right-box p:last-child .zan {
		flex: 2;
		vertical-align: middle;
		cursor: pointer;
	}
	
	.zuixin-list-container ul li .right-box p:last-child span i {
		vertical-align: middle;
		cursor: pointer;
	}
	
	.zuixin-list-container ul li .right-box p:last-child .comments {
		flex: 2;
		cursor: pointer;
		vertical-align: middle;
	}
</style>