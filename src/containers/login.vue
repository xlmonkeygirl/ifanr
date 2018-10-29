<template>
	<div class="login-wrapper">
		<transition name="loginSlide">
			<div class="login-container" v-show="isShow">
				<form action="">
					<input type="text" placeholder="用户名" class="username" v-model="username" @input="changeUcolor" />
					<input type="password" placeholder="密码" class="password" v-model="password" @input="changePcolor" />
					<input type="button" class="btn-login" value="登录" :class="{'loginactive':btnColor}" @click="login" />
				</form>
				<p>
					<span><a href="javascript:;">忘记密码</a></span>
					<span @click="registe"><a href="javascript:;">注册账号</a></span>
				</p>
				<div class="login-by-others">
					<div class="login-by-wechat"><i class="iconfont">&#xe699;</i>微信登录</div>
					<div class="login-by-weibo"><i class="iconfont">&#xe62d;</i>微博登录</div>
				</div>
			</div>
		</transition>
		<transition name="loginFade">
			<div class="login-defeat" v-show="loginDefeat">
				<p>用户名或密码错误</p>
			</div>
		</transition>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				isShow: false,
				password: '',
				username: '',
				btnColor: false,
				loginDefeat: false
			}
		},
		methods: {
			changeUcolor() {
				if(this.username !== "" && this.password !== "") {
					this.btnColor = true;
				} else {
					this.btnColor = false;
				}

			},
			changePcolor() {
				if(this.username !== "" && this.password !== "") {
					this.btnColor = true;
				} else {
					this.btnColor = false;
				}

			},
			login() {
				var _this = this;
				$.ajax({
					type: "POST",
					url: "http://localhost:12348/login",
					async: true,
					data: {
						username: _this.username,
						password: _this.password
					},
					success: function(data) {
						console.log(data);
						if(data.result === "success") {
							console.log('登录成功！');
							document.cookie = 'name = '+_this.username;
							location.href = '#/userhome';
						} else {
							console.log('登录失败');
							_this.loginDefeat = true;
							setTimeout(function() {
								_this.loginDefeat = false;
							}, 1000);
						}
					}
				});
			},
			registe(){
				location.href='#/registe';
			}
		},
		mounted() {
			this.isShow = true;
		}
	}
</script>

<style>
	.login-wrapper {
		display: flex;
		width: 100%;
		background-image: url(../assets/imgs/sso-bg-mobile.b54cc437.jpg);
		background-position: top;
		background-size: 110%;
		/*padding-top: 315px;*/
		height: 580px;
		/*padding-bottom: 65%;*/
		/*position: relative;*/
		/*height: ;*/
		overflow: hidden;
	}
	
	.login-container {
		position: absolute;
		top: 160px;
		left: 8px;
		padding: 30px 20px;
		background-color: #fff;
		width: 90%;
		margin: 0 auto;
		border: 1px solid #fff;
		border-radius: 5px;
	}
	
	.login-container form input {
		width: 100%;
		height: 46px;
		border: 1px solid #dadada;
		padding-left: 10px;
		border-radius: 3px;
		margin-bottom: 20px;
	}
	
	.login-container form .btn-login {
		border-color: #d9d9d9;
		background-color: #f5f5f5;
		color: rgba(0, 0, 0, 0.25);
	}
	
	.login-container p {
		overflow: hidden;
		margin-bottom: 50px;
	}
	
	.login-container p span:first-child {
		float: left;
	}
	
	.login-container p span:last-child {
		float: right;
	}
	
	.login-container p span a {
		color: #121212;
	}
	
	.login-container .login-by-others {
		display: flex;
		flex-basis: row;
	}
	
	.login-container .login-by-others>div {
		flex: 4;
		justify-content: space-between;
		text-align: center;
		font-size: 14px;
		/*color:#7d7d7d;*/
		border: 1px solid #121212;
		line-height: 20px;
		border-radius: 3px;
		padding: 10px;
	}
	
	.login-container .login-by-others div:first-child {
		margin-right: 20px;
	}
	
	.loginSlide-enter-active {
		animation: loginSlide .8s;
	}
	
	.loginSlide-leave-active {
		animation: loginSlide .8 reverse;
	}
	
	@keyframes loginSlide {
		0% {
			transform: translateY(160px);
		}
		100% {
			transform: translateY(0);
		}
	}
	
	.loginactive {
		background: #333!important;
		color: #fff!important;
	}
	
	.login-defeat {
		width: 80%;
		margin: 0 auto;
		background: #333;
		opacity: 1;
		height: 30px;
		position: absolute;
		top: 200px;
		border: 1px solid #333;
		border-radius: 3px;
		margin-left: 30px;
		height: 60px;
	}
	
	.login-defeat p {
		text-align: center;
		color: #7d7d7d;
		font-size: 18px;
		line-height: 60px;
	}
	.loginFade-enter-active{
		animation: loginFade 1s;
	}
	.loginFade-leave-active{
		animation: loginFade 1s 3s reverse;
	}
	@keyframes loginFade{
		0% {
			opacity:0;
		}
		100% {
			opacity: 1;
		}
	}
</style>