<template>
  <div id="navigation">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">排行榜</template>
        <el-menu-item index="2-1">流行指数榜</el-menu-item>
        <el-menu-item index="2-1">巅峰榜</el-menu-item>
        <el-menu-item index="2-2">地区榜</el-menu-item>
        <el-menu-item index="2-3">特色榜</el-menu-item>
        <el-menu-item index="2-4">全球榜</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">歌手</el-menu-item>
      <el-menu-item index="4">MV</el-menu-item>
      <el-menu-item index="5">分类歌单</el-menu-item>
      <el-menu-item index="6">电台</el-menu-item>
      <el-menu-item index="7">数字专辑</el-menu-item>
      <el-menu-item index="8">票务</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
#navigation {
  display: flex;
  justify-content: center;
}
.el-menu--horizontal>.el-menu-item.is-active,
.el-menu--horizontal>.el-menu-item,
.el-menu.el-menu--horizontal{
  border-bottom: 0;
}
.el-menu-item:hover{
  color: aquamarine;
}

</style>