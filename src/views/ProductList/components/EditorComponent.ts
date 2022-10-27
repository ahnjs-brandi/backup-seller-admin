import { defineComponent } from 'vue';
import { quillEditor, Quill } from 'vue3-quill';

// 에디터 폰트 세팅
const Font = Quill.import('formats/font');
Font.whitelist = ['NotoSansKR', 'NanumSquare', 'NotoSerifKR'];
Quill.register(Font, true);

export default defineComponent({
  name: 'EditorComponent',

  components: {
    quillEditor
  },

  props: {
    content: { type: String, required: true },
  },

  data() {
    return {
      contentHtml: this.content,
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

  methods: {
    updateHTML(e) {
      this.contentHtml = e.srcElement.innerText;
    },
  }
});
