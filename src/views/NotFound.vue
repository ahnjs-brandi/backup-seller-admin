<template>
  <div class="grey lighten-4 back">
    <div class="text-center">
      <!-- <div class="page-title">404</div> -->
      <!-- <div style="font-size: 150px">π§π»ββοΈ</div> -->
      <div style="font-size: 150px">ππ»ββοΈ</div>
      <div class="body-1 mb-10">
        μ°Ύμ μ μλ νμ΄μ§ μλλ€.<br>
      </div>
      <v-btn large color="primary" to="/">
        νμΌλ‘ μ΄λ
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