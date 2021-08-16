webpackJsonp([66],{

/***/ 1225:
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

exports.default = {
    data: function data() {
        return {
            key: '',
            st: '',
            ed: '',
            data: [],
            ready: false
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            var user_check = '';
            user_check = response.data[0].signed;
            if (!(user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
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
        edit_reimb_record: function edit_reimb_record(tag) {
            document.getElementById('tmp_id').value = tag;
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            this.$router.push('edit_reimb_record');
        },
        scrollTop: function scrollTop() {
            document.getElementById('top_page').scrollIntoView();
        },
        update_period: async function update_period() {
            this.ed = parseInt(this.st) + 1;
            this.$forceUpdate();
            await this.fetch_info();
        },
        view_form: function view_form(tag) {
            document.getElementById('tmp_id').value = tag;
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            document.getElementById('doc_type').value = 'Reimbursement';
            this.$router.push('../wrapper/form_view');
        },
        fetch_info: async function fetch_info() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('key', this.key);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/reimbursement/backend/fetch_my_reimb.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.data = response.data;
                } else {
                    _this2.data = [];
                }
            });
        }
    }
};

/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1465);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("275ddd29", content, true, {});

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-e5446646]{display:flex;flex-direction:row}.px0[data-v-e5446646]{padding-left:0;padding-right:0}.pl0[data-v-e5446646]{padding-left:0}.pr0[data-v-e5446646]{padding-right:0}td[data-v-e5446646],th[data-v-e5446646]{font-size:14px!important;border:1px solid #fff}td[data-v-e5446646]{font-size:1rem!important}td[data-v-e5446646],th[data-v-e5446646]{vertical-align:top}.approved[data-v-e5446646]{color:#1bd615}.approved[data-v-e5446646],.pending[data-v-e5446646]{text-transform:capitalize;font-size:1rem}.inner_row[data-v-e5446646]{height:3rem}.cancelled[data-v-e5446646],.rejected[data-v-e5446646]{color:red;text-transform:capitalize;font-size:1rem}a[data-v-e5446646],u[data-v-e5446646]{cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 1466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"height":"87.5vh"}},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"form-group",attrs:{"id":"top_page"}},[_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("Search Record")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Record"},domProps:{"value":(_vm.key)},on:{"keyup":function($event){return _vm.fetch_info()},"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"}),_vm._v(" "),_c('div',{staticClass:"col-3 px0"},[_c('label',[_vm._v("School Year")]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-6 flex pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":function($event){return _vm.update_period()},"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6 flex pr0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])])]),_vm._v(" "),_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.data.length),function(l){return _c('tr',{staticStyle:{"font-size":"1rem!important"}},[_c('td',{staticStyle:{"font-size":"1rem!important"}},[((_vm.data[l-1].approve_status=='pending')&&(_vm.data[l-1].system_stat=='enable')&&(_vm.data[l-1].dept!='Med'))?_c('u',{on:{"click":function($event){return _vm.edit_reimb_record(_vm.data[l-1].tag)}}},[_vm._v("Edit")]):_vm._e()]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].tag.toUpperCase()))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].date_app))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].proc_id))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].dept_full))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].receiver_name))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].item.length),function(item){return _c('div',{staticClass:"inner_row"},[_vm._v("\n                            "+_vm._s(_vm.data[l-1].item[item-1].nature)+"\n                        ")])}),0),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].item.length),function(item){return _c('div',{staticClass:"inner_row"},[_vm._v("\n                            "+_vm._s(_vm.data[l-1].item[item-1].fundsrc)+"\n                        ")])}),0),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},_vm._l((_vm.data[l-1].item.length),function(item){return _c('div',{staticClass:"inner_row"},[_vm._v("\n                            "+_vm._s(_vm.data[l-1].item[item-1].amount)+"\n                        ")])}),0),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[_vm._v(_vm._s(_vm.data[l-1].approve_status))]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"1rem!important"}},[(_vm.data[l-1].system_stat=='enable')?_c('a',{on:{"click":function($event){return _vm.view_form(_vm.data[l-1].tag)}}},[_c('u',[_vm._v("View")])]):_vm._e(),_vm._v(" "),(_vm.data[l-1].system_stat=='req')?_c('a',[_vm._v("To Be Processed")]):_vm._e()])])}),0)])]),_vm._v(" "),_c('div',{staticClass:"corner_nav"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"corner_item",on:{"click":_vm.scrollTop}},[_c('i',{staticClass:"fa fa-2x fa-arrow-up",staticStyle:{"color":"rgba(255,255,255,0.9)"}})])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticStyle:{"background-color":"rgb(238,28,37)"}},[_c('tr',[_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Action")]),_vm._v(" "),_c('th',{staticStyle:{"width":"5%!important","vertical-align":"top"}},[_vm._v("ID")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Date")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Procurement ID")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Department")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Recipient")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Item Description")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Fund Source")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Amount HK$")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Status")]),_vm._v(" "),_c('th',{staticStyle:{"vertical-align":"top"}},[_vm._v("Form")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_reimb_records_vue__ = __webpack_require__(1225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_reimb_records_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_reimb_records_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_reimb_records_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_reimb_records_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5446646_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_reimb_records_vue__ = __webpack_require__(1466);
function injectStyle (ssrContext) {
  __webpack_require__(1464)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e5446646"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_reimb_records_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5446646_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_reimb_records_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=66.build.js.map