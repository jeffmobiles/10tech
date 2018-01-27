/**
 * @author: jeff
 * @date: 2018-01-27
 * @description: 用户的所有相关信息.
 * 1.注册, 2.登录, 3.找回密码, 4.个人信息.
 */

 export const account = {
   reg(req, res, next) {
    res.contentType = 'json';
   },
   
   login(req, res, next) {
    res.contentType = 'json'; 
    
   },

 }