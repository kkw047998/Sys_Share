webpackJsonp([36],{

/***/ 1284:
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

exports.default = {
    data: function data() {
        return {
            headers: [{ text: 'Select', value: 'id', sortable: false }, { text: 'Reimbursement', value: 'tag', sortable: true }, { text: 'Procurement', value: 'proc_id', sortable: true }, { text: 'Item', value: 'nature', sortable: true }, { text: 'Description', value: 'reason', sortable: true }, { text: 'Fund Source', value: 'fundsrc', sortable: true }, { text: 'Total Amount', value: 'total', sortable: true }],
            item_list: [],
            ready: false
        };
    },
    created: async function created() {
        await this.fetch_records();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        fetch_records: async function fetch_records() {
            var _this = this;

            await axios.get('inventory/web/backend/fetch_pending_item.php').then(function (response) {
                if (response.data != 'empty') {
                    _this.item_list = response.data;
                }
            });
        },
        select_record: async function select_record(id) {
            document.getElementById('entry').value = 'pending_inventory';
            document.getElementById('tmp_id').value = id;
            this.$router.push('insert_item');
        }
    }
};

/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("06a7b53a", content, true, {});

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".click_row[data-v-0f478ed0]{cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 1623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.item_list,"rows-per-page-items":[15],"disable-initial-sort":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticClass:"click_row",on:{"click":function($event){return _vm.select_record(props.item.id)}}},[_c('td',[_c('u',[_vm._v("Details")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.tag))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.proc_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.nature))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.reason))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.fundsrc))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.total))])])]}}],null,false,3871376407)})],1):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pending_inventory_vue__ = __webpack_require__(1284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pending_inventory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pending_inventory_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pending_inventory_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pending_inventory_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f478ed0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pending_inventory_vue__ = __webpack_require__(1623);
function injectStyle (ssrContext) {
  __webpack_require__(1621)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f478ed0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pending_inventory_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f478ed0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pending_inventory_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=36.build.js.map