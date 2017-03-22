/**
 * Vue-Quill-Editor
 * @author Surmon.me
 */


var quillEditor = require('./editor.vue')
var VueQuillEditor = {
  Quill: Quill,
  quillEditor: quillEditor,
  install: function(Vue) {
    Vue.component('quill-editor', quillEditor)
  }
}

module.exports = VueQuillEditor
