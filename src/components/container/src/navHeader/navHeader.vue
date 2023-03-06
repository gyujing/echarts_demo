<template>
  <div class="header">
    <span @click="toggle" style="float: left">
      <el-icon-expand v-if="!collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  name: "nav-header",
};
</script>
<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();
let emits = defineEmits(["update:collapse"]);

let toggle = () => {
  // 需要修改父组件的数据
  //   console.log(!props.collapse)
  emits("update:collapse", !props.collapse);
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
}
</style>
