[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/vue-quill-editor/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/vue-quill-editor/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/vue-quill-editor/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/surmon-china/vue-quill-editor/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-quill-editor.svg?style=social?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-quill-editor.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-quill-editor/)


# Vue-Quill-Editor
🍡Quill editor component for Vue2, support SPA and SSR.

基于Quill、适用于Vue2的富文本编辑器，支持服务端渲染和单页应用。


# Example
[Demo Page](https://surmon-china.github.io/vue-quill-editor/)


# Use Setup

### Install vue-quill-editor

``` bash
npm install vue-quill-editor --save
```


### Vue mount

``` javascript
// import
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'


// or require
var Vue = require('vue')
var VueQuillEditor = require('vue-quill-editor')


// or import 'vue-quill-editor/ssr' to used in Nuxt.js/ssr
var VueQuillEditor = require('vue-quill-editor/ssr')


// mount with global (If used in nuxt.js / SSR, you should keep it only in a browser-built environment)
Vue.use(VueQuillEditor)


// if you need register quill modules, you need to introduce and register before the vue program is instantiated
import Quill from 'quill'
import { yourQuillModule } from '../yourModulePath/yourQuillModule.js'
Quill.register('modules/yourQuillModule', yourQuillModule)


// mount with component(can't work in ssr)
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  }
}
```

### Use the difference（使用方法的区别）

**SSR and the only difference in the use of the SPA:**
- SPA worked by the `component`, find quill instance by `ref attribute`.
- SSR worked by the `directive`, find quill instance by `directive arg`.
- Other configurations, events are the same.

### Use in SSR

``` vue
<!-- You can custom the "myQuillEditor" name used to find the quill instance in current component -->
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="quill-editor" 
       v-model="content"
       v-quill:myQuillEditor="editorOption">
  </div>

  <!-- Or manually control the data synchronization（或手动控制数据流）  -->
  <div class="quill-editor" 
       :content="content"
       @change="onEditorChange($event)"
       v-quill:myQuillEditor="editorOption">
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('this is current quill instance object', this.myQuillEditor)
    }
    // Omit the same parts as in the following component sample code
    // ...
  }
</script>
```


### Use in SPA

``` vue
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>

  <!-- Or manually control the data synchronization（或手动控制数据流） -->
  <quill-editor :content="content"
                :options="editorOption"
                @change="onEditorChange($event)">
  </quill-editor>
</template>

<script>
  // You can also register quill modules in the component
  import Quill from 'quill'
  import { someModule } from '../yourModulePath/someQuillModule.js'
  Quill.register('modules/someModule', someModule)
  
  export default {
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {
          // some quill options
        }
      }
    },
    // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    },
    // get the current quill instace object.
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      // you can use current editor object to do something(quill methods)
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>
```

# Some extend code of quill
- [Quill - issues - Option to insert an image from a URL](https://github.com/quilljs/quill/issues/893)
- [Quill - issues - Image Resize](https://github.com/quilljs/quill/issues/104)
- [Quill - Modules - ImageImport and ImageResize](https://www.webpackbin.com/bins/-Ket3Oz1330Cy0MbddU3)


# Quill Config
[Api docs](https://quilljs.com/docs/quickstart/)


# Author Blog
[Surmon](https://surmon.me)
