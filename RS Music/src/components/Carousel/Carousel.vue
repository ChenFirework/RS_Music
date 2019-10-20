<template>
  <el-carousel :interval="4000" type="card" height="360px">
    <el-carousel-item v-for="(item,i) in list" :key="i">
      <img :src="item.url" alt />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { url: "../../../static/carousel1.jpg" },
        { url: "../../../static/carousel2.jpg" },
        { url: "../../../static/carousel3.jpg" },
        { url: "../../../static/carousel4.jpg" }
      ]
    };
  }
};
</script>
<style>
img {
  height: 360px;
}
</style>