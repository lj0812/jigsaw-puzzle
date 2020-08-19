<template>
  <section class="app-home">
    <section class="step-wrap fcc">
      <a-steps class="com-steps" :current="currentStep" @change="onStepChange">
        <a-step title="选择图片" description="本地选择多张图图片" />
        <a-step title="图片设置" description="加密、压缩等设置" />
        <a-step title="图片上传" description="选择上传地址上传" />
      </a-steps>
    </section>

    <section class="content-wrap" :style="{
      left: -currentStep * 100 + 'vw'
    }">
      <section class="content-step image-upload fcc">
        <section class="upload-input">
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

      <section class="content-step image-setting">
      </section>
      <section class="content-step">

      </section>
    </section>
  </section>
</template>

<script>
import {
// getBase64,
} from '@/utils/index.js'

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
    onStepChange (current) {
      this.currentStep = current
    },
    handleImageChange ({ fileList }) {
      this.fileList = fileList
    },
    beforeUpload (file, fileList) {
      console.log(file, fileList)
      // return new Promise((resolve, reject) => {
      //   this.uploadResolve = resolve
      // })
      return true
    },
    customRequest (uploadObj) {
      console.log(uploadObj)
    }
  }
}
</script>

<style lang="less">
.app-home{
  .step-wrap{
    height: 150px;
    .com-steps{
      width: 600px;
    }
  }
  .content-wrap{
    position: fixed;
    top: 150px;
    left: 0;
    display: flex;
    height: calc(100vh - 150px);
    overflow: hidden;
    transition: all .3s;
    .content-step{
      flex-shrink: 0;
      width: 100vw;
      &.image-upload{
        .upload-input{
          width: 600px;
          height: 200px;
          margin-top: -200px;
        }
      }
      &.image-setting{
      }
    }
  }
}
</style>
