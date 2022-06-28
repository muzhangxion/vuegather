<template>
  <div class="slot_child">
    <slot></slot>

    <div>
        <h2>我是组件中标题</h2>
        <slot name="header"></slot>
    </div>
    <p>========================</p>
    <div>
        <h2>我是正文</h2>
        <slot name="cont"></slot>
    </div>

    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class SlotChild extends Vue {

  mounted () {
    console.log('SlotChild')
  }
}
</script>

<style lang="less" scoped>

</style>
