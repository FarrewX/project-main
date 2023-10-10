<template>
    <div>
      <!-- แสดงคอมเม้นที่ถูกเพิ่มเข้ามา -->
      <div v-for="(comment, index) in comments" :key="index">
        <Comment :comment="comment" />
      </div>
  
      <!-- แบบฟอร์มสำหรับเพิ่มคอมเม้น -->
      <form @submit.prevent="addComment">
        <textarea v-model="newComment.content" placeholder="เพิ่มคอมเม้น"></textarea>
        <button type="submit">ส่งคอมเม้น</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/database';
  
  export default {
    data() {
      return {
        comments: [], // เก็บคอมเม้นทั้งหมด
        newComment: {
          author: '', // ชื่อผู้เขียนคอมเม้น (สามารถใช้ Firebase Authentication)
          content: '', // เนื้อหาคอมเม้น
        },
      };
    },
    components: {
      Comment: () => import('../UX/comment.vue'), // นำเข้า component Comment
    },
    created() {
      // โหลดคอมเม้นจาก Firebase Realtime Database ที่นี่
      this.loadComments();
    },
    methods: {
      // โหลดคอมเม้นจาก Firebase Realtime Database
      loadComments() {
        // ใช้ Firebase Realtime Database API เพื่อโหลดคอมเม้นจากฐานข้อมูลของคุณ
        // โดยเรียกใช้ `this.comments.push(comment)` เมื่อคอมเม้นถูกโหลดสำเร็จ
      },
      // เพิ่มคอมเม้นใหม่ลง Firebase Realtime Database
      addComment() {
        if (!this.newComment.content) return;
  
        // สร้างข้อมูลคอมเม้นใหม่ใน Firebase Realtime Database
        const newCommentRef = firebase.database().ref('comments').push();
        newCommentRef.set({
          author: this.newComment.author || 'Anonymous',
          content: this.newComment.content,
        });
  
        // เคลียร์คอมเม้นใหม่
        this.newComment.content = '';
      },
    },
  };
  </script>
  