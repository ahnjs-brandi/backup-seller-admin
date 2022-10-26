<template>
  <div>
    <v-row class="mb-1 d-flex align-end" style="max-width: 1180px">
      <v-col cols="12" sm="4">
        <v-btn-toggle
          v-model="mode"
          density="compact"
          color="primary"
          mandatory
        >
          <v-btn value="editor" >에디터</v-btn>
          <v-btn value="html">HTML편집</v-btn>
        </v-btn-toggle>
      </v-col>

      <v-col cols="12" sm="8">
        <div class="text-body-2 text-right text-grey">이미지의 권장 사이즈는 가로사이즈 1000px 이상입니다.</div>
      </v-col>
    </v-row>

    <div v-if="mode === 'editor'" class="editor-wrapper">
      <quill-editor
        v-model:value="contentHtml"
        :options="editorOption"
        id="product-content-html"
        :disabled="disabled"
      />
    </div>

    <div v-else class="editor-wrapper">
      <div contenteditable="true" class="html-textarea" @blur="updateHTML">
        <pre>{{ contentHtml }}</pre>
      </div>
    </div>

  </div>
</template>

<script lang="ts" src="./EditorComponent.ts" />

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');

  .editor-wrapper {
    height: calc(100vh - 300px);
    max-width: 1160px;
  }

  // 에디터 툴바
  .ql-toolbar {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;

    .ql-picker.ql-header {

      // 글자크기 메뉴
      .ql-picker-label::before { content: '문단'}
      .ql-picker-item::before { content: '문단'}
      @for $i from 1 through 6 {
        .ql-picker-label[data-value="#{$i}"]::before,
        .ql-picker-item[data-value="#{$i}"]::before {
          content: '제목 #{$i}'
        }
      }
      .ql-picker-item[data-value="1"]::before { content: '제목 1'; font-size: 30px}
      .ql-picker-item[data-value="2"]::before { content: '제목 2'; font-size: 26px}
      .ql-picker-item[data-value="3"]::before { content: '제목 3'; font-size: 23px}
      .ql-picker-item[data-value="4"]::before { content: '제목 4'; font-size: 20px}
      .ql-picker-item[data-value="5"]::before { content: '제목 5'; font-size: 17px}
      .ql-picker-item[data-value="6"]::before { content: '제목 6'; font-size: 14px}
    }

    // 폰트 메뉴
    .ql-picker-item::before {
      font-size: 16px;
    }
    .ql-picker-item[data-value="NotoSansKR"]::before,
    .ql-picker-label[data-value="NotoSansKR"]::before {
      content: '본고딕' !important;
      font-family: 'Noto Sans KR' !important;
    }
    .ql-picker-item[data-value="NotoSerifKR"]::before,
    .ql-picker-label[data-value="NotoSerifKR"]::before {
      content: '본명조' !important;
      font-family: 'Noto Serif KR' !important;
    }
    .ql-picker-item[data-value="NanumSquare"]::before,
    .ql-picker-label[data-value="NanumSquare"]::before {
      content: '나눔스퀘어' !important;
      font-family: 'NanumSquare' !important;
    }
  }

  // 본문 스타일
  #product-content-html {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: calc(100% - 44px);

    .ql-editor {
      max-width: 1160px;
      margin:0 auto;
      text-align: center;

      * {
        font-family: 'Noto Sans KR', sans-serif;
      }
      p {
        font-size: 16px !important;
      }
      h1 {font-size: 30px !important;}
      h2 {font-size: 26px !important;}
      h3 {font-size: 23px !important;}
      h4 {font-size: 20px !important;}
      h5 {font-size: 17px !important;}
      h6 {font-size: 14px !important;}
      .ql-font-NanumSquare {
        font-family: 'NanumSquare', sans-serif;
      }
      .ql-font-NotoSansKR {
        font-family: 'Noto Sans KR', sans-serif;
      }
      .ql-font-NotoSerifKR {
        font-family: 'Noto Serif KR', sans-serif;
      }
      .ql-video {
        width: 716px;
        height: 403px;
        margin:0 auto;
      }
      &.ql-blank::before {
        font-size: 16px;
      }
    }

  // Html 편집 DIV
  }
  .html-textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fafafa;
    resize: none;
  }

  .ql-snow .ql-tooltip[data-mode=video]::before {
    content: "유튜브 링크:";
  }

  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    content: '저장' !important;
  }
</style>
