<template>
  <div class="container">
    <div class="logAll">
      <div class="reg">
        <!-- logo标题 -->
        <div class="head_title">
          <img class="logo" src="../../assets/logo.png" alt />
          <span class="rs_title">RS Music</span>
          <span class="el-icon-close" @click="closeLog"></span>
        </div>
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
            <el-link type="primary" href="javascript:;" :underline="false">注册账号</el-link>
          </div>
          <!-- 登录 -->
          <div class="immediately">
            <el-button class="btn" type="primary" @click="login">立即登录</el-button>
            <el-checkbox v-model="agree">我已阅读并同意相关服务条款和隐私政策</el-checkbox>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      checked: false,
      agree: true
    };
  },
  methods: {
    showLog() {
      var showLogin = document.querySelector(".logAll");
      showLogin.style.display = "block";
    },
    closeLog() {
      var closeLogin = document.querySelector(".logAll");
      closeLogin.style.display = "none";
    },
    login() {
      this.axios
        .get("login", {
          params: {
            uname: this.uname,
            upwd: this.upwd
          }
        })
        .then(response => {
          if (response.data.code == 1) {
            alert("登录成功")
            this.closeLog();
          } else {
            alert("登录失败，用户名或密码错误！");
          }
        });
    }
  }
};
</script>
<style scoped>
span {
  font-size: 14px;
}
.logAll {
  display: none;
}
.reg {
  width: 350px;
  height: 450px;
  padding: 25px;
  background-color: #fff;
  position: absolute;
  z-index: 20;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -250px;
  border: 1px solid #ddd;
}
.head_title {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.head_title > span:last-child {
  position: absolute;
  left: 375px;
  top: 5px;
  font-size: 20px;
}
.head_title > span:last-child:hover {
  color: #ff0000;
}
.logo {
  width: 60px;
}
.rs_title {
  font-size: 45px;
  font-family: Lucida Handwriting;
}
.input_uname,
.input_upwd,
.immediately {
  margin-bottom: 30px;
}
.tips {
  height: 20px;
}
.hide {
  display: none;
}
.err_size {
  width: 14px;
}
.btn {
  width: 350px;
  font-size: 20px;
  color: #fff;
}
.auto_login {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.items {
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
  /* display: none; */
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