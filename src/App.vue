<template>
	<div id="app" class="home-container outer-container">
		<!--<simpleHeader></simpleHeader>
		<fHeader></fHeader>
		<indexSlideDown></indexSlideDown>
		<banner></banner>
		<navMenu></navMenu>-->
		<!--<findex></findex>-->
		<router-view></router-view>
	</div>
</template>

<script>
//	import simpleHeader from './components/simpleHeader.vue';
//	import fHeader from './components/fHeader.vue';
//	import indexSlideDown from './components/indexSlideDown.vue';
//	import banner from './components/banner.vue';
//	import navMenu from './components/nav-menu.vue';
//	import newsList from './components/newsList.vue';
	import findex from './containers/findex.vue';
	import registe from './containers/registe.vue';
	import userhome from './containers/userHome.vue';
	export default {
		name: 'app',
		components: {
//			simpleHeader,
//			fHeader,
//			indexSlideDown,
//			banner,
//			navMenu,
//			newsList
			findex,
			registe,
			userhome
		},
		mounted(){
//			location.href="#/fIndex"
		}
	}
</script>

<style>
	html,
	body,
	ul,
	li,
	ol,
	dl,
	dd,
	dt,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	form,
	fieldset,
	legend,
	img,
	input {
		margin: 0;
		padding: 0;
	}
	
	fieldset,
	img,
	input,
	button {
		border: 0 none;
		padding: 0;
		margin: 0;
		outline-style: none;
	}
	
	ul,
	li,
	ol {
		list-style: none;
	}
	
	select,
	input {
		vertical-align: middle;
	}
	
	textarea {
		resize: none;
	}
	/*防止拖动*/
	
	img {
		border: 0;
		vertical-align: middle;
	}
	/*  去掉图片低测默认的3像素空白缝隙，或者用display：block也可以*/
	
	table {
		border-collapse: collapse;
	}
	
	a {
		text-decoration: none;
	}
	
	@font-face {
  font-family: 'iconfont';  /* project id 877180 */
  src: url('https://at.alicdn.com/t/font_877180_ujoihkgk7hq.eot');
  src: url('https://at.alicdn.com/t/font_877180_ujoihkgk7hq.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_877180_ujoihkgk7hq.woff') format('woff'),
  url('https://at.alicdn.com/t/font_877180_ujoihkgk7hq.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_877180_ujoihkgk7hq.svg#iconfont') format('svg');
}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height:100%;
		width: 100%;
		overflow: hidden;
		/*display: flex;*/
		/*flex-direction: row;*/
	}
	
	html.auto-height body.home .outer-container {
		height: auto;
	}
	
	.home-container {
		position: relative;
		width: 100%;
		background-color: #fff;
		overflow-x: hidden;
	}
</style>