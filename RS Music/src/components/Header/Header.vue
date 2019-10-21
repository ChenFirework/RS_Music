<template>
  <div class="container">
    <el-menu :default-active="activeIndex" class="el_menu" mode="horizontal">
      <el-menu-item index="0">
        <div class="head_title">
          <img class="logo" src="../../assets/logo.png" alt />
          <span class="rs_title">RS Music</span>
        </div>
      </el-menu-item>
      <el-menu-item index="1">发现音乐</el-menu-item>
      <el-menu-item index="2">下载客户端</el-menu-item>
      <el-menu-item index="3">我的音乐</el-menu-item>
      <el-menu-item index="4">VIP会员</el-menu-item>
      <el-submenu index="6">
        <template id="more" slot="title">更多</template>
        <el-menu-item index="6-1">音乐人</el-menu-item>
        <el-menu-item index="6-2">流行DJ</el-menu-item>
        <el-menu-item index="6-3">精彩视频</el-menu-item>
        <el-menu-item index="6-4">主播电台</el-menu-item>
      </el-submenu>
      <el-menu-item index="7">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1"></el-input>
      </el-menu-item>
      <el-menu-item class="log_reg" index="8">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <span @click="alertLogin">登录</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span @click="alertRegister">注册</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-menu-item>
    </el-menu>
    <login ref="logs"></login>
    <register ref="regs"></register>
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
import Register from "../Register/Register.vue";
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
    alertRegister(){
      this.$refs.regs.showReg();
    }
  },
  components: {
    login: Login,
    register: Register
  }
};
</script>
<style scoped>
.container {
  display: flex;
}
.logo {
  width: 60px;
  height: 60px;
  margin-top: -10px;
}
.head_title .rs_title {
  font-size: 45px;
  font-family: Lucida Handwriting;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 18px;
  color: #666;
}
.el-breadcrumb {
  padding-top: 20px;
}
</style>