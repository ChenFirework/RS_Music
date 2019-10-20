<template>
  <div class="container">
    <h1 style="text-align:center;">歌&nbsp;手&nbsp;推&nbsp;荐</h1>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="华语" name="first">
        <div class="singers">
          <el-card
            class="singer"
            :body-style="{ padding: '0px' }"
            v-for="(item,i) in list1"
            :key="i"
          >
            <img :src="item.url" class="image" />
            <div style="padding: 14px;">
              <p>{{item.singer}}</p>
              <span>{{item.songs}}首歌曲</span>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="欧美" name="second">
        <div class="singers">
          <el-card
            class="singer"
            :body-style="{ padding: '0px' }"
            v-for="(item,i) in list2"
            :key="i"
          >
            <img :src="item.url" class="image" />
            <div style="padding: 14px;">
              <p>{{item.singer}}</p>
              <span>{{item.songs}}首歌曲</span>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="日韩" name="third">
        <div class="singers">
          <el-card
            class="singer"
            :body-style="{ padding: '0px' }"
            v-for="(item,i) in list1"
            :key="i"
          >
            <img :src="item.url" class="image" />
            <div style="padding: 14px;">
              <p>{{item.singer}}</p>
              <span>{{item.songs}}首歌曲</span>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="组合" name="fourth">
        <div class="singers">
          <el-card
            class="singer"
            :body-style="{ padding: '0px' }"
            v-for="(item,i) in list2"
            :key="i"
          >
            <img :src="item.url" class="image" />
            <div style="padding: 14px;">
              <p>{{item.singer}}</p>
              <span>{{item.songs}}首歌曲</span>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="更多 >" name="fifth">
        <div class="singers">
          <el-card
            class="singer"
            :body-style="{ padding: '0px' }"
            v-for="(item,i) in list1"
            :key="i"
          >
            <img :src="item.url" class="image" />
            <div style="padding: 14px;">
              <p>{{item.singer}}</p>
              <span>{{item.songs}}首歌曲</span>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      list1: [
        {
          url: "../../../static/singer1.jpg",
          singer: "G.E.M.邓紫棋",
          songs: 716
        },
        { url: "../../../static/singer2.jpg", singer: "周杰伦", songs: 1044 },
        { url: "../../../static/singer3.jpg", singer: "林俊杰", songs: 993 },
        { url: "../../../static/singer9.jpg", singer: "王力宏", songs: 1144 },
        { url: "../../../static/singer11.jpg", singer: "王菲", songs: 2165 },
        { url: "../../../static/singer6.jpg", singer: "薛之谦", songs: 450 }
      ],
      list2: [
        {
          url: "../../../static/singer7.jpg",
          singer: "Richard Clayderman",
          songs: 5861
        },
        {
          url: "../../../static/singer8.jpg",
          singer: "Taylor Swift",
          songs: 1111
        },
        { url: "../../../static/singer5.jpg", singer: "Rihanna", songs: 1253 },
        {
          url: "../../../static/singer10.jpg",
          singer: "Justin Bieber",
          songs: 1061
        },
        {
          url: "../../../static/singer4.jpg",
          singer: "Michael Jackson",
          songs: 2378
        },
        {
          url: "../../../static/singer12.jpg",
          singer: "Adele",
          songs: 291
        }
      ]
    };
  }
};
</script>
<style scoped>
.container {
  padding: 50px 0;
}
h1 {
  margin-top: 0;
}
.singers {
  display: flex;
  justify-content: space-around;
}
.singer {
  width: 175px;
  height: 300px;
  text-align: center;
}
img {
  width: 175px;
  height: 175px;
  border-radius: 50%;
}
span {
  color: #aaa;
  font-size: 13px;
}
</style>