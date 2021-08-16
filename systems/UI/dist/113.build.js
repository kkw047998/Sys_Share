webpackJsonp([113],{

/***/ 1220:
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

exports.default = {
    data: function data() {
        return {
            ready: false,
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
            stl: ['*', 'Pending', 'Approved', 'Rejected', 'Cancelled']
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
        });
        await axios.get('Procurement/shared_backend/fetch_dept.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].full_dept;
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
        await axios.post('Procurement/reimbursement/backend/print_reimb_list.php', formData).then(function (response) {
            _this.printlist = response.data;
        });
        var entry = document.getElementById('entry').value;
        if (entry == 'proc') {
            var proc_id = document.getElementById('tmp_id').value;
            this.dept = document.getElementById('tmp_id_2').value;
            this.key = proc_id;
            var formDatas = new FormData();
            formDatas.append('dept', this.dept);
            formDatas.append('st', this.st);
            formDatas.append('ed', this.ed);
            formDatas.append('key', this.key);
            formDatas.append('stat', this.status);
            await axios.post('Procurement/reimbursement/backend/print_reimb_list_search.php', formDatas).then(function (response) {
                _this.printlist = response.data;
            });
            document.getElementById('entry').value = '';
        }
        this.ready = true;
    },
    mounted: function mounted() {},

    methods: {
        search_list: function search_list(event) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            formData.append('stat', this.status);
            axios.post('Procurement/reimbursement/backend/print_reimb_list_search.php', formData).then(function (response) {
                _this2.printlist = response.data;
            });
        },
        new_list: function new_list(event) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('stat', this.status);
            axios.post('Procurement/reimbursement/backend/print_reimb_list_search.php', formData).then(function (response) {
                _this3.printlist = response.data;
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
            console.log(tag);
            var path = "src/Procurement/reimbursement/backend/view_form_app.php?tag=" + tag + "&st=" + this.st + "&ed=" + this.ed;
            window.open(path, "_blank");
        },
        newplan: function newplan() {
            this.$router.push('reimbursement_form');
        },
        cancel_reimb_record: function cancel_reimb_record() {
            var _this4 = this;

            var id = document.getElementById('tmp_id').value;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('tag', id);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            if (confirm('Confirm Cancel Record : ' + id + '?') == true) {
                axios.post('Procurement/reimbursement/backend/cancelreimb.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this4.$alert("Successfully Cancelled Record :" + id);
                        location.reload();
                    } else {
                        _this4.$alert(response.data);
                    }
                });
            }
        }
    }
};

/***/ }),

/***/ 1453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-left":"1em"}},[_c('div',[_c('label',{staticStyle:{"font-size":"90%"}},[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control",staticStyle:{"width":"20em"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.full_dept))])}),0):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('button',{staticClass:"form-control",staticStyle:{"margin-top":"0.4em","width":"40%","margin-right":"2%"},attrs:{"type":"button"},on:{"click":_vm.newplan}},[_vm._v("New")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control",staticStyle:{"margin-top":"0.45em","width":"60%","margin-left":"2%"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.stl),function(s){return _c('option',[_vm._v(_vm._s(s))])}),0):_vm._e()])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto","margin-right":"1em"}},[_c('label',{staticStyle:{"font-size":"90%"}},[_vm._v("Search Record")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",staticStyle:{"width":"40em"},attrs:{"type":"text","placeholder":"Search Record"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_list,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}}),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("From")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"month"},domProps:{"value":(_vm.st)},on:{"change":_vm.new_list,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}}),_vm._v(" "),_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em","margin-left":"0.4em"}},[_vm._v("To")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"month"},domProps:{"value":(_vm.ed)},on:{"change":_vm.new_list,"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])]),_vm._v(" "),_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.printlist)}},[_vm._v("\n                        "+_vm._s(_vm.printlist)+"\n                    ")]),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"v_reimb_f"},on:{"click":_vm.view_form}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"cancel_reimb_record"},on:{"click":_vm.cancel_reimb_record}})])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_record_vue__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_record_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_record_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_record_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_record_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58bc4850_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_record_vue__ = __webpack_require__(1453);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_record_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58bc4850_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=113.build.js.map