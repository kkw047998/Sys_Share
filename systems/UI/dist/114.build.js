webpackJsonp([114],{

/***/ 1221:
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

exports.default = {
    data: function data() {
        return {
            list_ready: false,
            dept_list: [],
            dept: '',
            dept_ready: false,
            assetlist: [],
            st: '',
            ed: '',
            insert_fund_name: '',
            fund_current: 'Regular',
            fund_type: ['Regular', 'Special'],
            printlist: '',
            key: '',
            user_check: '',
            status: '*',
            stl_tag: ['Active', 'Pending', 'Approved', 'Rejected', 'Cancelled'],
            stl: ['*', 'Pending', 'Approved', 'Rejected', 'Cancelled']
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
            if (perm.proc_level < 1) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/department/backend/dept_member.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].department;
            _this.dept_ready = true;
            console.log(_this.dept_list);
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            _this.st = response.data.st;
            _this.ed = response.data.ed;
        });
        var formData = new FormData();
        formData.append('dept', this.dept);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        formData.append('stat', this.status);
        await axios.post('Procurement/reimbursement/backend/reimb_full_print_list.php', formData).then(function (response) {
            _this.printlist = response.data;
            _this.list_ready = true;
        });
    },
    mounted: function mounted() {
        window.addEventListener('focus', this.focus_load);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('focus', this.focus_load);
    },

    methods: {
        focus_load: async function focus_load() {
            var _this2 = this;

            this.list_ready = false;
            this.printlist = '';
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('stat', this.status);
            //setTimeout(function(){           
            await axios.post('Procurement/reimbursement/backend/reimb_full_print_list_search.php', formData).then(function (response) {
                _this2.printlist = response.data;
                _this2.list_ready = true;
            });
            // }, 100);
        },
        search_list: function search_list(event) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            formData.append('stat', this.status);
            axios.post('Procurement/reimbursement/backend/reimb_full_print_list_search.php', formData).then(function (response) {
                _this3.printlist = response.data;
            });
        },
        new_list: function new_list(event) {
            var _this4 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('stat', this.status);
            axios.post('Procurement/reimbursement/backend/reimb_full_print_list_search.php', formData).then(function (response) {
                _this4.printlist = response.data;
            });
        },
        export_dept: function export_dept() {
            var formData = new FormData();
            formData.append('export', 'export');
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/budget/backend/export.php', formData);
        },
        view_form: function view_form() {
            var tag = document.getElementById('tmp_id').value;
            document.getElementById('st_tmp').value = this.st;
            document.getElementById('ed_tmp').value = this.ed;
            document.getElementById('doc_type').value = 'Reimbursement';
            this.$router.push('../wrapper/form_view');
        },
        newplan: function newplan() {
            this.$router.push('reimbursement_form');
        },
        edit_reimb_record: function edit_reimb_record() {
            document.getElementById('st_tmp').value = this.st;
            document.getElementById('ed_tmp').value = this.ed;
            this.$router.push('edit_reimb_record');
        },
        reject_reimb_record: function reject_reimb_record() {
            var _this5 = this;

            var id = document.getElementById('tmp_id').value;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('tag', id);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            if (confirm('Confirm Rejecting Record : ' + id + '?') == true) {
                axios.post('Procurement/reimbursement/backend/reject.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this5.$alert("Successfully Rejected Record :" + id);
                        location.reload();
                    } else {
                        _this5.$alert(response.data);
                    }
                });
            }
        },
        cancel_reimb_record: function cancel_reimb_record() {
            var _this6 = this;

            var id = document.getElementById('tmp_id').value;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('tag', id);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            if (confirm('Confirm Cancel Record : ' + id + '?') == true) {
                axios.post('Procurement/reimbursement/backend/cancelreimb.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this6.$alert("Successfully Rejected Record :" + id);
                        location.reload();
                    } else {
                        _this6.$alert(response.data);
                    }
                });
            }
        }
    }
};

/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-left":"1em"}},[_c('div',[_c('label',{staticStyle:{"font-size":"90%"}},[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control",staticStyle:{"width":"20em"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.department))])}),0):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('button',{staticClass:"form-control",staticStyle:{"margin-top":"0.4em","width":"40%","margin-right":"2%"},attrs:{"type":"button"},on:{"click":_vm.newplan}},[_vm._v("New")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control",staticStyle:{"margin-top":"0.45em","width":"60%","margin-left":"2%"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.stl.length),function(s){return _c('option',{domProps:{"value":_vm.stl[s-1]}},[_vm._v(_vm._s(_vm.stl_tag[s-1]))])}),0):_vm._e()])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto","margin-right":"1em"}},[_c('label',{staticStyle:{"font-size":"90%"}},[_vm._v("Search Record")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",staticStyle:{"width":"40em"},attrs:{"type":"text","placeholder":"Search Record"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_list,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}}),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("From")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"month"},domProps:{"value":(_vm.st)},on:{"change":_vm.new_list,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}}),_vm._v(" "),_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em","margin-left":"0.4em"}},[_vm._v("To")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"month"},domProps:{"value":(_vm.ed)},on:{"change":_vm.new_list,"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])]),_vm._v(" "),_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[(_vm.list_ready)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.printlist)}},[_vm._v("\n                        "+_vm._s(_vm.printlist)+"\n                    ")]):_vm._e(),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"v_reimb_f"},on:{"click":_vm.view_form}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"edit_reimb_record"},on:{"click":_vm.edit_reimb_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"reject_reimb_record"},on:{"click":_vm.reject_reimb_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"cancel_reimb_record"},on:{"click":_vm.cancel_reimb_record}})])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_full_ctrl_vue__ = __webpack_require__(1221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_full_ctrl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_full_ctrl_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_full_ctrl_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_full_ctrl_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3be69a41_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_full_ctrl_vue__ = __webpack_require__(1454);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_full_ctrl_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3be69a41_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_full_ctrl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=114.build.js.map