import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import chatroom from './components/chatroom'
import login from './components/login'

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(VueRouter)
Vue.use(ElementUI);

Vue.config.productionTip = false

// const chatroom = { template: '<chatroom/>'}
// const login = {template: '<login/>'}

const routes = [
  { path: '/login', component: login },
  { path: '/chatroom', component: chatroom },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
