<template>
  <div class="page">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test">test</router-link>
      <router-link to="/imagesetbackground">ImageSetBackground</router-link>
      <router-link to="/Automaticrouting">Automaticrouting</router-link>
      <router-link to="/Upload">Upload</router-link>
      <router-link to="/testVideo">Video</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (min-width: 1024px){
   .page{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    justify-content: space-around;

    .nav {
      width: 200px;
      height: 100%;
      overflow-y: auto;
      padding: 10px 20px;
      display: flex;
      flex-direction:column;
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

    .content{
      flex: 1;
    }
  }
}


@media (max-width: 1023px){
    .page{
      width: 100%;
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction:column;

      .nav {
        width: 100%;
        height:50px !important;
        overflow-x: auto;
        display: flex;
        justify-content: space-between;
        background-color: #e6e6e6;

        a {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
          color: #2c3e50;
          padding: 0 20px;

          &.router-link-exact-active {
            color: #42b983;
          }
        }
      }

      .content{
        flex: 1;
      }
    }
}


</style>
