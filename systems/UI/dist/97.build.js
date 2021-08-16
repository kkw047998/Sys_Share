webpackJsonp([97],{

/***/ 1274:
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

exports.default = {
    data: function data() {
        return {
            userrecord: [],
            ready: false,
            show_res: false,
            headers: [{ text: 'Date', value: 'date', sortable: false }, { text: 'Leave', value: 'leave_id', sortable: false }, { text: 'Assigned To', value: 'assigned_id', sortable: false }, { text: 'Day', value: 'day', sortable: false }, { text: 'Period', value: 'session', sortable: false }, { text: 'Class', value: 'class', sortable: false }, { text: 'Location', value: 'location', sortable: false }, { text: 'Leave Type', value: 'app_type', sortable: false }, { text: 'Application Type', value: 'type', sortable: false }]
        };
    },
    created: async function created() {
        await this.fetch_data();
        this.ready = true;
    },

    methods: {
        fetch_data: async function fetch_data() {
            var _this = this;

            await axios.get('subsitude/report/backend/fetch_data.php').then(function (response) {
                if (response.data != 'empty') {
                    _this.userrecord = response.data;
                }
            });
        }
    }
};

/***/ }),

/***/ 1583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.userrecord,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(props.item.date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.leave_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.assigned_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.day))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.session+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.class))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.location))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.app_type))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.type))])]}}],null,false,3480465138)})],1):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_record_vue__ = __webpack_require__(1274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_record_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_record_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_record_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_record_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_281bb13a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_record_vue__ = __webpack_require__(1583);
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_record_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_281bb13a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=97.build.js.map