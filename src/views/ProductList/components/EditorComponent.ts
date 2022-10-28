import { defineComponent } from 'vue';
import { quillEditor, Quill } from 'vue3-quill';

import MockData from '@/mock-data/mock-product-content'; // 임시 상세정보 html

// 에디터 폰트 세팅
const Font = Quill.import('formats/font');
Font.whitelist = ['NotoSansKR', 'NanumSquare', 'NotoSerifKR'];
Quill.register(Font, true);

export default defineComponent({
  name: 'EditorComponent',

  components: {
    quillEditor
  },

  data() {
    return {
      content: '',
      settings: this.$store.getters.productSettings,
      fold: true,
      mode: 'editor',
      editorOption: {
        placeholder: '내용을 입력해 주세요',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: ['NotoSansKR', 'NanumSquare', 'NotoSerifKR'] }],
            ['clean'],
            ['image', 'video']
          ]
        },
      },
      disabled: false
    }
  },

  watch: {
    'content'() {
      this.$store.commit('productContent', this.content);
    }
  },

  beforeMount() {
    if (this.$store.getters.productContent) {
      // 스토어에 저장된 상품정보가 있으면 불러옴
      this.content = this.$store.getters.productContent;
    } else if (this.settings?.duplicateProductId) {
      // 복제된 상품이 있으면 불러옴
      this.duplicateContent();
    }
    // this.duplicateContent();
  },

  methods: {
    updateHTML(e) {
      this.content = e.srcElement.innerText;
    },

    duplicateContent() {
      this.content = MockData.html;
    },

    toggleFold() {
      this.fold = !this.fold;

      if (!this.fold) {
        setTimeout(() => {
          const el = document.getElementById('editor');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    },

    onEditorReady(editor) {
      editor.blur()
    }
  }
});
