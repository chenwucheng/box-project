/*
Navicat MySQL Data Transfer

Source Server         : goodslist
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : quhecha

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-02-20 16:13:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `userName` varchar(255) CHARACTER SET latin1 NOT NULL,
  `id` varchar(255) NOT NULL,
  `imgurl` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `qty` int(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('$userName', '$id', '$imgURL', '阿萨德', '$price', '1');
INSERT INTO `car` VALUES ('13333333333', '1', '../img/listgoods1', '?????????50g*2????', '59.00', '1');
INSERT INTO `car` VALUES ('13333333333', '14', '../img/listgoods2', '???????????150g', '54.00', '1');
INSERT INTO `car` VALUES ('13333333333', '3', '../img/listgoods3', '?????????????112g*2', '99.00', '1');

-- ----------------------------
-- Table structure for listgoods
-- ----------------------------
DROP TABLE IF EXISTS `listgoods`;
CREATE TABLE `listgoods` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `priceed` varchar(255) DEFAULT NULL,
  `xl` int(8) DEFAULT NULL,
  `pl` int(8) DEFAULT NULL,
  `imgurl2` varchar(255) DEFAULT NULL,
  `imgurl3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listgoods
-- ----------------------------
INSERT INTO `listgoods` VALUES ('1', '../img/listgoods1', '【滋恩】隽永大红袍50g*2罐特惠装', '59.00', '176.00', '100', '34032', '../img/goods1', '../img/goods2');
INSERT INTO `listgoods` VALUES ('2', '../img/listgoods2', '【滋恩】精品特级大红袍150g', '78.00', '228.00', '99', '7439', '../img/goods3', '../img/goods4');
INSERT INTO `listgoods` VALUES ('10', '../img/listgoods2', '【滋恩】精品特级大红袍150g', '65.00', '228.00', '456', '6434', '../img/goods3', '../img/goods4');
INSERT INTO `listgoods` VALUES ('3', '../img/listgoods3', '【滋恩】香韵叶子系列铁盒装112g*2', '99.00', '464.00', '88', '11474', '../img/goods5', '../img/goods6');
INSERT INTO `listgoods` VALUES ('4', '../img/listgoods4', '【滋恩】特级大红袍牛皮纸袋装50g', '29.00', '46.00', '87', '500', '../img/goods7', '../img/goods8');
INSERT INTO `listgoods` VALUES ('5', '../img/listgoods1', '【滋恩】隽永大红袍50g*2罐特惠装', '30.00', '176.00', '123', '1321', '../img/goods1', '../img/goods2');
INSERT INTO `listgoods` VALUES ('6', '../img/listgoods2', '【滋恩】精品特级大红袍150g', '31.00', '228.00', '432', '1234', '../img/goods3', '../img/goods4');
INSERT INTO `listgoods` VALUES ('9', '../img/listgoods1', '【滋恩】隽永大红袍50g*2罐特惠装', '43.00', '176.00', '654', '45321', '../img/goods1', '../img/goods2');
INSERT INTO `listgoods` VALUES ('7', '../img/listgoods3', '【滋恩】香韵叶子系列铁盒装112g*2', '42.00', '464.00', '532', '8732', '../img/goods5', '../img/goods6');
INSERT INTO `listgoods` VALUES ('8', '../img/listgoods4', '【滋恩】特级大红袍牛皮纸袋装50g', '25.00', '46.00', '424', '5003', '../img/goods7', '../img/goods8');
INSERT INTO `listgoods` VALUES ('11', '../img/listgoods3', '【滋恩】香韵叶子系列铁盒装112g*2', '11.00', '464.00', '442', '53234', '../img/goods5', '../img/goods6');
INSERT INTO `listgoods` VALUES ('12', '../img/listgoods4', '【滋恩】特级大红袍牛皮纸袋装50g', '32.00', '46.00', '433', '4556', '../img/goods7', '../img/goods8');
INSERT INTO `listgoods` VALUES ('13', '../img/listgoods1', '【滋恩】隽永大红袍50g*2罐特惠装', '98.00', '176.00', '543', '5343', '../img/goods1', '../img/goods2');
INSERT INTO `listgoods` VALUES ('14', '../img/listgoods2', '【滋恩】精品特级大红袍150g', '54.00', '228.00', '632', '6313', '../img/goods3', '../img/goods4');
INSERT INTO `listgoods` VALUES ('15', '../img/listgoods3', '【滋恩】香韵叶子系列铁盒装112g*2', '33.00', '464.00', '542', '5423', '../img/goods5', '../img/goods6');
INSERT INTO `listgoods` VALUES ('16', '../img/listgoods4', '【滋恩】特级大红袍牛皮纸袋装50g', '77.00', '46.00', '564', '7423', '../img/goods7', '../img/goods8');

-- ----------------------------
-- Table structure for shouyegoods
-- ----------------------------
DROP TABLE IF EXISTS `shouyegoods`;
CREATE TABLE `shouyegoods` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `priceed` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouyegoods
-- ----------------------------
INSERT INTO `shouyegoods` VALUES ('1', 'img/index1.png', '一级碧螺春70kg', '45', '138.00');
INSERT INTO `shouyegoods` VALUES ('2', 'img/index2.png', '贵州绿明珠200g', '78', '95.00');
INSERT INTO `shouyegoods` VALUES ('3', 'img/index3.png', '特级茉莉花茶125g', '139', '398.00');
INSERT INTO `shouyegoods` VALUES ('4', 'img/index4.png', '一级黄山毛峰300kg', '78', '120.00');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `tel` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13550592342', '123456');
INSERT INTO `user` VALUES ('13550592343', '123456');
INSERT INTO `user` VALUES ('13550592344', '123456');
INSERT INTO `user` VALUES ('15555555555', '123456');
INSERT INTO `user` VALUES ('13111111111', '123456');
INSERT INTO `user` VALUES ('13333333333', '123456');
INSERT INTO `user` VALUES ('13455555555', '123456');
SET FOREIGN_KEY_CHECKS=1;
