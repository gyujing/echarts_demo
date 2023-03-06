<template>
  <el-container>
    <el-header>
      <!--v-model: 用update,emit子组件可修改父组件值 -->
      <nav-header v-model:collapse="isCollapse"></nav-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <nav-side :collapse="isCollapse"></nav-side>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavHeader from "./navHeader/navHeader.vue";
import NavSide from "./navSide/navSide.vue";

let isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  border-bottom: 1px solid lightgray;
}
</style>
