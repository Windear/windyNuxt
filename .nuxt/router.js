import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _590184d9 = () => import('../pages/tools/index.vue' /* webpackChunkName: "pages/tools/index" */).then(m => m.default || m)
const _0f98e80b = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _b29feb8c = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _51cd33d7 = () => import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */).then(m => m.default || m)
const _69813500 = () => import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */).then(m => m.default || m)
const _c024c71a = () => import('../pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _7b2e9b23 = () => import('../pages/resources/index.vue' /* webpackChunkName: "pages/resources/index" */).then(m => m.default || m)
const _43c343e1 = () => import('../pages/screen/android.vue' /* webpackChunkName: "pages/screen/android" */).then(m => m.default || m)
const _b27b1e7e = () => import('../pages/screen/watch.vue' /* webpackChunkName: "pages/screen/watch" */).then(m => m.default || m)
const _ff3b6df6 = () => import('../pages/screen/pad.vue' /* webpackChunkName: "pages/screen/pad" */).then(m => m.default || m)
const _01774d19 = () => import('../pages/screen/computer.vue' /* webpackChunkName: "pages/screen/computer" */).then(m => m.default || m)
const _7a2781e0 = () => import('../pages/screen/phone.vue' /* webpackChunkName: "pages/screen/phone" */).then(m => m.default || m)
const _26cde37f = () => import('../pages/screen/ios.vue' /* webpackChunkName: "pages/screen/ios" */).then(m => m.default || m)
const _7210c4b4 = () => import('../pages/screen/display.vue' /* webpackChunkName: "pages/screen/display" */).then(m => m.default || m)
const _7bad3a94 = () => import('../pages/resources/data/_id.vue' /* webpackChunkName: "pages/resources/data/_id" */).then(m => m.default || m)
const _98a0cf02 = () => import('../pages/resources/_cate.vue' /* webpackChunkName: "pages/resources/_cate" */).then(m => m.default || m)
const _bea62cfe = () => import('../pages/tools/_id.vue' /* webpackChunkName: "pages/tools/_id" */).then(m => m.default || m)
const _e56159bc = () => import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */).then(m => m.default || m)
const _64178002 = () => import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */).then(m => m.default || m)
const _1a23c6cd = () => import('../pages/index_old2.vue' /* webpackChunkName: "pages/index_old2" */).then(m => m.default || m)
const _0ed5ed96 = () => import('../pages/index_old.vue' /* webpackChunkName: "pages/index_old" */).then(m => m.default || m)
const _7eae024d = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/tools",
			component: _590184d9,
			name: "tools"
		},
		{
			path: "/about",
			component: _0f98e80b,
			name: "about"
		},
		{
			path: "/blog",
			component: _b29feb8c,
			name: "blog"
		},
		{
			path: "/project",
			component: _51cd33d7,
			name: "project"
		},
		{
			path: "/search",
			component: _69813500,
			name: "search"
		},
		{
			path: "/404",
			component: _c024c71a,
			name: "404"
		},
		{
			path: "/resources",
			component: _7b2e9b23,
			name: "resources"
		},
		{
			path: "/screen/android",
			component: _43c343e1,
			name: "screen-android"
		},
		{
			path: "/screen/watch",
			component: _b27b1e7e,
			name: "screen-watch"
		},
		{
			path: "/screen/pad",
			component: _ff3b6df6,
			name: "screen-pad"
		},
		{
			path: "/screen/computer",
			component: _01774d19,
			name: "screen-computer"
		},
		{
			path: "/screen/phone",
			component: _7a2781e0,
			name: "screen-phone"
		},
		{
			path: "/screen/ios",
			component: _26cde37f,
			name: "screen-ios"
		},
		{
			path: "/screen/display",
			component: _7210c4b4,
			name: "screen-display"
		},
		{
			path: "/resources/data/:id?",
			component: _7bad3a94,
			name: "resources-data-id"
		},
		{
			path: "/resources/:cate",
			component: _98a0cf02,
			name: "resources-cate"
		},
		{
			path: "/tools/:id",
			component: _bea62cfe,
			name: "tools-id"
		},
		{
			path: "/blog/:id",
			component: _e56159bc,
			name: "blog-id"
		},
		{
			path: "/project/:id",
			component: _64178002,
			name: "project-id"
		},
		{
			path: "/index:old2",
			component: _1a23c6cd,
			name: "indexold2"
		},
		{
			path: "/index:old",
			component: _0ed5ed96,
			name: "indexold"
		},
		{
			path: "/",
			component: _7eae024d,
			name: "index"
		},
		{
			path: "*",
			component: _c024c71a,
			name: "custom"
		}
    ],
    
    
    fallback: false
  })
}
