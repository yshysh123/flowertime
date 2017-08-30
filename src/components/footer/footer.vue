<template>
	<div class="foot">
      <div class="foot_left">
        <router-link to="/"><img src="http://misc.reflower.com.cn/images/icon/home@3x.png" /></router-link>
      </div>
      <div class="foot_right">
        <div class="foot_tab" @click="hide1">
          <span>这里买花</span>
          <ul class="hide tab1" v-show="isHide1">
        		<li><router-link to="/flowers/自然系列|单品版">99元4束 | 清凉自然单品</router-link></li>
        		<li><router-link to="/flowers/自然系列|混合版">99元4束 | 经典自然混合</router-link></li>
        		<li><router-link to="/flowers/自然系列|双拼版">139元4束 | 自然系列双拼</router-link></li>
        		<li><router-link to="/flowers/自然系列|PRO版">169元4束 | 自然Pro</router-link></li>
        	</ul>
        </div>
        <div class="foot_tab" @click="hide2">
          <span>花意生活</span>
        	<ul class="hide tab2" v-show="isHide2">
        		<li><router-link to="/花意生活/鲜花故事">鲜花故事</router-link></li>
        		<li><router-link to="/花意生活/养护知识">养护知识</router-link></li>
        		<li><router-link to="/花意生活/如何收花">如何收花</router-link></li>
        		<li><router-link to="/花意生活/关于我们">关于我们</router-link></li>
        	</ul>
        </div>
        <div class="foot_tab" @click="hide3">
          <span>会员服务</span>
        </div>
        <ul class="hide tab3" v-show="isHide3">
          <li><router-link to="/login">个人中心</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
	export default {
		data () {
		    return {
		        isHide1:false,
		        isHide2:false,
		        isHide3:false
		    }
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
		    }
		}
	}
</script>

<style>
	.foot{
	  width: 100%;
	  height: 2rem;
	  background-color: white;
	  box-shadow: 0 -0.08rem 0.16rem 0 rgba(15, 25, 42, 0.05);
	  position: fixed;
	  z-index: 999999;
	  bottom: 0;
	  left: 0;
	}
	.foot .foot_left{
	  width: 2.2rem;
	  float: left;
	}
	.foot_left img{
	  width: 0.8rem;
	  height: 0.8rem;
	  margin: 0.6rem;
	}
	.foot .foot_right{
	  float: left;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
	.foot_right .foot_tab{
	  border-left: 1px solid #bdbdbd;
	  height: 1rem;
	  font-size: 0.5rem;
	  line-height: 1rem;
	  font-weight: 550;
	  margin-top: 0.5rem;
	  width: 4.2rem;
	  float: left;
	  background: url('Combined Shape@3x.png') no-repeat 0.7rem 0.28rem;
	  background-size: 0.3rem 0.5rem;
	}
	.foot_tab span{
	  padding-left: 1.45rem;
	}
	.tab1,.tab2,.tab3{
	  position: fixed;
	  bottom: 2.2rem;
	  z-index: 100;
	  background-color: white;
	  border-radius: 0.2rem;
	  /*display: none;*/
	}
	.tab1{
	  left: 0.8rem;
	}
	.tab2{
	  left: 45%;
	}
	.tab3{
	  right: 0.5rem;
	}
	.hide li{
	  font-size: 13px;
	  text-align: center;
	  padding: 0.37rem 0.4rem;
	  border-bottom: 1px solid #f3f3f3;
	  margin: 0 0.4rem;
	}
</style>