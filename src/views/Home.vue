<template>
  <div class="home" :style="{background: colors}">
    <img id="tplWheelBg" alt="Vue logo" src="../assets/a.jpg">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})

export default class Home extends Vue {
  colors = ''
  mounted () {
    this.aa()
  }

  aa () {
    const canvas = document.createElement('canvas')
    const imgs = document.getElementById('tplWheelBg')
    console.log(canvas, imgs)
    setTimeout(() => {
      this.colors = this.setWheelBgtcMainTonal(canvas, imgs)
    }, 1000)
    
    
  }

  setWheelBgtcMainTonal(canvas: any, img: any) {
        canvas.width = img.width
        canvas.height = img.height
        let context = canvas.getContext('2d')
        context.drawImage(img, 0, 0)
        // 获取像素数据
        let data = context.getImageData(0, 0, img.width, img.height).data
        console.log(data);
        let r = 0,
            g = 0,
            b = 0
        // 取所有像素的平均值
        for (let row = 0; row < img.height; row++) {
            for (let col = 0; col < img.width; col++) {
                r += data[(img.width * row + col) * 4]
                g += data[(img.width * row + col) * 4 + 1]
                b += data[(img.width * row + col) * 4 + 2]
            }
        }
        // 求取平均值
        r /= img.width * img.height
        g /= img.width * img.height
        b /= img.width * img.height

        // 将最终的值取整
        r = Math.round(r)
        g = Math.round(g)
        b = Math.round(b)

        //rgb转16进制 位运算
        const color = `rgb(${r}, ${g}, ${b})`
        // const color = ((r << 16) | (g << 8) | b).toString(16)
        return color
    }
  
}
</script>

<style lang="less">
 #tplWheelBg{
   width: 500px;
   height: auto;
 }
</style>
