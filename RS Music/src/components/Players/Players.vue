<template>
<div class="centent">
  <div class="container">
    <div class="mg">
      <img src="../../assets/pg.jpg" alt="">
    </div>
    <div class="lyric" >
      <ul id="lyric" style="text-align: center;">
        <li>说谎 (Live) - 林宥嘉</li>
        <li>词：施人诚</li>
        <li>曲：李双飞</li>
        <li>是有过几个不错对象</li>
        <li>说起来并不寂寞孤单</li>
        <li>可能我浪荡 让人家不安</li>
        <li>才会 结果都阵亡</li>
        <li>我没有什么阴影魔障</li>
        <li>你千万不要放在心上</li>
        <li>我又不脆弱 何况那算什么伤</li>
        <li>反正</li>
        <li>我没有说谎 我何必说谎</li>
        <li>你懂我的 我对你从来就不会假装</li>
        <li>我哪有说谎 请别以为你有多难忘</li>
        <li>笑是真的不是我逞强</li>
        <li>我好久没来这间餐厅</li>
        <li>没想到已经换了装潢</li>
        <li>角落那窗口 闻得到玫瑰花香</li>
        <li>被你一说是有些印象</li>
        <li>我没有说谎 我何必说谎</li>
        <li>你知道的 我缺点之一就是很健忘</li>
        <li>我哪有说谎 是很感谢今晚的相伴</li>
        <li>但我竟然有些不习惯</li>
        <li>我没有说谎 我何必说谎</li>
        <li>爱一个人 没爱到难道就会怎么样</li>
        <li>别说我说谎 人生已经如此的艰难</li>
        <li>有些事情就不要拆穿</li>
        <li>我没有说谎 是爱情说谎</li>
        <li>它带你来 骗我说</li>
        <li>渴望的有可能有希望</li>
        <li>我没有说谎 祝你做个幸福的新娘</li>
        <li>我的心事请你就遗忘</li>
      </ul>
    </div>
  </div>
  <div class="play_music">
  <div class="play_btn1"><!--播放器-->
      <a href="#"><img src="../../assets/xiangqian.png" alt="" title="上一首"></a>
      <a href="#"><img src="../../assets/zanting.png" alt="" title="暂停/播放"></a>
      <a href="#"><img src="../../assets/xianghou.png" alt="" title="下一首"></a>
  </div>
  <div class="play_btn2"><!--进度条最大div-->
   <div class="play_pro"><!--进度条的盒子-->
    <div class="play_aa"><!--进度条-->
     <div class="music-pro">
     </div>
     <div class="music-cur">
     </div>
     <div class="music-dot">
     </div>
    </div>
   </div>
  </div>
  <div class="play_btn3"><!--循环-->
    <a href="#"><img src="../../assets/1005.png" alt="" title="循环"></a>
    <a href="#"><img src="../../assets/1003.png" alt="" title="喜欢"></a>
    <a href="#"><img src="../../assets/1004.png" alt="" title="下载"></a>
    <a href="#"><img src="../../assets/1004.png" alt="" title="评论"></a>
  </div>
 
  <div><!--其他功能-->   
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
*{
   margin: 0;
   padding: 0;
}
.centent{
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background:linear-gradient(45deg,rgba(241, 189, 111, 0.979),rgba(137, 236, 243, 0.952));
  clear: both;
}
.container{
  width: 100%;
  height: 450px;
  margin-top:80px;
  position: relative;
}
.play_music{
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
}
.lyric{
  width:400px;
  height: 100%;
  margin-left: 580px;
  list-style: none;
  text-align: center;
 
}
#lyric{
  height: 280px;
  width:300px;
  position:absolute;
  margin-top: 0%;
  display:inline-block;
  overflow: hidden;
}
ul li{
   font-size: 18px;
   padding-top: 10px;
   color: aliceblue;
  
}
.mg{
  height:400px;
  width:400px;
  margin-left: 200px;
  position: absolute;
}
.mg img{
width: 100%;
height: auto;
box-shadow: 10px 10px 10px rgba(0,0,0,.5);
-moz-box-shadow: 10px 10px 10px rgba(0,0,0,.5);
 -webkit-box-shadow: 10px 10px 10px rgba(0,0,0,.5);
}
.play_btn1{/*暂停播放 */
  width:250px;
  float: left;
  height: 100%;
  position: relative;
  margin: 0 10px;
}
.play_btn1 a{
   margin-left:24px;
}
.play_btn2{ /*进度条最大div */
    float: left;
    width: auto;
    margin-left: 150px;
    margin-right: 200px;
    height: 100%;
    position: relative;
}
 .play_pro{ /*进度条下div盒子*/
    position: absolute;
    height: 20px;
    left: 10px;
    right: 0;
    top: 50%;
    margin-top: -32px;
} 
.play_aa{
    position: relative;
    cursor: pointer;
    height: 100%;
}
.music-pro{ /*盒子里div事件 */
    position: absolute;
    left: 0;
    right: 0;
    width: 410px;
    height: 2px;
    margin-top: -1px;
    border-radius: 2px;
    background-color: #808284;
    overflow: hidden;
    margin:0 auto
}
.music-cur{
      position: absolute;
    background-color: #D8D8D8;
    width: 0;
    height: 2px;
    top: 50%;
    margin-top: -14px;
    border-radius: 2px;
    transition: all 0.25s ease;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease
}.music-dot{
  width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    left: 0px;
    margin-left: -5px;
    top: 50%;
    margin-top: -15px;
    transition: all 0.25s ease;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease;
}
.play_btn3{/*循环点赞 */
    float: right;
    width: 300px;
    height: 100%;
    right: 0;
    position: relative;
}
.play_btn3 a{
  margin-left:20px;
}
</style>