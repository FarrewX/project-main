<script setup> // ยังใช้ไม่ได้
//import { CAlert } from '@coreui/vue';
</script>

<template>
  <CDateRangePicker
    label="Date range"
    locale="en-US"
    v-model:start-date="vStartDate"
    v-model:end-date="vEndDate" 
  />
  <div>
    {{ vStartDate && vStartDate.toLocaleDateString([], options) }}
    -
    {{ vEndDate && vEndDate.toLocaleDateString([], options) }}
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const vStartDate = ref(new Date(2022, 2, 1))
      const vEndDate = ref(new Date(2022, 2, 7))
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }
      return {
        vStartDate,
        vEndDate,
        options
      }
    }
  }
</script>