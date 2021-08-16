webpackJsonp([110],{

/***/ 1250:
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

exports.default = {
    data: function data() {
        return {
            dd: '',
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

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        this.dd = today;
        await axios.get('Procurement/shared_backend/department.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].dept_id;
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = st[0];
            _this.ed = parseInt(ed[0]);
        });
        var formData = new FormData();
        formData.append('dept', this.dept);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        formData.append('dd', this.dd);
        await axios.post('Procurement/report/backend/budget_fetch.php', formData).then(function (response) {
            _this.print_list = response.data;
        });
        this.ready = true;
    },

    methods: {
        update_period: async function update_period() {
            var year = this.dd.substring(0, 4);
            var month = this.dd.substring(5, 7);
            var day = this.dd.substring(8, 10);
            if (month < 8) {
                this.st = parseInt(year) - 1;
                this.ed = parseInt(this.st) + 1;
            } else if (month > 7) {
                this.st = parseInt(year);
                this.ed = parseInt(this.st) + 1;
            }
            this.$forceUpdate();
            await this.new_data();
        },
        new_fund: async function new_fund() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/report/backend/dept_fund.php', formData).then(function (response) {
                _this2.fundlist = response.data;
            });
        },
        new_data: function new_data() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('dd', this.dd);
            axios.post('Procurement/report/backend/budget_fetch.php', formData).then(function (response) {
                _this3.print_list = response.data;
                _this3.key = '';
            });
            this.new_fund();
        },
        live_new_data: function live_new_data() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('key', this.key);
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('dd', this.dd);
            axios.post('Procurement/report/backend/budget_fetch.php', formData).then(function (response) {
                _this4.print_list = response.data;
            });
        }
    }
};

/***/ }),

/***/ 1535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0","margin-bottom":"1em"}},[_c('label',[_vm._v("Department")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_data]}},_vm._l((_vm.dept_list),function(d){return _c('option',{domProps:{"value":d.dept_id}},[_vm._v(_vm._s(d.full_dept))])}),0)]),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-5"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.dd),expression:"dd"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.dd)},on:{"change":_vm.update_period,"input":function($event){if($event.target.composing){ return; }_vm.dd=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12",domProps:{"innerHTML":_vm._s(_vm.print_list)}},[_vm._v("\n        "+_vm._s(_vm.print_list)+"\n    ")])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_budget_report_vue__ = __webpack_require__(1250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_budget_report_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_budget_report_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_budget_report_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_budget_report_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_270c3f7e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_budget_report_vue__ = __webpack_require__(1535);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_budget_report_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_270c3f7e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_budget_report_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=110.build.js.map