// 1、首先获取当前目录下所有的文件；
///2、然后筛选出所有的vue文件;
const components = require.context('@/components/global', true, /\.vue$/)

let subassembly: any = [];
components.keys().forEach(filename => {
  const arr = filename.replace(/\.\//, '').replace(/\.vue$/, '').split('/')
  console.log(arr, 333)
  const component = components(filename).default
  subassembly.push( {name: arr[0], componentb: component})
})
export default subassembly;