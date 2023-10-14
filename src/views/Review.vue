<template>
    <div>
    <div class="card">
      <h2>Review ให้แอพของเรา</h2> <br>
      <!-- แบบฟอร์มสำหรับเพิ่มรีวิวใหม่ -->
      <form @submit.prevent="addReview">
        <label for="rating">คะแนน: </label>
        <input
          type="number"
          id="rating"
          v-model="newReview.rating"
          min="1"
          max="5"
          style="width: 40px; background-color: #e7e6e6; color: #000000; border:#000000; padding: 5px;"
        />  
        <label for="comment" style="height: 20px;">&ensp;&ensp;ความคิดเห็น: </label>

        <textarea id="comment" v-model="newReview.comment"></textarea>
        <br />
        <button type="submit" class="btn buttonb">เพิ่มรีวิว</button>
      </form> <br>

      <div v-if="reviews.length === 0">
        <p>ยังไม่มีรีวิว</p>
      </div>
    

    <h3>คะแนนรีวิว</h3> <br>
    <div v-for="(review, index) in reviews" :key="index">
      <p style="display: block; text-align: center;">คะแนน: {{ review.rating }} ดาว</p>
      <p style="display: block; text-align: center;">ความคิดเห็น: {{ review.comment }}</p>
        <button 
          class="btn" 
          style="
            color:  #ffffff; 
            background-color: #239516;
            border: none;
            padding: 1px 1px;
            border-radius: 4px;
            cursor: pointer;
            " 
          @click="editReview(index)">แก้ไข
        </button>&ensp;&ensp;

        <button
          style="
            color:  #ffffff; 
            background-color:  #d8360d;
            border: none;
            padding: 1px 1px;
            border-radius: 4px;
            cursor: pointer;
            " 
            class="btn btn-outline-danger" 
          @click="deleteReview(index)">ลบ
        </button> <br> <br> <br>
      
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      reviews: JSON.parse(localStorage.getItem('reviews')) || [],
      newReview: {
        rating: 0,
        comment: '',
      },
      // เพิ่มตัวแปรเพื่อเก็บรีวิวที่กำลังแก้ไข
      editingReviewIndex: -1,
    };
  },
  methods: {
    addReview() {
      // เพิ่มรีวิวใหม่หรือแก้ไขรีวิวที่มีอยู่
      if (this.editingReviewIndex === -1) {
        this.reviews.push({ ...this.newReview });
      } else {
        this.reviews[this.editingReviewIndex] = { ...this.newReview };
        this.editingReviewIndex = -1; // รีเซ็ตเมื่อเสร็จแก้ไข
      }
      // รีเซ็ตค่าในฟอร์ม
      this.newReview.rating = 0;
      this.newReview.comment = '';
      // บันทึกรีวิวใหม่ลงใน Local Storage
      localStorage.setItem('reviews', JSON.stringify(this.reviews));
    },
    editReview(index) {
      // แก้ไขรีวิวที่เลือก
      this.newReview = { ...this.reviews[index] };
      this.editingReviewIndex = index;
    },
    deleteReview(index) {
      // ลบรีวิวที่เลือก
      this.reviews.splice(index, 1);
      // บันทึกรีวิวใหม่ลงใน Local Storage
      localStorage.setItem('reviews', JSON.stringify(this.reviews));
    },
  },
};
</script>

<style scoped>
.card {
display: block;
text-align: center;
align-items: center;
}

form {
background-color: #f7f7f7;
padding: 12px;
border-radius: 4px;
}

.buttonb {
background-color: #007bff;
color: #fff;
border: none;
padding: 8px 16px;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background-color: #0056b3;
}

input[type="number"] {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 4px;
}
</style>