<template>
  <div class="video_page" >
    <!-- video问题测试 -->
    <div class="video_box">
      <!-- 属性：
      controls 使用浏览器的控件
      src 视频路径
      poster 播放器默认图片
      preload 是否预加载 值= none、metadata、auto，如果不使用此属性，默认为auto。
      autoplay 是否自动播放，是一个布尔属性
      loop 循环播放，是一个布尔属性
      webkit-playsinline 布尔属性,小窗口播放，这个属性是ios 10中设置可以
      playsinline 布尔属性,小窗口播放，IOS微信浏览器⽀持
      x-webkit-airplay="allow" iOS的设备上的不同位置播放视频
      x5-video-player-type="h5"  启⽤H5播放器,是wechat安卓版特性
      x5-video-player-fullscreen="true" 全屏设置，设置为 true 是防⽌横屏
      x5-video-orientation="portraint" 播放器⽀付的⽅向， landscape横屏，portraint竖屏，默认值为竖屏 -->
      <video 
      class="video"
      controls
      x5-video-player-type="h5"
      playsinline
      webkit-playsinline
      :poster="require('~assets/images/bizhi.jpg')"
      >
        <source :src="require('~assets/video/WeChat_20220619172909.mp4')" type="video/mp4"/>
        <source :src="require('~assets/video/WeChat_20220619172909.mp4')" type="video/mp4"/>
        <source :src="require('~assets/video/WeChat_20220619172909.mp4')" type="video/webm"/>
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})

export default class Automaticrouting extends Vue {

  mounted () {
    console.log('Autoroute')
  }
}
</script>

<style lang="less" scoped>
.video_page{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #045353;

  .video_box{
    width: 50%;
    height: 450px;
    margin: 200px auto 0;
    background-color: #999;

    .video{
      width: 100%;
      height: 100%;
    }
  }
}
// 去掉video的controls中的下载按钮
video::-internal-media-controls-download-button {
    display:none;
}

video::-webkit-media-controls-enclosure {
    overflow:hidden;
}

video::-webkit-media-controls-panel {
    width: calc(100% + 30px); 
}
</style>
