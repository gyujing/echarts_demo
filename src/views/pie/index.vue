<template>
  <div class="main_wrao">
    <div class="item_flex">
      <Pie1></Pie1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Pie1 from "./pie1.vue";
</script>

<style lang="scss" scoped>
.main_wrao {
  display: flex;
  flex-direction: row;
  .item_flex： {
    flex: 0 0 59%;
  }
}
</style>
