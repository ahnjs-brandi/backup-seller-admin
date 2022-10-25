import { defineComponent } from 'vue';
import { quillEditor, Quill } from 'vue3-quill';
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
      // tempContent: '',
      mode: 'editor',
      editorOption: {
        placeholder: '내용을 입력해 주세요',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: ['NotoSansKR', 'NanumSquare', 'NotoSerifKR'] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        },
      },
      disabled: false
    }
  },

  props: {
    // selectMode: { type: Boolean, required: true },
  },

  mounted() {
    //
  },

  methods: {
    onEditorBlur(quill) {
      // console.log('editor blur!', quill);
    },
    onEditorFocus(quill) {
      // console.log('editor focus!', quill);
    },
    onEditorReady(quill) {
      // console.log('editor ready!', quill);
    },
    onEditorChange({ quill, html, text }) {
      // console.log('editor change!', quill, html, text);
      // this.tempContent = html;
    },
    updateHTML(e) {
      // console.log(e);
      // console.log(e.srcElement.innerText);
      this.content = e.srcElement.innerText;
    }
  }
});
