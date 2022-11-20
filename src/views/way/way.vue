<template>
    <div class="way same_page">
      <h1>方法:</h1>
      <ul class="list_box">
        <li class="list_li">
            <h3>Object.assign()</h3>
            <div class="content_box">
                <p>Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。</p>
                <i class="img_list">
                    <img src="./../../assets/way/assign/01.png" alt="">
                </i>
                <p>如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性覆盖前面的属性</p>
                <i class="img_list">
                    <img src="./../../assets/way/assign/02.png" alt="">
                </i>
            </div>
        </li>
        <li class="list_li">
            <h3>call()、apply()、bind()</h3>
            <div>
                <p>call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：</p>
                <p>call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。</p>
                <p>apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。</p>
                <p>bind 除了返回是函数以外，它的参数和 call 一样。</p>
                <p>当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数、object 等等！</p>
            </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from "vue-class-component";
  
  @Options({
    components: {},
  })
  export default class Way extends Vue {
    
  
  }
  </script>
  
  <style lang="less" scoped>
  .way{
    // display: flex;
    // justify-content: space-around;
    .list_box{
        list-style: none;
        .list_li{
            padding: 10px;
            box-shadow: 1px 5px 10px 0px rgba(27, 46, 90, 0.595);
            margin-bottom: 20px;

            .content_box{
                .img_list{
                    display: block;
                    width: 600px;
                    height:auto;
                    // background-image: url('./../../assets/way/assign/01.png');
                    // background-repeat: no-repeat;
                    // background-position: 0 0;
                    // background-size: 100% 100%;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        .list_li:last-child{
            margin-bottom: 0;
        }
    }
  }
  </style>
  