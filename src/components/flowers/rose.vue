<template>
  <div id="body">
  	<div class="banner">
  		<swipe class="my-swipe">
				<swipe-item class="slide1" v-for="item in flowerCon.lunbo"><img :src="item"></swipe-item>
			</swipe>
  	</div>
  	<div class="body_con1">
      <img src="http://misc.reflower.com.cn/images/icon/spzs1@3x.png" alt="">
      <div class="rose_title">{{flowerCon.title}}</div>
      <div class="rose_content">{{flowerCon.hd}}</div>
				<div class="rose_price">
					<strong>
            <span class="rose_pr">¥</span>
						<span class="rose_pr2">{{flowerCon.price}}</span>
						<span class="rose_pr">.00</span>
          </strong>
				</div>
  	</div>
  	<div class="body_con2" v-for="item in flowerCon.pic">
      <img v-lazy="item">
  	</div>
    <div class="foot_hide"></div>
    <div class="foot">
      <div class="foot_left">
        <router-link to="/"><img src="http://misc.reflower.com.cn/images/icon/home@3x.png" /></router-link>
      </div>
      <div class="foot_right">
        <div class="buy" @click="buynow">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
	import { MessageBox } from 'element-ui';
	require('vue-swipe/dist/vue-swipe.css')
	import { Swipe, SwipeItem } from 'vue-swipe';
	export default {
	  name: 'rose',
	  components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
	  data () {
	    return {
        isHide1:false,
        isHide2:false,
        isHide3:false,
        flowerCon:[],
        fullPath:'',
        onOff:true
	    }
	  },
	  mounted(){
	  	document.getElementsByTagName('body')[0].scrollTop = 0;
	  	this.$ajax.get('http://flower_content').then(response => {
		    this.flowerCon=response.data;
		    this.fullPath = this.$route.fullPath.split('/')[2]
		    this.flowerCon.forEach(e=>{
					if(e.name===this.fullPath){
						this.flowerCon = e;
					}
				})
			}, response => {
			    console.log('error')
			})
		},
		methods:{
      hide1(){
        this.isHide1 = !this.isHide1;
        this.isHide2 = false;
        this.isHide3 = false;
      },
      hide2(){
        this.isHide2 = !this.isHide2;
        this.isHide1 = false;
        this.isHide3 = false;
      },
      hide3(){
        this.isHide3 = !this.isHide3;
        this.isHide1 = false;
        this.isHide2 = false;
      },
      buynow(){
      	let login = JSON.parse(localStorage.getItem('login'))
      	if(JSON.parse(localStorage.getItem('buy'))){
      		this.$store.state.buythings = JSON.parse(localStorage.getItem('buy'))
      	}else{
      		this.$store.state.buythings = [];
      	}
      	if(login){
      		this.onOff = true;
      		let json = {}
      		json.pic = this.flowerCon.lunbo[0];
      		json.name = this.flowerCon.title;
      		json.price = this.flowerCon.price;
      		json.num = 1;
      		json.sell = '未付款';
      		this.$store.state.buythings.forEach(e=>{
      			if(e.name==json.name){
      				this.onOff =false;
      				this.$confirm('您已经购买这个鲜花了~还要继续购买吗?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$message({
			            type: 'success',
			            message: '购买成功!'
			          });
			          this.$store.state.buythings.push(json);
								localStorage.setItem('buy',JSON.stringify(this.$store.state.buythings))
			      		this.$router.push({path: '/shoppingcar'})
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消购买',
			          });   
			          return
			        });
      			}
      		})
      		if(this.onOff){
      			this.$store.state.buythings.push(json);
	      		localStorage.setItem('buy',JSON.stringify(this.$store.state.buythings))
	      		this.$router.push({path: '/shoppingcar'})
      		}
      	}else{
      		this.$router.push({path: '/login'})
      	}
      }
		}
	}
</script>


<style>
.el-message-box__wrapper .el-message-box{
	width: 350px;
}
#body{
	background: #f9f9f9;
}
#body .banner{
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
  width: 100%;
  height: 15rem;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
}
#body .my-swipe img{
	width:100%;
	height: 15rem;
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
	padding: 0.7rem;
  margin-bottom: 0.6rem;
  background: #fff;
}
#body .body_con1 img{
  width: 0.8rem;
  height: 0.08rem;
  margin-bottom: 0.3rem;
}
#body .body_con1 .rose_title{
  font-size: 0.64rem;
  margin-bottom: 0.3rem;
}
#body .body_con1 .rose_content{
  font-size: 0.5rem;
  color: #7b868c;
  margin-bottom: 1.2rem;
}
#body .body_con1 strong{
  color:#fc5967;
}
#body .body_con1 .rose_pr2{
  font-size: 1.1rem;
}
#body .body_con2 img{
	width: 100%;
  display: block;
}
#body .foot_hide{
  height: 2rem;
}
#body .foot{
  width: 100%;
  height: 2rem;
  background-color: white;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(15, 25, 42, 0.05);
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
}
#body .foot .foot_left{
  width: 2.2rem;
  float: left;
}
#body .foot_left img{
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.6rem;
}
#body .foot .foot_right{
  float: left;
  display: flex;
  height: 1rem;
  margin-top: 0.5rem;
  border-left: 1px solid #e9e9e9;
  align-items: center;
  justify-content: space-between;
}
#body .foot .foot_right .buy{
  background: #fc5967;
  color: #fff;
  width: 12rem;
  height: 39px;
  display: block;
  margin: 0 0.3rem;
  font-size: 14px;
  line-height: 39px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0;
}
</style>
