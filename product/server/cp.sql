/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50516
Source Host           : localhost:3306
Source Database       : cp

Target Server Type    : MYSQL
Target Server Version : 50516
File Encoding         : 65001

Date: 2018-02-05 14:53:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for event
-- ----------------------------
DROP TABLE IF EXISTS `event`;
CREATE TABLE `event` (
  `id` int(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `address` varchar(280) DEFAULT NULL,
  `title` varchar(280) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `key` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(16) DEFAULT NULL,
  `password` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
