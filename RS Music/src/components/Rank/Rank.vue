<template>
  <div>
    <div class="toplist_bg">
      <div id="toplist" class="toplist">
        <h1 class="title">排行榜</h1>
        <ul class="lists">
          <li class="toplist_item" v-for="(item,i) in list" :key="i">
            <div class="ban">
              <div class="item_left">
                <p class="toplist_title">巅峰榜</p>
                <p class="item_title">流行指数</p>
                <i class="item_line"></i>
                <ul class="item_songlist">
                  <li>
                    <div class="s_num">1</div>
                    <div class="s_name">{{item.song1}}</div>
                    <div class="s_artist">{{item.singer1}}</div>
                  </li>
                  <li>
                    <div class="s_num">2</div>
                    <div class="s_name">{{item.song2}}</div>
                    <div class="s_artist">{{item.singer2}}</div>
                  </li>
                  <li>
                    <div class="s_num">3</div>
                    <div class="s_name">{{item.song3}}</div>
                    <div class="s_artist">{{item.singer3}}</div>
                  </li>
                  <li>
                    <div class="s_num">4</div>
                    <div class="s_name">{{item.song4}}</div>
                    <div class="s_artist">{{item.singer4}}</div>
                  </li>
                </ul>
              </div>
              <div class="item_right">
                <p class="toplist_title">巅峰榜</p>
                <p class="item_title">流行指数</p>
                <i class="item_line"></i>
                <ul class="item_songlist">
                  <li>
                    <div class="s_num">1</div>
                    <div class="s_name">{{item.song1}}</div>
                    <div class="s_artist">{{item.singer1}}</div>
                  </li>
                  <li>
                    <div class="s_num">2</div>
                    <div class="s_name">{{item.song2}}</div>
                    <div class="s_artist">{{item.singer2}}</div>
                  </li>
                  <li>
                    <div class="s_num">3</div>
                    <div class="s_name">{{item.song3}}</div>
                    <div class="s_artist">{{item.singer3}}</div>
                  </li>
                  <li>
                    <div class="s_num">4</div>
                    <div class="s_name">{{item.song4}}</div>
                    <div class="s_artist">{{item.singer4}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {song1:"告白气球",singer1:"周杰伦",song2:"涅槃",singer2:"Cailin Russo",song3:"野狼disco",singer3:"宝石Gem",song4:"那女孩对我说",singer4:"Uu"},
        {song1:"告白气球",singer1:"周杰伦",song2:"涅槃",singer2:"Cailin Russo",song3:"野狼disco",singer3:"宝石Gem",song4:"那女孩对我说",singer4:"Uu"},
        {song1:"告白气球",singer1:"周杰伦",song2:"涅槃",singer2:"Cailin Russo",song3:"野狼disco",singer3:"宝石Gem",song4:"那女孩对我说",singer4:"Uu"},
        {song1:"告白气球",singer1:"周杰伦",song2:"涅槃",singer2:"Cailin Russo",song3:"野狼disco",singer3:"宝石Gem",song4:"那女孩对我说",singer4:"Uu"},
        {song1:"告白气球",singer1:"周杰伦",song2:"涅槃",singer2:"Cailin Russo",song3:"野狼disco",singer3:"宝石Gem",song4:"那女孩对我说",singer4:"Uu"}
      ]
    }
  }
}
</script>
<style scoped>
.toplist{
 margin: 0 auto;
  width:100%;
  background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
  color: #fff;
}
.toplist .title{
  padding: 50px 0;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  letter-spacing: 10px;
  color: #323232;
}
.toplist .lists{
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
}
.toplist .lists .toplist_item{
  width: 220px;
  height: 500px;
  margin:0 10px;
  position: relative;
  display: flex;
  /* -moz-perspective: 500px; */
  perspective: 500px;
  backface-visibility: hidden;
  flex-direction: column;
}

.toplist .toplist_title{
    font-size: 1.4em;
    font-weight: lighter;
    margin: 50px 0 5px;
    letter-spacing: 1px;
}
.toplist .item_title{
  font-weight: 500;
  font-size: 1.6em;
  letter-spacing: 2px;

}
.toplist .item_line{
  display: block;
    width: 36px;
    height: 2px;
    margin: 0 auto;
    background: #fff;
    margin: 28px auto;
}
.toplist .item_songlist{
  text-align: left;
}
.toplist .item_songlist>li{
  margin:0 0 15px 26px;
  padding-left:20px;
  position: relative;
}
.toplist .item_songlist .s_num{
  position:absolute;
  left:0;
  top:0;
}
/* 3dæ—‹è½¬ */
.toplist .toplist_item{
  transition:transform 0.4s;
  transform-origin: 50% 50% -110px;
  
}

.toplist .toplist_item:hover .ban{
  transform: rotateY(-90deg);
}
.toplist .toplist_item .ban{
  transform-origin: 50% 50% -110px;
  transform-style: preserve-3d;
  z-index: 10;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
}

.toplist .toplist_item .item_left,
.toplist .toplist_item .item_right{
  background:url('../../../static/bg_index_top.jpg') no-repeat;
  transform-origin: 50% 50% -110px;
  width: 100%;
  height: 500px;
  position: absolute;
  box-shadow: 3px 11px 10px 1px #a5a1a1;
}
.toplist .toplist_item .item_right{
  transform:rotateY(90deg);
}

.toplist .lists .toplist_item:nth-child(2) .item_left {
  background-position: -224px 0;
}
.toplist .lists .toplist_item:nth-child(3) .item_left{
  background-position: -448px 0;
}
.toplist .lists .toplist_item:nth-child(4) .item_left{
  background-position: -672px 0;
}
.toplist .lists .toplist_item:nth-child(5) .item_left{
  background-position: -896px 0;
}

.toplist .toplist_item .item_right{
  background-position: -224px 0;
}
.toplist .lists .toplist_item:nth-child(2) .item_right {
  background-position: -448px 0;
}
.toplist .lists .toplist_item:nth-child(3) .item_right{
  background-position: -672px 0;
}
.toplist .lists .toplist_item:nth-child(4) .item_right{
  background-position: -896px 0;
}
.toplist .lists .toplist_item:nth-child(5) .item_right{
  background-position: 0 0;
}
</style>