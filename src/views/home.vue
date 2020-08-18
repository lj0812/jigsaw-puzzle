<template>
  <section class="app-home">
    <a-steps :current="currentStep">
      <a-step title="选择图片" description="本地选择多张图图片" />
      <a-step title="图片设置" description="加密、重命名、压缩等设置" />
      <a-step title="图片上传" description="选择上传地址上传" />
    </a-steps>

    <section class="image-upload">
      <a-upload-dragger
        name="file"
        accept="image/*"
        list-type="picture-card"
        :multiple="true"
        :file-list="fileList"
        :beforeUpload="beforeUpload"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleImageChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">
          点击或拖拽文件到该区域上传
        </p>
        <p class="ant-upload-hint">
          支持单个或批量上传，支持任意格式的图片
        </p>
      </a-upload-dragger>
    </section>
  </section>
</template>

<script>
// import { getBase64 } from '@/utils/index.js'

export default {
  name: 'AppHome',
  data () {
    return {
      currentStep: 0,
      fileList: [],
      uploadResolve: null
    }
  },
  methods: {
    handleImageChange ({ fileList }) {
      this.fileList = fileList
    },
    beforeUpload (file, fileList) {
      console.log(file, fileList)
      return new Promise((resolve, reject) => {
        this.uploadResolve = resolve
      })
    }
  }
}
</script>

<style lang="less">

</style>
