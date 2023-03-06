<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item
        v-if="!item[children] || item[children].length == 0"
        :index="item[index]"
      >
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item[index]">
        <template #title>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(item1, i) in item[children]" :key="i" :index="item1[index]">
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { menuItem } from "./types";

let props = defineProps({
  //数据结构不写死
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  defaultActive: {
    type: String,
    default: "",
  },
  router: {
    type: Boolean,
    default: false,
  },
  // 标题的键名
  name: {
    type: String,
    default: "name",
  },
  // 图标的键名
  icon: {
    type: String,
    default: "icon",
  },
  // 索引的键名
  index: {
    type: String,
    default: "index",
  },
  // 子菜单的键名
  children: {
    type: String,
    default: "children",
  },
});
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
  margin-right: 8px;
}
</style>
