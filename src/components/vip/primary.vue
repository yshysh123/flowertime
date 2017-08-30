<template>
  <div id="primary">
    <div class="banner">
      <img src="https://misc.reflower.com.cn/images/icon/logo3.png">
    </div>
    <div class="login">
      <div class="login_txt">
        <span>手机号</span>
        <div class="right">
          <input class="phone" type="tel" maxlength="11" placeholder="输入手机号" v-model="phone_num">
          <input class="send" type="button" style="color: #999;border-color:#999;" value="获取验证码">
        </div>
      </div>
      <div class="login_txt" style="border:0">
        <span>密码</span>
        <div class="right">
          <input class="phone" type="tel" maxlength="11" placeholder="输入密码" v-model="password">
        </div>
      </div>
    </div>
    <div class="enter">
      <input type="button" value="登录" @click="login"/>
    </div>
  </div>
</template>
<script>
	export default {
	  name: "primary",
	  data () {
	    return {
	      phone_num:'',
	      password:'',
	      message:{}
	    }
  	},
  	methods:{
  		login(){
  			this.message = this.$store.state.loginmessage;
  			let json = {}
  			json.username = this.phone_num;
  			json.password = this.password;
  			this.message.forEach(e=>{
  				if(e.phone_num===this.phone_num&&e.password===this.password){
  					localStorage.setItem('login',JSON.stringify(json))
  					this.$router.push({path: '/'})
  				}
  				else{
  				}
  			})
  		}
  	}
	}
</script>
<style>
body{
  background: #f7f7f7;
}
#primary .banner{
  margin: 1.5rem;
}
#primary .banner img{
  display: block;
  width: 3.6rem;
  margin: 0 auto;
}
#primary .login{
  height: 4.2rem;
  margin: 0 0.6rem;
  background: #fff;
  border-radius: 0.2rem;
  overflow: hidden;
}
#primary .login .login_txt{
  display: flex;
  align-items: center;
  height: 2rem;
  border-bottom: 0.04rem solid #e9e9e9;
  background-color: white;
  position: relative;
}
#primary .login .right{
  margin-left: 1rem;
}
#primary .login span{
  display: inline-block;
  height: 1rem;
  width: 2.5rem;
  line-height: 1rem;
  padding: 0 0 0 1rem;
  border-right: 0.04rem solid #e9e9e9;
}
#primary .login .send{
  width: 3.8rem;
  height: 1.2rem;
  color: #c3d800;
  background-color: white;
  border: 0.04rem solid #c3d800;
  padding: 0 0.48rem;
  position: absolute;
  right: 0.4rem;
  top: 0.44rem;
  border-radius: 0.48rem;
}
#primary .enter input{
  width: 13.8rem;
  height: 1.76rem;
  line-height: 1.76rem;
  text-align: center;
  color: white;
  border: none;
  border-radius: 0.2rem;
  font-size: 0.56rem;
  background-color: #CCCC99;
  color: white;
  margin-left: 0.6rem;
  margin-top: 0.5rem;
}

</style>
