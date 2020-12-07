import Exif from 'exif-js'
export default {
  compression (file, callback) {
    let Orientation
    // 去获取拍照时的信息，解决拍出来的照片旋转问题
    Exif.getData(file, function () {
      Orientation = Exif.getTag(this, 'Orientation')
    })
    // 看支持不支持FileReader
    if (!file || !window.FileReader) return
    // 压缩写法
    if (file.file.size > 1 * 1024 * 1024) {
      // 大于1MB的jpeg和png图片都缩小像素上传
      const canvas = document.createElement('canvas') // 创建Canvas对象(画布)
      const context = canvas.getContext('2d') // 获取对应的CanvasRenderingContext2D对象(画笔)
      const img = new Image() // 创建新的图片对象
      img.crossorigin = 'anonymous'

      img.src = file.content // 指定图片的DataURL(图片的base64编码数据)
      img.onload = () => {
        // 监听浏览器加载图片完成，然后进行进行绘制
        let rate = 1
        const maxWidth = 800
        let wid = img.width
        let hei = img.height
        const quality = 0.8
        if (img.width > maxWidth || img.height > maxWidth) {
          if (img.width > img.height) {
            rate = maxWidth / img.width
          } else {
            rate = maxWidth / img.height
          }
          wid = img.width * rate
          hei = img.height * rate
        }
        // 指定canvas画布大小，该大小为最后生成图片的大小
        canvas.width = wid
        canvas.height = hei
        /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，1024，768是将图片按给定的像素进行缩小。
          如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。 */
        context.drawImage(img, 0, 0, wid, hei)
        // 修复ios上传图片的时候 被旋转的问题
        if (Orientation !== '' && Orientation !== 1) {
          switch (Orientation) {
            case 6: // 需要顺时针（向左）90度旋转
              this.rotateImg(img, 'left', canvas)
              break
            case 8: // 需要逆时针（向右）90度旋转
              this.rotateImg(img, 'right', canvas)
              break
            case 3: // 需要180度旋转
              this.rotateImg(img, 'flip', canvas)
              break
          }
        }
        // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.9为默认压缩质量
        file.content = canvas.toDataURL(file.file.type, quality)

        // 最后将base64编码的图片保存，留待上传。
        const imgfile = this.dataURLtoBlob(file.content, file.file.name)
        // this.imgurl = file.content;
        return callback(imgfile)
      }
    } else {
      // 不做处理的jpg和png以及gif直接保存
      const imgfile = file.file
      // this.imgurl = file.content;
      return callback(imgfile)
    }
  },

  // 转成blob
  dataURLtoBlob (toDataURL, fileName) {
    const arr = toDataURL.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return this.blobToFile(new Blob([u8arr], { type: mime }), fileName)
  },

  // 转成file
  blobToFile (Blob, fileName) {
    Blob.lastModifiedDate = new Date()
    Blob.name = fileName
    return Blob
  },

  rotateImg (img, direction, canvas) {
    // 最小与最大旋转方向，图片旋转4次后回到原方向
    // const min_step = 0
    // const max_step = 3
    if (img == null) return
    // img的高度和宽度不能在img元素隐藏后获取，否则会出错
    const height = img.height
    const width = img.width
    let step
    if (direction === 'right') {
      step = 3
    } else if (direction === 'left') {
      step = 1
    } else if (direction === 'flip') {
      step = 2
    } else {
      step = 0
    }
    // 旋转角度以弧度值为参数
    const degree = (step * 90 * Math.PI) / 180
    const ctx = canvas.getContext('2d')
    switch (step) {
      case 0:
        // 不需要处理
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0)
        break
      case 1:
        // left
        canvas.width = height
        canvas.height = width
        ctx.rotate(degree)
        ctx.drawImage(img, 0, -height)
        break
      case 2:
        // filp
        canvas.width = width
        canvas.height = height
        ctx.rotate(degree)
        ctx.drawImage(img, -width, -height)
        break
      case 3:
        // right
        canvas.width = height
        canvas.height = width
        ctx.rotate(degree)
        ctx.drawImage(img, -width, 0)
        break
    }
  }
}
