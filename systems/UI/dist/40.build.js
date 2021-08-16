webpackJsonp([40],{

/***/ 1292:
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

exports.default = {
    data: function data() {
        return {
            grp_dp: '',
            grp_code: '',
            ready: false,
            section: 'Secondary',
            grouplist: [],
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'section', sortable: false }, { text: 'Code', value: 'groupcode', sortable: false }]
        };
    },
    created: async function created() {
        await this.fetch_list();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        fetch_list: async function fetch_list() {
            var _this = this;

            var formData = new FormData();
            formData.append('section', this.section);
            await axios.post('inventory/web/backend/fetch_grp_code.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this.grouplist = response.data;
                } else {
                    _this.grouplist = [];
                }
            });
        },
        insertgroup: async function insertgroup() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('grp_dp', this.grp_dp);
            formData.append('grp_code', this.grp_code);
            formData.append('section', this.section);
            await axios.post('inventory/web/backend/insert_grp.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this2.$alert("Successfully inserted group").then(function () {
                        _this2.fetch_list();
                        _this2.grp_dp = '';
                        _this2.grp_code = '';
                    });
                } else {
                    _this2.$alert(response.data);
                }
            });
        },
        remove_group: async function remove_group(code) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('code', code);
            var msg = "Confirm deleting group code : " + code + ' ?';
            this.$confirm(msg).then(async function () {
                await axios.post("inventory/web/backend/remove_grp.php", formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this3.$alert("Successfully deleted group").then(function () {
                            _this3.fetch_list();
                        });
                    } else {
                        _this3.$alert(response.data);
                    }
                });
            });
        },
        return_prev: function return_prev() {
            this.$router.go(-1);
        }
    }
};

/***/ }),

/***/ 1645:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1646);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("24e2f36e", content, true, {});

/***/ }),

/***/ 1646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-16ca6971]{padding-left:0;padding-right:0}.pl0[data-v-16ca6971]{padding-left:0}.pr0[data-v-16ca6971]{padding-right:0}.description[data-v-16ca6971]{font-weight:600}", ""]);

// exports


/***/ }),

/***/ 1647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"card col-12 px0",staticStyle:{"height":"auto"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-4 pl0",staticStyle:{"margin-bottom":"0.75rem"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.section),expression:"section"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.section=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_list]}},[_c('option',{attrs:{"value":"Secondary"}},[_vm._v("Secondary Section")]),_vm._v(" "),_c('option',{attrs:{"value":"Primary"}},[_vm._v("Primary Section")]),_vm._v(" "),_c('option',{attrs:{"value":"Kindergarden"}},[_vm._v("Kindergarden Section")])])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.grouplist,"rows-per-page-items":[5]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.remove_group(props.item.groupcode)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.group_description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.groupcode))])]}}],null,false,1657942522)}),_c('br'),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('form',{staticClass:"col-12 px0 flex",on:{"submit":function($event){$event.preventDefault();return _vm.insertgroup($event)}}},[_c('div',{staticClass:"col-6 pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.grp_dp),expression:"grp_dp"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Group Description","required":""},domProps:{"value":(_vm.grp_dp)},on:{"input":function($event){if($event.target.composing){ return; }_vm.grp_dp=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.grp_code),expression:"grp_code"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Group Code","required":""},domProps:{"value":(_vm.grp_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.grp_code=$event.target.value}}})]),_vm._v(" "),_vm._m(3)])],1),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n            ")])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Group Settings")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('u',{staticClass:"description"},[_vm._v("Gorup List")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('u',{staticClass:"description"},[_vm._v("Create New Group")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2 pr0"},[_c('button',{staticClass:"form-control",attrs:{"type":"submit"}},[_vm._v("Insert")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_setting_vue__ = __webpack_require__(1292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_setting_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_setting_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_setting_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16ca6971_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_setting_vue__ = __webpack_require__(1647);
function injectStyle (ssrContext) {
  __webpack_require__(1645)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-16ca6971"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16ca6971_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=40.build.js.map