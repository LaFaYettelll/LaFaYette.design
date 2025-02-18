<template>
    <div class="contact-info">
      <el-popover placement="top" trigger="click">
        <img :src="require(`@/assets/images/${config.contact.wechat.qrCode}`)" alt="wechat-qr" class="preview"/>
        <template #reference>
          <img :src="require(`@/assets/images/${config.contact.wechat.icon}`)" alt="wechat-icon" class="icon" />
        </template>
      </el-popover>
      <a :href="config.contact.weibo.link" target="_blank">
        <img :src="require(`@/assets/images/${config.contact.weibo.icon}`)" alt="weibo-icon" class="icon" />
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      config: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-info {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    color: #fff;
    background: #111;
  }
  .icon {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    cursor: pointer;
  }
  .preview {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  </style>