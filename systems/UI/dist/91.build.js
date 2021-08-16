webpackJsonp([91],{

/***/ 1211:
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
//
//
//
//
//
//
//
//
//
//
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
            processing: false,
            display_sub: false,
            fundlist: [],
            counter: 1,
            ready: false,
            dept: '',
            dept_list: [],
            fundsrc: [],
            cost: [],
            unit_cost: 0,
            quantity: 1,
            total_cost: 0,
            description: '',
            asset_list: [],
            asset_cat: '',
            st_yr: '',
            ed_yr: '',
            sub_dept_list: [],
            sub_dept: '',
            hv_sub_dept: false,
            new_asset: true,
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
            if (perm.proc_level < 1) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = parseInt(st[0]) + 1;
            _this.ed = parseInt(ed[0]) + 1;
        });
        await this.fetch_dept();
        var query_dpt = document.getElementById('query').value;
        if (query_dpt != undefined && query_dpt != '') {
            this.dept = query_dpt;
        }
        await this.fetch_sub_dept();
        await this.fetch_asset();
        await this.fetch_fund();
        this.asset_cat = 'new_asset_cat';
        this.ready = true;
    },

    methods: {
        fetch_dept_info: async function fetch_dept_info() {
            await this.fetch_sub_dept();
            await this.fetch_asset();
            await this.fetch_fund();
        },
        add_item: function add_item() {
            this.counter++;
            this.fundsrc[this.counter - 1] = this.fundlist[0].name;
        },
        remove_item: function remove_item() {
            this.counter--;
        },
        calculate: function calculate(mode) {
            switch (mode) {
                case 'unit':
                    this.total_cost = this.unit_cost * this.quantity;
                    if (this.counter == 1) {
                        this.cost[0] = this.total_cost;
                    }
                    break;
                case 'quantity':
                    this.total_cost = this.unit_cost * this.quantity;
                    if (this.counter == 1) {
                        this.cost[0] = this.total_cost;
                    }
                    break;
                case 'total':
                    this.unit_cost = this.total_cost / this.quantity;
                    if (this.counter == 1) {
                        this.cost[0] = this.total_cost;
                    }
                    break;
            }
            this.$forceUpdate();
        },
        update_period: async function update_period() {
            this.ed = parseInt(this.st) + 1;
            this.$forceUpdate();
            await this.fetch_fund();
        },
        handleSubmit: async function handleSubmit() {
            var _this2 = this;

            this.processing = true;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('sub_dept', this.sub_dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('asset', this.asset_cat);
            formData.append('description', this.description);
            formData.append('unit_cost', this.unit_cost);
            formData.append('quantity', this.quantity);
            formData.append('total', this.total_cost);
            formData.append('fundsrc', this.fundsrc);
            formData.append('fundcost', this.cost);
            formData.append('counter', this.counter);
            formData.append('new_asset', this.new_asset);
            var check_val = 0;
            var i = 0;
            for (i = 0; i < this.counter; i++) {
                check_val = check_val + parseFloat(this.cost[i]);
            }
            if (check_val == this.total_cost) {
                await axios.post('Procurement/budget/backend/create_budget.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this2.$alert('Successfully Created Budget Item').then(function () {
                            _this2.processing = false;
                        });
                        _this2.$router.push('view_bp_json');
                    }
                });
            } else {
                this.$alert('Please check input value(s)');
            }
        },
        return_prev: function return_prev() {
            this.$router.go(-1);
        },
        fetch_asset: async function fetch_asset() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/budget/backend/fetch_asset_dept.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.asset_list = response.data;
                    _this3.new_asset = false;
                    //this.asset_cat = this.asset_list[0].code;
                } else {
                    _this3.new_asset = true;
                }
            });
        },
        fetch_sub_dept: async function fetch_sub_dept() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            axios.post('Procurement/budget/backend/subdept.php', formData).then(function (response) {
                _this4.sub_dept_list = response.data;
                if (_this4.sub_dept_list == '') {
                    _this4.display_sub = false;
                    _this4.sub_dept = 'na';
                } else {
                    _this4.sub_dept = _this4.dept;
                    _this4.display_sub = true;
                }
            });
        },
        fetch_fund: async function fetch_fund() {
            var _this5 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/budget/backend/fetch_yr_fund.php', formData).then(function (response) {
                if (response.data == 'empty') {
                    _this5.$alert("Fundings not found for selected year, please create funding source.").then(function () {
                        _this5.$router.push('../department/fund');
                    });
                } else {
                    _this5.fundlist = response.data;
                    _this5.fundsrc[0] = response.data[0].name;
                }
            });
        },
        check_asset: async function check_asset() {},
        fetch_dept: async function fetch_dept() {
            var _this6 = this;

            await axios.get('Procurement/department/backend/dept_member.php').then(function (response) {
                _this6.dept_list = response.data;
                _this6.dept = _this6.dept_list[0].deptmentid;
            });
        }
    }
};

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1427);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("76159e3b", content, true, {});

/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-2621bd8f]{display:flex;flex-direction:row}.px0[data-v-2621bd8f]{padding-left:0;padding-right:0}.col-12.flex.px0[data-v-2621bd8f]{margin-bottom:1rem}.fa-minus[data-v-2621bd8f]{color:#ee1c25;transition:.35s;cursor:pointer}.fa-minus[data-v-2621bd8f]:hover{color:#9c0a10}.fa-plus[data-v-2621bd8f]{color:#3fa641;transition:.35s;cursor:pointer}.fa-plus[data-v-2621bd8f]:hover{color:#29802a}", ""]);

// exports


/***/ }),

/***/ 1428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('form',{staticClass:"col-12",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit()}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Select Department\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetch_dept_info()}]}},_vm._l((_vm.dept_list),function(d){return _c('option',{domProps:{"value":d.deptmentid}},[_vm._v(_vm._s(d.department))])}),0)])]),_vm._v(" "),(_vm.sub_dept!='na')?_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Select Sub Department\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sub_dept),expression:"sub_dept"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sub_dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{domProps:{"value":_vm.dept}},[_vm._v("N/A")]),_vm._v(" "),_vm._l((_vm.sub_dept_list),function(sd){return _c('option',{domProps:{"value":sd.subdept}},[_vm._v(_vm._s(sd.subdept_full))])})],2)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        School Year\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8 flex px0"},[_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":_vm.update_period,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])]),_vm._v(" "),(_vm.new_asset==false)?_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Asset Category\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.asset_cat),expression:"asset_cat"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.asset_cat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_vm._l((_vm.asset_list),function(a){return _c('option',{domProps:{"value":a.code}},[_vm._v(_vm._s(a.name))])}),_vm._v(" "),_c('option',{attrs:{"value":"new_asset_cat"}},[_vm._v("New Asset Category")])],2)])]):_vm._e(),_vm._v(" "),(_vm.new_asset)?_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Asset Category\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n                        New Asset Category\n                    ")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Description\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",staticStyle:{"resize":"none"},attrs:{"rows":"2","cols":"80","maxlength":"160","placeholder":"Enter Description","required":""},domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Unit Cost\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit_cost),expression:"unit_cost"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","min":"0.01","required":""},domProps:{"value":(_vm.unit_cost)},on:{"change":function($event){return _vm.calculate('unit')},"input":function($event){if($event.target.composing){ return; }_vm.unit_cost=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Quantity\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.quantity),expression:"quantity"}],staticClass:"form-control",attrs:{"type":"number","step":"1","min":"1","required":""},domProps:{"value":(_vm.quantity)},on:{"change":function($event){return _vm.calculate('quantity')},"input":function($event){if($event.target.composing){ return; }_vm.quantity=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Total Amount\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.total_cost),expression:"total_cost"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","min":"0.01","required":""},domProps:{"value":(_vm.total_cost)},on:{"change":function($event){return _vm.calculate('total')},"input":function($event){if($event.target.composing){ return; }_vm.total_cost=$event.target.value}}})])]),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._l((_vm.counter),function(c){return _c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-3"},[_vm._v("\n                        Fund Source "+_vm._s(c)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-1",staticStyle:{"text-align":"right","padding-top":"0.3rem"}},[(c==1)?_c('i',{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"},on:{"click":_vm.add_item}}):_vm._e(),_vm._v(" "),(c>1)?_c('i',{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"},on:{"click":_vm.remove_item}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 flex px0"},[_c('div',{staticClass:"col-6"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fundsrc[c-1]),expression:"fundsrc[c-1]"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fundsrc, c-1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fundlist),function(f){return _c('option',[_vm._v(_vm._s(f.name))])}),0)]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cost[c-1]),expression:"cost[c-1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","min":"0.01","required":""},domProps:{"value":(_vm.cost[c-1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.cost, c-1, $event.target.value)}}})])])])})],2),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n                ")])])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Draft Budget Plan")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12"},[_c('label',[_c('b',[_c('u',[_vm._v("Section 1. General Information")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12"},[_c('label',[_c('b',[_c('u',[_vm._v("Section 2. Budget Information")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12"},[_c('label',[_c('b',[_c('u',[_vm._v("Section 3. Details")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_bp_vue__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_bp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_bp_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_bp_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_bp_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2621bd8f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_bp_vue__ = __webpack_require__(1428);
function injectStyle (ssrContext) {
  __webpack_require__(1426)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2621bd8f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_bp_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2621bd8f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_bp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=91.build.js.map