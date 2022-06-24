<template>
  <div class="page">
    <div class="nav">
      <menu-page />
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
body{
   margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
      height: auto;
      overflow-y: auto;
      padding: 10px 20px;
      background-color: #e6e6e6;
      text-align: left;
    }

    .content{
      flex: 1;
      height: 100%;
      overflow-y: auto;
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
      }

      .content{
        flex: 1;
      }
    }
}


</style>
