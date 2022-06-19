<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">test</router-link> |
      <router-link to="/imagesetbackground">ImageSetBackground</router-link> |
      <router-link to="/Automaticrouting">Automaticrouting</router-link> |
      <router-link to="/Upload">Upload</router-link>
      <router-link to="/testVideo">Video</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e6e6e6;

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
