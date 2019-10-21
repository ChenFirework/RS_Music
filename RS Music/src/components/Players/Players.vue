<template>
<div class="centent">
  <div class="container">
    <div class="mg">
      <img src="../../../static/pg.jpg" alt="">
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
  <div class="footer">
  <div class="btn_btn"><!--播放器-->
      <el-button icon="Icon el-icon-d-arrow-left" circle title="上一首" style="font-size:10px;"></el-button>
      <el-button icon="Icon el-icon-video-pause" circle title="播放"></el-button>
      <el-button icon="Icon el-icon-d-arrow-right" circle title="下一首"></el-button>
  </div>
  <div class="play_music"><!--进度条-->
  <a href="" title="说谎"></a>
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
<style>
*{
   margin: 0;
   padding: 0;
}
.centent{
  width: 100%;
  height: 100%;
  position: absolute;
}
.container{
  width: 100%;
  height: 450px;
  margin-top:80px;
  position: relative;
}
.footer{
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
}
.play_music{
  height: 50px;
  float: left;
}
.btn_btn{
  width:150px;
  height:40px;
  margin-top:30px;
  margin-left: 100px;
}
</style>