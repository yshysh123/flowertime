<template>
  <div id="about">
    <div class="header">
      <h1>花点时间谈我们</h1>
      <p>2015年5月 花点时间背后花了好多时间的人</p>
    </div>
    <ul>
      <li style="margin-bottom:1rem">
        <img src="http://imgqn.koudaitong.com/upload_files/2015/05/26/FvUNWMZhk9u8vdH6cWqudi_Mwrjq.jpg!730x0.jpg">
      </li>
      <li>
        <p>“与其匆忙改变世界，不如温暖少许心灵”。</p>
        <p>上面那句，是我忽悠合伙人上贼船时喷的话。</p>
        <p>说完之后，明显感受到她那闪着光的大眼睛，忽闪而伶俐。</p>
        <p>我就知道，已得手。</p>
        <p>那时，我跟她分别在两家价值10亿美金的公司，打着创业的名义，干着操碎心的事儿，说着改变世界的豪言壮语，经历着每家大公司高管都逃不过的喜怒哀愁。</p>
        <p>而“花点时间”，是两年前就种在脑子里的一个想法。两年来，却浸淫在改变世界的YY中，始终未曾实践那个小而美的梦想。直到看到有人悄悄把这事情干出了摸样——那感觉，就像是自己暗恋了很久的男生，却被别的姑娘上了。</p>
        <p>于是，毅然决定，开干。</p>
        <p>于是，一个干O2O的，一个卖车的，再加一个搞装修的（这么说纯粹为节目效果，其实人家是国际一线品牌搞设计的，我们是个对品位有高要求的团队好吗），放弃了年薪百万（这是虚张声势的，你们不知道年薪百万要扣多少税……）的工作，轻装上阵，纵情出发。</p>
        <p>于是，就有了“花点时间”。</p>
        <p>花点时间，有两个意思。一，用有趣的花点缀你每天的时间。二，多花一点点时间，生活便可大大不同。</p>
        <p>花点时间是传递美趣生活的电商平台。它卖花，更贩卖“有趣”。凭什么一提起鲜花就必须高冷或奢华？花点时间为每一个渴望“过鲜活有趣的生活”的人提供好玩、有趣的“每周一花”。每一周，一束充满灵感和故事的鲜花都向你奔涌而来。只需一顿饭钱，就可以经历每周一次的“愉悦意外”。</p>
        <p>我们知道在那些动辄讨论百亿千亿大新闻的刷屏下，你其实需要的是一缕真实的清香，一朵真实绽放的花；</p>
        <p>我们知道在都市奋斗的你，需要偶尔暖意的陪伴；</p>
        <p>我们知道假如生活不能鲜活、有趣，不能乐在其中，还有什么意思呢？</p>
        <p>看着我的合伙人把微信签名改成了“不求贵胄加身，但愿不负青春”。</p>
        <p>我踏实的咽了咽口水。</p>
        <p>嗯，不求改变世界，但愿温暖心灵。</p>
        <p style="text-align:right">by  花点时间  花怡太</p>
      </li>
      <li>
        <img src="https://img.yzcdn.cn/upload_files/2016/06/02/FjkdgJ4E7mmdtG__9qafrNZ-zcQ8.jpg?imageView2/2/w/730/h/0/q/75/format/webp" >
      </li>
    </ul>
    <div class="foot_hide" style="height:2rem"></div>

    <footerdiv></footerdiv>
  </div>
</template>
<script>
	import footerdiv from '../footer/footer'
export default {
  name: "about",
  components: {
		footerdiv
	},
  data () {
    return {
      isHide1:false,
      isHide2:false,
      isHide3:false
    }
  },
  methods:{
    chooseflower(item){
      this.$router.push({path: '/flowers/'+item.name})
    },
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
<style scoped>
#about{
  background: #f9f9f9;
}
.header{
  padding: 0.7rem 0.4rem;
}
.header p{
  color: #8c8c8c;
}
ul{
  padding: 0.4rem;
}
img{
  max-width: 100% !important;
  width: auto !important;
}
p{
  font-size: 0.6rem;
  color: #333;
  margin: 0 0 1em 0;
}

#about .foot{
  width: 100%;
  height: 2rem;
  background-color: white;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(15, 25, 42, 0.05);
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
}
#about .foot .foot_left{
  width: 2.2rem;
  float: left;
}
#about .foot_left img{
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.6rem;
}
#about .foot .foot_right{
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#about .foot_right .foot_tab{
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
#about .foot_tab span{
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
