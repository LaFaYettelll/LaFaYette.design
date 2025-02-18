<template>
  <div id=app>
    <PageHeader :config=config />
    <PageCarousel :config=config />
    <ContactInfo :config=config />
    <PageFooter :config=config />
  </div>
</template>

<script>
// import config from '@/config/config.json';
import PageHeader from '@/components/PageHeader.vue';
import PageCarousel from '@/components/PageCarousel.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import PageFooter from '@/components/PageFooter.vue';
import axios from 'axios';

export default {
  components: {
    PageHeader,
    PageCarousel,
    ContactInfo,
    PageFooter
  },
  data() {
    return {
      config: {
        header: {
          logo: 'logo.jpg',
          title: '我的网站',
          userInfo: {
            name: '',
            avatar: 'default.jpeg'
          }
        },
        carousel: [
          { type: 'image', url: 'default.jpeg'},
          { type: 'image', url: 'default.jpeg' },
          { type: 'video', url: 'default.jpeg' }
        ],
        contact: {
          wechat: {
            icon: 'default.jpeg',
            qrCode: 'default.jpeg'
          },
          weibo: {
            icon: 'default.jpeg',
            link: ''
          }
        },
        footer: {
          copyright: ''
        }
      }
    };
  },
  created() {
    axios.get('./config.json')
      .then(response => {
        this.config = response.data;
      })
      .catch(error => {
        console.error('Failed to load config:', error);
      });
  }

};
</script>
