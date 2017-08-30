import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body'
import rose from '@/components/flowers/rose'
//花意生活
import story from '@/components/story/story'
import knowledge from '@/components/life/knowledge'
import receive from '@/components/life/receive'
import about from '@/components/life/about'
//会员服务
import primary from '@/components/vip/primary'
//养护知识
import curingless from '@/components/curing/curingless'
import curingmore from '@/components/curing/curingmore'
//购物车
import shoppingcar from '@/components/shoppingcar/shoppingcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: body
    },
    {
      path: '/flowers/:id',
      name: '七夕玫瑰',
      component: rose
    },
    {
      path: '/花意生活/鲜花故事',
      name: '鲜花故事',
      component: story
    },
    {
      path: '/花意生活/养护知识',
      name: '养护知识',
      component: knowledge
    },
    {
      path: '/花意生活/如何收花',
      name: '如何收花',
      component: receive
    },
    {
      path: '/花意生活/关于我们',
      name: '关于我们',
      component: about
    },
    {
      path: '/login',
      name: '个人中心',
      component: primary
    },
    {
      path: '/flowerscuring/:id',
      name: '养护知识',
      component: curingmore
    },
    {
      path: '/flowerscuring2/peach',
      name: '养护桃花',
      component: curingless
    },
    {
      path: '/shoppingcar',
      name: '购物车',
      component: shoppingcar
    }
  ]
})
