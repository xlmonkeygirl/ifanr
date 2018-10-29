<template>
	<div id="user-home">
		<userslidedown></userslidedown>
		<usercenter></usercenter>
	</div>
	<!--<router-view></router-view>-->
</template>

<script>
	import userslidedown from '../components/userSlideDown.vue';
	import usercenter from '../components/usercenter.vue';
	export default {
		data() {
			return {

			}
		},
		components: {
			userslidedown,
			usercenter
		}
	}
</script>

<style>

</style>