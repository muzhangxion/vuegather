// 1、首先获取当前目录下所有的文件；
///2、然后筛选出所有的vue文件;
const files = require.context('./', true, /\.vue$/);

const autoroute: any = {};
files.keys().forEach((key) => {
  ///3、通过正则将文件名作为属性名来保存文件
  autoroute[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
});

export default autoroute;