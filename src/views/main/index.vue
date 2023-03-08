<template>
  <t-layout class="layout">
    <t-header class="header">
      <t-head-menu value="item2">
        <template #logo >
          <img @click="Util.to('/main')" style="cursor: pointer;" width="48" src="http://volit.top/ccw_logo.png" alt="logo" />
          <h3 @click="Util.to('/main')" style="cursor: pointer;" class="header-title">创新创业实验室<span class="header-title-sub">招新</span>管理后台</h3>
        </template>
        <template #operations>
          <div class="header-user">
            <t-dropdown :onClick="optionClick" trigger="click" placement="bottom" :options="option">
                <t-avatar size="large"> V </t-avatar>
            </t-dropdown>
          </div>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout class="layout-sub">
      <t-menu theme="light" :value="slideOption" :collapsed="collapsed" style="height:100vh-64px">
        <t-menu-item value="0" @click="slideClick({value:'0',to:'/dashboard'})">
          <template #icon>
            <t-icon name="dashboard" />
          </template>
          仪表盘
        </t-menu-item>
        <t-menu-item value="1" @click="slideClick({value:'1',to:'/userList'})">
          <template #icon>
            <t-icon name="usergroup" />
          </template>
          新生管理
        </t-menu-item>
        <template #operations>
          <t-icon class="t-menu__operations-icon" :name="iconName" @click="changeCollapsed" />
        </template>
      </t-menu>
      <t-layout>
        <t-content class="content">
            <router-view/>
        </t-content>
        <t-footer class="footer">创新创业实验室</t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
import Util from '../../utils/util';
import { useRouter } from 'vue-router';


const collapsed = ref(false);
const iconName = computed(() => (collapsed.value ? 'chevron-right' : 'chevron-left'));
const router = useRouter();

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};
interface Side {
  value: string;
  to: string;
}
const slideOption = ref('0');
if(router.currentRoute.value.path === '/userList') {
  slideOption.value = '1';
}
watch(()=>Util.currentRoute().path,()=> {
  slideOption.value = (Util.currentRoute().path==='/'||Util.currentRoute().path==='/dashboard')?'0':'1';
})

const slideClick = (target:Side)=> {
  slideOption.value = target.value;
  Util.to(target.to);
}

const option = [
  { content: '退出登录', value: -1 }
];

const optionClick:Function = (item:any)=> {
  switch(item.value) {
    case -1: {
      MessagePlugin.warning('退出登录');
      exit();
      break;
    }
  }
}

const exit: Function = ():void=> {
  Util.to('/');
}
</script>

<style lang="less" scoped>
.layout {
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
.layout-sub {
  display: flex;
  flex-flow: row;
}
.header {
  padding: 0 40px;
  border-bottom: 1px solid var(--td-gray-color-3);
  &-title {
    margin-left: 5px;
    font-size: 18px;
    color: var(--td-font-gray-1);
    &-sub {
      margin: 0 5px;
      padding: 2px 8px;
      background: var(--color-theme);
      border-radius: 8px;
      color: #fff;
    }
  }
  &-user {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 64px;
    cursor: pointer;
    &-avatar {
      width: 42px;
      height: 42px;
      border: 2px solid var(--td-gray-color-3);
      border-radius: 50%;
    }
  }
}
.content {
  display: flex;
  flex-flow: column;
  gap: 15px;
  padding: 20px;
  padding-bottom: 0;
  &-card {
    width: 100%;
    height: 100%;
  }
}
.footer {
  padding: 10px;
  text-align: center;
}
</style>