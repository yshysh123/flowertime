<template>
  <div id="peach">
    <div class="box">
      <div class="head">
        <h2>花材养护「折纸」</h2>
        <span class="line"></span>
      </div>
      <div class="img">
        <img src='../../../static/img/patch0.jpg'>
      </div>
      <div class="content">
        <h3>折纸<span>Gerbera jamesonii Bolus</span>
        </h3>
        <br />
        <p>折纸属于非洲菊家族的一员，是菊科多年生草本植物，它没有香气，早期起源于南非，亚洲，南美和塔斯马尼亚岛。</p>
        <br />
        <p>如今在新西兰，每年都会繁殖约9亿支非洲菊，包含了600种不同的颜色，形状和大小。</p>
        <br />
        <p>没办法，谁让非洲菊魅力十足呢，不过经过长途跋涉，初次见面的时候她们会颔首低眉略显疲惫，按照养护步骤让她们好好的休息吧，喝饱了水她们就会美美的绽放了。</p>
        <br /><br />
        <h4>花语：神秘、互敬互爱，有毅力、不畏艰难、狂野的爱</h4>
        <br />
      </div>
      <div class="method">
        <h4>— 养护处理方法 —</h4>
        <div class="img">
          <img src='../../../static/img/patch1.jpg'>
          <p class="step">|&nbsp;1&nbsp;|&nbsp;洗净花瓶，放入1/3的水</p>
        </div>
        <div class="img">
          <img src='../../../static/img/patch2.jpg'>
          <p class="step">|&nbsp;2&nbsp;|&nbsp;加入可立鲜，为鲜花提供养分</p>
        </div>
        <div class="img">
          <img src='../../../static/img/patch3.jpg'>
          <p class="step">|&nbsp;3&nbsp;|&nbsp;以45度斜切鲜花根部，剪除长度视花瓶高度而定，一般花头顶部距瓶口12至15厘米。</p>
        </div>
        <div class="img">
          <img src='../../../static/img/patch4.jpg'>
          <p class="step">|&nbsp;4&nbsp;|&nbsp;插瓶即可</p>
        </div>
      </div>
      <div class="heart content">
        <br />
        <h4>— 养护小贴士 —</h4>
        <br />
        <p>
          大家有没有发现，非洲菊插在瓶子里没多久花杆就会变得黏黏的，这个时候憋犹豫，直接给剪了吧。因为非洲菊的花茎上有许多小绒毛，非常容易让细菌安家，所以剪短了以后，一定要用浅水养护哦。
        </p>
        <br />
        <p>
          花茎表面光滑的花材，例如：百合、玫瑰及洋桔梗这些就应该插到深水中。像非洲菊或向日葵这种花茎表面附着许多小绒毛的菊科花卉，最好就插在浅水中吧。
        </p>
        <br />
        <br />
      </div>
    <div class="footerimg">
    	<img src="https://img.yzcdn.cn/upload_files/2017/01/20/FurN7tPiQZwi7lPAMf72Y3P8tp2B.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
	    <img src="https://img.yzcdn.cn/upload_files/2017/01/20/FhYIjhj3evhhDYtJ6MOzfgZgFT3M.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
	    <img src="https://img.yzcdn.cn/upload_files/2017/01/20/Fs6JhrUOvG47hHnSn8uGDFLbAzEs.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
    </div>
    </div>
    <div class="foot_hide" style="height:2rem"></div>
		<footerdiv></footerdiv>
  </div>
</template>
<script>
import footerdiv from '../footer/footer'
export default {
  name: "peach",
  components: {
		footerdiv
	},
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>
<style>
#peach{
  padding: 0.4rem;
  letter-spacing: 0.12rem;
  background-color: #f8f8f8;
  color: rgb(84, 107, 93);
  font-size: 0.55rem;
  line-height: 2;
}
#peach .box{
  background-color: #fff;
  padding-top: 0.4rem;
  letter-spacing: 0.05rem;
}
#peach .box h2{
  color: rgba(130, 126, 128, 0.933333);
  text-align: center;
  margin-top: 0.7rem;
}
#peach .box .line{
  display: inline-block;
  width: 23%;
  box-sizing: border-box;
  background-color: rgb(160, 160, 160);
  height: 0.04rem;
  vertical-align: middle;
  margin-left: 40%;
}
#peach .box .img img{
  width: 100%;
  height: 100%;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
}
#peach .box .content{
  padding-left: 1.15rem;
  padding-right: 1.15rem;
}
#peach h3{
  color: rgba(130, 126, 128, 0.933333);
}
#peach h3 span{
  font-size: 0.6rem;
  letter-spacing: normal;
  margin-left: 0.6rem;
  color: rgb(84, 107, 93);
}
#peach .heart{
  border: 0.24rem solid rgb(240, 240, 240);
}

#peach .clearFix{
	display:block;
	overflow:hidden;
	visibility:hidden;
	height:0;
	clear:both;
	content:'';
}
#peach li{
  float: left;
}
#peach img{
  width: 7.5rem;
  height: 7.5rem;
}
#peach h4{
  text-align: center;
  color: rgba(130, 126, 128, 0.933333);
}
#peach .step{
  margin-top: -1.5rem;
  text-indent: 1.5rem;
}
#peach .foot{
  width: 100%;
  height: 2rem;
  background-color: white;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(15, 25, 42, 0.05);
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
}
#peach .foot .foot_left{
  width: 2.2rem;
  float: left;
}
#peach .foot_left img{
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.6rem;
}
#peach .foot .foot_right{
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#peach .foot_right .foot_tab{
  border-left: 1px solid #bdbdbd;
  height: 1rem;
  font-size: 0.5rem;
  line-height: 1rem;
  font-weight: 550;
  margin-top: 0.5rem;
  width: 4.2rem;
  float: left;
  background-size: 0.3rem 0.5rem;
}
#peach .foot_tab span{
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
#peach .footerimg img{
	width: 100%;
}
</style>