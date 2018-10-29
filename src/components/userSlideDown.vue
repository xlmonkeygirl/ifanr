<template>
	<transition name="userSlide">
		<div id="user-slide-down-wrapper" v-show="isShowUserSlideDown">
			<div class="user-slide-down-container">

				<div class="slide-down-header">
					<span class="logo1" @click="toIndex">
					<img :src="logourl" alt="" />
				</span>
					<span class="user-pic" @click="toUserCenter()">
					<a href="javascript:;">
						<img :src="userpic" alt="" />
					</a>
				</span>
				</div>
				<div class="category-list">
					<ul v-for="a in categorys">
						<li>{{a.title}}</li>
						<li v-for="b in a.list">{{b}}</li>
					</ul>
				</div>
				<div class="slide-menu">
					<span v-for="c in slideMenu">
					<span>
						<img :src="c.imgurl" alt="" />
					</span>
					<span>{{c.title}}</span>
					</span>
				</div>
			</div>
			<div class="back-cover" @click="slideUp"></div>
		</div>
	</transition>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				logourl: require('../assets/imgs/logo.png'),
				userpic: require('../assets/imgs/default.png'),
				categorys: [{
					title: 'ifanrRank',
					list: ['产品', '图记', '汽车', '生活']
				}, {
					title: 'ifanrQ',
					list: ['人物', '新创', '游戏', '视频']
				}, {
					title: 'MindTalk',
					list: ['公司', '早报', '特稿', '评测']
				}],
				slideMenu: [{
					imgurl: require('../assets/imgs/appsolution.png'),
					title: 'AppSolution'
				}, {
					imgurl: require('../assets/imgs/coolbuy.png'),
					title: '好物商店'
				}, {
					imgurl: require('../assets/imgs/mindstore-new.png'),
					title: 'MindStore'
				}]
			}
		},
		methods: {
			toUserCenter() {
				location.href = '#/userhome';
			},
			slideUp(){
				this.$store.state.isShowUserSlideDown = !this.$store.state.isShowUserSlideDown;
			},
			toIndex(){
				location.href='#/fIndex';
				this.slideUp();
			}
		},
		computed: {
			isShowUserSlideDown() {
				return this.$store.state.isShowUserSlideDown;
			}
			
		}
	}
</script>

<style>
	#user-slide-down-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: rgba(1, 1, 1, 0.3);
		min-height: 586px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	#user-slide-down-wrapper .user-slide-down-container {
		flex: 0;
		background: #fff;
		padding: 14px 12px 20px 12px;
	}
	
	#user-slide-down-wrapper .back-cover {
		flex: 4;
		background: rgba(0, 0, 0, 0.4);
	}
	
	#user-slide-down-wrapper .slide-down-header {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		/*padding:12px 12px 22px 12px;*/
		border-bottom: 1px solid #d5d5d5;
	}
	
	#user-slide-down-wrapper .slide-down-header span {
		flex: 5;
		overflow: hidden;
		padding: 15px;
	}
	
	#user-slide-down-wrapper .slide-down-header span img {
		width: 100%;
	}
	
	#user-slide-down-wrapper .slide-down-header span a {
		display: block;
		width: 25%;
		height: 100%;
		overflow: hidden;
		border: 1px solid #fff;
		border-radius: 50%;
		float: right;
	}
	
	#user-slide-down-wrapper .slide-down-header span a img {
		width: 100%;
		height: 100%;
	}
	
	#user-slide-down-wrapper .user-slide-down-container .category-list {
		overflow: hidden;
		padding: 16px 15px;
		display: flex;
		flex-direction: row;
		margin-bottom: 10px;
	}
	
	#user-slide-down-wrapper .user-slide-down-container .category-list ul {
		flex: 1;
	}
	
	#user-slide-down-wrapper .user-slide-down-container .category-list ul li {
		text-align: center;
		font-size: 18px;
		color: #404246;
		line-height: 44px;
		word-spacing: 2px;
	}
	
	#user-slide-down-wrapper .user-slide-down-container .slide-menu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0 10px;
	}
	
	#user-slide-down-wrapper .user-slide-down-container .slide-menu>span {
		width: 50%;
		display: flex;
		flex-direction: row;
		vertical-align: middle;
		margin-bottom: 15px;
		/*margin-right:5px;*/
	}
	/*#user-slide-down-wrapper .user-slide-down-container .slide-menun>span:first-child{
		margin-right: 5px;
	}*/
	
	.user-slide-down-container .slide-menu span>span:first-child {
		width: 30%;
		margin-right: 8px;
	}
	
	.user-slide-down-container .slide-menu span>span>img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.user-slide-down-container .slide-menu span>span:last-child {
		line-height: 44px;
		font-size: 14px;
	}
	.userSlide-enter-active{
		animation: userSlide 1s;
	}
	.userSlide-leave-active{
		animation: userSlide 0.6s reverse;
	}
	@keyframes userSlide{
		0% {
			transform: translateY(-600px);
		}
		
		100% {
			transform: translateY(0px);
		}
	}
</style>