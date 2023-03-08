<!--
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-14 23:21:46
 * @LastEditors: volit
 * @LastEditTime: 2022-12-14 17:11:14
-->
<template>
  <div class="login-wrapper">
    <div class="login-header">
      <img class="login-header-logo" src="http://volit.top/ccw_logo.png"/>
      <h3 class="login-header-title">创新创业实验室<span class="login-header-title-sub">招新</span>管理后台</h3>
    </div>
    <div class="login-container">
      <div class="login-title-container">
        <h1 class="login-container-title">登录到<br/>招新管理后台</h1>
        <span class="login-container-desc">登录管理后台</span>
      </div>
      <div class="ligin-form-container">
        <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
          <t-form-item name="account">
            <t-input v-model="formData.account" size="large" clearable placeholder="请输入账户名">
              <template #prefix-icon>
                <desktop-icon />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input v-model="formData.password" size="large" type="password" clearable placeholder="请输入密码">
              <template #prefix-icon>
                <lock-on-icon />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" size="large" type="submit" block>登录</t-button>
          </t-form-item>
        </t-form>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import { useUserStore } from '../../store/modules/user';
import Util from '../../utils/util'
import User from '../../api/user';
import md5 from 'js-md5';

const store:any = useUserStore();

const formData:any = reactive({
  account: '',
  password: '',
});
const onReset = () => {
  MessagePlugin.success('重置成功');
};

const onSubmit = () => {
    User.login({
      account:formData.account,
      password:md5(formData.password)
    }).then(res=> {
      store.user = res;
      MessagePlugin.success('登录成功');
      Util.to('/main');
    })
};

</script>

<style lang="less" scoped>
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background: url('https://tdesign.tencent.com/starter/vue-next/assets/assets-login-bg-white.439b0654.png') no-repeat center;
  background-size: cover;
}
.login-header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 40px;
  &-logo {
    width: 48px;
    height: 48px;
  }
  &-title {
    font-size: 20px;
    &-sub {
      margin: 0 5px;
      padding: 2px 8px;
      background: var(--color-theme);
      border-radius: 8px;
      color: #fff;
    }
  }
}
.login-container {
  display: flex;
  flex-flow: column;
  gap: 30px;
  position: absolute;
  top: 30vh;
  left: 5vw;
  width: 400px;
  .login-title-container {
    display: flex;
    flex-flow: column;
    gap: 10px;
  }
  &-title {
    font-size: 40px;
  }
  &-desc {
    color: var(--td-font-gray-2);
  }
}
</style>