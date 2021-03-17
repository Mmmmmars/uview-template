<template>
  <view class="home">
    <headerNav title="测试" :isBack="false"></headerNav>
    <view>Hello</view>
  </view>
</template>

<script>
import headerNav from "@/components/headerNav.vue";

export default {
  components: { headerNav },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
