webpackJsonp([93],{

/***/ 1202:
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

exports.default = {
    data: function data() {
        return {
            ready: false,
            mode: 'main',
            maindept: '',
            loc_data: [],
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Department', value: 'full_dept', sortable: false }, { text: 'Department Code', value: 'dept_id', sortable: false }],
            headers_sub: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Sub-Department', value: 'full_dept', sortable: false }, { text: 'Sub-Department Code', value: 'dept_id', sortable: false }],
            loc_key: '',
            new_dept: '',
            new_dept_id: '',
            new_subdept: '',
            new_subdept_id: '',
            dept: [],
            subdept_list: [],
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
            if (perm.proc_level < 4) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await this.fetch_dept();
        await this.fetch_sub();
        this.ready = true;
    },

    methods: {
        fetch_dept: async function fetch_dept() {
            var _this2 = this;

            await axios.get('Procurement/shared_backend/fetch_dept.php').then(function (response) {
                if (response.data != 'empty') {
                    _this2.dept = response.data;
                    _this2.maindept = response.data[0].dept_id;
                    _this2.dept.id = response.data.id;
                    _this2.dept.full_dep = response.data.full_dept;
                    _this2.dept.dept_id = response.data.dept_id;
                } else {
                    _this2.dept = [];
                }
            });
        },
        select_mode: function select_mode(mode) {
            this.mode = mode;
        },
        display_title: function display_title() {
            if (this.mode == 'main') {
                return 'Department Setting(s)';
            }
            if (this.mode == 'sub') {
                return 'Sub-Department Setting(s)';
            }
        },
        fetch_sub: function fetch_sub() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('maindept', this.maindept);
            axios.post("Procurement/shared_backend/fetch_sub_dept.php", formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.subdept_list = response.data;
                } else {
                    _this3.subdept_list = [];
                }
            });
        },
        remove: function remove(target) {
            var _this4 = this;

            var formData = new FormData();
            this.$confirm("Confirm deleting department/committee :" + target.full_dept + ' ?').then(function () {
                formData.append('dept_id', target.dept_id);
                formData.append('id', target.id);
                axios.post('Procurement/admin/backend/remove_department.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this4.$alert("Successfully deleted " + target.dept_id).then(function () {
                            _this4.fetch_dept();
                        });
                    } else {
                        _this4.$alert(response.data);
                    }
                });
            });
        },
        searchloc: function searchloc() {
            var _this5 = this;

            var formData = new FormData();
            var key = this.loc_key;
            formData.append('code', key);
            axios.post('Procurement/admin/backend/search_department.php', formData).then(function (response) {
                _this5.dept = response.data;
                _this5.dept.id = response.data.id;
                _this5.dept.full_dep = response.data.full_dept;
                _this5.dept.dept_id = response.data.dept_id;
            });
        },
        add_new: function add_new() {
            var _this6 = this;

            var formData = new FormData();
            var dept = this.new_dept;
            var deptid = this.new_dept_id;
            formData.append('full', dept);
            formData.append('deptid', deptid);
            axios.post('Procurement/admin/backend/new_dept.php', formData).then(function (response) {
                _this6.dept = response.data;
                _this6.dept.id = response.data.id;
                _this6.dept.full_dep = response.data.full_dept;
                _this6.dept.dept_id = response.data.dept_id;
                _this6.new_dept = '';
                _this6.new_dept_id = '';
            });
        },
        remove_sub: function remove_sub(target) {
            var _this7 = this;

            var formData = new FormData();
            this.$confirm("Confirm deleting department/committee :" + target.subdept_full + ' ?').then(function () {
                formData.append('id', target.id);
                formData.append('dept_id', _this7.maindept);
                formData.append('sub_dept_id', target.subdept);
                axios.post('Procurement/admin/backend/remove_subdepartment.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this7.$alert("Successfully removed " + target.subdept_full).then(function () {
                            _this7.fetch_sub();
                        });
                    } else {
                        _this7.$alert(response.data);
                    }
                });
            });
        },
        add_new_sub: function add_new_sub() {
            var _this8 = this;

            var formData = new FormData();
            formData.append('maindept', this.maindept);
            formData.append('full', this.new_subdept);
            formData.append('deptid', this.new_subdept_id);
            axios.post('Procurement/admin/backend/new_subdept.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this8.$alert("Successfully inserted sub-department for " + _this8.maindept + ' :' + _this8.new_subdept_id).then(function () {
                        _this8.new_subdept = '';
                        _this8.new_subdept_id = '';
                        _this8.fetch_sub();
                    });
                } else {
                    _this8.$alert(response.data).then(function () {
                        _this8.new_subdept = '';
                        _this8.new_subdept_id = '';
                    });
                }
            });
        }
    }
};

/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1406);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4a36189b", content, true, {});

/***/ }),

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-53f4b0fc]{display:flex;flex-direction:row}.tabs[data-v-53f4b0fc]{position:absolute;bottom:0;height:40px;left:0;right:0}.leftTab[data-v-53f4b0fc]{text-align:left;padding-left:20px;left:0;right:50%;border-top-right-radius:35px}.rightTab[data-v-53f4b0fc]{text-align:right;padding-right:20px;right:0;left:50%;border-top-left-radius:35px}.subTabs[data-v-53f4b0fc]{font-weight:700;padding-top:5px;position:absolute;bottom:-2px!important;background-color:#fff;height:35px;opacity:.4;cursor:pointer;transition:.3s;transition-property:opacity}.activeTab[data-v-53f4b0fc]{opacity:1!important;z-index:10}.leftTab.activeTab[data-v-53f4b0fc]{right:45%}.rightTab.activeTab[data-v-53f4b0fc]{left:45%}.bodyWrapper[data-v-53f4b0fc]{margin-top:10px;padding-left:8px;padding-right:8px;opacity:0;transition:.3s}.disableTab[data-v-53f4b0fc]:hover{opacity:.65}", ""]);

// exports


/***/ }),

/***/ 1407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",staticStyle:{"height":"73px!important","position":"relative"}},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v(_vm._s(_vm.display_title()))])]),_vm._v(" "),_c('div',{staticClass:"tabs"},[_c('div',{staticClass:"flex"},[_c('div',{class:['leftTab subTabs',{'activeTab':_vm.mode=='main'},{'disableTab':_vm.mode=='sub'}],on:{"click":function($event){return _vm.select_mode('main')}}},[_c('u',[_vm._v("Main Committee/Department Setting(s)")])]),_vm._v(" "),_c('div',{class:['rightTab subTabs',{'activeTab':_vm.mode=='sub'},{'disableTab':_vm.mode=='main'}],on:{"click":function($event){return _vm.select_mode('sub')}}},[_c('u',[_vm._v("Sub-Department Setting(s)")])])])])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"0 0 0 0"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.mode=='main'),expression:"mode=='main'"}],class:['bodyWrapper',{'activeTab':_vm.mode=='main'}]},[_c('label',{staticClass:"col-6"},[_vm._v("Search Department")]),_vm._v(" "),_c('div',{staticClass:"form-group col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc_key),expression:"loc_key"}],staticClass:"form-control col-6",attrs:{"type":"text","placeholder":"Search"},domProps:{"value":(_vm.loc_key)},on:{"keyup":_vm.searchloc,"input":function($event){if($event.target.composing){ return; }_vm.loc_key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('label',[_vm._v("Department Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_dept),expression:"new_dept"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Department Full Name"},domProps:{"value":(_vm.new_dept)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_dept=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"margin-left":"auto","padding-right":"0"}},[_c('label',{staticClass:"col-8"},[_vm._v("Department Code")]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_dept_id),expression:"new_dept_id"}],staticClass:"form-control col-8",attrs:{"type":"text","placeholder":"Department ID"},domProps:{"value":(_vm.new_dept_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_dept_id=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('button',{staticClass:"form-control col-2",on:{"click":function($event){$event.preventDefault();return _vm.add_new($event)}}},[_vm._v("Insert")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.dept,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.remove(props.item)}}},[_c('td',[_vm._v("Remove")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.full_dept))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.dept_id))])])]}}],null,false,639678741)}),_c('br')],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.mode=='sub'),expression:"mode=='sub'"}],class:['bodyWrapper',{'activeTab':_vm.mode=='sub'}]},[_c('div',{staticClass:"form-group col-12 flex"},[_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('label',[_vm._v("Main Department")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.maindept),expression:"maindept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.maindept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_sub]}},_vm._l((_vm.dept),function(sdep){return _c('option',{domProps:{"value":sdep.dept_id}},[_vm._v(_vm._s(sdep.full_dept))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"form-group col-12 flex"},[_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('label',[_vm._v("Sub-Department Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_subdept),expression:"new_subdept"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Sub-Department Full Name"},domProps:{"value":(_vm.new_subdept)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_subdept=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"margin-left":"auto","padding-right":"0"}},[_c('label',{staticClass:"col-8"},[_vm._v("Sub-Department Code")]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_subdept_id),expression:"new_subdept_id"}],staticClass:"form-control col-8",attrs:{"type":"text","placeholder":"Sub-Department ID"},domProps:{"value":(_vm.new_subdept_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_subdept_id=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('button',{staticClass:"form-control col-2",on:{"click":function($event){$event.preventDefault();return _vm.add_new_sub($event)}}},[_vm._v("Insert")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_sub,"items":_vm.subdept_list,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.remove_sub(props.item)}}},[_c('td',[_vm._v("Remove")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.subdept_full))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.subdept))])])]}}],null,false,2680008636)}),_c('br')],1)])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dptmngt_vue__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dptmngt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dptmngt_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dptmngt_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dptmngt_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53f4b0fc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dptmngt_vue__ = __webpack_require__(1407);
function injectStyle (ssrContext) {
  __webpack_require__(1405)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53f4b0fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dptmngt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53f4b0fc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dptmngt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=93.build.js.map