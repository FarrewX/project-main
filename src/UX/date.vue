<template>
  <TimezonePicker v-model="timezone" />
  <VDatePicker mode="dateTime" v-model.range="range" :timezone="timezone" />
  <!--  -->
</template>

<script setup>
import { ref, computed } from 'vue';

const timezone = ref('UTC');
const range = {
  start: Date(),
  end: Date(),
};

const dragValue = ref(null);
const selectDragAttribute = computed(() => ({
  popover: {
    visibility: 'hover',
    isInteractive: false,
  },
}));
</script>
