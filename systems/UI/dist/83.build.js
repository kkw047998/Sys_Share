webpackJsonp([83],{

/***/ 1208:
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

exports.default = {
    data: function data() {
        return {
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
            ftl: 'Regular'
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
            var prev = document.getElementById('query').value;
            if (prev != '' && prev != null && prev != undefined) {
                _this.dept = prev;
            } else {
                _this.dept = _this.dept_list[0].deptmentid;
            }
            _this.dept_ready = true;
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = st[0];
            _this.ed = parseInt(ed[0]);
        });
        var formData = new FormData();
        formData.append('dept', this.dept);
        formData.append('type', this.ftl);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        await axios.post('Procurement/budget/backend/printlist.php', formData).then(function (response) {
            _this.printlist = response.data;
        });
    },

    methods: {
        update_period: async function update_period() {
            this.ed = parseInt(this.st) + 1;
            this.$forceUpdate();
            await this.search_list();
        },
        search_list: function search_list(event) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            axios.post('Procurement/budget/backend/printlist_search.php', formData).then(function (response) {
                _this2.printlist = response.data;
            });
        },
        new_list: function new_list(event) {
            var _this3 = this;

            document.getElementById('query').value = this.dept;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('type', this.ftl);
            axios.post('Procurement/budget/backend/printlist_search.php', formData).then(function (response) {
                _this3.printlist = response.data;
                _this3.key = '';
            });
        },
        export_dept: function export_dept() {
            var formData = new FormData();
            formData.append('export', 'export');
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/budget/backend/export.php', formData);
        },
        newplan: function newplan() {
            document.getElementById('query').value = this.dept;
            this.$router.push('create_bp');
        }
    }
};

/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1418);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d9e019b6", content, true, {});

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "td[data-v-501efc52]:last-child{border-bottom:2px solid #fff!important}.flex[data-v-501efc52]{display:flex;flex-direction:row}.px0[data-v-501efc52]{padding-left:0;padding-right:0}.pl0[data-v-501efc52]{padding-left:0}.pr0[data-v-501efc52]{padding-right:0}", ""]);

// exports


/***/ }),

/***/ 1419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0"}},[_c('div',{staticClass:"col-6 px0"},[_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-6 px0"},[_c('label',[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',{domProps:{"value":dep.deptmentid}},[_vm._v(_vm._s(dep.department))])}),0):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-6 flex px0"},[_c('div',{staticClass:"col-6 pl0"},[_c('button',{staticClass:"form-control",staticStyle:{"margin-top":"0.35rem"},attrs:{"type":"button"},on:{"click":_vm.newplan}},[_vm._v("New")])]),_vm._v(" "),_vm._m(0)])])]),_vm._v(" "),_c('div',{staticClass:"col-4 pr0",staticStyle:{"margin-left":"auto"}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Record"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_list,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0",staticStyle:{"padding-top":"0.35rem"}},[_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":_vm.update_period,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0","font-size":"1rem!important"},attrs:{"data-app":""}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.printlist)}},[_vm._v("\n                        "+_vm._s(_vm.printlist)+"\n                    ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"col-6 pr0",attrs:{"method":"post","action":"src/Procurement/budget/backend/export.php"}},[_c('input',{attrs:{"type":"hidden","name":"export","value":"n"}}),_vm._v(" "),_c('button',{staticClass:"form-control",staticStyle:{"margin-top":"0.35rem"},attrs:{"type":"submit"}},[_vm._v("Export")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12"},[_c('label',[_vm._v("Filter(s)")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_budget_vue__ = __webpack_require__(1208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_budget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_budget_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_budget_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_budget_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_501efc52_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_budget_vue__ = __webpack_require__(1419);
function injectStyle (ssrContext) {
  __webpack_require__(1417)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-501efc52"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_budget_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_501efc52_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_budget_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=83.build.js.map