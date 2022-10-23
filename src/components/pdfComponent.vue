<template>
  <div class="pdfComponent_page">
    <el-dialog title="预览" v-model="showVisible" top="30px" :before-close="handleClose">
      <div class="pdf_cont">
        <iframe name="fd-jspdf" id="fd-jspdf" :src="`/pdfjs/web/viewer.html?file=${pdfSrc}`" style="width: 100%; height: 100%; border: none;"></iframe>
      </div>
    </el-dialog>
  </div>
</template>
  
  <script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    pdfSrc: String,
    pdfVisible: Boolean,
  },
  watch: {
    pdfVisible(newVal) {
      this.showVisible = newVal;
    },
  },
})
export default class ViewPdf extends Vue {
  showVisible: boolean = false;

  mounted() {
    console.log("pdfComponent");
  }

  handleClose(done: any) {
    this.$emit('backData', {pdfVisible: false})
    done();
  }
}
</script>
  
<style lang="less" scoped>
.pdf_cont{
    height: 80vh;
}
</style>
  