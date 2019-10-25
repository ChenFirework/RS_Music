<template>
  <div>
    <div class="footer">
    <div class="footer-infor">
      <div class="d1">
        <h3>下载QQ音乐客户端</h3>
            <ul>
              <li><img src="../../assets/windows.png" alt=""><p>PC版</p></li>
              <li><img src="../../assets/mac.png" alt=""><p>Mac版</p></li>
              <li><img src="../../assets/Android.png" alt=""><p>Android版</p></li>
              <li><img src="../../assets/IPhone.png" alt=""><p>iPhone版</p></li>
            </ul>
            <div class="dd1">
            <ul>
              <li>开发平台</li>
            </ul>
            <ul>
              <li class="aa1">腾讯音乐人</li>
              <li>音乐号认证</li>
            </ul>
            </div>
      </div>
      <div class="d2">
        <h3>特色产品</h3>
          <ul class="uu1">
            <li><img src="../../assets/1002.png" alt=""><p>全民K歌</p></li>
            <li><img src="../../assets/hangye.png" alt=""><p>Super Sound</p></li>
            <li><img src="../../assets/logo-ionitron.png" alt=""><p>QPlay</p></li>
          </ul>
          <ul class="u1">
            <li>车载互联</li>
            <li>QQ演出</li>
          </ul>
          <div class="dd2">
            TME集团官网
         </div>
         <div class="dd3">
            腾讯音乐
         </div>
      </div>
      <div class="d3">
        <h3>合作链接</h3>
        <ul class="">
          <li class="C1">CJ ENMFM</li>
          <li class="C1">腾讯视频</li>
          <li class="C1">手机QQ空间</li>
          <li class="C1">最新版QQ</li>
          <li class="C1">腾讯社交广告</li>
          <li class="C1">电脑管家</li>
          <li class="C1">QQ浏览器</li>
          <li class="C1">腾讯微云</li>
          <li class="C1">腾讯云企鹅</li>
          <li class="C1">智能电视网</li>
          <li class="C1">当贝市场</li>
          <li class="C1">开放平台</li>
        </ul>
      </div>
    </div>
    <div class="footer_end">
      <p>关于腾讯 | About Tencent | 服务条款 | 用户服务协议 | 隐私政策 | 权利声明 | 广告服务 | 腾讯招聘 | 客服中心 | 网站导航</p>
      <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
      <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>
    </div>
  </div>
  </div>
  
</template>
<script>
export default{
  data() {
    return {
      
    }
  },methods: {
    
  },
}
</script>
<style scoped>
 .footer{
  height: 580px;
  width: 100%;
  bottom: 0;
  left: 0;
  position: relative;
  color: #999;
  background-color:#333; 
  clear: both;
  font-size: 14px;
  
}
ul{
   list-style:none;
}
.footer-infor{
  height: 430px;
  width: 95%;
  margin:0 auto 100px;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  box-shadow:0 1px 1px -1px rgb(68, 65, 65);
}
.d1{
  height: 430px;
  width: 400px;
  float: left;
}
 .d2 {
  height: 430px;
  width: 400px;
  float: left;
}
 .d3{
  height: 430px;
  width: 400px;
  float: left;
}
 .d1 ul{
   width:350px;height:100px;
   margin-top:10px;
	 padding:10px 0;
   text-align: center;
 }
 .uu1{
   width:350px;height:100px;
   margin-top:10px;
	 padding:10px 0;
   text-align: center;
 }
 .d3 ul{
   width:350px;height:100px;
   margin-top:10px;
	 padding:10px 0;
   text-align: center;
   list-style:none;
 }
 .d1 ul li{
   width:85px;height:60px;
	 float:left;
   padding-top:10px;
 }
 .d2 ul li{
   width:85px;height:60px;
	 float:left;
   padding-top:10px;
 }
 p{
  text-align:center;
	font-size:14px;
 }
 h3{
    font-size: 15px;
    font-weight: 400;
    padding: 80px 0 46px;
    margin-left: 30px;
 }
 
 .C1{
    float: left;
    min-width: 100px;
    padding-top: -20px;
    margin-bottom: 12px;
    list-style:none;
 }
 .dd1{
  height: 100px;
  width: 400px;
  float: left;
 }
 .dd1 ul{
   height: 20px;
   width: 400px;
   float: left;
 }
 .aa1{
   padding-left: 7px;
 }
 .u1{
   height: 50px;
   margin-top:-22px;
   margin-left: -20px;
 }
 .dd2{
  margin-top: -4px;
  height: 50px;
  width: 400px;
  float: left; 
  margin-left: 18px;
 }
 .dd3{
   margin-left: 18px;
 }
 .footer_end{
   width: 800px;
   height: 100px;
   margin-top: -70px;
   margin: -60px auto;
 }
 .footer_end p{
   font-size: 8px;
 }
</style>