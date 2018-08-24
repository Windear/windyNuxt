import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _717e5e94 = () => import('../pages/resources/index.vue' /* webpackChunkName: "pages/resources/index" */).then(m => m.default || m)
const _228b7d38 = () => import('../pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _3f691f88 = () => import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */).then(m => m.default || m)
const _076d3820 = () => import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */).then(m => m.default || m)
const _4ce52efe = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/resources",
			component: _717e5e94,
			name: "resources"
		},
		{
			path: "/404",
			component: _228b7d38,
			name: "404"
		},
		{
			path: "/project",
			component: _3f691f88,
			name: "project"
		},
		{
			path: "/project/:id",
			component: _076d3820,
			name: "project-id"
		},
		{
			path: "/",
			component: _4ce52efe,
			name: "index"
		},
		{
			path: "*",
			component: _228b7d38,
			name: "custom"
		}
    ],
    
    
    fallback: false
  })
}
