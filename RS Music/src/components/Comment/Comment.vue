<template>
  <div class="box" id="weibo">
    <div>
        <div class="title"><h3>评论</h3></div>
        <div class="num">还可以输入<span>140</span>字</div>
    </div>
    <div style="clear: both"></div>
    <div class="input">
        <textarea placeholder="期待您的神评论..." name="" id="txt" cols="20" rows="10"></textarea>
    </div>
    <div class="func">
       <el-button icon="el-icon-picture-outline-round" circle></el-button>
         <el-button type="success">发表评论</el-button>
        
    </div>
    <div style="clear: both"></div>
    <ul id="ul"></ul>
    <div>
    <span>头上一片晴天，心中一个想念</span>
    <el-divider content-position="left"><a href="" class="el-icon-user">啦啦啦</a></el-divider>
    <el-divider content-position="right"><a href=""><i class="el-icon-edit"></i></a></el-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <el-divider content-position="left"><a href="" class="el-icon-user">啦啦啦</a></el-divider>
     <el-divider content-position="right"><a href=""><i class="el-icon-edit"></i></a></el-divider>
    <span>为了无法计算的价值</span>
    <el-divider content-position="left"><a href="" class="el-icon-user">啦啦啦</a></el-divider>
     <el-divider content-position="right"><a href=""><i class="el-icon-edit"></i></a></el-divider>
  </div>
</div>
</template>

<style>
        * {
            margin: 0;
            padding: 0
        }

        ul {
            list-style: none;
            margin-top: 30px;
        }

        .box {
            width: 600px;
            margin: 100px auto;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 20px;
        }

        textarea {
            width: 100%;
            height: 68px;
            outline: none;
            resize: none;
        }

        ul {
            width: 450px;
            padding-left: 80px;
        }

        ul li {
            line-height: 25px;
            border-bottom: 1px dashed #ccc;
        }

        .title {
            float: left;
        }

        .num {
            float: right;
        }

        .input {
            margin-top: 4px;
            padding: 5px;
        }

        .func {
            float: right;
        }

        #btn {
            display: inline-block;
            height: 28px;
            line-height: 29px;
            width: 60px;
            min-width: 40px;
            font-size: 14px;
            background-color: #ff8140;
            color: #fff;
            box-shadow: none;
            cursor: default;
            border: 1px solid #f77c3d;
            outline: none;
            padding: 0 10px;
            border-radius: 2px;
            text-align: center;
        }

        input {
            float: right;
        }
        a{
          text-decoration:none;
        }
    </style>
  <script>
  export default {
    data(){
      return{

      }
    }
  }
  </script>

