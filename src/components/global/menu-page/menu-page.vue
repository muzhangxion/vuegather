<template>
  <div class="menu_page" >
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/test">test</router-link>
    <router-link to="/imagesetbackground">ImageSetBackground</router-link>
    <router-link to="/Automaticrouting">Automaticrouting</router-link>
    <router-link to="/Upload">Upload</router-link>
    <router-link to="/testVideo">Video</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})

export default class Menu extends Vue {
  mounted () {
    
  }

  
}
</script>

<style lang="less" scoped>
    .menu_page{
      display: flex;
      flex-direction:column;
        a {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
          color: #2c3e50;

          &.router-link-exact-active {
            color: #42b983;
          }
        }
    }
</style>
