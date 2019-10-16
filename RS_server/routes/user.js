// //引入express模块
// const express=require('express');
// //*****************引入连接池********************
// const pool=require('../pool.js');
// //创建路由器
// var router=express.Router();
// //添加路由
// //用户注册
// router.post('/register',function(req,res){
// 	var obj=req.body;
// 	var i=400;
// 	for (var key in obj)
// 	{
// 		i++;
// 		if(!obj[key]){
// 			res.send({code:i,msg:key+' required'});
// 			return;
// 		}
// 	}
// 	pool.query('INSERT INTO rs_register SET ?',[obj],function(err,result){
// 		if(err) throw err;
// 		res.send({code:200,msg:'register suc'});
// 	});
// });
// //用户登录
// router.post('/login',function(req,res){
// 	var obj=req.body;
// 	if (!obj.uname)
// 	{
// 		res.send({code:401,msg:'用户名为空'});
// 		return;
// 	}
// 	if (!obj.upwd)
// 	{
// 		res.send({code:402,msg:'密码为空'});
// 		return;
// 	}
// 	pool.query('SELECT * FROM rs_register WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
// 		console.log(result);
// 		if(err) throw err;
// 		if(result.length<=0){
// 			res.send({code:301,msg:'用户名或密码错误'});
// 		}else{
// 			res.send({code:200,msg:'登录成功'});
// 		}
// 	});
// });




// module.exports=router;










