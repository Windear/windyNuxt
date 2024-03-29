import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _62415f5a = () => import('../pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _5308bbeb = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _4e063a5a = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _78978fb7 = () => import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */).then(m => m.default || m)
const _18d17f03 = () => import('../pages/resources/index.vue' /* webpackChunkName: "pages/resources/index" */).then(m => m.default || m)
const _146be4c0 = () => import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */).then(m => m.default || m)
const _c71d4e8e = () => import('../pages/tools/index.vue' /* webpackChunkName: "pages/tools/index" */).then(m => m.default || m)
const _6b3d6a98 = () => import('../pages/resources/data/_id.vue' /* webpackChunkName: "pages/resources/data/_id" */).then(m => m.default || m)
const _0299e97c = () => import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */).then(m => m.default || m)
const _116413df = () => import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */).then(m => m.default || m)
const _51527c5f = () => import('../pages/resources/_cate.vue' /* webpackChunkName: "pages/resources/_cate" */).then(m => m.default || m)
const _5bc03561 = () => import('../pages/tools/_id.vue' /* webpackChunkName: "pages/tools/_id" */).then(m => m.default || m)
const _98af55d6 = () => import('../pages/index_old.vue' /* webpackChunkName: "pages/index_old" */).then(m => m.default || m)
const _7d0c1226 = () => import('../pages/index_old2.vue' /* webpackChunkName: "pages/index_old2" */).then(m => m.default || m)
const _8ffb83a6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/404",
			component: _62415f5a,
			name: "404"
		},
		{
			path: "/about",
			component: _5308bbeb,
			name: "about"
		},
		{
			path: "/blog",
			component: _4e063a5a,
			name: "blog"
		},
		{
			path: "/project",
			component: _78978fb7,
			name: "project"
		},
		{
			path: "/resources",
			component: _18d17f03,
			name: "resources"
		},
		{
			path: "/search",
			component: _146be4c0,
			name: "search"
		},
		{
			path: "/tools",
			component: _c71d4e8e,
			name: "tools"
		},
		{
			path: "/resources/data/:id?",
			component: _6b3d6a98,
			name: "resources-data-id"
		},
		{
			path: "/blog/:id",
			component: _0299e97c,
			name: "blog-id"
		},
		{
			path: "/project/:id",
			component: _116413df,
			name: "project-id"
		},
		{
			path: "/resources/:cate",
			component: _51527c5f,
			name: "resources-cate"
		},
		{
			path: "/tools/:id",
			component: _5bc03561,
			name: "tools-id"
		},
		{
			path: "/index:old",
			component: _98af55d6,
			name: "indexold"
		},
		{
			path: "/index:old2",
			component: _7d0c1226,
			name: "indexold2"
		},
		{
			path: "/",
			component: _8ffb83a6,
			name: "index"
		},
		{
			path: "*",
			component: _62415f5a,
			name: "custom"
		}
    ],
    
    
    fallback: false
  })
}
