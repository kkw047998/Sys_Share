webpackJsonp([106],{

/***/ 1186:
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

exports.default = {
    data: function data() {
        return {
            counter: 0,
            response_member: [],
            userdata: [],
            pooldata: [],
            headers: [{ text: 'ID', value: 'id', sortable: false }, { text: 'Details', value: 'name', sortable: false }, { text: 'Assigned To', value: 'username', sortable: false }],
            loaded: false
        };
    },
    created: function created() {
        var _this = this;

        setTimeout(function () {
            return _this.$router.push('Console_display_Handling');
        }, 15000);
    },
    mounted: async function mounted() {
        var _this2 = this;

        await axios.get('RequestPortal/backend/console_recent.php').then(function (response) {
            _this2.pooldata = response.data;
            _this2.pooldata.Description = response.data.Description;
            _this2.pooldata.Req_Name = response.data.Req_Name;
            _this2.pooldata.Location = response.data.Location;
            _this2.pooldata.Handler = response.data.Handler;
            for (var i = 0; i < response.data.length; i++) {
                _this2.pooldata[i].newHandler = _this2.pooldata[i].Handler.replace(/,/g, "<br/>");
            }
            _this2.loaded = true;
        });
    }
};

/***/ }),

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-responsive",attrs:{"data-app":""}},[_c('label',{staticStyle:{"font-size":"3em"}},[_vm._v("Recent Requests")]),_vm._v(" "),(_vm.loaded)?_c('v-data-table',{staticClass:"elevation-1 vertical",attrs:{"headers":_vm.headers,"items":_vm.pooldata,"rows-per-page-items":[8,50]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticStyle:{"width":"3em!important","height":"3em!important","font-size":"5em!important","text-align":"center"}},[_vm._v(_vm._s(props.item.item_id))]),_vm._v(" "),_c('td',{staticStyle:{"width":"40em!important","font-size":"2em!important","padding":"0 0 0 0!important"}},[_c('table',{staticStyle:{"height":"100%!important"}},[_c('tr',{staticStyle:{"height":"66%!important","background-color":"rgba(0,0,0,0)!important","border-bottom":"solid 0.1em #D9D9D9"}},[_c('td',{attrs:{"colspan":"2"}},[_vm._v(_vm._s(props.item.Description))])]),_vm._v(" "),_c('tr',{staticStyle:{"height":"33%!important"}},[_c('td',[_vm._v("Requested by : \n                              "+_vm._s(props.item.Req_Name)+"\n                          ")]),_vm._v(" "),_c('td',[_vm._v("Location : \n                              "+_vm._s(props.item.Location)+"\n                          ")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"3em!important","height":"3em!important","text-align":"center"},domProps:{"innerHTML":_vm._s(props.item.newHandler)}},[_vm._v(_vm._s(props.item.newHandler))])]}}],null,false,2839636857)}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Console_display_Recent_vue__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Console_display_Recent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Console_display_Recent_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Console_display_Recent_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Console_display_Recent_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66d22689_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Console_display_Recent_vue__ = __webpack_require__(1352);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Console_display_Recent_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66d22689_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Console_display_Recent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=106.build.js.map