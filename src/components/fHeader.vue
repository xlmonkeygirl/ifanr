<template>
	<div id="container" class="container" style="display: block;">
		<div class="headline-container" data-component="headline">
			<div class="default-box">
				<div class="bg">
					<img :src="src">
					<div class="black-cover"></div>
				</div>
				<div class="triangle"></div>
				<div class="bg-logo">
					<img :src="logoSrc">
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				src: require('../assets/imgs/headline-mountain-bg.jpg'),
				logoSrc: require('../assets/imgs/headline-default-logo.svg')
			}
		},
	}
</script>

<style>
	.container{
		flex: 1;
		padding: 0!important;
	}
	.headline-container .default-box {
		position: relative;
		width: 100%;
		height: calc(100vw * 254 / 375);
		background-color: rgba(0, 0, 0, .2);
	}
	
	.home-container .headline-container .bg {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: relative;
	}
	
	.home-container .headline-container .bg img {
		height: 100%;
		width: 100%;
		float: right;
	}
	
	fieldset,
	form,
	iframe,
	img,
	table {
		border: 0;
	}
	
	.home-container .headline-container .bg .black-cover {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: rgba(0, 0, 0, .2);
	}
	
	.home-container .headline-container .default-box .triangle {
		width: 0;
		height: 0;
		border-top: calc(100vw * 60 / 375) solid transparent;
		border-left: 100vw solid #fff;
		position: absolute;
		bottom: 0;
	}
	
	.headline-container .default-box .bg-logo {
		position: absolute;
		top: 0;
		width: calc(100% - 28px);
		height: 100%;
		margin: 0 16px;
	}
	
	.home-container .headline-container .default-box .bg-logo img {
		width: 42.07%;
		margin-top: 16px;
	}
	
	img,
	table {
		border: 0;
	}
</style>