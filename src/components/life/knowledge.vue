<template>
  <div id="knowledge">
    <ul>
      <li v-for="(item,index) in pics" @click="changeFlower(index)">
        <img :src="item">
      </li>
    </ul>
    <div class="foot_hide" style="height:2rem"></div>
		<footerdiv></footerdiv>
  </div>
</template>
<script>
import footerdiv from '../footer/footer'
export default {
	components: {
		footerdiv
	},
  name: "knowledge",
  data () {
    return {
      isHide1:false,
      isHide2:false,
      isHide3:false,
      pics:[
      	'https://img.yzcdn.cn/upload_files/2017/04/08/FgZ00kVhuzodzkt-f8QgS2HqjaJB.jpg!730x0.jpg',
      	'https://img.yzcdn.cn/upload_files/2017/05/14/Fhwit4yIdrdVWSpdr7E2K9zInSjy.jpg!730x0.jpg',
      	'https://img.yzcdn.cn/upload_files/2017/05/06/FncBdO0l5jjUUxljJ2AujLp9v8FX.jpg!730x0.jpg',
      	'https://img.yzcdn.cn/upload_files/2017/04/08/FuJ8PWCJdf9HD096i0oAlaQMOoLM.jpg!730x0.jpg',
      	'https://img.yzcdn.cn/upload_files/2017/05/12/FsY141Xbg3ouav_0XxgRgbDfNr5Y.jpg!730x0.jpg',
      	'https://img.yzcdn.cn/upload_files/2017/05/12/Fnqpre1616O9IKedrQ1tV-5OHG6g.jpg!730x0.jpg',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/Fi4i7a2P78L-3epUyZG0UAtblaEv.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FvRMMODt8Px4HZFBRntcQ7J__bj-.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FnPxiQJjzzIcq1lqFle0wjqu-R34.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FpI6uAyIf-r0qDlcLxePyGmfK5nC.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FqWqNfI9J4_bytJ6Uc_yhd9ORLcp.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FjOy4LiNYYVUp5L3qroDoiaP8Fni.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FmYbkEMsegLUYOHxKauqNxtL7f70.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FkbC4Cd7aIwz2A3f8QDd34KS9IDE.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FtUNq7mWgxDelIVI-vbvcYubQkCz.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FnsfuFczo9KCxlCPSuz1fM6PGPh5.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/Fqe2WDftm3AGcqTfd-HD4Tvlat9p.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FgDE3r5MN87DxG4QanswFBMgd-tP.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FiPB8e5WJpK2Jr8AASIxgHCnjutX.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FjzoGlgueN5tgdrBBw9Oo95Mtwgl.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FvIKU_GrBDrRVMULw24caj9qogqw.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FgZgdqgIOYfA1xQEuLigG_X3huRL.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FmWjL7XvF-Iw7wMVdyyf0bSNoh0z.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FoRmFI9ZDtX_eL8Zxb4YB0Jc1ciZ.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FhMwk2BdrZpYbuVPgZZ-NkOowlRS.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/Fn9bojCkmp5Lve5nII_yJ_pvRqA3.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FhVTCQY84TJ3GS0wmptFRrW07W4Y.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      	'https://img.yzcdn.cn/upload_files/2017/03/26/FiaUrozj6YzoQF_kn2bcd6KOtlvH.jpg?imageView2/2/w/730/h/0/q/75/format/webp'
      ],
      picname:[
      	'peone',
      	'rose',
      	'clematis',
      	'gerbera',
      	'cotinus',
      	'cornflower',
      	'peach',
      	'anemone',
      	'peony',
      	'straw',
      	'lotus',
      	'cymbidius',
      	'freesia',
      	'amaryllis',
      	'bellflower',
      	'iris',
      	'espino',
      	'pineapple',
      	'agapanthus',
      	'delbine',
      	'hyacinth',
      	'strelitzia',
      	'six',
      	'tulip',
      	'violet',
      	'dairen',
      	'alocasia',
      	'hydrangea'
      ]
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
    },
    changeFlower(index){
    	if(this.picname[index]==='peach'){
    		this.$router.push({path: '/flowerscuring2/peach'})
    	}
    	else{
    		this.$router.push({path: '/flowerscuring/'+this.picname[index]})
    	}
    }
  }
}
</script>
<style scoped>
#knowledge ul{
	overflow: hidden;
}
#knowledge li{
  float: left;
}
#knowledge img{
  width: 7.5rem;
  height: 7.5rem;
}

#knowledge .foot{
  width: 100%;
  height: 2rem;
  background-color: white;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(15, 25, 42, 0.05);
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
}
#knowledge .foot .foot_left{
  width: 2.2rem;
  float: left;
}
#knowledge .foot_left img{
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.6rem;
}
#knowledge .foot .foot_right{
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#knowledge .foot_right .foot_tab{
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
#knowledge .foot_tab span{
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
