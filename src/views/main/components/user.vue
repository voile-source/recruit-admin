<!--
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-15 17:37:20
 * @LastEditors: volit
 * @LastEditTime: 2022-12-17 20:06:05
-->
<template>
  <div class="user-container">
    <h1 class="user-title">个人资料</h1>
    <div class="user-content">
      <img class="user-avatar" :src="user.avatar?user.avatar:'https://volit.oss-cn-guangzhou.aliyuncs.com/image/202211292106979.webp'"/>
      <div class="user-wrap">
        <div class="user-divider">
          <span>姓名：{{user.name}}</span>
          <span>班级：{{user.class}}</span>
        </div>
        <div class="user-divider">
          <span>性别：{{user.gender=='0'?'男':'女'}}</span>
          <span>生日：{{user.birthday==null?'暂未填写':user.birthday.slice(0,10)}}</span>
        </div>
        <div class="user-divider">
          <span>电话：{{user.phone}}</span>
          <span>刷题：{{user.count}}</span>
        </div>    
      </div>
      <t-button size="large" style="position:absolute;top:40px;left:80px;width: 120px;" @click="Util.return"><span style="display:flex;align-items:center;gap: 5px;"><t-icon name="chevron-left-circle"/><span>返回</span></span></t-button>
      <t-button size="large" @click="Util.to('result',{id:user.account})" theme="warning" style="position:absolute;top:40px;right:80px;"><span style="display:flex;align-items:center;gap: 5px;"><t-icon name="browse"/><span>查看心理测试结果</span></span></t-button>
    </div>
    <h2 class="user-title-sub">自我评价</h2>
    <div class="user-content">
      <span class="user-desc">{{user.assessment}}</span>
    </div>
    <h2 class="user-title-sub">为什么想加入实验室？</h2>
    <div class="user-content">
      <span class="user-desc">{{user.evaluate}}</span>
    </div>
    <h2 class="user-title-sub">今后的规划/进入实验室之后的规划</h2>
    <div class="user-content">
      <span class="user-desc">{{user.plan}}</span>
    </div>
    <!-- <div class="btn-box">
      <button class="btn btn-success">可</button>
      <button class="btn btn-error">不可</button>
    </div> -->
  </div>
  <div class="user-container">
    <h1 class="user-title">评价</h1>
    <t-input v-model="commentContent" @enter="sendComment()" size="large"  placeholder="按下回车上传评价"/>
    <t-list :split="true">
    <t-list-item v-for="(item, index) in commentList" :key="index">
      <template #content>
        <t-comment :avatar="item.avatar" :author="item.sender" :content="item.content">
          <!-- <template #actions>
            <t-space key="thumbUp" :size="6">
              <t-icon name="thumb-up" />
              <span>6</span>
            </t-space>
            <t-space key="chat" :size="6">
              <t-icon name="chat" />
              <span>回复</span>
            </t-space>
          </template> -->
        </t-comment>
      </template>
    </t-list-item>
  </t-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Util from '../../../utils/util';
import Comment from '../../../api/comment'
import { useUserStore } from '../../../store/modules/user';
import { MessagePlugin } from 'tdesign-vue-next';

const store:any = useUserStore();
const userID:any = Util.query();
const user:any = (store.userList[userID.id]);
const commentContent = ref('');
const commentList:any = ref([]);

Comment.list(user.account).then(res=> {
  commentList.value = res;
})

const sendComment = (father:number =-1)=> {
  if(commentContent.value === '') {
    MessagePlugin.error({ content: '请输入评论内容' })
    return;
  }
  commentList.value.push({
    sender: store.user.username,
    receiver: user.account,
    content: commentContent.value,
    avatar: store.user.avatar,
    father
  })
  Comment.send({
    sender: store.user.username,
    receiver: user.account,
    content: commentContent.value,
    avatar: store.user.avatar,
    father
  }).then( res=> {
    commentContent.value = '';
  })
}
</script>

<style lang="less" scoped>
.user-container {
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  gap: 50px;
  position: relative;
  width: 100%;
  padding: 5vh 20vw;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  .user-title {
    margin-top: 5vw;
    font-size: 36px;
    text-align: center;
  }
  .user-divider {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-size: 22px;
    color: var(--td-font-gray-1);
    span {
      flex: 1 1 auto;
      width: 100%;
    }
  }
  .user-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .user-desc {
    font-size: 24px;
    // text-indent: 48px;
    line-height: 32px;
    text-align: justify;
  }
  .user-wrap {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    gap: 32px;
    width: 100%;
  }
  .user-avatar {
    width: 148px;
    height: 180px;
    border-radius: 4px;
    margin-right: 5vw;
  }
}

.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  .btn {
    width: 10vw;
    padding: 10px 24px;
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    transition: all .25s ease;
    cursor: pointer;
  }
  .btn-success {
    background: var(--td-success-color);
    &:hover{
      background: var(--td-success-color-4);
    }
    &:active {
      background: var(--td-success-color-8);
    }
  }
  .btn-error {
    background: var(--td-error-color);
    &:hover {
      background: var(--td-error-color-4);
    }
    &:active {
      background: var(--td-error-color-8);
    }
  }
}
</style>