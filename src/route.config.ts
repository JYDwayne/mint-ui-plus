import NavConfig from './nav.config.json';
const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: import(`../example/pages${page.path}.vue`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

route.route.push({
  path: '/',
  component: () => import('example/demos.vue')
});

export const navs = route.navs;
export default route.route;