<template>
	<transition name="slide">
		<div v-show="isSlideDown" class="slide-wrapper">
			<div class="global-navigator slide-in-down" >
				<div class="nav-controller">
					<a href="javascript:;" class="ifanr-logo"></a>
					<span class="nav-search-button" @click="setIsShowSearch"><i class="iconfont">&#xe61d;</i></span>
					<span class="nav-close-button" @click="isShow"><i class="iconfont">&#xe61b;</i></span>
				</div>
				<ul class="nav-user">
					<li v-show="!isShowUserName">
						<p></p>
						<p>
							<a href="javascript:;" @click="toLogin()">登录</a>/
							<a href="javascript:;" @click="toRegiste()">注册</a>
						</p>
						<p>
							<a href="javascript:;">Sign In</a>/
							<a href="javascript:;">Sign Up</a>
						</p>
					</li>
					<li v-show="isShowUserName">
						<p></p>
						<p>
							<a @click="toUserHome">{{username}}</a>
						</p>
					</li>
					<li class="nav-item">
						<p>
							<a @click="toActivities" >我的动态</a>
						</p>
						<p>
							<a href="javascript:;">Activities</a>
						</p>
					</li>
					<li class="nav-item">
						<p>
							<a @click="toCollection">我的收藏</a>
						</p>
						<p>
							<a href="javascript:;">My Collections</a>
						</p>
					</li>
					<li class="nav-item">
						<p>
							<a @click="toInformation">通知</a>
						</p>
						<p>
							<a href="javascript:;">Notifications</a>
						</p>
					</li>
					<li class="login-out" v-show="isShowUserName">
						<p @click="loginOut">退出登录</p>
						<p @click="loginOut">
							<a>loginOut</a>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
//				isShow:false
				username:'',
				isShowUserName:false
			}
		},
		methods: {
			isShow(){
				this.$store.state.isShowSlideDown = !this.$store.state.isShowSlideDown;
			},
			toLogin(){
				location.href =  '#/login';
			},
			toRegiste(){
				location.href= '#/registe';
			},
			setIsShowSearch(){
				this.$store.state.isShowSlideDown = !this.$store.state.isShowSlideDown;
				var self = this;
				setTimeout(function(){
					self.$store.state.isShowSearch = !self.$store.state.isShowSearch;
				},800);
			},
			loginOut(){
				var date = new Date();
				date.setDate(date.getDate()-8);
				var name = document.cookie.split('=')[1];
				document.cookie = 'name=' + name +';expires=' + date.toUTCString();
				this.username = '';
				this.isShowUserName = !this.isShowUserName;
				this.$store.state.isShowSlideDown = !this.$store.state.isShowSlideDown;
				location.href = '#/fIndex';
			},
			toUserHome(){
				location.href="#/userHome";
				this.isShow();
			},
			toActivities(){
				location.href='#/activities';
				this.isShow();
				
			},
			toCollection(){
				location.href = '#/collection';
				this.isShow();
				
			},
			toInformation(){
				location.href='#/information';
				this.isShow();
				
			}
		},
		mounted() {
			var len = document.body.clientHeight;
			$('.global-navigator').css('height', len);
			var ocookie = document.cookie;
			if(ocookie!=''){
				var username = ocookie.split('=')[1];
				this.username = username;
				this.isShowUserName = true;
			}else{
				this.isShowUserName = false;
			}
		},
		computed: {
			isSlideDown() {
				return this.$store.state.isShowSlideDown;
			}
		}
	}
</script>

<style>
	.slide-wrapper{
		width: 100%;
		height:100%;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.global-navigator {
		box-sizing: border-box;
		width: 100%;
		clear: both;
		overflow-y: scroll;
		background: #fff;
	}
	
	.global-navigator .nav-user {
		padding-top: 26px;
	}
	
	.global-navigator .nav-user li {
		text-align: center;
		font-weight: 700;
		font-size: 18px;
		padding-bottom: 40px;
	}
	
	.global-navigator .nav-user li:first-child {
		padding-bottom: 50px;
	}
	
	.global-navigator .nav-user li:first-child p:first-child {
		margin: 0 auto;
		width: 72px;
		height: 72px;
		border: 1px solid #fff;
		border-radius: 50%;
		background-image: url(../assets/imgs/default.png);
		background-size: contain;
	}
	
	.global-navigator .nav-user li:first-child p:nth-child(2) {
		margin-top: 10px;
	}
	
	.global-navigator .nav-user li:first-child p:nth-child(2) a {
		color: #333;
	}
	
	.global-navigator .nav-user li:first-child p:nth-child(3) {
		font-size: 14px;
		font-weight: 200;
		color: #7d7d7d;
	}
	
	.global-navigator .nav-user li:first-child p:nth-child(3) a {
		color: #7d7d7d;
		line-height: 14px;
	}
	.global-navigator .nav-user li:last-child p:first-child{
		font-size:16px;
		font-weight: normal;
		padding-top:20px;
	}
	.global-navigator .nav-user li:last-child p:last-child a{
		font-size:12px;
		color:#7d7d7d;
	}
	
	.global-navigator .nav-user .nav-item {
		padding-bottom: 40px;
	}
	
	.global-navigator .nav-user .nav-item p:first-child a {
		font-weight: 700;
		color: #333;
		padding: 0 5px;
		font-size: 18px;
		line-height: 20px;
	}
	
	.global-navigator .nav-user .nav-item p:last-child a {
		font-weight: 200;
		color: #7d7d7d;
		font-size: 12px;
		line-height: 14px;
	}
	
	.nav-controller {
		height: 70px;
		padding: 20px;
		/*display: flex;*/
		/*flex-direction: row;*/
	}
	
	.nav-controller a {
		display: inline-block;
		width: 74px;
		height: 24px;
		background-image: url(../assets/imgs/logo.svg);
		background-size: contain;
		margin-right: 106px;
	}
	
	.nav-controller span {
		vertical-align: top!important;
		margin: 0 10px;
		;
	}
	
	.nav-controller span i {
		font-size: 30px;
	}
	
	.slide-enter-active{
		animation: slide .6s;
	}
	.slide-leave-active{
		animation: slide .4s reverse;
	}
	@keyframes slide{
		0% {
			transform: translateY(-1000px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>