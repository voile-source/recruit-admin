<!--
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-15 15:02:18
 * @LastEditors: volit
 * @LastEditTime: 2022-12-14 16:49:42
-->
<template>
  <div class="base-data-container">
    <t-card bordered class="base-data-card">
      <div class="data-card-container">
        <span class="data-card-container-title">总报名人数</span>
        <span class="data-card-container-data">{{total}}人</span>
      </div>
      
    </t-card>
  </div>
</template>

<script setup lang="ts">
import User from '../../../api/user';
import { ref } from 'vue';

const total = ref(0);

User.total().then((res:any) => {
  total.value = (res[0]['count(*)']);
})

</script>

<style lang="less" scoped>

.base-data-container {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  .base-data-card {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .data-card-container {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 2vh 0;
      &-title {
        font-size: 18px;
        color: var(--td-font-gray-2);
      }
      &-data {
        font-size: 44px;
      }
    }
  }
}

</style>