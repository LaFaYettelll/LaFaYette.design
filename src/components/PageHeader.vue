<template>
    <div class="header">
      <img :src="require(`@/assets/images/${config.header.logo}`)" alt="logo" class="logo" />
      <!-- <h1 class="title">{{ config.header.title }}</h1> -->
      <div class="contacts">
        <div class="link-box">
          <span v-for="link in config.header.links" :key="link">{{ link }}</span>
        </div>

        <ContactInfo :config=config />
      </div>
      
    </div>
  </template>
  
  <script>
  import ContactInfo from './ContactInfo.vue';
  export default {
    name: 'PageHeader',
    components:  { ContactInfo },
    props: {
      config: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    padding: 20px;
    color: #fff;
    background: #111;
  }
  .title {
    font-size: 50px;
  }
  .logo {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
  }
  ::v-deep .contacts .contact-info {
    margin: 0;
  }
  .contacts {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .link-box span {
    font-size: 18px;
    margin-right: 20px;
  }
  </style>