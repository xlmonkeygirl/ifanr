<template>
	<div id="information">
		<div class="null-info">
			<p>你还没有收到消息奥</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			
		}
	}
</script>

<style>
	#information{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	#information .null-info{
		flex: 6;
	}
	#information .null-info p{
		padding:60px;
		text-align: center;
		color:#666;
	}
	#information .btn-go{
		flex: 4;
		text-align: center;
	}
	#information .btn-go .to-index{
		padding: 5px 10px;
		color: #fff;
		background: #000;
		border:1px solid #000;
		border-radius: 4px;
		font-size:12px;
	}
</style>