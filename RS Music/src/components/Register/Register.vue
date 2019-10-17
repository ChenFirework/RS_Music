<template>
  <div class="container">
    <div>
      <button id="displaysign" @click="start()">点击登录</button>
    </div>
    <div class="reg">
      <div class="head_title">
        <img class="logo" src="../../assets/logo.png" alt />
        <span class="rs_title">RS Music</span>
      </div>
      <br />
      <div class="form">
        <!-- 返回登录 -->
        <div class="auto_login">
          <el-link type="primary" href="https://element.eleme.io" target="_blank">返回登录</el-link>
        </div>
        <!-- 用户名 -->
        <div class="input_uname">
          <div>
            <div class="show_tick"></div>
            <el-input prefix-icon="el-icon-user" v-model="uname" placeholder="请输入用户名" @focus="focusTest" @blur="blurTest" clearable></el-input>
          </div>
          <div class="tips">
            <span class="hide">用户名可以是3~32位的字母数字下划线</span>
            <div class="hide">
              <img class="err_size" src="../../assets/error.png" alt=""><span>用户名格式不正确</span>
            </div>
            
          </div>
        </div>
        <!-- 密码 -->
        <div class="input_upwd">
          <div>
            <div class="show_tick"></div>
            <el-input prefix-icon="el-icon-lock" v-model="upwd" placeholder="请输入密码" show-password></el-input>
            
          </div>
          
          <div class="tips">
            <span class="hide">密码可以是3~32位的字母数字下划线</span>
            <div class="hide">
              <img class="err_size" src="../../assets/error.png" alt=""><span>密码格式不正确</span>
            </div>
          </div>
        </div>
        
        <!-- 注册 -->
        <div class="immediately">
          <el-button class="btn" type="primary" @click="login">立即注册</el-button>
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
      checked: false,
      agree:true
    };
  },
  methods: {
    start(){},
    focusTest(){
      
    },
    blurTest(){
      // console.log(2)
      var reg = /^\w{3,12}$/i;
      if(reg.test(this.uname)){
        console.log(1)
      }else{
        console.log(2)
      }
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
            console.log(response);
            if (response.data.code == 1) {
              console.log(1);
            } else {
              console.log("-1");
            }
          });
    }
  }
};
</script>
<style scoped>
span{
  font-size: 14px;
}
.reg {
  width: 350px;
  height: 450px;
  padding: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -225px;
  border: 1px solid #ddd;
}
.head_title{
  display: flex;
  justify-content: center;
}
.logo {
  width: 60px;
}
.rs_title {
  font-size: 45px;
  font-family: Lucida Handwriting;
}
.show_tick{
  width: 25px;
  height: 15px;
  float: right;
  display: block;
  background-image: url("../../assets/tick.png");
  background-repeat: no-repeat;
}
.input_uname,
.input_upwd {
  margin-bottom: 10px;
}
.immediately {
  margin-bottom: 30px;
}
.tips{
  height: 20px;
}
.hide {
  display: none;
}
.err_size{
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