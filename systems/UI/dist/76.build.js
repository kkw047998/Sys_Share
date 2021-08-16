webpackJsonp([76],{

/***/ 1236:
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

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
exports.default = {
    data: function data() {
        return {
            processing: false,
            username: '',
            pos: 'TAC Member',
            new_user: false,
            //type_list:['IMC Manager','PTA Repersentative'],
            name: '',
            userlist: [],
            type: 'IMC Manager',
            proc_id: '',
            pwd: '',
            pwd_check: '',
            return: '',
            url: '',
            name_select: '',
            ready: false,
            params: window.location.href.substr(window.location.href.indexOf('?'))
        };
    },
    created: async function created() {
        var _this = this;

        var param = new URLSearchParams(this.params);
        if (param.has('id')) {
            this.proc_id = param.get('id');
            this.username = param.get('rank');
            if (this.username == 'imcmanag') {
                this.pos = 'TAC Chairperson';
            } else {
                this.pos = 'TAC Member';
            }
            this.name = param.get('name');
            console.log(this.proc_id);
        }
        var baseurl = "src/Procurement/procurement/backend/ret_stat_cat4.php?p_id=";
        var urlname = this.name;
        urlname = urlname.split(' ').join('%20');
        this.url = baseurl + this.proc_id + "&name=" + urlname;
        console.log(this.url);
        //onload data
        var formData = new FormData();
        formData.append('type', this.type);
        await axios.post('Procurement/procurement/backend/extra_userlist.php', formData).then(function (response) {
            _this.userlist = response.data;
        });

        this.ready = true;
    },


    name: 'user_setup',
    methods: {
        new_list: function new_list() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('type', this.type);
            axios.post('Procurement/procurement/backend/extra_userlist.php', formData).then(function (response) {
                _this2.userlist = response.data;
                _this2.name_select = '';
            });
        },
        undo: function undo() {
            this.$refs.signaturePad.undoSignature();
            this.pwd = '';
            this.pwd_check = '';
        },
        save: async function save() {
            var _this3 = this;

            var _$refs$signaturePad$s = this.$refs.signaturePad.saveSignature(),
                isEmpty = _$refs$signaturePad$s.isEmpty,
                data = _$refs$signaturePad$s.data;

            if (isEmpty) {
                this.$alert('Signature board cannot be empty!');
            } else {
                this.processing = true;
                var sign = data;
                var formData = new FormData();
                formData.append('sign', data);
                formData.append('name', this.name);
                formData.append('pos', this.pos);
                formData.append('proc_id', this.proc_id);
                await axios.post('Procurement/procurement/backend/sign_tender.php', formData).then(function (response) {
                    _this3.$alert('Successfully Signed, return to previous form ...').then(function () {
                        _this3.processing = false;
                    });
                    window.location.href = _this3.url;
                });
            }
        }
    }
};

/***/ }),

/***/ 1497:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("38b72470", content, true, {});

/***/ }),

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#signature{border:3px double transparent;border-radius:5px;background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#4bc5e8,#9f6274);background-origin:border-box;background-clip:content-box,border-box}", ""]);

// exports


/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12 no_x"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3"},[_vm._v("\n                Welcome\n                "),_c('br'),_vm._v(" "),_c('b',[_vm._v(_vm._s(_vm.name))]),_c('br'),_vm._v(" "),_c('u',[_vm._v(_vm._s(_vm.pos))]),_vm._v(" "),_c('br'),_vm._v("\n                Please Sign Here "),_c('i',{staticClass:"fa fa-arrow-right"})]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('VueSignaturePad',{ref:"signaturePad",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",on:{"click":_vm.undo}},[_vm._v("\n              Undo\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",attrs:{"disabled":_vm.processing},on:{"click":_vm.save}},[_vm._v("\n              Sign\n            ")])])],1)]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"col-3"}),_vm._v(" "),_c('div',{staticClass:"col-12 framewrapper"},[_c('div',{staticClass:"col-12 scroll_frame",staticStyle:{"height":"100%!important","width":"100%!important","padding-left":"0","padding-right":"0"}},[_c('iframe',{staticClass:"col-12 ios_frame",staticStyle:{"height":"100%!important","width":"100%!important","padding-left":"0","padding-right":"0"},attrs:{"src":_vm.url}}),_c('br')])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_proc_vue__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_proc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_proc_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_proc_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_proc_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1eec3eae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_proc_vue__ = __webpack_require__(1499);
function injectStyle (ssrContext) {
  __webpack_require__(1497)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_proc_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1eec3eae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_proc_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=76.build.js.map