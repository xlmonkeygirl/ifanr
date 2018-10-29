<template>
	<div class="ifanr-header-container">
		<div id="simple-header" class="simple header js-navigator clearfix">
			<span @click="isShowSlideDown" class="menu-button nav-icon js-tblcontents">
      <i class="iconfont">&#xe601;</i>
    </span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			isShowSlideDown(){
				this.$store.state.isShowSlideDown = !this.$store.state.isShowSlideDown;
			}
		}
	}
</script>

<style>
	.header.simple {
		background: 0 0;
		border-bottom: none;
		height:55px;
	}
	
	.global-nav-overlay-container,
	.header {
		box-sizing: border-box;
		width: 100%;
		text-align: center;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.clearfix:after {
		clear: both;
	}
	
	.clearfix:after,
	.clearfix:before {
		content: " ";
		display: table;
	}
	
	.global-nav-overlay-container.simple .menu-button,
	.header.simple .menu-button {
		width: 2.5rem;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #fefefe;
		font-size: 1.125rem;
		display: inline-block;
	}
	
	.global-nav-overlay-container .menu-button,
	.header .menu-button {
		position: absolute;
		text-align: center;
		speak: none;
		font-weight: 400;
		cursor: pointer;
		z-index: 9;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		right: 1.3125rem;
		padding: 0;
		vertical-align: bottom;
	}
	
	.global-nav-overlay-container.simple .menu-button .ifanr2015,
	.header.simple .menu-button .iconfont {
		line-height: 2.5rem;
		vertical-align: middle;
		/* font-size: 1.5rem; */
	}
	
	.iconfont {
		font-family: ifanr2015!important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>