<template>
	<div id="shoppingcar">
		<div class="shoppingcar_title">
			<ul>
				<li v-for="(item,index) in contentlist" @click="chooseRM(index)" :class="{'active':index===isActive}">{{item}}</li>
			</ul>
		</div>
		<div class="shoppingcar_con">
			<img src="https://misc.reflower.com.cn/images/icon/background@2x.png" v-show="!xuanran.length" class="bg"/>
			<ul>
				<li v-for="(item,index) in xuanran">
					<img :src="item.pic">
					<div class="right">
						<p>{{item.name}}</p>
						<div class="flo">
							<span>¥{{item.price*item.num}}</span>
							<span :class="{'buyed':item.sell==='已付款'}">{{item.sell}}</span>
						</div>
						<div v-show="item.sell=='已付款'" class="buyed">
							您已经购买{{item.num}}束花<br />
							商品会尽快送达您的手中
						</div>
						<div class="plus" v-show="item.sell!=='已付款'">
							<button @click="jian(index)">-</button>{{item.num}}<button @click="plus(index)">+</button>
						</div>
						<button  v-show="item.sell!=='已付款'" class="buy" @click="buy(index)">付款</button>
					</div>
				</li>
			</ul>
		</div>
		<div class="foot_hide" style="height:2rem"></div>
		<footerdiv></footerdiv>
	</div>
</template>

<script>
	import footerdiv from '../footer/footer'
	export default {
	  	name: "shoppingcar",
	  	components: {
			footerdiv
		},
	  	data () {
	    	return {
	    		contentlist:[
	    			'全部','未付款','已付款'
	    		],
	    		isActive:0,
	    		xuanran:[],
	    		num:1,
	    		now:'全部'
	    	}
	  	},
	  	mounted(){
	  		this.xuanran=JSON.parse(localStorage.getItem('buy'))
	  	},
	  	methods:{
			chooseRM(index){
				this.isActive = index;
				this.now = this.contentlist[index];
				let shoppingcar_con = document.getElementsByClassName('shoppingcar_con')[0];
				shoppingcar_con.style.opacity = 0;
				shoppingcar_con.style.transition = '0.5s';
				setTimeout(()=>{
					if(index==0){
						this.xuanran=JSON.parse(localStorage.getItem('buy'))
					}
					else{
						this.xuanran=JSON.parse(localStorage.getItem('buy'))
						this.xuanran = this.xuanran.filter(e=>{
							return e.sell == this.contentlist[index];
						})
					}
					shoppingcar_con.style.opacity = 1;
				},500)
			},
			jian(index){
				if(this.now=='未付款'){
					this.chooseRM(0);
					return;
				}
				if(this.xuanran[index].num==0){
					return;	
				}
				this.xuanran[index].num--;
				localStorage.setItem('buy',JSON.stringify(this.xuanran))
			},
			plus(index){
				if(this.now=='未付款'){
					this.chooseRM(0);
					return;
				}
				this.xuanran[index].num++;
				localStorage.setItem('buy',JSON.stringify(this.xuanran))
			},
			buy(index){
				if(this.now=='未付款'){
					this.chooseRM(0);
					return;
				}
				this.xuanran[index].sell = '已付款';
				localStorage.setItem('buy',JSON.stringify(this.xuanran))
			}
	  	}
	}
</script>

<style>
	#shoppingcar .shoppingcar_title {
	  	padding-left: 0.8rem;
	  	font-size: 0.72rem;
	  	line-height: 2rem;
	  	border-bottom: 0.02rem solid #cccccc;
	}
	#shoppingcar .shoppingcar_title ul {
	  	overflow: hidden;
	}
	#shoppingcar .shoppingcar_title ul li {
	  	float: left;
	  	width: 32%;
	  	text-align: center;
	}
	#shoppingcar .shoppingcar_title ul .active{
		color:rgb(195, 214, 0);
		border-bottom: 1px solid rgb(195, 214, 0);
	}
	#shoppingcar .bg{
		width: 100%;
	}
	#shoppingcar .shoppingcar_con li {
	  	padding: 0.8rem;
	  	height: 5rem;
	  	padding-bottom: 0.8rem;
	  	padding-top: 0.4rem;
	  	position: relative;
	  	border-bottom: 0.02rem solid #cccccc;
	}
	#shoppingcar .shoppingcar_con li img {
	  	width: 6.4rem;
	  	height: 5rem;
	  	position: absolute;
	  	left: 0.8rem;
	  	top: 0.4rem;
	  	box-shadow: 0.06rem 0.06rem 0.06rem #cccccc;
	}
	#shoppingcar .shoppingcar_con li .right{
		width: 45%;
	}
	#shoppingcar .shoppingcar_con li .right p{
		font-size: 0.8rem;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	  	margin-bottom: 0.4rem;
	}
	#shoppingcar .shoppingcar_con li .flo span:first-of-type {
	  	font-size: 0.8rem;
	  	color: #ff7800;
	}
	#shoppingcar .shoppingcar_con li .flo span:last-of-type {
	  	font-size: 0.8rem;
	  	color: #FF0000;
	  	margin-left: 0.8rem;
	  	border: 1px solid #ff0000;
	  	border-radius: 0.2rem;
	}
	#shoppingcar .shoppingcar_con li .flo span:last-of-type.buyed{
		color:green;
		border-color: green;
	}
	#shoppingcar .shoppingcar_con li .plus{
		margin-top: 0.4rem;
		font-size: 0.8rem;
		line-height: 0.8rem;
	}
	#shoppingcar .shoppingcar_con .buyed{
		line-height: 1rem;
		font-size: 0.5rem;
		margin-top: 0.4rem;
	}
	#shoppingcar .shoppingcar_con li .plus button{
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		width: 1rem;
		height: 1rem;
	}
	#shoppingcar .shoppingcar_con .right .buy{
		height: 1rem;
		width: 2rem;
		margin-left: 1rem;
		margin-top: 0.4rem;
	}
</style>