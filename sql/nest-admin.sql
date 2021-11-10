/*
 Navicat Premium Data Transfer

 Source Server         : nest-admin
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : xka.start6.cn:3306
 Source Schema         : nest-admin

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 08/03/2021 20:02:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `parent_id` int(11) NOT NULL COMMENT '父级id',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '部门名称',
  `order_num` int(11) NOT NULL COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '部门管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (1, '2021-02-01 10:29:23.047391', '2021-02-12 20:13:42.000000', NULL, 0, '测试12', 0);

-- ----------------------------
-- Table structure for sys_dict
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '字典名称',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `serial_number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '字典编号',
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dict
-- ----------------------------
INSERT INTO `sys_dict` VALUES ('测试哈123', 1, '2021-02-01 11:42:35.279284', '2021-02-01 11:42:35.293433', NULL, '', '');
INSERT INTO `sys_dict` VALUES ('测试', 2, '2021-02-01 11:42:35.279284', '2021-02-01 11:42:35.293433', NULL, '', '');

-- ----------------------------
-- Table structure for sys_dict_item
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_item`;
CREATE TABLE `sys_dict_item`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `label` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `value` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '数据值',
  `dict_id` int(11) NOT NULL COMMENT '字典id',
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dict_item
-- ----------------------------
INSERT INTO `sys_dict_item` VALUES (1, '2021-02-01 12:00:29.750343', '2021-02-01 12:00:29.766431', NULL, '', '', 0, '');
INSERT INTO `sys_dict_item` VALUES (2, '2021-02-01 12:00:29.750343', '2021-02-01 12:00:29.766431', NULL, '', '', 0, '');

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `order_num` int(11) NOT NULL COMMENT '排序',
  `path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '路径',
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组件地址',
  `redirect` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '重定向地址',
  `icon` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图标',
  `hidden` tinyint(4) NULL DEFAULT NULL COMMENT '是否隐藏',
  `is_home` tinyint(4) NULL DEFAULT NULL COMMENT '是否首页',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `parent_id` int(11) NOT NULL COMMENT '父级id',
  `title` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单名称',
  `type` tinyint(4) NOT NULL COMMENT '菜单类型： 1. 目录 2. 菜单  3. 按钮',
  `perms` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (0, '/sys', '/sys/home/home', NULL, NULL, 0, 0, 29, '2021-02-25 22:31:25.872087', '2021-02-28 18:32:22.073318', NULL, 0, '系统管理', 1, NULL, 'sys');
INSERT INTO `sys_menu` VALUES (0, '/user', '/sys/user/user', NULL, NULL, 0, 0, 30, '2021-02-25 22:32:37.867140', '2021-02-28 18:32:56.336096', NULL, 29, '用户管理', 2, NULL, 'user');
INSERT INTO `sys_menu` VALUES (1, '/role', '/sys/role/role', NULL, NULL, 0, 0, 31, '2021-02-25 22:33:29.546452', '2021-02-28 18:33:01.102385', NULL, 29, '角色管理', 2, NULL, 'role');
INSERT INTO `sys_menu` VALUES (2, '/dept', '/sys/dept/dept', NULL, NULL, 0, 0, 32, '2021-02-25 22:34:01.399211', '2021-02-28 18:33:05.285368', NULL, 29, '部门管理', 2, NULL, 'dept');
INSERT INTO `sys_menu` VALUES (3, '/menu', '/sys/menu/menu', NULL, NULL, 0, 0, 33, '2021-02-25 22:34:58.667788', '2021-02-28 18:33:09.271637', NULL, 29, '菜单管理', 2, NULL, 'menu');
INSERT INTO `sys_menu` VALUES (4, '/dict', NULL, NULL, NULL, 0, 0, 34, '2021-02-25 22:35:27.835546', '2021-02-28 11:19:04.127233', NULL, 29, '字典管理', 2, NULL, 'dict');

-- ----------------------------
-- Table structure for sys_oss
-- ----------------------------
DROP TABLE IF EXISTS `sys_oss`;
CREATE TABLE `sys_oss`  (
  `id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '图片等url链接',
  `location` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件存放位置，暂存本地服务器，不采用云 oss',
  `created_at` int(11) NOT NULL COMMENT '创建时间',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件类型',
  `size` int(11) NOT NULL COMMENT '文件大小 size',
  `old_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '原文件名称',
  `updated_at` int(11) NOT NULL,
  `deleted_at` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_oss
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `remark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色备注',
  `role_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('超级管理员', 'admin', 1, '2021-02-01 09:50:56.023930', '2021-02-01 09:50:56.040739', NULL);
INSERT INTO `sys_role` VALUES ('测试', 'test', 4, '2021-02-14 12:03:50.147091', '2021-02-14 12:03:50.147091', NULL);

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept`  (
  `id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色ID',
  `dept_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '部门ID',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `deleted_at` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色与部门对应关系' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `menu_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色与菜单对应关系' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO `sys_role_menu` VALUES (43, '2021-02-25 22:39:27.374252', '2021-02-25 22:39:27.374252', NULL, 4, '29,30,31,32,33,34');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '账户',
  `nick_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '昵称',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `dept_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '部门id',
  `phone_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `status` tinyint(4) NOT NULL COMMENT '所属状态是否有效  1是有效 0是失效',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `pass_word` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('test', '5555', NULL, '1', NULL, 1, NULL, 10, '2021-02-12 20:43:59.705439', '2021-02-24 22:04:05.579504', NULL, '0a863f33d51963210eb70dc2e94288b337645f64ed985da0ac2e308b214d94b7');
INSERT INTO `sys_user` VALUES ('admin', '超级管理员', NULL, '1', NULL, 1, NULL, 11, '2021-02-14 15:45:15.196038', '2021-02-14 15:45:15.196038', NULL, 'd45b3743c6f4545db5fed422aeb1845b86828b7504ed9d69c8430920784465b4');

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `deleted_at` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  `user_id` int(11) NOT NULL COMMENT '角色id',
  `role_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户与角色对应关系' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (11, '2021-02-25 22:52:28.747958', '2021-02-25 22:52:28.747958', NULL, 11, '4');
INSERT INTO `sys_user_role` VALUES (12, '2021-02-25 22:52:32.366553', '2021-02-25 22:52:32.366553', NULL, 10, '4');

SET FOREIGN_KEY_CHECKS = 1;
