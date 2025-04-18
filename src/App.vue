<script setup>
import { useUserStore, useCounterStore } from '@/stores/'

const userStore = useUserStore()
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('Event ahsisisisi')">登录</el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>
    <hr />
    {{ counterStore.count }}
    <el-button @click="counterStore.increment()">Danger</el-button>
  </div>
</template>

<style scoped></style>
