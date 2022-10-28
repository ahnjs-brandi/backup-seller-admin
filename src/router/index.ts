import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue';
import Login from '@/views/Login/Login.vue';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: Login },
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirect: '/product-list' },
      { path: '/dashboard', meta: { title: '대쉬보드' }, component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/Dashboard.vue') },
      { path: '/product-list', meta: { title: '상품 리스트' }, component: () => import(/* webpackChunkName: "product-list" */ '@/views/ProductList/ProductList.vue') },
      { path: '/product-list/:id', meta: { title: '상품 상세보기' }, props: true, component: () => import(/* webpackChunkName: "product-detail" */ '@/views/ProductList/ProductDetail.vue') },
      { path: '/product/create', meta: { title: '상품추가' }, component: () => import(/* webpackChunkName: "product-create" */ '@/views/ProductList/ProductCreate.vue') },
    ]
  },
  { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
});

router.beforeEach(function (to, from, next) {
  // 상품추가 중 이탈할 때
  // if (from.path === '/product/create') {
  //   if (store.getters.productSettings) {
  //     if (!confirm('상품추가가 완료되지 않았습니다. 정말 나가시겠습니까?')) {
  //       return;
  //     }
  //   }
  // }

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken || to.path === '/login') {
    // 토큰 있으면

    // 페이지 타이틀 설정
    store.commit('setPageTitle', to.meta.title);
    next();
  } else {
    // 토큰 없으면
    next('/login');
  }
});

export default router
