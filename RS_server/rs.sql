SET NAMES UTF8;
DROP DATABASE IF EXISTS rs;
CREATE DATABASE rs CHARSET=UTF8;
USE rs;

/**用户注册**/
CREATE TABLE rs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) UNIQUE,
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(11),
  gender BOOLEAN
);

/**添加用户**/
INSERT INTO rs_user VALUES(null,'xiaoming',md5('123456'),'xiaoming@163.com','18212345678',1);
INSERT INTO rs_user VALUES(null,'xiaohong',md5('123456'),'xiaohong@163.com','18312345678',0);
INSERT INTO rs_user VALUES(null,'xiaozhang',md5('123456'),'xiaozhang@163.com','18412345678',1);
INSERT INTO rs_user VALUES(null,'xiaoli',md5('123456'),'xiaoli@163.com','18512345678',1);

/**歌曲列表**/
CREATE TABLE rs_music(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  mname VARCHAR(32),
  singer VARCHAR(8),
  murl VARCHAR(64),
  mhot VARCHAR(16),
  morigin VARCHAR(64)
);

/**添加歌曲**/
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');
INSERT INTO rs_music VALUES(null,'小幸运','田馥甄','01.png','246%','《我的少女时代》电影主题曲');