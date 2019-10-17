<template>
  <div class="container">
    <div>
      <button id="displaysign" @click="start()">点击登录</button>
    </div>
    <div class="reg">
      <div>
        <img class="logo" src="../../assets/logo.png" alt />
        <span class="rs_title">RS Music</span>
      </div>
      <br />
      <div class="form">
        <!-- 用户名 -->
        <div class="input_uname">
          <el-input prefix-icon="el-icon-user" v-model="uname" placeholder="请输入用户名" clearable></el-input>
        </div>
        <!-- 密码 -->
        <div class="input_upwd">
          <el-input prefix-icon="el-icon-lock" v-model="upwd" placeholder="请输入密码" show-password></el-input>
        </div>
        <!-- 自动登录 -->
        <div class="auto_login">
          <el-checkbox v-model="checked">自动登录</el-checkbox>
          <el-link type="primary" href="https://element.eleme.io" target="_blank">注册账号</el-link>
        </div>
        <!-- 登录 -->
        <div>
          <el-button class="btn" type="primary" @click="login">立即登录</el-button>
        </div>
        <el-divider>第三方登录</el-divider>
        <div class="items">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item3"></div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="cover"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      checked: false
    };
  },
  methods: {
    login() {
      var reg = /^\w{1,12}$/i;
      if (reg.test(this.uname) && reg.test(this.upwd)) {
        this.axios
          .get("login", {
            params: {
              uname: this.uname,
              upwd: this.upwd
            }
          })
          .then(response => {
            console.log(response);
            if (response.data.code == 1) {
              console.log(1);
            } else {
              console.log("-1");
            }
          });
      } else {
        console.log("消息", "用户名或密码错误");
        return;
      }
    }
  }
};
</script>
<style scoped>
.el-input__inner {
  width: 50% !important;
}
.container {
  text-align: center;
}
.reg {
  width: 350px;
  height: 450px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -225px;
  border: 1px solid #ddd;
}
.logo {
  width: 50px;
}
.rs_title {
  font-size: 50px;
  font-family: Lucida Handwriting;
}
.form > div {
  margin-bottom: 30px;
}
.btn {
  width: 350px;
  font-size: 20px;
  color: #fff;
}
.auto_login {
  display: flex;
  justify-content: space-between;
}
.items{
  display: flex;
  justify-content: space-around;
}
.items > div {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.06);
  cursor: pointer;
  overflow: hidden;
}
.item1 {
  background: url(../../assets/background.png) 7px -163px no-repeat;
}
.item2 {
  background: url(../../assets/background.png) 7px -50px no-repeat;
}
.item3 {
  background: url(../../assets/background.png) 7px 5px no-repeat;
}
/* 遮罩层样式 */
.cover {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #000;
  opacity: 0.3;
}
</style>