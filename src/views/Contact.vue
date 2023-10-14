<template>
    <div class="card"> <br>
      <h1>Contact group member</h1> <br>
      <ul>
        <li v-for="(people, index) in member" :key="index">
            <p style="display: block; text-align: center;">{{ people.name }}</p>
            <a :href="people.FB"><img src="../assets/icon/Facebook_Logo.png"></a>
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
            name: "นาย คฑาทอง ธรรมวรากรกุล 6504101308",
            FB: "https://www.facebook.com/khatatong.thamwarakornkul",
          },
          {
            name: "นาย จักรพันธุ์ แฉล้มนงนุช 6504101311",
            FB: "https://www.facebook.com/chakkapun.chalamnongnuch",
          },
          {
            name: "นาย เจษฎา พรมโสภา 6504101314",
            FB: "https://www.facebook.com/profile.php?id=100006602448104",
          },
          {
            name: "นาย ชนะภัย วีระ 6504101316",
            FB: "https://www.facebook.com/Zeemilk3018",
          },
          {
            name: "นาย ติณณภพ จำปาทอง 6504101330",
            FB: "https://www.facebook.com/profile.php?id=100002846238221",
          },
          {
            name: "นายพูนศักดิ์ กันแก้ว 6504101367",
            FB: "https://www.facebook.com/profile.php?id=100010747273439",
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