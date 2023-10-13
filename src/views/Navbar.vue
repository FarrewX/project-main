<template>
    <div class="nav">
        <div class="nav-iner">
            <div class="logo"><p>Travel Planed</p></div>           
            <div class="links">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/review">Reviews</RouterLink>
                <RouterLink to="/contect">Contact</RouterLink>
            </div>
            <RouterLink style="font-size: medium;" to="/planner">Planner</RouterLink>
            
        </div><br><RouterLink style="font-size: small;" v-if="islogin === true" @click="logout">Logout</RouterLink>
        <RouterLink style="font-size: small;" v-else to="/login" id="login">Login</RouterLink>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import './Login.vue'
import { getAuth, onAuthStateChanged, 
  signInWithEmailAndPassword, signOut } from "firebase/auth";
import '../assets/main.css'


const islogin = true;
export default {
  data() {
    return {

    };
  },
  methods: {
    async logout(event) {
      event.preventDefault();
      const auth = getAuth();
      await signOut(auth); // ล็อคเอ้าท์ผู้ใช้
      this.isLoggedIn = false; // อัปเดต isLoggedIn เป็น false
      this.$router.push("/").catch(() => {}); // ไปยังหน้าหลักหลังจากล็อคเอ้าท์
    }
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if (user) {
        this.$router.push("/").catch(() => {});
      }
    });
  },
};

</script>

<style scoped>

.nav .nav-iner {
    position: absolute ;
    left: 0;
    top: 0;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    color: red;
    padding: 40px 60px; 
}

.nav-iner .links RouterLink{
    font-weight: 400;
    font-size: 14px;
    color: black;
}

.nav-iner .links RouterLink:hover {
    border-color: black;
}

.nav .logo {
    position: relative;
    font-weight: 700;
    font-size: 2em;
}
</style>