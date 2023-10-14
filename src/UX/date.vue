<template>
  <VCalendar :attributes="attributes" class="calender"/>
</template>

<script setup>
import { ref } from 'vue';

const attributes = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);
</script>

<style scoped>
.calender{
  background-color: aqua;
}
</style>