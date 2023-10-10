<template>
  <div id="app">
    <task :tasks="tasks" @update:tasks="updateTasks"></task>
  <NavBar />

  </div>
  <RouterView />
  
</template>

<script>
import { RouterView } from "vue-router";
import about from './views/AboutView.vue'
import NavBar from './views/Navbar.vue'

export default {
  name: "App",
  components: {
    RouterView,
    about,
    NavBar,
},
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Book a flight",
          completed: true,
        },
        {
          id: 2,
          title: "Pack personal things",
          completed: true,
        },
        {
          id: 3,
          title: "Find a hotel",
          completed: false,
        },
        {
          id: 4,
          title: "Bla bla",
          completed: false,
        },
        {
          id: 5,
          title: "Posting pictures online",
          completed: false,
        },
      ],
    };
  },
  methods: {
    updateTasks(newTasks) {
      this.tasks = newTasks;
    },
  },
};
</script>