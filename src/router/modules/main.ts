/*
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-15 15:01:20
 * @LastEditors: volit
 * @LastEditTime: 2022-11-20 00:22:08
 */
export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/main/components/user.vue'),
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/main/components/result.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/main/components/dashboard.vue'),
  },
  {
    path: '/userList',
    name: 'userList',
    component: () => import('@/views/main/components/userList.vue'),
  },
];