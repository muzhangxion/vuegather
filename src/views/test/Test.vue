<template>
  <div class="test" >
    这是准备测试的模块
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})

export default class Test extends Vue {
  mounted () {
    console.log('Test')
  }
}
</script>

<style lang="less">

</style>
