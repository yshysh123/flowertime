<template>
  <div id="body">
  	<div class="banner">
  		<swipe class="my-swipe">
				<swipe-item class="slide1" v-for="item in pics"><img :src="item.pic" @click="chooseflower(item)"></swipe-item>
			</swipe>
			<img src="https://misc.reflower.com.cn/images/pdb1@3x.png" class="posi_img"/>
  	</div>
  	<div class="body_con1">
  		<img src="http://img.reflower.com.cn/9bf49df609753ba6396e4a48049f35277af0957d" class="titleimg"/>
  		<div class="scrollview">
	  		<ul>
	  			<li v-for="(item,index) in natrual" @click="chooseflower(item)"><img :src="item.pic"/></li>
	  		</ul>
  		</div>
  	</div>
  	<div class="body_con2">
  		<img src="http://img.reflower.com.cn/8b118882c7dd461bba69851d76f83e532dfe809c" class="titleimg"/>
  		<ul>
  			<li v-for="(item,index) in seventhmoon" @click="chooseflower(item)"><img :src="item.pic"/></li>
  		</ul>
  	</div>
  	<div class="body_con3">
  		<img src="http://img.reflower.com.cn/59c8f6f1a335f7e1722c462edcdffebd1ccfee63" class="titleimg"/>
  		<ul>
  			<li v-for="(item,index) in smart" @click="chooseflower(item)"><img :src="item.pic"/></li>
  		</ul>
  	</div>
  	<div class="body_con4">
  		<img src="http://img.reflower.com.cn/268c6bbab8c2ec0ed2bb443b79dc678de8858114" class="titleimg"/>
  		<ul>
  			<li v-for="(item,index) in natural2" @click="chooseflower(item)"><img :src="item.pic"/></li>
  		</ul>
  	</div>
  	<div class="body_con5">
  		<img src="http://img.reflower.com.cn/2da892a73de2a2e36821cc18562e3e15210c10ca" class="titleimg"/>
  		<ul>
  			<li v-for="(item,index) in theme" @click="chooseflower(item)"><img :src="item.pic"/></li>
  		</ul>
  	</div>
  	<div class="body_con6">
  		<img src="http://img.reflower.com.cn/47b3109af7522af8803dc093f6a79265bb36e154" class="titleimg"/>
  		<ul>
  			<li v-for="(item,index) in accessories" @click="chooseflower(item)"><img :src="item.pic"/></li>
  		</ul>
  	</div>
  	<div class="footer">
  		<img src="http://misc.reflower.com.cn/images/footer.png"/>
  	</div>
  	<footerdiv></footerdiv>
  </div>
</template>

<script>
	require('vue-swipe/dist/vue-swipe.css')
	import { Swipe, SwipeItem } from 'vue-swipe';
	import footerdiv from './footer/footer'
	export default {
	  name: 'body',
	  components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem,
			footerdiv
		},
	  data () {
	    return {
        isHide1:false,
        isHide2:false,
        isHide3:false,
	      pics:[],
				natrual:[],
				seventhmoon:[],
				smart:[],
				natural2:[],
				theme:[],
				accessories:[]
	    }
	  },
	  mounted(){
	  	this.$ajax.get('http://flower_time_pic').then(response => {
			    this.pics=response.data;
			}, response => {
			    console.log('error')
			})
			this.$ajax.get('http://flower_time_natural').then(response => {
			    this.natrual=response.data;
			}, response => {
			    console.log('error')
			})
			this.$ajax.get('http://flower_time_seventhmoon').then(response => {
			    this.seventhmoon=response.data;
			}, response => {
			    console.log('error')
			})
			this.$ajax.get('http://flower_time_smart').then(response => {
			    this.smart=response.data;
			}, response => {
			    console.log('error')
			})
			this.$ajax.get('http://flower_time_natural2').then(response => {
			    this.natural2=response.data;
			}, response => {
			    console.log('error')
			})
			this.$ajax.get('http://flower_time_theme').then(response => {
			    this.theme=response.data;
			}, response => {
			    console.log('error')
			})
			this.$ajax.get('http://flower_time_Accessories').then(response => {
			    this.accessories=response.data;
			}, response => {
			    console.log('error')
			})
		},
		methods:{
			chooseflower(item){
				this.$router.push({path: '/flowers/'+item.name})
			}
		}
	}
</script>


<style scoped>
#body{
	background: #f7f7f7;
}
#body .banner{
	padding: 0.6rem;
	padding-bottom: 0;
	position: relative;
}
#body .posi_img{
	position: absolute;
	width: 90%;
	bottom: -1.2rem;
	left: 0.7rem;
}
#body .my-swipe {
  height: 10rem;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
  border-radius: 0.2rem;
}
#body .my-swipe img{
	width:100%;
	height: 100%;
	border-radius: 0.3rem;
}
#body .mint-swipe-indicator.is-active{
	background: #ffa630;
}
#body .mint-swipe-indicator{
	border-radius: 50%;
}
#body .slide1 {
  background-color: #0089dc;
  color: #fff;
}
#body .titleimg{
	width: 100%;
}
#body .scrollview {
  overflow-x: scroll;
}
#body .body_con1 {
	padding: 0.6rem;
	padding-bottom: 0;
}
#body .body_con1 ul{
  	width: 60rem;
}
#body .body_con1 ul li{
  width: 5.2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  float: left;
}
#body .body_con1 ul li img{
  width: 5.2rem;
}
#body .body_con2 ul li,#body .body_con3 ul li,#body .body_con4 ul li,#body .body_con5 ul li{
	padding: 0.6rem;
	padding-bottom: 0;
}
#body .body_con2 ul li:nth-of-type(1),#body .body_con3 ul li:nth-of-type(1),#body .body_con4 ul li:nth-of-type(1),#body .body_con5 ul li:nth-of-type(1){
	padding-top: 0;
}
#body .body_con2 img,#body .body_con3 img,#body .body_con4 img,#body .body_con5 img{
	width: 100%;
}
#body .body_con6{
	padding: 0.6rem;
	padding-top: 0;
	padding-bottom: 1.4rem;
}
#body .body_con6 ul{
	overflow: hidden;
	background: #fff;
}
#body .body_con6 li{
	float: left;
	padding-left: 4%;
	padding-top: 4%;
	padding-bottom: 4%;
	width: 44%;
	height: 8.5rem;
}
#body .body_con6 li img{
	height: 100%;
	width: 100%;
}
#body .footer{
	border-bottom: 0.1rem;
  margin-bottom: 2rem;
}
#body .footer img{
	width: 100%;
}
</style>
