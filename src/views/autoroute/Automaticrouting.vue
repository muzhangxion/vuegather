<template>
  <div class="autoroute" >
    <!--自动路由实例地址： https://blog.csdn.net/qq_24800489/article/details/107356071 -->
    这是测试自动路由模块
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})

export default class Automaticrouting extends Vue {
  mounted () {
    console.log('Autoroute')
  }
}
</script>

<style lang="less">

</style>
