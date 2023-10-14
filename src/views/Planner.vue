<template>
  <div id="app">
      <vue-inline-calendar @update:selected-date="selectedDate = $event" />
  </div>
  <div style="display: grid; justify-content: center; justify-items: center;">
  </div>
  <planner :placeName="placeNameChanged"/>
</template>

<script>
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import planner from '../components/Planning.vue'
import Map from '../components/Map.vue'
import { ref } from 'vue'
import VueInlineCalendar from 'vue-inline-calendar';
import "vue-inline-calendar/dist/style.css";

export default {
  name: "Plan",
  data() {
    return {
      placeName: '',
    };
  },
  components: {
    planner,
    Map,
    VueInlineCalendar,
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if (!user) {
        this.$router.push("/login").catch(() => {});
      }
    });
  },
  setup() {
    const selectedDate = ref(null);
    
    return {
        selectedDate
    }
  }
}
</script>