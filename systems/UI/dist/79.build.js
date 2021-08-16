webpackJsonp([79],{

/***/ 1242:
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

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
exports.default = {
    data: function data() {
        return {
            rank: '',
            r_id: '',
            name: '',
            userlist: [],
            proc_id: '',
            url: '',
            ready: false,
            params: window.location.href.substr(window.location.href.indexOf('?'))
        };
    },
    created: async function created() {
        var _this = this;

        var param = new URLSearchParams(this.params);
        if (param.has('id')) {
            this.r_id = param.get('id');
            this.proc_id = param.get('proc_id');
            console.log(this.proc_id);
        }
        var baseurl = "src/Procurement/procurement/backend/declaration_form.php?proc_id=";
        this.url = baseurl + this.proc_id;
        //onload data
        var formData = new FormData();
        formData.append('record', this.r_id);
        await axios.post('Procurement/procurement/backend/attend_fetch_live.php', formData).then(function (response) {
            _this.userlist = response.data;
            _this.name = _this.userlist[0].name;
            _this.rank = _this.userlist[0].rank;
        });

        this.ready = true;
    },


    name: 'user_setup',
    methods: {
        undo: function undo() {
            this.$refs.signaturePad.undoSignature();
            this.pwd = '';
            this.pwd_check = '';
        },
        save: function save() {
            var _this2 = this;

            var _$refs$signaturePad$s = this.$refs.signaturePad.saveSignature(),
                isEmpty = _$refs$signaturePad$s.isEmpty,
                data = _$refs$signaturePad$s.data;

            if (isEmpty) {
                this.$alert('Signature board cannot be empty!');
            } else {
                var sign = data;
                var formData = new FormData();
                formData.append('sign', sign);
                formData.append('rid', this.r_id);
                axios.post('Procurement/procurement/backend/live_sign_attend_post.php', formData).then(function (response) {
                    _this2.$alert('Successfully Signed, return to previous form ...');
                    document.getElementById('tmp_id').value = _this2.proc_id;
                    _this2.$router.push('tender_meeting_mat');
                });
            }
        }
    }
};

/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1516);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("b4a2f93e", content, true, {});

/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#signature{border:3px double transparent;border-radius:5px;background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#4bc5e8,#9f6274);background-origin:border-box;background-clip:content-box,border-box}", ""]);

// exports


/***/ }),

/***/ 1517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12 no_x"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5"},[_c('div',[_vm._v("\n               Welcome\n                  "),_c('br'),_vm._v(" "),_c('b',[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('br'),_vm._v("\n                  Please Sign Here "),_c('i',{staticClass:"fa fa-arrow-down"})]),_vm._v(" "),_c('VueSignaturePad',{ref:"signaturePad",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",on:{"click":_vm.undo}},[_vm._v("\n                          Undo\n                      ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",on:{"click":_vm.save}},[_vm._v("\n                        Sign\n                    ")])])],1),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('iframe',{staticStyle:{"background":"#FFFFFF","width":"100%","height":"87vh"},attrs:{"src":_vm.url}})])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_attend_vue__ = __webpack_require__(1242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_attend_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_attend_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_attend_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_attend_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13bfd3ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_attend_vue__ = __webpack_require__(1517);
function injectStyle (ssrContext) {
  __webpack_require__(1515)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_attend_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13bfd3ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_attend_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=79.build.js.map