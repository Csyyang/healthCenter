<template>
  <div class="v-date-time-picker">
    <van-popup :value="show" position="bottom" round :style="{ height: '45%' }" @click-overlay="close">
      <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate" @confirm="confirm" @cancel="close" />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 0, 17),
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("update:show", false);
    },
    confirm(time) {
      console.log(time);

      this.close();
    },
  },
};
</script>

<style>
</style>