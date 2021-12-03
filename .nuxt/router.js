import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17a92be8 = () => interopDefault(import('../pages/chats/index.vue' /* webpackChunkName: "pages/chats/index" */))
const _71f39573 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _25dd0fee = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _5be10850 = () => interopDefault(import('../pages/chats/_id.vue' /* webpackChunkName: "pages/chats/_id" */))
const _af681b48 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chats",
    component: _17a92be8,
    name: "chats"
  }, {
    path: "/login",
    component: _71f39573,
    name: "login"
  }, {
    path: "/settings",
    component: _25dd0fee,
    name: "settings"
  }, {
    path: "/chats/:id",
    component: _5be10850,
    name: "chats-id"
  }, {
    path: "/",
    component: _af681b48,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
