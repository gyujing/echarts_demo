<template>
  <ai-menu :data="data" :defaultActive="$route.path" :router="true"></ai-menu>
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
        name: "柱形1",
        index: "/bar",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
