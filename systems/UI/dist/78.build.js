webpackJsonp([78],{

/***/ 1244:
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

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
exports.default = {
    data: function data() {
        return {
            sign: '',
            processing: false,
            proc_id: '',
            dname: '',
            ready: false,
            params: window.location.href.substr(window.location.href.indexOf('?'))
        };
    },
    created: async function created() {
        var param = new URLSearchParams(this.params);
        if (param.has('id')) {
            this.proc_id = param.get('id');
            this.dname = param.get('dname');
            console.log(this.proc_id);
        }
        var baseurl = "src/Procurement/procurement/backend/combined_score_sheet.php?proc_id=";
        this.url = baseurl + this.proc_id;
        //onload data
        var formData = new FormData();

        this.ready = true;
    },


    name: 'user_setup',
    methods: {
        undo: function undo() {
            this.$refs.signaturePad.undoSignature();
        },
        save: async function save() {
            var _this = this;

            var _$refs$signaturePad$s = this.$refs.signaturePad.saveSignature(),
                isEmpty = _$refs$signaturePad$s.isEmpty,
                data = _$refs$signaturePad$s.data;

            if (isEmpty) {
                this.$alert('Signature board cannot be empty!');
            } else {
                this.processing = true;
                this.sign = data;
                var formData = new FormData();
                formData.append('live', 'true');
                formData.append('sign_code', this.sign);
                formData.append('proc_id', this.proc_id);
                formData.append('access_name', this.dname);
                await axios.post('Procurement/procurement/backend/update_combine_sign_pw.php', formData).then(function (response) {
                    if (response.data == 'Successfully Signed !') {
                        _this.$alert('Successfully Signed ! Redirect to Summary').then(function () {
                            _this.processing = false;
                        });
                        window.location.href = 'src/Procurement/procurement/backend/ret_stat_cat4.php?p_id=' + _this.proc_id + '&name=' + _this.dname;
                    }
                });
            }
        }
    }
};

/***/ }),

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1524);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("185b4d2a", content, true, {});

/***/ }),

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#signature{border:3px double transparent;border-radius:5px;background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#4bc5e8,#9f6274);background-origin:border-box;background-clip:content-box,border-box}", ""]);

// exports


/***/ }),

/***/ 1525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12 no_x"},[_c('div',{staticClass:"col-12 no_x",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3"},[_vm._v("\n                  Welcome\n                  "),_c('br'),_vm._v(" "),_c('b',[_vm._v(_vm._s(_vm.dname))]),_vm._v(" "),_c('br'),_vm._v("\n                  Please Sign Here "),_c('i',{staticClass:"fa fa-arrow-right"})]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('div',[_c('VueSignaturePad',{ref:"signaturePad",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",on:{"click":_vm.undo}},[_vm._v("\n                              Undo\n                          ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",attrs:{"disabled":_vm.processing},on:{"click":_vm.save}},[_vm._v("\n                              Save\n                          ")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_vm._v(" ")])]),_c('br'),_vm._v(" "),_c('iframe',{staticClass:"col-12",attrs:{"src":_vm.url}})]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_combine_vue__ = __webpack_require__(1244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_combine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_combine_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_combine_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_combine_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57c368c6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_combine_vue__ = __webpack_require__(1525);
function injectStyle (ssrContext) {
  __webpack_require__(1523)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_combine_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57c368c6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_combine_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=78.build.js.map