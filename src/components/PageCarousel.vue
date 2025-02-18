<template>
  <div class="carousel">
    <el-row class="media-box" type="flex">
      <el-col class="media-item" :xs="24" :sm="24" :md="16" :lg="8" v-for="(item, index) in config.carousel" :key="index">
        <img v-if="item.type === 'image'" class="carousel-image" :src="require(`@/assets/images/${item.url}`)" alt="carousel-image" />
        <video v-else class="carousel-video" controls :src="require(`@/assets/images/${item.url}`)" ></video>
      </el-col>
    </el-row>
    <!-- <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in config.carousel" :key="index">
        <img v-if="item.type === 'image'" :src="require(`@/assets/images/${item.url}`)" alt="carousel-image" />
        <video v-else controls :src="require(`@/assets/images/${item.url}`)" class="carousel-video"></video>
      </el-carousel-item>
    </el-carousel> -->
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
.carousel {
  margin: 20px 0;
  background: #111;
}
.media-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.media-item {
  flex: 1;
  margin: 20px;
  padding: 1rem;
  background: #222;
  border-radius: 5px;
  color: #fff;
}
.carousel-video, .carousel-image {
  min-width: 300px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>