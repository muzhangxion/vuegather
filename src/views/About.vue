<template>
  <div class="about same_page">
    <h1>computed计算属性</h1>
    <div>
      <h3>例子：</h3>
      <div>{{text.split(',').reverse().join(',')}}</div>
      <div>{{textStr}}</div>
      <div>{{name}}</div>
       <div>{{firstName}} {{lastName}}</div>
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
  // 原data
  firstName = 'John'
  lastName = 'Doe'

  get textStr() {
    return  this.text.split(',').reverse().join(',')
  }

  get name() {
    return this.firstName + ' ' + this.lastName
  }

  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
    console.log(this.firstName,  this.lastName, 333)
  }

  mounted () {
    console.log('About')
  }



}
</script>

<style lang="less" scoped>

</style>