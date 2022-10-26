import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',

  data() {
    return {
      username: localStorage.getItem('rememberUserId') === 'true' ? localStorage.getItem('userId') : '',
      password: '',
      valid: true,
      remember: localStorage.getItem('rememberUserId') === 'true',
      showPassword: false,
      visibility: false,
    }
  },

  mounted() {
    localStorage.removeItem('accessToken');
  },

  methods: {
    login() {
      const checkUserName = this.encrypt(this.username) === '¦D¶D¥D²D¨D­D';
      const checkPassword = this.encrypt(this.password) === 'uDtDtDwD';

      if(checkUserName && checkPassword) {

        // 아이디 기억하기 체크
        if (this.remember) {
          localStorage.setItem('rememberUserId', 'true');
          localStorage.setItem('userId', this.username);
        } else {
          localStorage.removeItem('rememberUserId');
        }
        localStorage.setItem('accessToken', '417db25912febf945bc5c687a05e0f8f.1666744747');

        this.$router.push('/');
      } else {
        this.valid = false;
      }
    },

    findPassword() {
      console.log('find password');
    },

    encrypt(theText: string) {
      // 임시 비밀번호 암호화
      let output = new String;
      const Temp = [] as number[];
      const Temp2 = [] as number[];
      const TextSize = theText.length;
      for (let i = 0; i < TextSize; i++) {
        const rnd = 68;
        Temp[i] = theText.charCodeAt(i) + rnd;
        Temp2[i] = rnd;
      }
      for (let i = 0; i < TextSize; i++) {
        output += String.fromCharCode(Temp[i], Temp2[i]);
      }
      return output;
    }
  }

});
