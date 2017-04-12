import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Cards from '@/components/Cards'
import Ranking from '@/components/Ranking'
import Download from '@/components/Download'
import Profile from '@/components/Profile'
import Userinfo from '@/components/Userinfo'
import Cardinfo from '@/components/Cardinfo'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/cardinfo',
      name: 'Cardinfo',
      component: Cardinfo
    },
      {
      path: '/history',
      name: 'History',
      component: History
    },
  ]
})
