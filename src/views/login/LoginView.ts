import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginView',

  data: () => ({
    username: '',
    password: '',
    remember: false,
    showPassword: false,
    visibility: false,
  }),

  methods: {
    login() {
      this.$router.push('/');
    },
    findPassword() {
      console.log('find password');
    }
  }

});
