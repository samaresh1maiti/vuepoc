import Vue from 'vue'
import Router from 'vue-router'
import EnterData from './components/EnterData'
import InputForm from './components/InputForm'
import Report from './components/Report'
import Setting from './components/Setting'
import Barchart from './components/Barchart'
import Piechart from './components/Piechart'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/${i18n.locale}'
    },
    {
      path: '/:lang',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: "/",
          name: "home",
          component: EnterData
        },
        {
          path: "InputForm",
          name: "InputForm",
          component: InputForm
        },
        {
          path: "setting",
          name: "setting",
          component: Setting
        },
        {
          path: "Report",
          name: "report",
          component:Report
        },
        {
          path:"Barchart",
          name:"Barchart",
          component:Barchart
        },
        {
          path:"Piechart",
          name:"Piechart",
          component:Piechart
        },
      ]
    }

  ]


})
