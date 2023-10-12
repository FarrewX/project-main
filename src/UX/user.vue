<template>
    <p>ชื่อ {{ name }}</p>
    <p>{{ updateProfile.len }}</p>
</template>

<script>
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";


const name = updateProfile().displayName
</script>
