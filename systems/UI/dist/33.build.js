webpackJsonp([33],{

/***/ 1305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      Status: ""
    };
  },

  methods: {
    post_login: function post_login(e) {
      var _this = this;

      var formData = new FormData();
      formData.append('username', this.username);
      formData.append('password', this.pw);
      axios.post('../login.php', formData).then(function (response) {
        _this.Status = response.data;
        if (_this.Status == 'OK') {
          window.location = "https://request.msc.edu.hk";
        } else {
          alert(_this.Status);
          _this.$router.push('Login');
        }
      });
    }
  }
};

/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1677);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("ba786816", content, true, {});

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".card-title[data-v-512e616b]{padding-left:20px}", ""]);

// exports


/***/ }),

/***/ 1678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('card',{attrs:{"header-text":"Welcome !"}},[_c('div',{staticClass:"card-body card-block"},[_c('form',{attrs:{"method":"post","action":"/auth/login","name":"login"},on:{"submit":function($event){$event.preventDefault();return _vm.post_login($event)}}},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"input-group"},[_c('div',{staticClass:"input-group-addon"},[_c('i',{staticClass:"fa fa-envelope"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],staticClass:"form-control",attrs:{"type":"text","id":"email","name":"username"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"input-group"},[_c('div',{staticClass:"input-group-addon"},[_c('i',{staticClass:"fa fa-asterisk"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pw),expression:"pw"}],staticClass:"form-control",attrs:{"type":"password","id":"password","name":"password","placeholder":"Password"},domProps:{"value":(_vm.pw)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pw=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-actions form-group"},[_c('button',{staticClass:"btn btn-success btn-md",attrs:{"type":"submit"}},[_vm._v("Log In")])])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(1305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_512e616b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(1678);
function injectStyle (ssrContext) {
  __webpack_require__(1676)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-512e616b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_512e616b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=33.build.js.map