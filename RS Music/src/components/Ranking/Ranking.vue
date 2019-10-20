<template>
  <div id="ranking">
    
     <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-headset"></i>巅峰榜</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">流行指数榜</el-menu-item>
          <el-menu-item index="1-2">热歌榜</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="1-3">飙升榜</el-menu-item>

         <el-menu-item index="1-4">MV榜</el-menu-item>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-headset"></i>地区榜</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">内地榜</el-menu-item>
          <el-menu-item index="2-2">香港地区榜</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="2-3">台湾地区榜</el-menu-item>

          <el-menu-item index="2-4">欧美榜</el-menu-item>
          <el-menu-item index="2-5">韩国榜</el-menu-item>
          <el-menu-item index="2-6">日本榜</el-menu-item>

      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-headset"></i>特色榜</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">抖音排行榜</el-menu-item>
          <el-menu-item index="3-2">网络歌曲榜</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="3-3">电音榜</el-menu-item>

          <el-menu-item index="3-5">ACG新歌榜</el-menu-item>
          <el-menu-item index="3-6">国风热歌榜</el-menu-item>
          <el-menu-item index="3-7">综艺新歌榜</el-menu-item>
          <el-menu-item index="3-8">影视金曲榜</el-menu-item>
          <el-menu-item index="3-9">音乐人原创榜</el-menu-item>
          <el-menu-item index="3-10">k歌金曲榜</el-menu-item>
          <el-menu-item index="3-11">说唱榜</el-menu-item>
        </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-headset"></i>全球榜</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">美国公告牌榜</el-menu-item>
          <el-menu-item index="4-2">美国iTunes榜</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="4-3">韩国Melon榜</el-menu-item>

          <el-menu-item index="4-5">英国UK榜</el-menu-item>
          <el-menu-item index="4-6">日本公信榜</el-menu-item>
          <el-menu-item index="4-7">JOOX本地热播榜</el-menu-item>
          <el-menu-item index="4-8">香港商台榜</el-menu-item>
          <el-menu-item index="4-9">台湾KKBOX榜</el-menu-item>
          <el-menu-item index="4-10">YouTube音乐排行榜</el-menu-item>

      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>  
    <el-main class="d1">
   <div class="d2"><h2>流行指数榜</h2><p class="d3">2019-10-17</p><p>榜单规则</p></div> 
      <el-button type="success"><i class="el-icon-caret-right
"></i>播放全部</el-button>
      <el-button plain><i class="el-icon-circle-plus
"></i>添加到</el-button>
      <el-button plain><i class="el-icon-download
"></i>下载</el-button>
      <el-button plain><i class="el-icon-edit
"></i>批量操作</el-button>
      <el-button plain><i class="el-icon-chat-dot-square
"></i>评论(201573)</el-button>
<el-table :data="tableData">
<el-table-column
      type="index"
      width="50">
    </el-table-column>
        <el-table-column prop="date" label="歌手" width="140">
        </el-table-column>
        <el-table-column prop="name" label="歌曲" width="120">
        </el-table-column>
        <el-table-column prop="address" label="时长">
        </el-table-column>
      </el-table>
        </el-main>
        
  </el-container>
  </el-container>

   
  </div>
</template>
<script>
  export default {
    data() {
      const item = {
        date: '野狼disco(feat.陈伟霆)',
        name: '宝石Gem / 陈伟霆',
        address: '04:06'
      };
      return {
        tableData: Array(5).fill(item)
      }
    }
  };
</script>
<style>
   .d1{
       text-align:left;
   }
   .d2{
       display:flex;
     justify-content:left;
     align-items:center;
     
   }
   .d2>h2,.d2 p{
       padding-right:30px;
   }
   .d3{
       margin-top:19px;
   }
</style>