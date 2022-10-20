<template>
  <div class="grey lighten-4 back">
    <div class="text-center">
      <!-- <div class="page-title">404</div> -->
      <!-- <div style="font-size: 150px">🧘🏻‍♀️</div> -->
      <div style="font-size: 150px">🏊🏻‍♀️</div>
      <div class="body-1 mb-10">
        찾을 수 없는 페이지 입니다.<br>
      </div>
      <v-btn large color="primary" to="/">
        홈으로 이동
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>

<style lang="scss" scoped>
.back{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-title{
  font-size: 100px;
  letter-spacing: 7px;
  font-weight: 100;
}
</style>