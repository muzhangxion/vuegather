<template>
  <div class="home same_page" >
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

  mounted () {}
  
}
</script>

<style lang="less" scoped>
 #tplWheelBg{
   width: 500px;
   height: auto;
 }
</style>
