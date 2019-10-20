<template>
  <div>
    <div class="container">
      <h1 style="text-align:center;">歌&nbsp;单&nbsp;推&nbsp;荐</h1>
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="为你推荐" name="first">
          <div class="allSheets">
            <div class="sheets" v-for="(item,i) in list" :key="i">
              <div class="img_div">
                <img :src="item.url" alt />
              </div>
              <div class="a_div">
                <a href="javascript:;">{{item.desc}}</a>
                <div>{{item.playback}}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="经典" name="second">
          <div class="allSheets">
            <div class="sheets" v-for="(item,i) in list" :key="i">
              <div class="img_div">
                <img :src="item.url" alt />
              </div>
              <div class="a_div">
                <a href="javascript:;">{{item.desc}}</a>
                <div>{{item.playback}}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="KTV热歌" name="third">
          <div class="allSheets">
            <div class="sheets" v-for="(item,i) in list" :key="i">
              <div class="img_div">
                <img :src="item.url" alt />
              </div>
              <div class="a_div">
                <a href="javascript:;">{{item.desc}}</a>
                <div>{{item.playback}}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="官方歌单" name="fourth">
          <div class="allSheets">
            <div class="sheets" v-for="(item,i) in list" :key="i">
              <div class="img_div">
                <img :src="item.url" alt />
              </div>
              <div class="a_div">
                <a href="javascript:;">{{item.desc}}</a>
                <div>{{item.playback}}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="九月推荐" name="fifth">
          <div class="allSheets">
            <div class="sheets" v-for="(item,i) in list" :key="i">
              <div class="img_div">
                <img :src="item.url" alt />
              </div>
              <div class="a_div">
                <a href="javascript:;">{{item.desc}}</a>
                <div>{{item.playback}}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="情歌" name="sixth">
          <div class="allSheets">
            <div class="sheets" v-for="(item,i) in list" :key="i">
              <div class="img_div">
                <img :src="item.url" alt />
              </div>
              <div class="a_div">
                <a href="javascript:;">{{item.desc}}</a>
                <div>{{item.playback}}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      list: [
        {
          url: "../../../static/pic2.jpg",
          desc: "我会关注你的一切，假装在你身边",
          playback: "播放量：6.7万"
        },
        {
          url: "../../../static/pic3.jpg",
          desc: "甜蜜表白：我想做你的阳光男孩",
          playback: "播放量：8.9万"
        },
        {
          url: "../../../static/pic4.jpg",
          desc: "你的每一个远方，都是他人的故乡",
          playback: "播放量：4.0万"
        },
        {
          url: "../../../static/pic5.jpg",
          desc: "秋意洒落 • 恰意柔风撩过你",
          playback: "播放量：2.2万"
        },
        {
          url: "../../../static/pic1.jpg",
          desc: "Alt-R&B：沉溺于耳境",
          playback: "播放量：2.4万"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.container{
  padding:50px 0;
  background-color: #eee;
}
.allSheets {
  height: 350px;
  display: flex;
  justify-content: center;
}
.sheets:not(:last-child) {
  width: 224px;
  height: 310px;
  margin-right: 50px;
}
.sheets .img_div {
  width: 224px;
  height: 224px;
  overflow: hidden;
  position: relative;
}
.sheets img {
  width: 224px;
  height: 224px;
  transition: transform 0.75s;
  position: absolute;
  z-index: 1;
}
.sheets img:hover {
  transform: scale(1.1);
}
.sheets > div > a {
  color: #000;
  text-decoration: none;
}
.a_div {
  width: 224px;
  height: 76px;
  margin-top: 10px;
}
.a_div > div {
  color: #999;
}
</style>