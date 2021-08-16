webpackJsonp([108],{

/***/ 1251:
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

exports.default = {
    data: function data() {
        return {
            list_ready: false,
            key: '',
            st: '',
            ed: '',
            dept: '',
            dept_list: [],
            ready: false,
            print_list: ''
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/department.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].dept_id;
        });
        var tdy = new Date();
        var month = tdy.getMonth();
        month = month + 1;
        if (month > 7) {
            this.st = tdy.getFullYear() + '-08-01';
            this.ed = tdy.getFullYear() + 1 + '-07-31';
        } else {
            this.st = tdy.getFullYear() - 1 + '-08-01';
            this.ed = tdy.getFullYear() + '-07-31';
        }
        var formData = new FormData();
        formData.append('dept', this.dept);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        await axios.post('Procurement/report/backend/reimb_fetch.php', formData).then(function (response) {
            _this.print_list = response.data;
        });
        this.ready = true;
        this.list_ready = true;
    },

    methods: {
        view_reimb: function view_reimb() {
            var tag = document.getElementById('tmp_id').value;
            var st_val = this.st;
            var st_array = st_val.split('-');
            var st_month = st_array[0] + '-' + st_array[1];
            document.getElementById('st_tmp').value = st_month;

            var ed_val = this.ed;
            var ed_array = ed_val.split('-');
            var ed_month = ed_array[0] + '-' + ed_array[1];
            document.getElementById('ed_tmp').value = ed_month;
            document.getElementById('doc_type').value = 'Reimbursement';
            this.$router.push('../wrapper/form_view');
        },
        new_data: function new_data() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/report/backend/reimb_fetch.php', formData).then(function (response) {
                _this2.print_list = response.data;
                _this2.key = '';
            });
        },
        live_new_data: async function live_new_data() {
            var _this3 = this;

            this.list_ready = false;
            var formData = new FormData();
            formData.append('key', this.key);
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/report/backend/reimb_fetch.php', formData).then(function (response) {
                _this3.print_list = response.data;
            });
            this.list_ready = true;
        },
        view_reimb_records: function view_reimb_records() {
            this.$router.push('../reimbursement/view_record');
        },
        view_proc_records: function view_proc_records() {
            this.$router.push('../procurement/view_proc');
        }
    }
};

/***/ }),

/***/ 1536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0","margin-bottom":"1em"}},[_c('label',[_vm._v("Department")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_data]}},_vm._l((_vm.dept_list),function(d){return _c('option',{domProps:{"value":d.dept_id}},[_vm._v(_vm._s(d.full_dept))])}),0)]),_vm._v(" "),_c('div',{staticClass:"col-1"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Start Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.st)},on:{"change":_vm.new_data,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("End Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.ed)},on:{"change":_vm.new_data,"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-right":"0"}},[_c('label',[_vm._v("Live Search")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Search Key"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.live_new_data,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})])]),_vm._v(" "),(_vm.list_ready)?_c('div',{staticClass:"col-12",domProps:{"innerHTML":_vm._s(_vm.print_list)}},[_vm._v("\n        "+_vm._s(_vm.print_list)+"\n    ")]):_vm._e(),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"trigger_view_reimb_recur"},on:{"click":_vm.view_reimb}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"trigger_view_proc"},on:{"click":_vm.view_proc_records}})]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_vue__ = __webpack_require__(1251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_80082eac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_report_vue__ = __webpack_require__(1536);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_80082eac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_report_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=108.build.js.map