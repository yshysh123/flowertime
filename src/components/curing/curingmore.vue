<template>
	<div id="curingmore">
		<ul>
			<li v-for="item in flowerCon.pic">
				<img v-lazy="item" />
			</li>
		</ul>
		<div class="footerimg">
	    	<img src="https://img.yzcdn.cn/upload_files/2017/01/20/FurN7tPiQZwi7lPAMf72Y3P8tp2B.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
		    <img src="https://img.yzcdn.cn/upload_files/2017/01/20/FhYIjhj3evhhDYtJ6MOzfgZgFT3M.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
		    <img src="https://img.yzcdn.cn/upload_files/2017/01/20/Fs6JhrUOvG47hHnSn8uGDFLbAzEs.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
	    </div>
		<div class="foot_hide" style="height:2rem"></div>
		<footerdiv></footerdiv>
	</div>
</template>

<script>
import footerdiv from '../footer/footer'
export default {
	name: 'rose',
	components: {
		footerdiv
	},
	data () {
	    return {
        flowerCon:[],
        fullPath:''
	    }
	},
	mounted(){
	  	document.getElementsByTagName('body')[0].scrollTop = 0;
	  	this.$ajax.get('http://flower_curing_pic').then(response => {
		this.flowerCon=response.data;
		this.fullPath = this.$route.fullPath.split('/')[2];
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
	}
}
</script>

<style>
	#curingmore ul{
		overflow: hidden;
	}
	#curingmore ul li img{
		width: 100%;
	}
	#curingmore .footerimg img{
		width: 100%;
	}
</style>