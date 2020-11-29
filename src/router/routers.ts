import Autoroute from '../views/autoroute/autoroute' // 页面文件目录

let routes: any = [];

// 通过内置对象Object的keys方法来生成vue可用的路由数组
Object.keys(Autoroute).forEach((item) => {
    routes.push({
      path: `/${Autoroute[item].name}`,
  
      name: Autoroute[item].name,
  
      component: Autoroute[item],
    });
});
  
export default routes;