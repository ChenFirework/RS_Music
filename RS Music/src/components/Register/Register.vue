<template>
  <div class="container">
    <div>
      <button id="displaysign" @click="start()">点击登录</button>
    </div>
    <div class="reg">
      <!-- logo标题 -->
      <div class="head_title">
        <img class="logo" src="../../assets/logo.png" alt />
        <span class="rs_title">RS Music</span>
      </div>
      <div class="form">
        <!-- 返回登录 -->
        <div class="back_login">
          <span>已有账号?</span>
          <el-link type="primary" href="javascript:;">立即登录</el-link>
        </div>
        <!-- 用户名 -->
        <div class="input_uname">
          <div>
            <el-input
              class="el_input_uname"
              prefix-icon="el-icon-user"
              v-model="uname"
              placeholder="请输入用户名"
              @focus="focusTestUname"
              @blur="blurTestUname"
              clearable
            ></el-input>
          </div>
          <div class="tips">
            <div class="hide">
              <span class="el-icon-message-solid">用户名可以是3~16位的字母、数字、下划线</span>
            </div>
            <div class="hide">
              <span class="el-icon-warning">用户名格式不正确</span>
            </div>
            <div class="hide">
              <span class="el-icon-success">用户名格式正确</span>
            </div>
          </div>
        </div>
        <!-- 密码 -->
        <div class="input_upwd">
          <div>
            <el-input
              class="el_input_email"
              prefix-icon="el-icon-lock"
              v-model="upwd"
              placeholder="请输入密码"
              @focus="focusTestUpwd"
              @blur="blurTestUpwd"
              show-password
            ></el-input>
          </div>
          <div class="tips">
            <div class="hide">
              <span class="el-icon-message-solid">密码至少包含1个大写字母,1个小写字母和1个数字</span>
            </div>
            <div class="hide">
              <span class="el-icon-warning">密码格式不正确</span>
            </div>
            <div class="hide">
              <span class="el-icon-success">密码格式正确</span>
            </div>
          </div>
        </div>
        <!-- 邮箱 -->
        <div class="input_email">
          <div>
            <el-input
              prefix-icon="el-icon-message"
              @blur="blurTestEmail"
              v-model="email"
              placeholder="请输入邮箱"
              clearable
            ></el-input>
          </div>
          <div class="tips">
            <div class="hide">
              <span class="el-icon-warning">邮箱格式不正确</span>
            </div>
            <div class="hide">
              <span class="el-icon-success">邮箱格式正确</span>
            </div>
          </div>
        </div>
        <!-- 手机号 -->
        <div class="input_phone">
          <div>
            <el-input
              prefix-icon="el-icon-mobile-phone"
              @blur="blurTestPhone"
              v-model="phone"
              placeholder="请输入手机号"
              clearable
            ></el-input>
          </div>
          <div class="tips">
            <div class="hide">
              <span class="el-icon-warning">手机号格式不正确</span>
            </div>
            <div class="hide">
              <span class="el-icon-success">手机号格式正确</span>
            </div>
          </div>
        </div>
        <!-- 性别 -->
        <div class="input_gender">
          <span>性别：</span>
          <el-radio v-model="gender" label="1">男</el-radio>
          <el-radio v-model="gender" label="0">女</el-radio>
        </div>
        <!-- 注册 -->
        <div class="immediately">
          <el-button class="btn" type="primary" @click="register">立即注册</el-button>
          <el-checkbox v-model="agree">我已阅读并同意相关服务条款和隐私政策</el-checkbox>
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
      email: "",
      phone: "",
      checked: false,
      agree: true,
      gender: ""
    };
  },
  methods: {
    start() {},
    focusTestUname() {
      var tips = document.querySelector(".input_uname>.tips>div:first-child");
      tips.className = "";
    },
    blurTestUname() {
      var tips = document.querySelectorAll(".input_uname>.tips>div");
      tips[0].className = "hide";
      // 用户名可以是3~16位的字母、数字、下划线
      var reg = /^\w{3,16}$/i;
      if (reg.test(this.uname)) {
        tips[1].className = "hide";
        tips[2].className = "";
      } else {
        tips[1].className = "";
        tips[2].className = "hide";
      }
    },
    focusTestUpwd() {
      var tips = document.querySelector(".input_upwd>.tips>div:first-child");
      tips.className = "";
    },
    blurTestUpwd() {
      var tips = document.querySelectorAll(".input_upwd>.tips>div");
      tips[0].className = "hide";
      // 密码至少包含1个大写字母,1个小写字母和1个数字
      var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/;
      if (reg.test(this.upwd)) {
        tips[1].className = "hide";
        tips[2].className = "";
      } else {
        tips[1].className = "";
        tips[2].className = "hide";
      }
    },
    blurTestEmail() {
      var tips = document.querySelectorAll(".input_email>.tips>div");
      var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (reg.test(this.email)) {
        tips[0].className = "hide";
        tips[1].className = "";
      } else {
        tips[0].className = "";
        tips[1].className = "hide";
      }
    },
    blurTestPhone() {
      var tips = document.querySelectorAll(".input_phone>.tips>div");
      var reg = /^1[3456789]\d{9}$/;
      if (reg.test(this.phone)) {
        tips[0].className = "hide";
        tips[1].className = "";
      } else {
        tips[0].className = "";
        tips[1].className = "hide";
      }
    },
    register() {
      console.log(this.gender, this.agree);
      if (this.gender == "" || this.agree == false) {
        return;
      } else {
        var str =
          "uname=" +
          this.uname +
          "&upwd=" +
          this.upwd +
          "&email=" +
          this.email +
          "&phone=" +
          this.phone +
          "&gender=" +
          this.gender;
        this.axios.post("register", str).then(response => {
          console.log(response);
        });
      }
    }
  }
};
</script>
<style scoped>
span {
  font-size: 14px;
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
}
.back_login {
  text-align: right;
  margin-bottom: 10px;
}
.logo {
  width: 60px;
}
.rs_title {
  font-size: 45px;
  font-family: Lucida Handwriting;
}
.tips {
  height: 20px;
}
.input_uname > .tips > div:nth-child(2),
.input_upwd > .tips > div:nth-child(2) {
  color: #ff0000;
}
.input_email > .tips > div:first-child,
.input_phone > .tips > div:first-child {
  color: #ff0000;
}
.tips > div:last-child {
  color: #0bb60b;
}
.input_uname,
.input_upwd,
.input_email,
.input_phone,
.input_gender {
  margin-bottom: 5px;
}
/* .success{
  border:1px solid green;
  border-radius: 5%;
} */
.immediately {
  margin-bottom: 30px;
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