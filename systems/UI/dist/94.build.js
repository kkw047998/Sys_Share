webpackJsonp([94],{

/***/ 1201:
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

exports.default = {
    data: function data() {
        return {
            maindept: '',
            loc_data: [],
            ready: false,
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Department', value: 'full_dept', sortable: false }, { text: 'Department Code', value: 'dept_id', sortable: false }],
            headers_sub: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Sub-Department', value: 'full_dept', sortable: false }, { text: 'Sub-Department Code', value: 'dept_id', sortable: false }],
            loc_key: '',
            new_dept: '',
            new_dept_id: '',
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
        await axios.get('Procurement/shared_backend/fetch_dept.php').then(function (response) {
            if (response.data != 'empty') {
                _this.dept = response.data;
                _this.maindept = response.data[0].dept_id;
                _this.dept.id = response.data.id;
                _this.dept.full_dep = response.data.full_dept;
                _this.dept.dept_id = response.data.dept_id;
            }
        });
        await this.fetch_sub();
        this.ready = true;
    },

    methods: {
        fetch_sub: function fetch_sub() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('maindept', this.maindept);
            axios.post("Procurement/shared_backend/fetch_sub_dept.php", formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.subdept_list = response.data;
                } else {
                    _this2.subdept_list = [];
                }
            });
        },
        remove: function remove(target) {
            var _this3 = this;

            var formData = new FormData();
            this.$confirm("Confirm deleting department/committee :" + target.full_dept + ' ?').then(function () {
                formData.append('id', target.id);
                axios.post('Procurement/admin/backend/remove_department.php', formData).then(function (response) {
                    _this3.dept = response.data;
                    _this3.dept.id = response.data.id;
                    _this3.dept.full_dep = response.data.full_dept;
                    _this3.dept.dept_id = response.data.dept_id;
                });
            });
        },
        searchloc: function searchloc() {
            var _this4 = this;

            var formData = new FormData();
            var key = this.loc_key;
            formData.append('code', key);
            axios.post('Procurement/admin/backend/search_department.php', formData).then(function (response) {
                _this4.dept = response.data;
                _this4.dept.id = response.data.id;
                _this4.dept.full_dep = response.data.full_dept;
                _this4.dept.dept_id = response.data.dept_id;
            });
        },
        add_new: function add_new() {
            var _this5 = this;

            var formData = new FormData();
            var dept = this.new_dept;
            var deptid = this.new_dept_id;
            formData.append('full', dept);
            formData.append('deptid', deptid);
            axios.post('Procurement/admin/backend/new_dept.php', formData).then(function (response) {
                _this5.dept = response.data;
                _this5.dept.id = response.data.id;
                _this5.dept.full_dep = response.data.full_dept;
                _this5.dept.dept_id = response.data.dept_id;
                _this5.new_dept = '';
                _this5.new_dept_id = '';
            });
        }
    }
};

/***/ }),

/***/ 1402:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1403);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("309dfb15", content, true, {});

/***/ }),

/***/ 1403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-108e81d4]{display:flex;flex-direction:row}", ""]);

// exports


/***/ }),

/***/ 1404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('label',{staticClass:"col-6"},[_vm._v("Search Department")]),_vm._v(" "),_c('div',{staticClass:"form-group col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc_key),expression:"loc_key"}],staticClass:"form-control col-6",attrs:{"type":"text","placeholder":"Search"},domProps:{"value":(_vm.loc_key)},on:{"keyup":_vm.searchloc,"input":function($event){if($event.target.composing){ return; }_vm.loc_key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('label',[_vm._v("Dept Name : ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_dept),expression:"new_dept"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Department Full Name"},domProps:{"value":(_vm.new_dept)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_dept=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"margin-left":"auto","padding-right":"0"}},[_c('label',{staticClass:"col-8"},[_vm._v("Dept Code : ")]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_dept_id),expression:"new_dept_id"}],staticClass:"form-control col-8",attrs:{"type":"text","placeholder":"Department ID"},domProps:{"value":(_vm.new_dept_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_dept_id=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('button',{staticClass:"form-control col-2",on:{"click":function($event){$event.preventDefault();return _vm.add_new($event)}}},[_vm._v("Insert")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.dept,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.remove(props.item)}}},[_c('td',[_vm._v("Remove")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.full_dept))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.dept_id))])])]}}],null,false,639678741)}),_c('br')],1),_vm._v(" "),_c('div',{staticClass:"form-group flex"},[_c('div',{staticClass:"col-6"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.maindept),expression:"maindept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.maindept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_sub]}},_vm._l((_vm.dept),function(sdep){return _c('option',{domProps:{"value":sdep.dept_id}},[_vm._v(_vm._s(sdep.full_dept))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_sub,"items":_vm.subdept_list,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.remove(props.item.id)}}},[_c('td',[_vm._v("Remove")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.subdept_full))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.subdept))])])]}}],null,false,3212927812)}),_c('br')],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_deptmngt_vue__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_deptmngt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_deptmngt_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_deptmngt_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_deptmngt_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_108e81d4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_deptmngt_vue__ = __webpack_require__(1404);
function injectStyle (ssrContext) {
  __webpack_require__(1402)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-108e81d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_deptmngt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_108e81d4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_deptmngt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=94.build.js.map