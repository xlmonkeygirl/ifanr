<template>
	<div id="user-center-wrapper">
		<div id="uheader">
			<span @click="setUserSlideDown">
				<i class="iconfont">&#xe601;</i>
			</span>
			<span @click="loginOut">
				<a href="javascript:;">退出</a>
			</span>
		</div>
		<div id="user-info">
			<div class="user-avatar">
				<span><img :src="imgurl" alt="" /></span>
			</div>
			<div class="user-name">
				<span>{{username}}</span>
			</div>
			<div class="user-identity">
				<span v-text="userIdentify"></span>
			</div>
			<div class="user-tag">
				<span v-text="userTag"></span>
			</div>
		</div>
		<div id="user-nav">
			<span v-for="(a,index) in nav" :key="a.id" @click="clickEvent(index)" :class="{'active':index==page}">{{a}}</span>
		</div>
		<div id="user-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgurl:require('../assets/imgs/default.png'),
				username:'',
				userIdentify:'公司 职位',
				userTag:'爱范儿读者',
				nav:['动态','收藏','消息中心'],
				page:0
			}
		},
		methods:{
			clickEvent(index){
				this.page = index; 
				switch(index){
					case 0:
						location.href='#/activities';
						break;
					case 1:
						location.href = '#/collection';
						break;
					case 2:
						location.href = '#/information';
				}
				
			},
			setUserSlideDown(){
				this.$store.state.isShowUserSlideDown = !this.$store.state.isShowUserSlideDown;
				console.log(this.$store.state.isShowUserSlideDown)
			},
			loginOut(){
				var date = new Date();
				date.setDate(date.getDate()-8);
				var name = document.cookie.split('=')[1];
				document.cookie = 'name=' + name +';expires=' + date.toUTCString();
				location.href = '#/findex';

			}
		},
		mounted(){
			location.href = '#/activities';
			var ocookie = document.cookie;
			if(ocookie!=''){
				this.username = ocookie.split('=')[1];
			}
		}
	}
</script>

<style>
	#user-center-wrapper{
		width: 100%;
		min-height:568px;
		display:flex;
		flex-direction:column;
		
	}
	#user-center-wrapper #uheader{
		width: 90%;
		flex: 0;
		box-sizing: border-box;
		padding:20px 15px;
		padding-bottom: 0;
		display: flex;
		flex-direction: row;
	}
	#user-center-wrapper #uheader span{
		flex: 5;
	}
	#user-center-wrapper #uheader span:first-child i{
		font-size:24px;
	}
	#user-center-wrapper #uheader span:last-child{
		overflow: hidden;
	}
	#user-center-wrapper #uheader span:last-child a{
		float: right;
		color: #333;
		font-size:16px;
		line-height: 44px;
		vertical-align: middle;
	}
	
	#user-center-wrapper #user-info{
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	#user-center-wrapper #user-info .user-avatar{
		flex: 2;
		/*background: red;*/
		text-align: center;
	}
	#user-center-wrapper #user-info .user-avatar span{
		display: block;
		border:1px solid #fff;
		border-radius:50%;
		overflow: hidden;
		width: 80px;
		height:80px;
		margin:0 auto;
	}
	#user-center-wrapper #user-info .user-avatar img{
		width: 100%;
		height:100%;
	}
	#user-center-wrapper #user-info .user-name{
		flex: 2;
		text-align: center;
	}
	#user-center-wrapper #user-info .user-name span{
		font-size:16px;
		font-weight:600;
	}
	#user-center-wrapper #user-info .user-identity{
		flex: 2;
		text-align: center;
	}
	#user-center-wrapper #user-info .user-identity{
		font-size:14px;
		color:#7d7d7d;
	}
	#user-center-wrapper #user-info .user-tag{
		flex: 2;
		text-align: center;
	}
	#user-center-wrapper #user-info .user-tag span{
		display: block;
		width: 88px;
		padding:0 8px;
		height: 30px;
		border:1px solid #3e3e3e;
		color:#fff;
		border-radius: 4px;
		background: #3d3d3d;
		font-size: 12px;
		line-height:30px;
		margin:0 auto;
	}
	#user-center-wrapper #user-nav{
		/*height:200px;*/
		flex: 0;
		width:100%;
		border-top:1px solid #e6e6e6;
		margin-top:10px;
		border-bottom:1px solid #e6e6e6;
		/*display: flex;*/
		padding: 8px 0;
		line-height: 30px;
		margin-bottom:20px;
	}
	#user-center-wrapper #user-nav span{
		display: inline-block;
		width: 33%;
		/*flex: 1;*/
		/*justify-content: space-around;*/
		text-align: center;
		border-right: 1px solid #e6e6e6;
		color:#acacac;
	}
	#user-center-wrapper #user-nav span:last-child{
		border:none;
	}
	.active{
		color:#222734!important;
	}
	#user-container{
		flex: 8;
		border-top:1px solid #e6e6e6;
	}
</style>