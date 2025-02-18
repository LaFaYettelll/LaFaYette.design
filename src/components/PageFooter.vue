<template>
    <div class="footer">
      <p>{{ config.footer.copyright }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageFooter',
    props: {
      config: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    padding: 20px;
    color: #fff;
    background: #111;
  }
  </style>