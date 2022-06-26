<template>
  <div class="about same_page">
    <h1>computed计算属性</h1>
    <div>
      <h3>例子：</h3>
      <div>{{text.split(',').reverse().join(',')}}</div>
      <div>{{text}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { computed, reactive } from 'vue'

@Options({
  components: {}
})

export default class About extends Vue {
  text: any = '123,456';

  mounted () {
    console.log('About')
  }

}
</script>

<style lang="less" scoped>

</style>