<template>
  <div class="container">
    <div class="top_nav">
      <div class="head_title">
        <img class="logo" src="../../assets/logo.png" alt />
        <span class="rs_title">RS Music</span>
      </div>
      <div>
        <el-menu :default-active="activeIndex" class="el_menu" mode="horizontal">
          <el-menu-item index="1">发现音乐</el-menu-item>
          <el-menu-item index="2">下载客户端</el-menu-item>
          <el-menu-item index="3">音乐号</el-menu-item>
          <el-menu-item index="4">VIP会员</el-menu-item>
          <el-menu-item index="4">音乐现场</el-menu-item>
          <el-submenu index="6">
            <template id="more" slot="title">更多</template>
            <el-menu-item index="6-1">音乐人</el-menu-item>
            <el-menu-item index="6-2">流行DJ</el-menu-item>
            <el-menu-item index="6-3">精彩视频</el-menu-item>
            <el-menu-item index="6-4">主播电台</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="search_input">
        <el-input placeholder="搜索音乐" prefix-icon="el-icon-search" v-model="input1"></el-input>
      </div>
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <span class="log_reg" @click="alertLogin">登录</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span class="log_reg" @click="alertRegister">注册</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div>
      <navigation></navigation>
    </div>
    <login ref="logs"></login>
    <register ref="regs"></register>
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
import Register from "../Register/Register.vue";
import Navigation from "../Navigation/Navigation.vue";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input1: ""
    };
  },
  methods: {
    alertLogin() {
      this.$refs.logs.showLog();
    },
    alertRegister() {
      this.$refs.regs.showReg();
    }
  },
  components: {
    login: Login,
    register: Register,
    navigation: Navigation
  }
};
</script>
<style scoped>
.top_nav {
  display: flex;
  justify-content: space-around;
}
.head_title{
  width: 300px;
  display: flex;
  vertical-align: center;
}
.logo {
  width: 60px;
  height: 60px;
}
.head_title .rs_title {
  font-size: 45px;
  font-family: Lucida Handwriting;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 18px;
  color: #666;
}
.el-menu-item.is-active {
  background-color: #ffc74d;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #ffc74d;
}
.el-breadcrumb {
  padding-top: 25px;
}
.search_input{
  padding-top: 10px;
}
.log_reg {
  cursor: pointer;
}
</style>