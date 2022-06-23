<template>
  <div class="backimg_box same_page">
    <div class="ImageSetBackground" :style="{background: colors_a}">
      <img id="tplWheelBg_a" class="img_s" alt="Vue logo" src="../assets/a.jpg">
    </div>
    <div class="ImageSetBackground" :style="{background: colors_b}">
      <img id="tplWheelBg_b" class="img_s" alt="Vue logo" src="../assets/b.jpg">
    </div>
    <div class="ImageSetBackground" :style="{background: colors_c}">
      <img id="tplWheelBg_c" class="img_s" alt="Vue logo" src="../assets/c.jpg">
    </div>
    <div class="ImageSetBackground" :style="{background: colors_d}">
      <img id="tplWheelBg_d" class="img_s" alt="Vue logo" src="../assets/d.jpg">
    </div>
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    
  }
})

export default class ImageSetBackground extends Vue {
  colors_a = ''
  colors_b = ''
  colors_c = ''
  colors_d = ''
  mounted () {
    this.steBackcolor()
  }

  steBackcolor () {
    const canvas = document.createElement('canvas')
    const imgs_a = document.getElementById('tplWheelBg_a')
    const imgs_b = document.getElementById('tplWheelBg_b')
    const imgs_c = document.getElementById('tplWheelBg_c')
    const imgs_d = document.getElementById('tplWheelBg_d')
    setTimeout(() => {
      this.colors_a = this.setWheelBgtcMainTonal(canvas, imgs_a)
      this.colors_b = this.setWheelBgtcMainTonal(canvas, imgs_b)
      this.colors_c = this.setWheelBgtcMainTonal(canvas, imgs_c)
      this.colors_d = this.setWheelBgtcMainTonal(canvas, imgs_d)
    }, 20)
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

<style lang="less" scoped>

.backimg_box{
  width: 100%;
  height: 100%;
  .ImageSetBackground{
    text-align: center;
    .img_s{
        width: 500px;
        height: auto;
    }
  }
}
 
</style>
