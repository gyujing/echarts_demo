<template>
  <div class="side_wrap">
    <ai-menu :data="data" :defaultActive="$route.path" :router="true"></ai-menu>
  </div>
</template>
<script lang="ts">
export default {
  name: "nav-side",
};
</script>
<script lang="ts" setup>
let data = [
  {
    name: "柱形图",
    children: [
      {
        name: "示例一",
        index: "/bar",
      },
    ],
  },
  {
    name: "折线图",
    children: [
      {
        name: "示例一",
        index: "/line1",
      },
    ],
  },
  {
    name: "饼图",
    children: [
      {
        name: "示例一",
        index: "/pie1",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.side_wrap {
  width: 200px;
  height: 100%;
}
</style>
