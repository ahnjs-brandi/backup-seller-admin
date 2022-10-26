<template>
  <div class="d-flex align-center justify-center bg-primary h-100">

    <div class="login-box">
      <!-- <v-img
        src="@/assets/logo_b.png"
        width="200"
        class="d-inline-block mr-3 mb-6"
      /> -->
      <div class="d-flex mb-6 align-center">
        <v-img
          src="@/assets/logo_b.png"
          width="200"
          class="d-inline-block flex-grow-0 ml-n1"
        />
        <div class="nanum text-h5" style="margin-top: 4px; opacity: .7;">셀러어드민</div>
      </div>

      <v-text-field
        v-model.trim="username"
        placeholder="아이디"
        variant="solo"
        density="compact"
        :autofocus="$vuetify.display.mdAndUp"
        @keydown.enter="login"
        @input="valid = true"
      />

      <v-text-field
        v-model.trim="password"
        variant="solo"
        placeholder="비밀번호"
        density="compact"
        :type="visibility ? '' : 'password'"
        :append-inner-icon="visibility ? 'visibility_off' : 'visibility'"
        @click:append-inner="visibility = !visibility"
        @keydown.enter="login"
        @input="valid = true"
      />

      <v-fade-transition hide-on-leave>
        <v-alert
          v-if="!valid"
          type="error"
          density="compact"
          variant="outlined"
          class="mb-5"
        >
          아이디 패스워드가 맞지 않습니다.
        </v-alert>
      </v-fade-transition>

      <v-btn
        color="secondary"
        width="100%"
        size="large"
        @click="login"
      >
        로그인
      </v-btn>

      <div class="d-flex align-center login-bottom">
        <v-checkbox
          v-model="remember"
          label="아이디/비밀번호 저장"
          class="mt-2"
          density="compact"
          hide-details
        />
        <v-spacer />
        <v-btn
          variant="text"
          size="x-small"
          class="find-password"
          @click="findPassword"
        >
          비밀번호 찾기
        </v-btn>
      </div>

      <v-btn
        variant="outlined"
        class="w-100 mt-12"
        style="opacity: .5"
      >
        브랜디 입점문의
      </v-btn>
    </div>

  </div>
</template>

<script lang="ts" src="./Login.ts" />

<style lang="scss">
  .login-box {
    width: 100%;
    padding: 0 24px;
    text-align: center;
    max-width: 360px;
  }
  .login-bottom {
    .v-checkbox .v-selection-control {
        font-size: 14px;
    }
    .v-selection-control--inline .v-label{
      font-size: 14px;
      margin-left: 2px;
    }
  }
  .find-password {
    margin-top: 8px;
    font-size: 14px;
    letter-spacing: 0;
    opacity: .6;
  }
</style>