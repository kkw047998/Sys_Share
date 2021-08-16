webpackJsonp([62],{

/***/ 1235:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            checkCCA: false,
            indept: false,
            user_check: false,
            dept_ready: false,
            dept_list: [],
            ready: false,
            data: [],
            dept: '',
            key: '',
            stat: 'active',
            st: '',
            ed: ''

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
            if (perm.proc_level < 2) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/department/backend/dept_member.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].deptmentid;
            _this.dept_ready = true;
            var i = 0;
            for (i = 0; i < _this.dept_list.length; i++) {
                if (_this.dept_list[i].deptmentid == 'CCA') {
                    _this.checkCCA = true;
                }
            }
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = st[0];
            _this.ed = parseInt(ed[0]);
        });
        var query = document.getElementById('tmp_id').value;
        if (query != '' && query != null && query != undefined) {
            var dpt = document.getElementById('tmp_id_2').value;
            if (dpt != '' && dpt != null && dpt != undefined) {
                this.dept = document.getElementById('tmp_id_2').value;
                this.key = query;
            }
        }
        document.getElementById('tmp_id_2').value = '';
        document.getElementById('tmp_id').value = '';
        await this.fetch_info();
        this.ready = true;
    },
    mounted: function mounted() {
        window.addEventListener('focus', this.fetch_info);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('focus', this.fetch_info);
    },

    methods: {
        scrollTop: function scrollTop() {
            document.getElementById('top_page').scrollIntoView();
        },
        update_period: async function update_period() {
            this.ed = parseInt(this.st) + 1;
            this.$forceUpdate();
            await this.fetch_info();
        },
        cancel_reimb_record: function cancel_reimb_record(id) {
            var _this2 = this;

            document.getElementById('tmp_id').value = id;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('tag', id);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            this.$confirm('Confirm Cancel Record : ' + id + '?').then(function () {
                axios.post('Procurement/reimbursement/backend/cancelreimb_v2.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this2.$alert("Successfully Cancelled Record :" + id).then(function () {
                            _this2.fetch_info();
                        });
                        //location.reload();
                    } else {
                        _this2.$alert(response.data);
                    }
                });
            });
        },
        newplan: function newplan() {
            this.$router.push('reimbursement_form');
        },
        view_form: function view_form(tag) {
            document.getElementById('tmp_id').value = tag;
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            document.getElementById('doc_type').value = 'Reimbursement';
            this.$router.push('../wrapper/form_view');
        },
        edit_reimb_record: function edit_reimb_record(tag) {
            document.getElementById('tmp_id').value = tag;
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            this.$router.push('edit_reimb_record');
        },
        fetch_info: async function fetch_info() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('stat', this.stat);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            await axios.post('Procurement/reimbursement/backend/reimb_json.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.data = response.data;
                } else {
                    _this3.data = [];
                }
            });
        }
    }
};

/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1495);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("17ffbad2", content, true, {});

/***/ }),

/***/ 1495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-319b1bac]{display:flex;flex-direction:row}.px0[data-v-319b1bac]{padding-left:0;padding-right:0}.pl0[data-v-319b1bac]{padding-left:0}.pr0[data-v-319b1bac]{padding-right:0}td[data-v-319b1bac],th[data-v-319b1bac]{font-size:14px!important;border:1px solid #fff}td[data-v-319b1bac]{font-size:1rem!important}td[data-v-319b1bac],th[data-v-319b1bac]{vertical-align:top}.approved[data-v-319b1bac]{color:#1bd615}.approved[data-v-319b1bac],.pending[data-v-319b1bac]{text-transform:capitalize;font-size:1rem}.cancelled[data-v-319b1bac],.rejected[data-v-319b1bac]{color:red;text-transform:capitalize;font-size:1rem}a[data-v-319b1bac],u[data-v-319b1bac]{cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"height":"87.5vh"}},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"form-group",attrs:{"id":"top_page"}},[_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-3 px0"},[_c('div',{staticClass:"col-12 px0"},[_c('label',[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetch_info()}]}},[_vm._l((_vm.dept_list),function(dep){return _c('option',{domProps:{"value":dep.deptmentid}},[_vm._v(_vm._s(dep.department))])}),_vm._v(" "),(_vm.checkCCA==false)?_c('option',{attrs:{"value":"CCA"}},[_vm._v("Co-curricular Activity Committee")]):_vm._e()],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0",staticStyle:{"margin-top":"0.4em"}},[_c('div',{staticClass:"col-6 pl0"},[_c('button',{staticClass:"form-control",attrs:{"type":"button"},on:{"click":_vm.newplan}},[_vm._v("New")])]),_vm._v(" "),_c('div',{staticClass:"col-6 pr0"},[(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.stat),expression:"stat"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.stat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetch_info()}]}},[_c('option',{attrs:{"value":"*"}},[_vm._v("All Records")]),_vm._v(" "),_c('option',{attrs:{"value":"active"}},[_vm._v("Active Records")]),_vm._v(" "),_c('option',{attrs:{"value":"rejected"}},[_vm._v("Rejected Records")]),_vm._v(" "),_c('option',{attrs:{"value":"cancelled"}},[_vm._v("Cancelled Records")])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"col-6"}),_vm._v(" "),_c('div',{staticClass:"col-3 px0"},[_c('div',{staticClass:"col-12 px0"},[_c('label',[_vm._v("Search Record")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Record"},domProps:{"value":(_vm.key)},on:{"keyup":function($event){return _vm.fetch_info()},"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0",staticStyle:{"margin-top":"0.4em"}},[_c('div',{staticClass:"col-6 flex pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":function($event){return _vm.update_period()},"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6 flex pr0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])])]),_vm._v(" "),_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.data.length),function(l){return _c('tr',{staticStyle:{"font-size":"1rem!important"}},[_c('td',{staticStyle:{"font-size":"1rem!important"}},[_c('div',[(_vm.data[l-1].editable)?_c('u',{on:{"click":function($event){return _vm.edit_reimb_record(_vm.data[l-1].tag)}}},[_vm._v("Edit")]):_vm._e()]),_vm._v(" "),_c('div',[(_vm.data[l-1].editable)?_c('u',{on:{"click":function($event){return _vm.cancel_reimb_record(_vm.data[l-1].tag)}}},[_vm._v("Cancel")]):_vm._e()])]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].tag.toUpperCase()))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].date_app))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].proc_id))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].recipient))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].item.length),function(c){return _c('div',{staticClass:"inner_row"},[_vm._v("\n                            "+_vm._s(_vm.data[l-1].item[c-1])+"\n                        ")])}),0),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].fundsrc.length),function(f){return _c('div',{staticClass:"inner_row"},[_vm._v("\n                            "+_vm._s(_vm.data[l-1].fundsrc[f-1])+"\n                        ")])}),0),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].amount.length),function(a){return _c('div',{staticClass:"inner_row"},[_vm._v("\n                            "+_vm._s(_vm.data[l-1].amount[a-1])+"\n                        ")])}),0),_vm._v(" "),_c('td',{class:_vm.data[l-1].approve_status},[_vm._v(_vm._s(_vm.data[l-1].approve_status))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[((_vm.data[l-1].system_stat=='enable')&&(!_vm.data[l-1].isHead))?_c('u',{on:{"click":function($event){return _vm.view_form(_vm.data[l-1].tag)}}},[_vm._v("View")]):_vm._e(),_vm._v(" "),((_vm.data[l-1].system_stat=='enable')&&(_vm.data[l-1].isHead))?_c('u',{on:{"click":function($event){return _vm.view_form(_vm.data[l-1].tag)}}},[_vm._v("Endorse")]):_vm._e(),_vm._v(" "),(_vm.data[l-1].system_stat=='req')?_c('u',[_vm._v("To Be Processed")]):_vm._e()]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].pdf.length),function(p){return _c('div',[_c('a',{attrs:{"href":_vm.data[l-1].pdf[p-1],"target":"_blank"}},[_vm._v("•"),_c('u',[_vm._v(_vm._s(_vm.data[l-1].pdf_file_name[p-1]))])])])}),0)])}),0)])]),_vm._v(" "),_c('div',{staticClass:"corner_nav"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"corner_item",on:{"click":_vm.scrollTop}},[_c('i',{staticClass:"fa fa-2x fa-arrow-up",staticStyle:{"color":"rgba(255,255,255,0.9)"}})])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticStyle:{"background-color":"rgb(238,28,37)"}},[_c('tr',[_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Action")]),_vm._v(" "),_c('th',{staticStyle:{"width":"5%!important","vertical-align":"top"}},[_vm._v("ID")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Date")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Procurement ID")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Recipient")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Item Description")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Fund Source")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Amount HK$")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Status")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Form")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Related File(s)")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_records_vue__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_records_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_records_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_records_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_records_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_319b1bac_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_records_vue__ = __webpack_require__(1496);
function injectStyle (ssrContext) {
  __webpack_require__(1494)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-319b1bac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reimb_records_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_319b1bac_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reimb_records_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=62.build.js.map