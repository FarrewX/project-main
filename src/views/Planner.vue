<template>
  <div style="display: grid; justify-content: center; justify-items: center;">
    <Calendar />
  </div>
  <planner :placeName="placeNameChanged"/>
</template>

<script>
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import planner from '../components/Planning.vue'
import Map from '../components/Map.vue'
import Calendar from '../UX/date.vue';

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
    Calendar
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if (user) {
        this.$router.push("/login").catch(() => {});
      }
    });
  },
};
</script>