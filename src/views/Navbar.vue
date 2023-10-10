<template>
    <div class="nav">
        <div class="nav-iner">
            <div class="logo"><p>Travel Planed</p></div>
            <div class="links">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/review">Reviews</RouterLink>
                <RouterLink to="/contect">Contect</RouterLink>
            </div>
            <RouterLink style="font-size: medium;" to="/app">Planing</RouterLink>
            
        </div><br><RouterLink style="font-size: small;" to="/login">Login</RouterLink>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style>

.nav .nav-iner {
    position: fixed;
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