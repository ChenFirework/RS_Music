<template>
  <el-row class="warp">
    <el-col  class="warp-breadcrum">
    <h1>M  V</h1>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
           <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </el-col>

  </el-row>
</template>


<script> 
  export default{
    data(){
      return {
        imagesbox:[{id:0,idView:require("../../../static/1.jpg")},    
                   {id:1,idView:require("../../../static/2.jpg")},
                   {id:2,idView:require("../../../static/3.jpg")},
                   {id:3,idView:require("../../../static/4.jpg")}
        ]
      }
    },
    methods: {
      
    },
    mounted() {
    }
  }
</script>
<style>

</style>
