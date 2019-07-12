import Vue from 'vue'
import Router from 'vue-router'
import splashscreen from '@/views/pages/splashscreen'
import header from '@/views/common/header'
import applayout from '@/views/layouts/app-layout'
import question from '@/views/pages/question'
import chapter from '@/views/pages/chapter'
import profile from '@/views/pages/profile'
import dashboard from '@/views/pages/dashboard'
import dailypractice from '@/views/pages/dailypractice'
import monthlytest from '@/views/pages/monthlytest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'question',
          path: 'question',
          component: question
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'chapter',
          path: 'chapter',
          component: chapter
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'profile',
          path: 'profile',
          component: profile
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: dashboard
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'dailypractice',
          path: 'dailypractice',
          component: dailypractice
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'monthlytest',
          path: 'monthlytest',
          component: monthlytest
        }
      ]
    }
  ]
})
