<template>

    <v-frappe-chart
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[
    { name: 'Week 1', values: [18, 40, 30, 35, 8, 52, 17, 4] },
    { name: 'Week 2', values: [30, 50, 10, 15, 18, 32, 27, 14] },
  ]"
  :line-options="{
    regionFill: 1, // default: 0
  }"
/>
</template>

<script>
    import { VFrappeChart } from "vue-frappe-chart"

export default {
  components: {
    VFrappeChart,
  },
}
</script>