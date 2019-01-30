import navConfig from '../nav.config.json'

const LOAD_MAP = name => {
  return r => require.ensure([], () => r(require(`../pages/${name}.vue`)))
}

const load = function(path) {
  return LOAD_MAP(path)
}

const LOAD_DOCS_MAP = path => {
  return r => require.ensure([], () => r(require(`../docs/${path}.md`)))
}

const loadDocs = function(path) {
  return LOAD_DOCS_MAP(path)
}

const registerRoute = navConfig => {
  let route = []
  let nav = navConfig
  route.push({
    path: '/component',
    redirect: '/component/color',
    component: load('component'),
    children: []
  })
  if (nav.href) return
  if (nav.groups) {
    nav.groups.forEach(group => {
      group.list.forEach(nav => {
        addRoute(nav)
      })
    })
  } else if (nav.children) {
    nav.children.forEach(nav => {
      addRoute(nav)
    })
  } else {
    addRoute(nav)
  }

  function addRoute(page) {
    let path = page.path.slice(1)
    const component = path === 'changelog' ? load('changelog') : loadDocs(path)
    let child = {
      path: path,
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    }

    route[0].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

const generateMiscRoutes = function() {
  let guideRoute = {
    path: '/guide', // 指南
    redirect: '/guide/use',
    meta: {
      title: '使用'
    },
    component: load('guide'),
    children: [
      {
        path: 'use', // 使用
        name: 'guide-use',
        component: load('use'),
        meta: {
          title: '使用'
        }
      },
      {
        path: 'design', // 设计原则
        name: 'guide-design',
        component: load('design'),
        meta: {
          title: '设计'
        }
      }
    ]
  }

  let resourceRoute = {
    path: '/resource', // 资源
    name: 'resource',
    component: load('resource'),
    meta: {
      title: '资源'
    }
  }

  let indexRoute = {
    path: '/', // 首页
    name: 'home',
    component: load('index'),
    meta: {
      title: 'Theme'
    }
  }

  return [guideRoute, resourceRoute, indexRoute]
}

route = route.concat(generateMiscRoutes())

route = route.concat([
  {
    path: '*',
    redirect: '/'
  }
])

export default route
