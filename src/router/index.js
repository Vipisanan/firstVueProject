import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/room/Home/Home";
import About from "../components/room/Home/NavBar/About/About";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: 'about',
          component: About
        }
      ]
    }
  ]
})
