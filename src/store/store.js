import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login:false,
        loginmessage:[
        	{
        		name:'鸿爷',
        		phone_num:'13811157934',
        		password:'123456',
        	},
        	{
        		name:'大仙',
        		phone_num:'13888888888',
        		password:'123456',
        	},
        ],
        buythings:[
        ]
    }
})

export default store
