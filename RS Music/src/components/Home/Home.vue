<template>
  <div id="container">
    <button @click="alertLogin">登录</button>
    <login ref="logs"></login>
    <button @click="alertRegister">注册</button>
    <register ref="regs"></register>
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
import Register from "../Register/Register.vue";
export default {
  data() {
    return {};
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

</style>