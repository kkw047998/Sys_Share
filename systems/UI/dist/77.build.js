webpackJsonp([77],{

/***/ 1239:
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

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
exports.default = {
    data: function data() {
        return {
            pos: 'TAC Member',
            new_user: false,
            type_list: ['Principal'],
            name: '',
            userlist: [],
            type: 'Principal',
            proc_id: '',
            pwd: '',
            pwd_check: '',
            return: '',
            url: '',
            name_select: 'new_user',
            ready: false,
            params: window.location.href.substr(window.location.href.indexOf('?'))
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('../user_info.php').then(function (response) {
            _this.userlist = response.data;
            _this.name = _this.userlist[1];
        });
        var param = new URLSearchParams(this.params);
        if (param.has('id')) {
            this.proc_id = param.get('id');
            console.log(this.proc_id);
        }
        var baseurl = "src/Procurement/procurement/backend/ret_stat.php?p_id=";
        this.url = baseurl + this.proc_id;
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
        save: function save() {
            var _this3 = this;

            var _$refs$signaturePad$s = this.$refs.signaturePad.saveSignature(),
                isEmpty = _$refs$signaturePad$s.isEmpty,
                data = _$refs$signaturePad$s.data;

            if (isEmpty) {
                this.$alert('Signature board cannot be empty!');
            } else if (this.name_select == '') {
                this.$alert('Please Select your name below ');
            } else if (this.name_select == 'new_user' && this.name == '') {
                this.$alert('Please Enter your name ');
            } else {
                var sign = data;
                var formData = new FormData();
                formData.append('sign', data);
                formData.append('name', this.name);
                formData.append('name_select', this.name_select);
                formData.append('type', this.type);
                formData.append('pos', this.pos);
                formData.append('proc_id', this.proc_id);
                axios.post('Procurement/procurement/backend/sign_tender.php', formData).then(function (response) {
                    _this3.$alert('Successfully Signed, return to previous form ...');
                    window.location.href = _this3.url;
                });
            }
        }
    }
};

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1507);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1c607d14", content, true, {});

/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#signature{border:3px double transparent;border-radius:5px;background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#4bc5e8,#9f6274);background-origin:border-box;background-clip:content-box,border-box}", ""]);

// exports


/***/ }),

/***/ 1508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12 no_x"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-12"},[_c('label',{staticClass:"form-control-label"},[_vm._v("User Title")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.type_list),function(t){return _c('option',[_vm._v(_vm._s(t))])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('VueSignaturePad',{ref:"signaturePad",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",on:{"click":_vm.undo}},[_vm._v("\n              Undo\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",on:{"click":_vm.save}},[_vm._v("\n              Save\n            ")])])],1)]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"col-3"}),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"overflow":"auto"}},[_c('div',{staticClass:"col-12"},[_c('iframe',{staticStyle:{"background":"#FFFFFF","width":"100%","height":"30em"},attrs:{"src":_vm.url}}),_vm._v(" "),_c('br'),_c('br')])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_principal_vue__ = __webpack_require__(1239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_principal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_principal_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_principal_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_principal_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2b94c28_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_principal_vue__ = __webpack_require__(1508);
function injectStyle (ssrContext) {
  __webpack_require__(1506)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_live_sign_principal_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2b94c28_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_live_sign_principal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=77.build.js.map