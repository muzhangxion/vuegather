<template>
  <div class="test same_page" >
    <h1>插槽</h1>

    <div>
      <slot-child>
        <!-- 当组件中只有一个插槽的时候，我们可以不设置 slot 的 name 属性。
        v-slot 后可以不带参数，但是 v-slot 在没有设置 name 属性的时候，
        插槽口会默认为“default”。
        插槽主要是在封装组件的时候去使用
        注意点：v-slot 只能添加在 <template>上哈。 -->
        <template v-slot>
          匿名插槽添加的数据
        </template>

        <!-- 很多的时候，我们可能在组件的不同位置展示不同的内容。
        这个时候我们就需要使用具名插槽。
        跟 v-on 和 v-bind 一样，v-slot 也有缩写。
        (v-slot:) 替换为字符 #
        例如 v-slot:header 可以被重写为 #header： -->
        <template v-slot:header>
          <h2>标题是学习vue3</h2>
        </template>
        <template v-slot:cont>
          <h3>正文是好好学习，天天向上</h3>
        </template>


        <!-- 有时让插槽内容能够访问子组件中才有的数据是很有用的。
        当一个组件被用来渲染一个项目数组时，这是一个常见的情况，
        我们希望能够自定义每个项目的渲染方式。 -->

      </slot-child>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SlotChild from '@/components/slot-child.vue'

@Options({
  components: {
    SlotChild
  }
})

export default class Slot extends Vue {
  
  mounted () {
    console.log('Slot')
  }
}
</script>

<style lang="less" scoped>

</style>
