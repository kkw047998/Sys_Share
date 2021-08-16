webpackJsonp([96],{

/***/ 1172:
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

// .. imports removed for brevity

exports.default = {
  name: "home",
  methods: {
    // Log the user in
    login: function login() {
      this.$auth.loginWithRedirect();
    },

    // Log the user out
    logout: function logout() {
      this.$auth.logout({
        //returnTo: window.location.origin
        returnTo: 'https://request.msc.edu.hk/#/auth/login'
      });
    }
  }
};

/***/ }),

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home col-6"},[_c('h1',[_vm._v("\"Welcome to Your Vue.js App\"")]),_vm._v(" "),(!_vm.$auth.loading)?_c('div',{staticClass:"col-12"},[(!_vm.$auth.isAuthenticated)?_c('button',{staticClass:"form-control",on:{"click":_vm.login}},[_vm._v("Log in")]):_vm._e(),_vm._v(" "),(_vm.$auth.isAuthenticated)?_c('button',{staticClass:"form-control",on:{"click":_vm.logout}},[_vm._v("Log out")]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.$auth.isAuthenticated)?_c('div',{staticClass:"col-12"},[_c('div',[_c('img',{attrs:{"src":_vm.$auth.user.picture}}),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.$auth.user.name))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$auth.user.email))])]),_vm._v(" "),_c('div',[_c('pre',[_vm._v(_vm._s(JSON.stringify(_vm.$auth.user, null, 2)))])])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c23433_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(1322);
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c23433_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=96.build.js.map