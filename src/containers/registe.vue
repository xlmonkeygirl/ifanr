<template>
	<div class="registe-wrapper">
		<transition name="registeSlide">
			<div class="registe-container">
				<form action="">
					<input type="text" placeholder="Email地址" class="email-adress" v-model="emailAdress" />
					<input type="nickname" placeholder="昵称" class="nickname" v-model="nickname" />
					<input type="password" placeholder="密码" class="password" v-model="password" />
					<input type="password" placeholder="密码确认" class="repass" v-model="repass" />
					<input type="checkbox" class="agree" v-model="agree" @click="isCheck()" checked="" /><span class="agreement">我已阅读并同意 《爱范儿用户协议》</span>
					<span class="login" @click="login">登录</span>
					<input type="button" class="btn-reg" value="注册" :class="{'reg-active':regActive}" @click="registe" />
				</form>
			</div>
		</transition>
		<transition name="regFade">
			<div class="registe-defeat" v-show="registeDefeat">
				<p v-html="info"></p>
			</div>
		</transition>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				emailAdress: '',
				nickname: '',
				password: '',
				repass: '',
				agree: false,
				registeDefeat: false,
				regActive: false,
				test: false,
				info: '',
				isregisted: false
			}
		},
		methods: {
			checkEmail() {
				var emailReg = /^[0-9a-z][\w\-\.]{2,15}@[\da-z][\da-z\-]{1,66}\.[a-z]{2,6}$/;
				if(!emailReg.test(this.emailAdress)) {
					return false;
				} else {
					return true;
				}
			},
			checkPassword() {
				var passwordReg = /^\S{6,20}$/;
				if(!passwordReg.test(this.password)) {
					return false;
				} else {
					return true;
				}
			},
			checkRepass() {
				if(this.password === this.repass) {
					return true;
				} else {
					return false;
				}
			},
			isCheck() {
				this.agree = !this.agree;
				if(this.agree === false) {
					$('.agree').prop('checked', '');
				} else {
					$('.agree').prop('checked', 'checked');
				}
				if(this.emailAdress != "" && this.nickname != "" && this.password != "" && this.repass != "" && this.agree === true) {
					//					console.log(999)
					this.regActive = true;
				} else {
					this.regActive = false;
				}
			},
			registe() {
				this.info = '';
				if(this.checkEmail() === false) {
					this.info += '请输入正确的邮箱地址</br>';
					this.registeDefeat = true;
				}
				if(this.checkPassword() === false) {
					this.info += '请输入6-20位的密码</br>';
					this.registeDefeat = true;

				}
				if(this.checkRepass() === false) {
					this.info += '两次密码输入不一致<br>';
					this.registeDefeat = true;
				}
				var self = this;
				setTimeout(function() {
					self.registeDefeat = false;
				}, 500);
				if(this.checkEmail() && this.checkPassword() && this.checkRepass()) {
					this.info = '';
					this.registeDefeat = false;
					this.isRegisted();
					console.log(this.isregisted);
					if(this.isregisted===false) {
						console.log(999);
						var self = this;
						$.ajax({
							type: "get",
							url: "http://localhost:12348/registe",
							async: true,
							data: {
								email: self.emailAdress,
								username: self.nickname,
								password: self.password
							},
							success: function(data) {
								console.log(data);
								location.href = '#/usercenter';
							}
						});
					}

				}
			},
			isRegisted() {
				var self = this;
				$.ajax({
					type: "get",
					url: "http://localhost:12348/getuser",
					async: true,
					data: {
						email:self.emailAdress
					},
					success: function(data) {
						if(data.length > 0) {
							self.isregiste = true;
							self.registeDefeat = true;
							self.info = '该用户已经被注册';
						} else {
							self.isregiste = false;
						}
					}

				});
				console.log(self.emailAdress);
			},
			login() {
				location.href = "#/login";
			}

		},
		mounted() {
			this.isShow = true;
		}
	}
</script>

<style>
	.registe-wrapper {
		display: flex;
		width: 100%;
		background-image: url(../assets/imgs/sso-bg-mobile.b54cc437.jpg);
		background-position: top;
		background-size: 120%;
		/*padding-top: 315px;*/
		height: 630px;
		/*padding-bottom: 65%;*/
		/*position: relative;*/
		/*height: ;*/
		overflow: hidden;
	}
	
	.registe-container {
		position: absolute;
		top: 160px;
		left: 15px;
		padding: 30px 20px;
		background-color: #fff;
		width: 90%;
		margin: 0 auto;
		border: 1px solid #fff;
		border-radius: 5px;
	}
	
	.registe-container form input {
		width: 100%;
		height: 46px;
		border: 1px solid #dadada;
		padding-left: 10px;
		border-radius: 3px;
		margin-bottom: 20px;
	}
	
	.registe-container form .agree {
		width: 12px;
		height: 12px;
		margin-right: 2px;
	}
	
	.registe-container form .agreement {
		font-size: 10px;
		line-height: 14px;
		vertical-align: top;
		color: #a7a7a7;
	}
	
	.registe-container form .login {
		font-size: 12px;
		vertical-align: top;
		line-height: 14px;
		margin-left: 5px;
	}
	
	.registe-container form .btn-reg {
		border-color: #d9d9d9;
		background-color: #f5f5f5;
		color: rgba(0, 0, 0, 0.25);
	}
	
	.registeSlide-enter-active {
		animation: loginSlide .8s;
	}
	
	.registeSlide-leave-active {
		animation: loginSlide .8 reverse;
	}
	
	@keyframes registeSlide {
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
	
	.registe-defeat {
		width: 70%;
		margin: 0 auto;
		background: #333;
		opacity: 1;
		height: 30px;
		position: absolute;
		top: 200px;
		border: 1px solid #333;
		border-radius: 3px;
		margin-left: 50px;
		height: 60px;
	}
	
	.registe-defeat p {
		text-align: center;
		color: #fff;
		font-size: 12px;
	}
	
	.regFade-enter-active {
		animation: loginFade 1s;
	}
	
	.regFade-leave-active {
		animation: loginFade 1s 3s reverse;
	}
	
	@keyframes regFade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	.reg-active {
		background: #333!important;
		color: #fff!important;
	}
</style>