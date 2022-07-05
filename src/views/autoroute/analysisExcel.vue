<template>
  <div class="autoroute same_page" >
    解析Excel( xlsx0.16.8)
    <div>
        <el-upload
            class="upload-demo"
            drag
            multiple
            action=""
            :auto-upload="false"
            :on-change="uploadChange"
        >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
            在这里放下文件或<em>点击上传</em>
            </div>
            <template #tip>
            <div class="el-upload__tip">
                jpg/png 选择文件小于 500kb
            </div>
            </template>
        </el-upload>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import xlsx from 'xlsx';
import readFile from '@/utils/readFile';

@Options({
  components: {}
})

export default class AnalysisExcel extends Vue {
    
  mounted () {
    console.log('AnalysisExcel')
  }

    async uploadChange(file: any){
      let dataBinary = await readFile(file.raw)
      let workBook = xlsx.read(dataBinary, {type: 'binary', cellDates: true})
      let workSheet = workBook.Sheets[workBook.SheetNames[0]]
      const data = xlsx.utils.sheet_to_json(workSheet)
      console.log(data)
    }
}
</script>

<style lang="less" scoped>

</style>
