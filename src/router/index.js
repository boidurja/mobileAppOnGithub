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
import instructions from '@/views/pages/instructions'
import reports from '@/views/pages/reports'
import login from '@/views/pages/login'
import leaderboard from '@/views/pages/leaderboard'
import dailypracticeresults from '@/views/pages/dailypracticeresults'
import monthlytestsresults from '@/views/pages/monthlytestsresults'
import dailypracticemyleaguefulllist from '@/views/pages/dailypracticemyleaguefulllist'
import monthytesttoprankersfulllist from '@/views/pages/monthytesttoprankersfulllist'


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
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'instructions',
          path: 'instructions',
          component: instructions
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'reports',
          path: 'reports',
          component: reports
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout },
      children: [
        {
          name: 'login',
          path: 'login',
          component: login
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'leaderboard',
          path: 'leaderboard',
          component: leaderboard
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'dailypracticeresults',
          path: 'dailypracticeresults',
          component: dailypracticeresults
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'monthlytestsresults',
          path: 'monthlytestsresults',
          component: monthlytestsresults
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'dailypracticemyleaguefulllist',
          path: 'dailypracticemyleaguefulllist',
          component: dailypracticemyleaguefulllist
        }
      ]
    },
    {
      path: '/',
      components: { default: applayout, header: header },
      children: [
        {
          name: 'monthytesttoprankersfulllist',
          path: 'monthytesttoprankersfulllist',
          component: monthytesttoprankersfulllist
        }
      ]
    }
  ]
})
