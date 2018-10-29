<template>
	<transition name="searchslide">
		<div id="search-page-wrapper" v-show="isShowSearch">
			<div class="nav-controller">
				<a href="javascript:;" class="ifanr-logo"></a>
				<span class="nav-search-button"></span>
				<span class="nav-close-button" @click="setSearch"><i class="iconfont">&#xe61b;</i></span>
			</div>

			<div class="query-box-wrapper">
				<div class="query-box">
					<input @focus="toggle" type="text" placeholder="搜索未来" />
					<span v-show="isShowClose" @click="close"><i class="iconfont">&#xe61b;</i></span>
				</div>
			</div>
			<div class="hot-search">
				<div class="hot-word" v-show="isShowWords">
					<ul>
						<li>
							<h3>热门搜索</h3></li>
						<li v-for="a in hotwords">{{a.word}}</li>
					</ul>
				</div>
				<div class="search-result"></div>
			</div>
		</div>
	</transition>
</template>
<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				//				isShowSearch: true,
				isShowClose: false,
				hotwords: [],
				keyword: 'times',
				isShowWords: true
			}
		},
		methods: {
			toggle() {
				this.isShowClose = true;
			},
			close() {
				this.isShowClose = false;
			},
			setSearch(){
				this.$store.state.isShowSearch = !this.$store.state.isShowSearch;
			}
		},
		mounted() {
			var self = this;
			$.ajax({
				type: 'get',
				url: 'http://localhost:12348/hotwords',
				data: {
					keyword: self.keyword
				},
				success: function(data) {
					self.hotwords = data.slice(0, 5);
				}
			})
//			console.log(this.isShowSearch);
		},
		computed: {
			isShowSearch() {
				return this.$store.state.isShowSearch;
			}
		}
	}
</script>

<style>
	#search-page-wrapper {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0px;
		z-index: 1000;
		background: #fff;
		min-height: 640px;
		display: flex;
		flex-direction: column;
	}
	
	#search-page-wrapper .nav-controller {
		flex: 0;
	}
	
	#search-page-wrapper .nav-controller .nav-close-button {
		margin: 0 25px;
	}
	
	#search-page-wrapper .query-box-wrapper {
		box-sizing: border-box;
		width: 90%;
		margin: 0 auto;
		border-bottom: 1px solid #dadada;
		padding: 30px 10px 0 10px;
	}
	
	#search-page-wrapper .query-box-wrapper .query-box input {
		width: 80%;
		padding-left: 20%;
		font-size: 30px;
		color: #dadada;
		margin-right: 12%;
	}
	
	#search-page-wrapper .query-box-wrapper .query-box span {
		background: #dadada;
		border: 1px solid #dadada;
		border-radius: 50%;
		box-sizing: border-box;
		padding: 0 1px;
		text-align: left;
	}
	
	#search-page-wrapper .query-box-wrapper .query-box span i {
		color: #fff;
		font-size: 14px;
		line-height: 14px;
	}
	
	#search-page-wrapper .hot-search {
		margin-top: 50px;
		flex: 7;
		position: relative;
	}
	
	#search-page-wrapper .hot-search .hot-word {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}
	
	#search-page-wrapper .hot-search .hot-word ul {
		display: flex;
		flex-direction: column;
	}
	
	#search-page-wrapper .hot-search .hot-word ul li {
		flex: 1;
		font-size: 18px;
		line-height: 50px;
		text-align: center;
		color: red;
	}
	
	#search-page-wrapper .hot-search .hot-word ul li h3 {
		font-size: 20px;
		line-height: 40px;
		font-weight: normal;
		color: #333;
	}
	
	#search-page-wrapper .hot-search .search-result {
		position: absolute;
		left: 0;
		top: 0;
	}
	.searchslide-enter-active{
		animation: searchslide 0.8s ;
	}
	.searchslide-leave-active{
		animation: searchslide 0.5s reverse;
	}
	@keyframes searchslide{
		0%{
			transform: translateX(320px);
		}
		100%{
			transform: translateX(0px);
		}
	}
</style>