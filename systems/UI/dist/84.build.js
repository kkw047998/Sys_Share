webpackJsonp([84],{

/***/ 1213:
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

exports.default = {
    data: function data() {
        return {
            show_child: [],
            dept: '',
            dept_list: [],
            ready: false,
            selected_st: 0,
            selected_ed: 0,
            target_st: '',
            target_ed: '',
            data: [],
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
        await axios.get('Procurement/shared_backend/fetch_dept.php').then(function (response) {
            _this.dept_list = response.data;
            var prev = document.getElementById('query').value;
            if (prev != '' && prev != null && prev != undefined) {
                _this.dept = prev;
            } else {
                var i = 0;
                var hv_inlist = false;
                for (i = 0; i < _this.dept_list.length; i++) {
                    if (_this.dept_list[i].in_dept > 0) {
                        _this.dept = _this.dept_list[i].dept_id;
                        hv_inlist = true;
                    }
                }
                if (!hv_inlist) {
                    _this.$alert("Permission denined, not belong to any main department/committee").then(function () {
                        _this.$router.go(-1);
                    });
                }
            }
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st;
            var ed = response.data.ed;
            var st_yr = st.split("-");
            _this.selected_st = parseInt(st_yr[0]);
            _this.target_st = parseInt(st_yr[0]) + 1;
            var ed_yr = ed.split("-");
            _this.selected_ed = _this.selected_st + 1;
            _this.target_ed = _this.target_st + 1;
        });
        await this.fetch_data();
        this.ready = true;
    },

    methods: {
        scrollTop: function scrollTop() {
            document.getElementById('top_page').scrollIntoView();
        },
        display_content: function display_content(status) {
            var dp_content = '';
            switch (status) {
                case 'approve_principal':
                    dp_content = 'Approved by Principal';
                    break;
                case 'approve_head':
                    dp_content = 'Approved by Head';
                    break;
                case 'waiting':
                    dp_content = 'Pending';
                    break;
            }
            return dp_content;
        },
        change_child_dp: function change_child_dp(id) {
            if (this.show_child[id] == false) {
                this.show_child[id] = true;
            } else {
                this.show_child[id] = false;
            }
            this.$forceUpdate();
        },
        update_ed: function update_ed(mode) {
            switch (mode) {
                case "from":
                    this.selected_ed = parseInt(this.selected_st) + 1;
                    break;
                case "to":
                    this.target_ed = parseInt(this.target_st) + 1;
                    break;
            }
            this.fetch_data();
        },
        fetch_data: async function fetch_data() {
            var _this2 = this;

            document.getElementById('query').value = this.dept;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('from_st', this.selected_st);
            formData.append('from_ed', this.selected_ed);
            formData.append('to_st', this.target_st);
            formData.append('to_ed', this.target_ed);
            await axios.post('Procurement/budget/backend/printlist_json.php', formData).then(function (response) {
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

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1433);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("17aa5eca", content, true, {});

/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-b48b4412]{padding-left:0;padding-right:0}.flex[data-v-b48b4412]{display:flex;flex-direction:row}.lower_part[data-v-b48b4412]{margin-top:1rem}.asset_bar[data-v-b48b4412]{color:#fff;background-color:#ee1c25;border-bottom:2.5px solid #fff;cursor:pointer;transition:.3s;font-weight:600}.asset_bar[data-v-b48b4412]:hover{background-color:#9c0a0e!important}.inner_item[data-v-b48b4412]{height:2rem}td[data-v-b48b4412]{border:1px solid #fff}.approve_principal[data-v-b48b4412]{color:green}.approve_head[data-v-b48b4412]{color:blue}", ""]);

// exports


/***/ }),

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"height":"87.5vh"}},[_c('div',{staticClass:"col-12 px0",attrs:{"id":"top_page"}},[_c('div',{staticClass:"upper_part"},[_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-3 px0"},[_c('label',[_vm._v("Select Department")]),_vm._v(" "),_c('div',{staticClass:"col-12 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetch_data()}]}},_vm._l((_vm.dept_list),function(d){return (d.in_dept!=0)?_c('option',{domProps:{"value":d.dept_id}},[_vm._v(_vm._s(d.full_dept))]):_vm._e()}),0)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-3 px0"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_st),expression:"selected_st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.selected_st)},on:{"change":function($event){return _vm.update_ed('from')},"input":function($event){if($event.target.composing){ return; }_vm.selected_st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_ed),expression:"selected_ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.selected_ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.selected_ed=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"lower_part"},[_c('div',{staticClass:"col-12 px0"},[_c('table',{staticClass:"table table-striped first-td-padding",staticStyle:{"font-size":"0.875rem!important"}},[_vm._m(2),_vm._v(" "),_vm._l((_vm.data.length),function(l){return _c('tbody',[_c('tr',{staticClass:"asset_bar",staticStyle:{"background-color":"rgb(238,28,37)"},on:{"click":function($event){return _vm.change_child_dp(l-1)}}},[_c('td',{attrs:{"colspan":"7"}},[_vm._v(_vm._s(_vm.data[l-1].ref_id)+". "+_vm._s(_vm.data[l-1].asset))])]),_vm._v(" "),_vm._l((_vm.data[l-1].item.length),function(n){return (_vm.data[l-1].item[0].tag!=null)?_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.show_child[l-1]!=false),expression:"show_child[l-1]!=false"}]},[_c('td',[_vm._v(_vm._s(_vm.data[l-1].item[n-1].tag))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.data[l-1].item[n-1].description[0]))]),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].cost_unit.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].cost_unit[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].quantity.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].quantity[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].cost_total.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].cost_total[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].fundsrc.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].fundsrc[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',{class:_vm.data[l-1].item[n-1].status[0]},[_vm._v(_vm._s(_vm.display_content(_vm.data[l-1].item[n-1].status[0])))])]):_vm._e()})],2)})],2)])])]),_vm._v(" "),_c('div',{staticClass:"corner_nav"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"corner_item",on:{"click":_vm.scrollTop}},[_c('i',{staticClass:"fa fa-2x fa-arrow-up",staticStyle:{"color":"rgba(255,255,255,0.9)"}})])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2 px0"},[_c('div',[_c('label',[_vm._v(" "),_c('label')])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('form',{attrs:{"method":"post","action":"src/Procurement/budget/backend/export.php"}},[_c('input',{attrs:{"type":"hidden","name":"export","value":"n"}}),_vm._v(" "),_c('button',{staticClass:"form-control",attrs:{"type":"submit"}},[_vm._v("Export")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('label',[_vm._v("School Year")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',{staticStyle:{"background-color":"rgb(238,28,37)"}},[_c('th',{staticClass:"bp_th"},[_vm._v("ID")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Description")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Unit Cost")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Quantity")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Total Cost")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Source of Fund")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Status")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_bp_json_vue__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_bp_json_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_bp_json_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_bp_json_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_bp_json_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48b4412_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_bp_json_vue__ = __webpack_require__(1434);
function injectStyle (ssrContext) {
  __webpack_require__(1432)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b48b4412"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_bp_json_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48b4412_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_bp_json_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=84.build.js.map