import { createRouter, createWebHistory } from 'vue-router'

// import  from '../views/MainHomeView'
const Home = import ('../views/MainHomeView/Home.vue')
const Software = import ('../views/MainHomeView/Software.vue')
const Hardware = import ('../views/MainHomeView/Hardware.vue')
const Programing = import ('../views/MainHomeView/Programing.vue')

const HabitAtom = import ('../views/MainHomeView/HabitAtom.vue')
const CleanCode = import ('../views/MainHomeView/CleanCode.vue')
const SuperWinner = import ('../views/MainHomeView/SuperWinner.vue')
const ImageView = import ('../views/MainHomeView/ImageView.vue')

const FrontEnd = import ('../views/MainHomeView/FrontEnd.vue')
const BackEnd = import ('../views/MainHomeView/BackEnd.vue')
const FullStack = import ('../views/MainHomeView/FullStack.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transition:"ts-home"},
      children:[
          {
              path: '',
              name: 'Software',
              component: Software,
              meta:{transition:"ts-software"},
          },
          {
              path: 'hardware',
              name: 'Hardware',
              component: Hardware,
              meta:{transition:"ts-hardware"},
          },
          {
              path: 'programing',
              name: 'Programing',
              component: Programing,
              meta:{transition:"ts-programing"},
          },
          {
              path: 'habitAtom',
              name: 'HabitAtom',
              component: HabitAtom,
              meta:{transition:"ts-abitatom"},
          },
          {
              path: 'cleancode',
              name: 'CleanCode',
              component: CleanCode,
              meta:{transition:"ts-cleancode"},
          },
          {
              path: 'superwinner',
              name: 'SuperWinner',
              component: SuperWinner,
              meta:{transition:"ts-superwinner"},
          },
          {
              path: 'imageview',
              name: 'ImageView',
              component: ImageView,
              meta:{transition:"ts-imageview"},
          },
          {
              path: 'frontend',
              name: 'FrontEnd',
              component: FrontEnd,
              meta:{transition:"ts-frontend"},
          },
          {
              path: 'backend',
              name: 'BackEnd',
              component: BackEnd,
              meta:{transition:"ts-backend"},
          },
          {
              path: 'fullstack',
              name: 'FullStack',
              component: FullStack,
              meta:{transition:"ts-fullstack"},
          },
      ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
