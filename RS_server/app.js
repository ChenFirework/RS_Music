//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
const bodyParser = require("body-parser");

//3:创建数据库连接池
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"rs",//库名
    connectionLimit:15 //15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问
//  服务器:4000 
var server = express();
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4000);
//使用第三方中间件-------中间件只能在服务器端使用
server.use(bodyParser.urlencoded({
	extended:false
}));

//8:功能一:用户登录
server.get("/login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
//(2)创建sql语句查询
var sql = "SELECT uid FROM rs_user WHERE uname = ? AND upwd = md5(?)";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
 if(err)throw err;
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
   //6.保存用户id在session对象中
   req.session.uid=result[0].id;
  //(7)将结果返回脚手架
   res.send({code:1,msg:"登录成功"})
 }
})
})
//9:功能二:用户注册
server.post('/register',function(req,res){
  var obj=req.body;
	var i=400;
	for (var key in obj)
	{
		i++;
		if(!obj[key]){
			res.send({code:i,msg:key+' required'});
			return;
		}
  }
	pool.query('INSERT INTO rs_user SET ?',[obj],function(err,result){
    if(err){
      res.send({code:401,msg:'用户名不能重复'});
    }else if(result.affectedRows>0){
      res.send({code:200,msg:'注册成功'});
    }
	});
});


//功能二:分页歌曲列表
//1:接收GET 
server.get("/songs",(req,res)=>{
  //2:接收二个参数 
  //  pno 页码 pagePageSize 页大小
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  //3:设置默认值 pno=1 pageSize=4
  if(!pno){pno=1}
  if(!ps){ps=10}
  //4:计算第一问号值
  var off = (pno-1)*ps;
  //5:对pageSize转int
  ps = parseInt(ps); 
  //6:创建sql语句
  //自己写:库名;表名;列名 小写
  var sql = "SELECT mid,mname,singer,murl,mhot,morigin FROM rs_music LIMIT ?,?";
  //7:执行sql语句
  pool.query(sql,[off,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
  //8:将返回结果发送脚手架 
  })
  //启动 node app.js
  //http://127.0.0.1:4000/product
  //http://127.0.0.1:4000/product?pno=2
  