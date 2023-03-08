<!--
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-15 20:35:23
 * @LastEditors: volit
 * @LastEditTime: 2022-12-16 19:43:35
-->
<template>
  <div class="result">
    <div class="result-container" v-if="load">
      <t-button style="width:120px;font-size:16px;" size="large" @click="Util.return"><span style="display:flex;align-items:center;gap: 5px;"><t-icon name="chevron-left-circle"/><span>返回</span></span></t-button>
      <div class="result-item">
        <span class="result-title">第一项测试 情商</span>
        <span class="result-desc">得分：{{resultData[0].result}}</span>
        <span class="result-desc">描述：{{resultData[0].desc}}</span>
      </div>
      <div class="result-item">
        <span class="result-title">第二项测试 症状自评量表SCL90</span>
        <div class="result-tabs">
          <span class="result-tab">无</span>
          <span class="result-tab">轻</span>
          <span class="result-tab">中</span>
          <span class="result-tab">重</span>
          <span class="result-tab">严重</span>
        </div>
        <table class="result-table">
          <tr class="result-table-row">
            <!-- <th>总分</th>
            <th>总均分</th>
            <th>阴性项目数</th>
            <th>阳性项目数</th>
            <th>阳性项目均分</th> -->
            <th class="result-table-th">躯体化</th>
            <th class="result-table-th">强迫症状</th>
            <th class="result-table-th">人际关系</th>
            <th class="result-table-th">抑郁</th>
            <th class="result-table-th">焦虑</th>
            <th class="result-table-th">敌对</th>
            <th class="result-table-th">恐怖</th>
            <th class="result-table-th">偏执</th>
            <th class="result-table-th">精神病性</th>
            <th class="result-table-th">其他</th>
          </tr>
          <tr>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[5] <1.5),'level4':(resultData[1].result[5] <2.5),'level3':(resultData[1].result[5] <3.5),'level2':(resultData[1].result[5] <4.5),'level1':(resultData[1].result[5] >4.5)}">{{resultData[0]?resultData[1].result[5]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[6] <1.5),'level4':(resultData[1].result[6] <2.5),'level3':(resultData[1].result[6] <3.5),'level2':(resultData[1].result[6] <4.5),'level1':(resultData[1].result[6] >4.5)}">{{resultData[0]?resultData[1].result[6]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[7] <1.5),'level4':(resultData[1].result[7] <2.5),'level3':(resultData[1].result[7] <3.5),'level2':(resultData[1].result[7] <4.5),'level1':(resultData[1].result[7] >4.5)}">{{resultData[0]?resultData[1].result[7]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[8] <1.5),'level4':(resultData[1].result[8] <2.5),'level3':(resultData[1].result[8] <3.5),'level2':(resultData[1].result[8] <4.5),'level1':(resultData[1].result[8] >4.5)}">{{resultData[0]?resultData[1].result[8]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[9] <1.5),'level4':(resultData[1].result[9] <2.5),'level3':(resultData[1].result[9] <3.5),'level2':(resultData[1].result[9] <4.5),'level1':(resultData[1].result[9] >4.5)}">{{resultData[0]?resultData[1].result[9]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[10]<1.5),'level4':(resultData[1].result[10]<2.5),'level3':(resultData[1].result[10]<3.5),'level2':(resultData[1].result[10]<4.5),'level1':(resultData[1].result[10]>4.5)}">{{resultData[0]?resultData[1].result[10]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[11]<1.5),'level4':(resultData[1].result[11]<2.5),'level3':(resultData[1].result[11]<3.5),'level2':(resultData[1].result[11]<4.5),'level1':(resultData[1].result[11]>4.5)}">{{resultData[0]?resultData[1].result[11]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[12]<1.5),'level4':(resultData[1].result[12]<2.5),'level3':(resultData[1].result[12]<3.5),'level2':(resultData[1].result[12]<4.5),'level1':(resultData[1].result[12]>4.5)}">{{resultData[0]?resultData[1].result[12]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[13]<1.5),'level4':(resultData[1].result[13]<2.5),'level3':(resultData[1].result[13]<3.5),'level2':(resultData[1].result[13]<4.5),'level1':(resultData[1].result[13]>4.5)}">{{resultData[0]?resultData[1].result[13]:''}}</td>
            <td :class="{'result-table-td':true,'level5':(resultData[1].result[14]<1.5),'level4':(resultData[1].result[14]<2.5),'level3':(resultData[1].result[14]<3.5),'level2':(resultData[1].result[14]<4.5),'level1':(resultData[1].result[14]>4.5)}">{{resultData[0]?resultData[1].result[14]:''}}</td>
          </tr>
        </table>
      </div>
      <div class="result-item">
        <span class="result-title">第三项测试 MBTI十六型人格</span>
        <span class="result-desc" style="font-size: 32px;font-weight: 600;color: var(--color-theme);margin-bottom: 15px;">{{resultData[2].result}}  {{MBTIData[resultData[2].result].title}}</span>
        <span class="result-desc">描述：{{MBTIData[resultData[2].result].desc}}</span>
      </div>
      <div class="result-item">
        <span class="result-title">第四项测试 EQ</span>
        <span class="result-desc">结果：{{resultData[3].result}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, Ref } from 'vue';
import User from '../../../api/user'
import Util from '../../../utils/util';
import { useRouter } from 'vue-router';

const router = useRouter();
const UserID:any = router.currentRoute.value.query.id;
const resultData:any = ref([]);
const MBTIData:any = {
  ISTJ: {
    title: '检查员',
    desc: '细致、谨慎的执行好现有规则'
  },
  ESTJ: {
    title: '管家型',
    desc: '掌控当下，让各种事务有条不紊的进行'
  },
  ISFJ: {
    title: '照顾者型',
    desc: '值得信赖和依靠'
  },
  ESFJ: {
    title: '主人型',
    desc: '热情主动的帮别人把事情做好'
  },
  ISTP: {
    title: '冒险家型',
    desc: '平静的思考着，但间或的行为往往出人意料'
  },
  ESTP: {
    title: '挑战者型',
    desc: '不间断的尝试新的挑战'
  },
  ISFP: {
    title: '艺术家型',
    desc: '用有形的作品展示丰富的内心世界'
  },
  ESFP: {
    title: '表演者型',
    desc: '有我在就有笑声'
  },
  INFP: {
    title: '哲学家型',
    desc: '生活在自己的理想世界'
  },
  ENFP: {
    title: '公关型',
    desc: '天下没有不可能的事'
  },
  INFJ: {
    title: '博爱型',
    desc: '基于博爱的理想，设身处地的关怀他'
  },
  ENFJ: {
    title: '教导型',
    desc: '谆谆善诱的引导他人'
  },
  INTP: {
    title: '学者型',
    desc: '聪颖机智的解决问题'
  },
  ENTP: {
    title: '智多星型',
    desc: '总有一些新点子'
  },
  INTJ: {
    title: '专家型',
    desc: '追求能力与独立'
  },
  ENTJ: {
    title: '统帅CEO型',
    desc: '一切尽在掌握'
  },
}
const load = ref(false);
User.getResult(UserID).then((res:any)=> {
  
  res[1].result = res[1].result.split(',');
  resultData.value = res;
  console.log(resultData.value);
  load.value = true;
})
</script>

<style lang="less" scoped>
.result-container {
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  gap: 50px;
  padding: 40px 80px;
  background: #fff;
  border-radius: 10px;  
}
.result-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}
.result-item {
  display: flex;
  flex-flow: column;
  // gap: 12px
  .result-desc {
    font-size: 20px;
    color: var(--td-font-gray-2);
  }
}

.result-table {
  width: 100%;
  // border-collapse:collapse;
  // border: 1px solid var(--td-gray-color-4);
  border-spacing: 0;
  border-radius: 10px;
  &-th {
    border: 1px solid var(--td-gray-color-4);
    border-left: 0;
    font-size: 18px;
    padding: 10px 0;
    &:first-child {
      border-left: 1px solid var(--td-gray-color-4);
      border-top-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
    }
  }
  &-td {
    border-bottom: 1px solid var(--td-gray-color-4);
    border-right: 1px solid var(--td-gray-color-4);
    border-top: 0;
    font-size: 18px;
    text-align: center;
    padding: 10px 0;
    &:first-child {
      border-left: 1px solid var(--td-gray-color-4);
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-bottom-right-radius: 10px;
    }
  }
  .level1 {
    color: #82111f;
  }
  .level2 {
    color: #f03752;
  }
  .level3 {
    color: #fbb957;
  }
  .level4 {
    color: #5bae23;
  }
  .level5 {
    color: #b7d07a;
  }
}
.result-tabs {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  margin-bottom: 15px;
  .result-tab {
    color: #fff;
    &:nth-child(1) {
      padding: 2px 10px;
      background: #b7d07aaf;
      border-radius: 4px;
    }
    &:nth-child(2) {
      padding: 2px 10px;
      background: #5bae23af;
      border-radius: 4px;
    }
    &:nth-child(3) {
      padding: 2px 10px;
      background: #fbb957af;
      border-radius: 4px;
    }
    &:nth-child(4) {
      padding: 2px 10px;
      background: #f03752af;
      border-radius: 4px;
    }
    &:nth-child(5) {
      padding: 2px 10px;
      background: #82111faf;
      border-radius: 4px;
    }
  }
}
</style>