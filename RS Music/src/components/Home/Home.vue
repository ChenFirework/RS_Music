<template>
  <div id="container">
    <button @click="alertLogin">登录</button>
    <login ref="logs"></login>
    <button @click="alertRegister">注册</button>
    <register ref="regs"></register>
    <carousel></carousel>
    <songsheet></songsheet>
    <newsong></newsong>
    <rank></rank>
    <singers></singers>
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
import Register from "../Register/Register.vue";
import Carousel from "../Carousel/Carousel.vue";
import Songsheet from "../Songsheet/Songsheet.vue";
import Rank from "../Rank/Rank.vue"
import Newsong from "../Newsong/Newsong.vue"
import Singers from "../Singers/Singers.vue"
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
    register: Register,
    carousel: Carousel,
    rank: Rank,
    songsheet:Songsheet,
    newsong:Newsong,
    singers:Singers
  }
};
</script>
<style scoped>

</style>