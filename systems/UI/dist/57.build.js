webpackJsonp([57],{

/***/ 1252:
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
//
//
//
//
//
//
//
//
//
//
//
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
            st: '',
            ed: '',
            dept: '',
            key: '',
            ready: false,
            user_check: false,
            dept_ready: false,
            dept_list: [],
            data: []
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
        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
        });
        await axios.get('Procurement/shared_backend/fetch_dept.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].dept_id;
            _this.dept_ready = true;
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = st[0];
            _this.ed = parseInt(ed[0]);
        });
        await this.fetch_info();
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
            await this.fetch_info();
        },
        check_class: function check_class(id) {
            if (id != '') {
                return 'hv_proc';
            } else {
                return 'no_proc';
            }
        },
        view_proc: function view_proc(proc_id) {
            document.getElementById('tmp_id').value = proc_id;
            document.getElementById('st_tmp').value = this.st;
            document.getElementById('ed_tmp').value = this.ed;
            document.getElementById('doc_type').value = 'Procurement';
            this.$router.push('../wrapper/form_view');
        },
        view_reimb: function view_reimb(tag) {
            document.getElementById('tmp_id').value = tag;
            var st_val = this.st;
            //var st_array = st_val.split('-');
            //var st_month = st_array[0]+'-'+st_array[1];
            document.getElementById('st_tmp').value = st_val;

            var ed_val = this.ed;
            //var ed_array = ed_val.split('-');
            //var ed_month = ed_array[0]+'-'+ed_array[1];
            document.getElementById('ed_tmp').value = ed_val;
            document.getElementById('doc_type').value = 'Reimbursement';
            this.$router.push('../wrapper/form_view');
        },
        fetch_info: async function fetch_info() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            formData.append('dd', this.dd);
            axios.post('Procurement/report/backend/reimb_fetch_json.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.data = response.data;
                    _this2.$forceUpdate();
                } else {
                    _this2.data = [];
                }
            });
        }
    }
};

/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1538);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("61857728", content, true, {});

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".no_proc[data-v-78d5cdac]{pointer-events:none}.hv_proc[data-v-78d5cdac],.redirect[data-v-78d5cdac]{transition:.3s;cursor:pointer}.hv_proc[data-v-78d5cdac]:hover,.redirect[data-v-78d5cdac]:hover{background-color:rgba(183,245,181,.95)}th[data-v-78d5cdac]{vertical-align:top!important}td[data-v-78d5cdac],th[data-v-78d5cdac]{font-size:14px!important;border:1px solid #fff}.px0[data-v-78d5cdac]{padding-left:0;padding-right:0}.cancelled[data-v-78d5cdac],.rejected[data-v-78d5cdac]{color:red;text-transform:capitalize}.approved[data-v-78d5cdac]{color:green;text-transform:capitalize}.pending[data-v-78d5cdac]{text-transform:capitalize}", ""]);

// exports


/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"col-12 px0",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0","margin-bottom":"1em"}},[_c('label',[_vm._v("Department")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_info]}},_vm._l((_vm.dept_list),function(d){return _c('option',{domProps:{"value":d.dept_id}},[_vm._v(_vm._s(d.full_dept))])}),0)]),_vm._v(" "),_c('div',{staticClass:"col-5"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.dd),expression:"dd"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.dd)},on:{"change":function($event){return _vm.update_period()},"input":function($event){if($event.target.composing){ return; }_vm.dd=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('label',[_vm._v("Live Search")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Search Key"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.fetch_info,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})])]),_vm._v(" "),_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.data.length),function(l){return _c('tr',[_c('td',{staticClass:"redirect",on:{"click":function($event){return _vm.view_reimb(_vm.data[l-1].tag)}}},[_vm._v(_vm._s(_vm.data[l-1].tag.toUpperCase()))]),_vm._v(" "),_c('td',{class:_vm.check_class(_vm.data[l-1].proc_id),on:{"click":function($event){return _vm.view_proc(_vm.data[l-1].proc_id)}}},[_vm._v(_vm._s(_vm.data[l-1].proc_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.data[l-1].asset_cat))]),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item.length),function(n){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                        "+_vm._s(_vm.data[l-1].item[n-1])+"\n                    ")])}),0),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.data[l-1].fundsrc))]),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].amount.length),function(n){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                        "+_vm._s(_vm.data[l-1].amount[n-1])+"\n                    ")])}),0),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.data[l-1].fund_bal))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.data[l-1].asset_fund_bal))]),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].pdf.length),function(p){return _c('div',[_c('a',{attrs:{"href":_vm.data[l-1].pdf[p-1]}},[_vm._v("•"),_c('u',[_vm._v(_vm._s(_vm.data[l-1].pdf_name[p-1]))])])])}),0),_vm._v(" "),_c('td',{class:_vm.data[l-1].status},[_vm._v(_vm._s(_vm.data[l-1].status))])])}),0)])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Tag")]),_vm._v(" "),_c('th',[_vm._v("Procurement ID")]),_vm._v(" "),_c('th',[_vm._v("Asset Category")]),_vm._v(" "),_c('th',[_vm._v("Item")]),_vm._v(" "),_c('th',[_vm._v("Fund Source")]),_vm._v(" "),_c('th',[_vm._v("Amount")]),_vm._v(" "),_c('th',[_vm._v("Fund Balance")]),_vm._v(" "),_c('th',[_vm._v("Asset Balance")]),_vm._v(" "),_c('th',[_vm._v("Support Document")]),_vm._v(" "),_c('th',[_vm._v("Status")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_json_vue__ = __webpack_require__(1252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_json_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_json_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_json_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_json_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78d5cdac_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_report_json_vue__ = __webpack_require__(1539);
function injectStyle (ssrContext) {
  __webpack_require__(1537)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-78d5cdac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_report_json_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78d5cdac_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_report_json_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=57.build.js.map