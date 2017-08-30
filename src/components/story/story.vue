<template>
	<div id="story">
		<ul>
			<li v-for="item in pics">
				<img :src="item" />
			</li>
		</ul>
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
	        pics:[
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fj1iDYco1vNTWEAFRtvCBmdNKvPr.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fkj9eG74HVHzYP9gvP_ebJtKQTE6.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fp1ElLlatvUVY8gr3NpwtKV86FyE.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FmbO9WzYhFqf8sPgBuiIzQGSioTs.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fsah1l9MI5E66PIgEzJLq8mbkA4p.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Frmgc1wd8o0Xdb8m-J_F5is-kT3g.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FiTvJUKOSIx3Kq9GBGErtXYnegoB.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FhbpHK8rtBN-y3vikaG49VEtdbhN.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FpmFVwPruYJSP2TIdNwrlfyQTvmU.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fupdk69iKrJ_XAPsSg8lfJY5pVaA.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fp85m69d4SOPvHYwQo2SKZjfOAfd.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FgpM8inX6IfS6lSjWXc8jR2tIyO9.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fme3GtiQq35fy3tpbTKyY342DATn.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Fil_GAUgfSKutDRePmh6oasHnrSm.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FgXi8hWLaNNbu1x8jt-9QyKypBpg.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/Foj-ZfGV5PksmfwtEx8avjP0_nu7.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FnjyQ9ab-pQ6Ir0b-5iptTUarjMM.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FmrvWO22l5hmrWNuB77K3E3gXN2O.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2017/06/08/FtknaRb2H6D88q0v2Vt3k-Mw6JeH.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
	        	'https://img.yzcdn.cn/upload_files/2016/06/02/FjkdgJ4E7mmdtG__9qafrNZ-zcQ8.jpg?imageView2/2/w/730/h/0/q/75/format/webp'
	        ]
	    }
	},
	mounted(){
	},
	methods:{
	}
}
</script>

<style>
	#story ul{
		overflow: hidden;
	}
	#story ul li img{
		width: 100%;
	}
</style>