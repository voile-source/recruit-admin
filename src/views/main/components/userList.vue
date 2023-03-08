<!--
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-15 15:02:24
 * @LastEditors: volit
 * @LastEditTime: 2022-12-16 19:42:00
-->
<template>
  <div style="display:flex;gap:20px;width: 40%;">
    <t-select v-model="classSelect" :onChange="searchByClass" size="large" placeholder="请选择班级">
      <t-option v-for="item in classData" :key="item.value" :value="item.value" :label="item.label"></t-option>  
    </t-select>
    <t-input v-model="searchText" :onEnter="searchByText" size="large" placeholder="请输入搜索内容,按下回车搜索" />
  </div>
  
  <ul class="user-list" >
    <li class="user-list-item user-list-item-header">
      <span>班级</span>
      <span>姓名</span>
      <span>学号</span>
      <span>性别</span>
      <span>生日</span>
      <span>电话号码</span>
      <span>刷题数</span>
      <span > 
        操作
      </span>
    </li>
    <li class="user-list-item" v-for="(item,index) in userList">
      <span>{{item.class}}</span>
      <span>{{item.name}}</span>
      <span>{{item.account}}</span>
      <span>{{item.gender===0?'男':'女'}}</span>
      <span>{{item.birthday==null?'暂未填写':item.birthday.slice(0,10)}}</span>
      <span>{{item.phone==null?'暂未填写':item.phone}}</span>
      <span>{{item.count==null?'暂未填写':item.count}}</span>
      <span class="user-button-box"> 
        <t-button size="medium" @click="Util.to('user',{id:index})">查看</t-button>
        <!-- <t-popconfirm :onConfirm="()=>{del(item);item.visible=false;}" theme="danger" content="确认删除吗">
          <t-button size="medium" theme="danger">删除</t-button>
        </t-popconfirm> -->
      </span>
    </li>
  </ul>
  <t-pagination :current="currentPage" :pageSize="pageSize" :total="totalSize" :onChange="onPageChange" :showPageSize="false" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import User from '../../../api/user';
import Util from '../../../utils/util';
import { MessagePlugin } from 'tdesign-vue-next';
import {useUserStore} from '../../../store/modules/user'
import {useRouter} from 'vue-router'

interface User {
  class: string,
  name: string,
  account: string,
  gender: number,
  phone: string,
  birthday: string,
  count: number,
  visible: boolean
}

const router = useRouter();
const store = useUserStore();
const userList:any = ref([]);
const currentText = computed( ()=>store.currentText);
const currentPage = computed( ()=>store.currentPage);
const pageSize = ref(8);
const totalSize = ref(0);
const searchText = ref('');
const classSelect = ref('');
const classData = [
  {label:'全部',value:''},
  {label:'2022级软件一班',value:'2022级软件一班'},
  {label:'2022级软件二班',value:'2022级软件二班'},
  {label:'2022级软件三班',value:'2022级软件三班'},
  {label:'2022级软件四班',value:'2022级软件四班'},
  {label:'2022级软件五班',value:'2022级软件五班'},
  {label:'2022级软件六班',value:'2022级软件六班'},
]

function init() {
  search({text:currentText.value,page:currentPage.value,size:pageSize.value}).then( (res:any)=> {
    if(res.total[0])totalSize.value = parseInt(res.total[0]['count(*)']);
    store.userList = res.data;
    userList.value = res.data;
    for(let item of userList.value) {
      item.visible = false;
    }
  })
}

let onPageChange = (context:any)=> {
  store.changePage(context.current);
  init();
}

const searchByClass = ()=> {
  store.changeCurrentText(classSelect.value);
  store.changePage(1);
  init();
}

const searchByText = ()=> {
  store.changeCurrentText(searchText.value);
  store.changePage(1);
  init();
}

const search = (params:object)=> {
  return User.search(params);
}

const del:Function = (target:User):void=> {
  MessagePlugin.success('删除成功');
  // User.del(target.account).then(res=> {
  //   MessagePlugin.success(res.message);
  // })
}
if(classData.some((item)=>item.label === currentText.value)) {
  classSelect.value = currentText.value;
} else {
  store.changeCurrentText('');
}
init();
</script>

<style lang="less" scoped>
.user-list {
  display: flex;
  flex-flow: column;
  gap: 15px;
  &-item {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 10px 40px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 18px;
    text-align: justify-all;
    span {
      flex: 1 1 auto;
      width: 100%;
      text-align: center;
    }
    &:first-child {
      height: 80px;
    }
    &-header {
      font-size: 22px;
      font-weight: 600;
      &:last-child {
        font-weight: 500;
      }
    }
  }
  // .user-button-box {
  //   display: flex;
  //   gap: 15px;
  // }
}
</style>