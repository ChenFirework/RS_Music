<template>
  <div class="container">
    <h1>精&nbsp;彩&nbsp;推&nbsp;荐</h1>
    <div class="carousel_all">
      <el-carousel class="carousel_left" height="300px">
        <el-carousel-item v-for="(item,i) in list" :key="i">
          <img :src="item.url" alt />
          <img :src="item.url" alt />
        </el-carousel-item>
      </el-carousel>
      <el-carousel class="carousel_right" height="300px">
        <el-carousel-item v-for="(item,i) in list" :key="i">
          <img :src="item.url" alt />
          <img :src="item.url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { url: "../../../static/surprise1.jpeg" },
        { url: "../../../static/surprise2.jpg" },
        { url: "../../../static/surprise3.jpg" },
        { url: "../../../static/surprise4.jpg" }
      ]
    };
  }
};
</script>
<style scoped>
.container{
    background-color: #fff;
    padding:50px 0;
}
.container>h1{
    text-align: center;
    margin-top: 0;
}
.carousel_left,
.carousel_right {
  width: 600px;
}
.carousel_all {
  display: flex;
  justify-content: space-around;
}
img{
    width: 600px;
    height: 300px;
}
</style>