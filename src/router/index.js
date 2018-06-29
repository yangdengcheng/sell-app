import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from '../components/goods/Goods';
import ratings from '../components/ratings/Ratings';
import seller from '../components/seller/Seller';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

export default new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
});
