
/*
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-14 22:34:18
 * @LastEditors: volit
 * @LastEditTime: 2022-11-17 21:45:23
 */
import {request} from "../utils/request";


export default class Comment {

  static async send(comment:Object) {
    return request.post('/comment/send',comment);
  }

  static async list(account:string) {
    return request.get('/comment/list',{account});
  }

  static async del(id:number) {
    return request.put('/comment/del',{id});
  }
}