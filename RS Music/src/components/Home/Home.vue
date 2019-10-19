<template>
  <div id="container">
    <button @click="alertLogin">登录</button>
    <login class="hide"></login>
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
export default {
  data() {
    return {};
  },
  methods: {
    alertLogin() {
      var mylogin1 = document.getElementsByTagName("button")[0].parentNode
        .children[1];
      mylogin1.className = "show";
    }
  },
  components: {
    login: Login
  }
};
</script>
<style scoped>
.hide {
  display: none;
}
.show {
  display: block;
}
</style>