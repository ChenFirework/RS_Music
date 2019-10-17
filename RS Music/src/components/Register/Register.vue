<template>
  <div class="container">
      <table></table>
      
    <div class="reg">
        <div>
            <img class="logo" src="../../assets/logo.png" alt="">
            <span class="rs_title">RS Music</span>
        </div>
        <br>
      <el-form label-width="60px">
        <!-- 用户名 -->
        <el-form-item label="用户名">
          <el-input v-model="uname"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码">
          <el-input v-model="upwd"></el-input>
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item label="手机号">
          <el-input v-model="phone"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="邮箱">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <!-- 性别 -->
        <el-form-item label="性别">
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="0">女</el-radio>
        </el-form-item>
        <!-- 注册 -->
        <div>
          <el-button class="btn" type="primary" @click="register">立即注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      phone: "",
      email: "",
      radio: 1
    };
  },
  methods: {
      register(){
          console.log(1)
      },
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
.container{
    text-align: center;
    /* background-image: url("../../assets/cxk.jpg");
    background-repeat: no-repeat;
    background-size: 600px 450px;
    background-position: 50px 100px; */
}
.reg{
    width: 350px;
    height:450px;
    padding:20px;
    margin-left:750px;
    margin-top: 80px;
    /* background: linear-gradient(rgb(255, 221, 68),#c1f507); */
}
.logo{
    width: 50px;
}
.rs_title{
    font-size: 50px;
    font-family: Lucida Handwriting;
}
.btn{
    /* background: linear-gradient(rgb(255, 68, 68),rgb(245, 7, 19)); */
    width: 350px;
    font-size: 20px;
    color: #fff;
}
</style>