import Vue from 'vue'
import Router from 'vue-router'
import splashscreen from '@/views/pages/splashscreen'
import header from '@/views/common/header'
import applayout from '@/views/layouts/app-layout'
import question from '@/views/pages/question'
import chapter from '@/views/pages/chapter'

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
          path: '/chapter',
          component: chapter
        }
      ]
    }
  ]
})
