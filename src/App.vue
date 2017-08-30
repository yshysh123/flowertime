<template>
  <div id="app">
    <router-view></router-view>
    <div id="loading" v-show="show">
  			<img src="./loading.gif"/>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
  	"$route": "test"
	},
	data(){
		return {
			show:false
		}
	},
	methods:{
		test(){
			this.show = true;
			document.body.className ="html-body-overflow";
			setTimeout(()=>{
				this.show = false;
				 document.body.className ="";
			},800)
		}
	},
}
</script>

<style>
@import './assets/base.css';
#loading{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 100000000;
	background: #fff;
}
#loading img{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
}
.html-body-overflow
{
	height: 100vh;
  overflow-x:hidden;
  overflow-y:hidden;
}
</style>
