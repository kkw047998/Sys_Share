webpackJsonp([82],{

/***/ 1206:
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

exports.default = {
    data: function data() {
        return {
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Fund', value: 'name', sortable: false }],
            dept_list: [],
            dept: '',
            dept_ready: false,
            fundlist: [],
            st: '',
            ed: '',
            insert_fund_name: '',
            fund_current: 'Regular',
            fund_type: ['Regular', 'Special'],
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
            if (perm.proc_level < 3) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/department/backend/dept_member_head.php').then(function (response) {
            _this.dept_list = response.data;
            var query_dpt = document.getElementById('query').value;
            if (query_dpt != undefined && query_dpt != '') {
                _this.dept = query_dpt;
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
        formData.append('type', this.fund_current);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        await axios.post('Procurement/department/backend/fundlist.php', formData).then(function (response) {
            _this.fundlist = response.data;
        });
    },

    methods: {
        update_period: async function update_period() {
            this.ed = parseInt(this.st) + 1;
            this.$forceUpdate();
            await this.new_list();
        },
        carry: function carry() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('type', this.fund_current);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/department/backend/carry_fund.php', formData).then(function (response) {
                if (response.data == "OK") {
                    _this2.$alert("Successfully carried funding sources to " + parseInt(_this2.st) + 1 + ' - ' + parseInt(_this2.ed) + 1).then(function () {
                        _this2.new_list();
                    });
                }
            });
        },
        new_list: function new_list(event) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('type', this.fund_current);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/department/backend/fundlist.php', formData).then(function (response) {
                _this3.fundlist = response.data;
            });
        },
        new_fund_insert: function new_fund_insert(event) {
            var _this4 = this;

            var formData = new FormData();
            formData.append('fund', this.insert_fund_name);
            formData.append('dept', this.dept);
            formData.append('type', this.fund_current);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/department/backend/new_fund.php', formData).then(function (response) {
                _this4.fundlist = response.data;
            });
            this.insert_fund_name = '';
        },
        remove: function remove() {
            var _this5 = this;

            var targetID = event.currentTarget.id;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('type', this.fund_current);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('id', targetID);
            axios.post('Procurement/department/backend/remove_fund.php', formData).then(function (response) {
                _this5.fundlist = response.data;
            });
        }
    }
};

/***/ }),

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1414);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("086ed3a6", content, true, {});

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-d37e4a00]{display:flex;flex-direction:row}.px0[data-v-d37e4a00]{padding-left:0;padding-right:0}.pl0[data-v-d37e4a00]{padding-left:0}.pr0[data-v-d37e4a00]{padding-right:0}", ""]);

// exports


/***/ }),

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',{domProps:{"value":dep.deptmentid}},[_vm._v(_vm._s(dep.department))])}),0):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('button',{staticClass:"form-control",on:{"click":function($event){return _vm.carry()}}},[_vm._v("Carry fundings")])]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"margin-left":"auto","display":"flex","flex-direction":"row","padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-6"}),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('label',[_vm._v("School Year")]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-6 pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":_vm.update_period,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6 pr0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.fundlist,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.remove($event)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}])}),_c('br'),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-4 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.insert_fund_name),expression:"insert_fund_name"}],staticClass:"form-control",attrs:{"type":"text","maxlength":"35","placeholder":"Insert New Fund"},domProps:{"value":(_vm.insert_fund_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.insert_fund_name=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"}),_vm._v(" "),_c('div',{staticClass:"col-3 px0"},[_c('div',{staticClass:"col-12 pr0"},[_c('div',{staticClass:"col-12 pr0"},[_c('input',{staticClass:"form-control",attrs:{"type":"button","value":"Insert"},on:{"click":_vm.new_fund_insert}})])])])])])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fund_vue__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fund_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fund_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fund_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fund_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d37e4a00_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fund_vue__ = __webpack_require__(1415);
function injectStyle (ssrContext) {
  __webpack_require__(1413)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d37e4a00"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fund_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d37e4a00_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fund_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=82.build.js.map