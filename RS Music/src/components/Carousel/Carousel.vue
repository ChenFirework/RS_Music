<template>
  <div class="all_carousel">
    <el-carousel :interval="4000" type="card" height="360px">
    <el-carousel-item v-for="(item,i) in list" :key="i">
      <img :src="item.url" alt />
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { url: "../../../static/carousel4.jpg" },
        { url: "../../../static/carousel1.jpg" },
        { url: "../../../static/carousel2.jpg" },
        { url: "../../../static/carousel3.jpg" }
      ]
    };
  }
};
</script>
<style>
img {
  height: 360px;
}
.all_carousel{
  padding:50px 0;
  background-color: #eee;
}
</style>