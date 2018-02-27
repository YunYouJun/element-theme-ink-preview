import navConfig from '../nav.config.json'

const LOAD_MAP = name => {
  return r => require.ensure([], () =>
    r(require(`../pages/${name}.vue`)))
}

const load = function (path) {
  return LOAD_MAP(path)
}

const LOAD_DOCS_MAP = path => {
  return r => require.ensure([], () =>
    r(require(`../docs/${path}.md`)))
}

const loadDocs = function (path) {
  return LOAD_DOCS_MAP(path)
}

const registerRoute = (navConfig) => {
  let route = []
  let navs = navConfig
  route.push({
    path: `/component`,
    redirect: `/component/installation`,
    component: load('component'),
    children: []
  })
  navs.forEach(nav => {
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
  })

  function addRoute (page) {
    let path = page.path.slice(1)
    const component = path === 'changelog'
      ? load(`changelog`)
      : loadDocs(path)
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

const generateMiscRoutes = function () {
  let guideRoute = {
    path: `/guide`, // 指南
    redirect: `/guide/design`,
    component: load('guide'),
    children: [
      {
        path: 'design', // 设计原则
        name: 'guide-design',
        component: load('design')
      }, {
        path: 'nav', // 导航
        name: 'guide-nav',
        component: load('nav')
      }
    ]
  }

  let resourceRoute = {
    path: `/resource`, // 资源
    name: 'resource',
    component: load('resource')
  }

  let indexRoute = {
    path: `/`, // 首页
    name: 'home',
    component: load('index')
  }

  return [guideRoute, resourceRoute, indexRoute]
}

route = route.concat(generateMiscRoutes())

route = route.concat(
  [
    {
      path: '*',
      redirect: '/'
    }
  ]
)

export default route
