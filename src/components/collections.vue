<!--<template>
	<div id="collection">
		<div class="null-info">
			<p>你在爱范儿还没有收藏哦</p>
		</div>
		<div class="btn-go">
			<span class="to-index" @click="toIndex">去首页逛逛</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			toIndex(){
				location.href = '#/findex';
			}
		}
	}
</script>

<style>
	#collection{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	#collection .null-info{
		flex: 6;
	}
	#collection .null-info p{
		padding:60px;
		text-align: center;
		color:#666;
	}
	#collection .btn-go{
		flex: 4;
		text-align: center;
	}
	#collection .btn-go .to-index{
		padding: 5px 10px;
		color: #fff;
		background: #000;
		border:1px solid #000;
		border-radius: 4px;
		font-size:12px;
	}
</style>-->
	<template>
	<div id="collection">
		<div class="null-info" v-show="isShow">
			<p>你在爱范儿还没有收藏哦</p>
		</div>
		<div class="btn-go" v-show="isShow">
			<span class="to-index" @click="toIndex">去首页逛逛</span>
		</div>
		<div id="myCollection" v-show="!isShow">
			<ul>
				<li v-for="a in likeList">
					<p class="actHeader">收藏文章&nbsp;&nbsp;<span>{{a.time}}</span></p>
					<div class="art-box">
						<div class="left-img">
							<img :src="a.img" alt="" />
						</div>
						<div class="cont-box">
							<p class="title">{{a.title}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		data(){
			return{
				name:'',
				isShow:false,
				likeList:[]
			}
		},
		methods:{
			toIndex(){
				location.href = '#/findex';
			},
			showActivities(){
				var self = this;
			
			}
			
		},
		mounted(){
			var name = document.cookie.split('=')[1];
			this.name = name;
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost:12348/activities",
				async:true,
				data:{
					name:self.name
				},
				success:function(data){
					self.likeList = data[0].zan;
					if(self.likeList.length>0){
						self.isShow = false;
					}else{
						self.isShow = true;
					}
					console.log(self.likeList);
				}
			});
		}
	}
</script>

<style>
	#collection{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	#collection .null-info{
		flex: 6;
	}
	#collection .null-info p{
		padding:60px;
		text-align: center;
		color:#666;
	}
	#collection .btn-go{
		flex: 4;
		text-align: center;
	}
	#collection .btn-go .to-index{
		padding: 5px 10px;
		color: #fff;
		background: #000;
		border:1px solid #000;
		border-radius: 4px;
		font-size:12px;
	}
	
	#collection #myCollection ul{
		display: flex;
		flex-direction: column;
	}
	#collection #myCollection ul li{
		overflow: hidden;
		padding: 20px 20px;
	}
	#collection #myCollection ul li p{
		color: #7d7d7d;
		font-size: 12px;
	} 
	#collection #myCollection ul li .art-box{
		display: flex;
		flex-direction: row;
		padding:15px 0 0 0;
	}
	#collection #myCollection ul li .art-box .left-img{
		width: 100px;
		height:60px;
		margin-right: 8px;;
	}
	#collection #myCollection ul li .art-box .left-img img{
		width:100%;
		height: 100%;
	}
	#collection #myCollection ul li .art-box .cont-box .title{
		color:#333;
		font-size:14px;
	}
</style>
