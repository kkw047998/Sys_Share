webpackJsonp([116],{

/***/ 1203:
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

exports.default = {
    data: function data() {
        return {
            med_list: [],
            teacher_val: 0.0,
            nts_val: 0.0,
            ready: false,
            period: '',
            st: '',
            ed: '',
            user_check: ''
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            var perm = response.data[0];
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
            if (perm.proc_level < 4) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/admin/backend/med_period.php').then(function (response) {
            _this.st = response.data.st;
            _this.ed = response.data.ed;
        });
        var formData = new FormData();
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        await axios.post('Procurement/admin/backend/fetch_med_setup.php', formData).then(function (response) {
            _this.med_list = response.data;
            if (!(response.data == 'Empty')) {
                var i = 0;
                for (i = 0; i < _this.med_list.length; i++) {
                    if (_this.med_list[i].type == 'Teachers') {
                        _this.teacher_val = _this.med_list[i].max;
                    } else if (_this.med_list[i].type == 'Non-Teaching-Staff') {
                        _this.nts_val = _this.med_list[i].max;
                    }
                }
            }
        });
        this.ready = true;
    },

    methods: {
        handleSubmit: function handleSubmit() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('teacher_val', this.teacher_val);
            formData.append('nts_val', this.nts_val);
            axios.post('Procurement/admin/backend/update_med_val.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this2.$alert('Successfully Updated');
                } else {
                    _this2.$alert(response.data);
                }
            });
        }
    }
};

/***/ }),

/***/ 1408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-7"},[_c('form',{attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit()}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-6"}),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('label',[_vm._v("Start Period")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"month","readonly":""},domProps:{"value":(_vm.st)},on:{"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('label',[_vm._v("End Period")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"month","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[_c('div',{staticClass:"col-6"},[_vm._v("\r\n                            Teachers\r\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.teacher_val),expression:"teacher_val"}],staticClass:"form-control",attrs:{"type":"number","onfocus":"this.value=''","step":"0.01"},domProps:{"value":(_vm.teacher_val)},on:{"input":function($event){if($event.target.composing){ return; }_vm.teacher_val=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[_c('div',{staticClass:"col-6"},[_vm._v("\r\n                        Non-Teaching Staff\r\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nts_val),expression:"nts_val"}],staticClass:"form-control",attrs:{"type":"number","onfocus":"this.value=''","step":"0.01"},domProps:{"value":(_vm.nts_val)},on:{"input":function($event){if($event.target.composing){ return; }_vm.nts_val=$event.target.value}}})])])]),_vm._v(" "),_vm._m(1)])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Medical Allowance Setting")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Save\r\n                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\r\n                ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_setting_vue__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_setting_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_setting_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_setting_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5ba9fe0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_med_setting_vue__ = __webpack_require__(1408);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5ba9fe0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_med_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=116.build.js.map