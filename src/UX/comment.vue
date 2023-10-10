<template>
    <div class="comment">
      <div class="comment-author">{{ comment.author }}</div>
      <div class="comment-content">{{ comment.content }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      comment: Object,
    },
  };
  </script>
  
  <style scoped>
  .comment {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .comment-author {
    font-weight: bold;
  }
  
  .comment-content {
    margin-top: 5px;
  }
  </style>
  