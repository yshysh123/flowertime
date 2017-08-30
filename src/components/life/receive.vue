<template>
  <div id="receive">
    <div class="header">
      <h1>如何完美收花</h1>
      <p>2015-06-15 花点时间的操心人</p>
    </div>
    <ul>
      <li>
        <img src="https://img.yzcdn.cn/upload_files/2016/03/04/FqkHg_M5EZUFbTMsjqG1JAVuvC6P.jpg!730x0.jpg">
      </li>
      <li>
        <img src="https://img.yzcdn.cn/upload_files/2016/03/04/FpQYTzxT62x4xe1q8rdE_Mld6PSE.jpg!730x0.jpg">
      </li>
      <li>
        <img src="https://img.yzcdn.cn/upload_files/2016/03/04/FnAC33uxgNPQW3C5VQCfCes2nkiG.jpg?imageView2/2/w/730/h/0/q/75/format/webp" >
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
  name: "receive",
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
#receive{
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
#receive .foot{
  width: 100%;
  height: 2rem;
  background-color: white;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(15, 25, 42, 0.05);
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
}
#receive .foot .foot_left{
  width: 2.2rem;
  float: left;
}
#receive .foot_left img{
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.6rem;
}
#receive .foot .foot_right{
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#receive .foot_right .foot_tab{
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
#receive .foot_tab span{
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
