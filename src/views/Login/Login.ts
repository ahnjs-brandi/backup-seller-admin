import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',

  data() {
    return {
      username: '',
      password: '',
      remember: false,
      showPassword: false,
      visibility: false,
    }
  },

  methods: {
    login() {
      this.$router.push('/');
    },
    findPassword() {
      console.log('find password');
    }
  }

});
