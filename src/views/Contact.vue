<template>
    <div class="card"> <br>
      <h1>Contact member gruop</h1> <br>
      <ul>
        <li v-for="(people, index) in member" :key="index">
            <p>{{ people.name }}</p>
            <a :href="people.FB"> <img src="../assets/icon/Facebook_Logo.png" alt=""></a>
            <p></p><br> <br>
        </li>
      </ul>
    </div> 
  </template>
  
  <script>
  export default {
    data() {
      return {
        member: [
          {
            name: "1",
            FB: "https://www.youtube.com/",
          },
          {
            name: "2",
            FB: "https://www.youtube.com/",
          },
          {
            name: "3",
            FB: "https://www.youtube.com/",
          },
          {
            name: "4",
            FB: "https://www.youtube.com/",
          },
          {
            name: "5",
            FB: "https://www.youtube.com/",
          },
          {
            name: "6",
            FB: "https://www.youtube.com/",
          },
        ],
      };
    },
  };
  </script>

<style scoped>
.card {
display: block;
text-align: center;
}
img{
    height: 30px;
    width: 30px;
}
</style>