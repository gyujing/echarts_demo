<template>
  <el-container>
    <el-container>
      <el-aside width="200">
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
