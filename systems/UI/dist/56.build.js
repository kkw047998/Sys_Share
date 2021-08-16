webpackJsonp([56],{

/***/ 1218:
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
            pwd: '',
            pwd_check: '',
            return: ''
        };
    },

    name: 'user_setup',
    methods: {
        undo: function undo() {
            this.$refs.signaturePad.undoSignature();
            this.pwd = '';
            this.pwd_check = '';
        },
        save: function save() {
            var _$refs$signaturePad$s = this.$refs.signaturePad.saveSignature(),
                isEmpty = _$refs$signaturePad$s.isEmpty,
                data = _$refs$signaturePad$s.data;

            if (isEmpty) {
                this.$alert('Signature board cannot be empty!');
            } else if (this.pwd.length == 0) {
                this.$alert('Security Code Cannot be empty!');
            } else if (this.pwd.length <= 5) {
                this.$alert('Min. Length of Security Code is 6');
            } else if (this.pwd != this.pwd_check) {
                this.$alert('Security Code Validation Failure! Please check your inputs');
            } else {
                var sign = data;
                var formData = new FormData();
                formData.append('sign', data);
                formData.append('pwd', this.pwd);
                axios.post('Procurement/shared_backend/user_setup.php', formData);
                this.$alert('Successfully completed setup, return to previous page');
                this.$router.push('../RequestPortal/PortalHome');
            }
        }
    }
};

/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1448);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("705020b9", content, true, {});

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#signature{border:3px double transparent;border-radius:5px;background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#4bc5e8,#9f6274);background-origin:border-box;background-clip:content-box,border-box}", ""]);

// exports


/***/ }),

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 mt-2"},[_vm._m(0),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-6 mt-2"},[_c('VueSignaturePad',{ref:"signaturePad",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"20%","margin-right":"20%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",on:{"click":_vm.undo}},[_vm._v("\n              Undo\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",on:{"click":_vm.save}},[_vm._v("\n              Save\n            ")])])],1),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"column"}},[_c('div',{staticStyle:{"margin-top":"0.5em"}},[_c('label',[_vm._v("Create Signature Security Code (min. 6 characters) :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control input",attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"3.5em"}},[_c('label',[_vm._v("Security Code Verification :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd_check),expression:"pwd_check"}],staticClass:"form-control input",attrs:{"type":"password"},domProps:{"value":(_vm.pwd_check)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd_check=$event.target.value}}})])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("\n              Welcome to procurement system, this is your first login"),_c('br'),_vm._v("\n              You are required to create signature which will be stored for further uses.\n              ")]),_vm._v(" "),_c('br'),_c('br')])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_setup_vue__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_setup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_setup_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_setup_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_setup_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1845d9ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_user_setup_vue__ = __webpack_require__(1449);
function injectStyle (ssrContext) {
  __webpack_require__(1447)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_setup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1845d9ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_user_setup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=56.build.js.map