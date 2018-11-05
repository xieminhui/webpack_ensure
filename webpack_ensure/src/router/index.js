import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// const A = r => require.ensure([], () => r(require('@/components/a')), 'A')
const A = () => import(/* webpackChunkName: a */'@/components/a')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'A',
      component: A
    }
  ]
})
