<template>
  <div class="autoroute viewPdf_page" >
    <h1>预览pdf</h1>
    <el-button type="primary" @click="pdfVisible = !pdfVisible">pdf预览</el-button>
    <pdf-component :pdfSrc="pdfSrc" :pdfVisible="pdfVisible" @backData="backData"></pdf-component>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import pdfComponent from '~@/components/pdfComponent.vue'

@Options({
  components: {
    pdfComponent
  }
})

export default class ViewPdf extends Vue {
  pdfSrc: string = '/pdf.pdf'
  pdfVisible: boolean = false
    
  mounted () {
    console.log('viewPdf')
  }

  async uploadChange(file: any){
    console.log(file, file.raw, '文件')
  }

  backData(data: any) {
    console.log(data, 111)
    this.pdfVisible = data.pdfVisible
  }

}
</script>

<style lang="less" scoped>
  .viewPdf_page{
    width: 100%;
    height: 100%;
  }
</style>
