webpackJsonp([69],{

/***/ 1228:
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

exports.default = {
    data: function data() {
        return {
            show_item: [],
            hv_data: false,
            data: [],
            ready: false
        };
    },
    created: async function created() {
        await this.fetch_data();
        this.ready = true;
    },

    methods: {
        fetch_data: async function fetch_data() {
            var _this = this;

            await axios.get('Procurement/procurement/backend/print_proc_render.php').then(function (response) {
                if (response.data != 'empty') {
                    _this.data = response.data;
                    console.log(response.data);
                    _this.hv_data = true;
                } else {
                    _this.hv_data = false;
                }
            });
        }
    }
};

/***/ }),

/***/ 1473:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1474);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5dd1584c", content, true, {});

/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".cat2[data-v-1d48d6e7]{background-color:#58595b!important}.cat2[data-v-1d48d6e7],.cat3[data-v-1d48d6e7]{color:hsla(0,0%,100%,.85);line-height:1rem!important;font-family:arial;font-size:14px!important}.cat3[data-v-1d48d6e7]{background-color:#d1ad85!important}.cat4[data-v-1d48d6e7]{color:hsla(0,0%,100%,.85);line-height:1rem!important;font-family:arial;background-color:#9c0a0e!important;font-size:14px!important}.proc_td[data-v-1d48d6e7]{border-left:0 solid #fff}.proc_td[data-v-1d48d6e7]:last-child{border-right:2px solid #fff}.Completed[data-v-1d48d6e7]{color:rgba(0,255,153,.6)}.Rejected[data-v-1d48d6e7],.Restart[data-v-1d48d6e7]{color:red}", ""]);

// exports


/***/ }),

/***/ 1475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"upper"}),_vm._v(" "),(_vm.hv_data)?_c('div',{staticClass:"show_list"},[_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(0),_vm._v(" "),_vm._l((_vm.data.length),function(l){return _c('tbody',[(_vm.data[l-1].category=='2')?_c('tr',{staticClass:"head_bar cat2"},[_vm._m(1,true),_vm._v(" "),_c('td',{staticClass:"proc_td",staticStyle:{"text-transform":"uppercase"}},[_vm._v(_vm._s(_vm.data[l-1].proc_id))]),_vm._v(" "),_c('td',{staticClass:"elli_td proc_td"},[_vm._v(_vm._s(_vm.data[l-1].asset_code))]),_vm._v(" "),_c('td',{staticClass:"elli_td proc_td",attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.data[l-1].display_title))]),_vm._v(" "),_c('td',{class:'proc_td '+_vm.data[l-1].stat},[_vm._v(_vm._s(_vm.data[l-1].stat))]),_vm._v(" "),_vm._m(2,true),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v(_vm._s(_vm.data[l-1].phase))]),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v(_vm._s(_vm.data[l-1].reimb_type))]),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v("Expand")])]):_vm._e(),_vm._v(" "),(_vm.data[l-1].category=='3')?_c('tr',{staticClass:"head_bar cat3"},[_vm._m(3,true),_vm._v(" "),_c('td',{staticClass:"proc_td",staticStyle:{"text-transform":"uppercase"}},[_vm._v(_vm._s(_vm.data[l-1].proc_id))]),_vm._v(" "),_c('td',{staticClass:"elli_td proc_td"},[_vm._v(_vm._s(_vm.data[l-1].asset_code))]),_vm._v(" "),_c('td',{staticClass:"elli_td proc_td",attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.data[l-1].display_title))]),_vm._v(" "),_c('td',{class:'proc_td '+_vm.data[l-1].stat},[_vm._v(_vm._s(_vm.data[l-1].stat))]),_vm._v(" "),_vm._m(4,true),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v("Open Date : "+_vm._s(_vm.data[l-1].open_date))]),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v(_vm._s(_vm.data[l-1].reimb_type))]),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v("Expand")])]):_vm._e(),_vm._v(" "),(_vm.data[l-1].category=='4')?_c('tr',{staticClass:"head_bar cat4"},[_vm._m(5,true),_vm._v(" "),_c('td',{staticClass:"proc_td",staticStyle:{"text-transform":"uppercase"}},[_vm._v(_vm._s(_vm.data[l-1].proc_id))]),_vm._v(" "),_c('td',{staticClass:"elli_td proc_td"},[_vm._v(_vm._s(_vm.data[l-1].asset_code))]),_vm._v(" "),_c('td',{staticClass:"elli_td proc_td",attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.data[l-1].display_title))]),_vm._v(" "),_c('td',{class:'proc_td '+_vm.data[l-1].stat},[_vm._v(_vm._s(_vm.data[l-1].stat))]),_vm._v(" "),_vm._m(6,true),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v("Open Date : "+_vm._s(_vm.data[l-1].open_date))]),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v(_vm._s(_vm.data[l-1].reimb_type))]),_vm._v(" "),_c('td',{staticClass:"proc_td"},[_vm._v("Expand")])]):_vm._e()])})],2)]):_vm._e()]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',{staticStyle:{"background-color":"rgb(238,28,37)"}},[_c('th',{staticClass:"proc_th",staticStyle:{"width":"3.5%"}},[_vm._v("Action")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"8.5%"}},[_vm._v("Procurement ID")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"8%"}},[_vm._v("Asset Category")]),_vm._v(" "),_c('th',{staticClass:"proc_th",attrs:{"colspan":"2"}},[_vm._v("Display Title")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"8vw!important"}},[_vm._v("Status")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"8%"}},[_vm._v("Comparison Table")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"12%"}},[_vm._v("Phase")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"4%"}},[_vm._v("Type")]),_vm._v(" "),_c('th',{staticClass:"proc_th",staticStyle:{"width":"10%"}},[_vm._v("Related File(s)")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"proc_td",staticStyle:{"border-left":"2px solid #ffffff","text-align":"center","cursor":"pointer","padding-top":"0.4em"}},[_c('i',{staticClass:"fa fa-caret-down",staticStyle:{"transform":"rotate(0deg)","font-size":"14px"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"proc_td"},[_c('u',{staticStyle:{"cursor":"pointer"}},[_vm._v("View")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"proc_td",staticStyle:{"border-left":"2px solid #ffffff","text-align":"center","cursor":"pointer","padding-top":"0.4em"}},[_c('i',{staticClass:"fa fa-caret-down",staticStyle:{"transform":"rotate(0deg)","font-size":"14px"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"proc_td"},[_c('u',{staticStyle:{"cursor":"pointer"}},[_vm._v("View")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"proc_td",staticStyle:{"border-left":"2px solid #ffffff","text-align":"center","cursor":"pointer","padding-top":"0.4em"}},[_c('i',{staticClass:"fa fa-caret-down",staticStyle:{"transform":"rotate(0deg)","font-size":"14px"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"proc_td"},[_c('u',{staticStyle:{"cursor":"pointer"}},[_vm._v("View")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_render_vue__ = __webpack_require__(1228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_render_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_render_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_render_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_render_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d48d6e7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_proc_render_vue__ = __webpack_require__(1475);
function injectStyle (ssrContext) {
  __webpack_require__(1473)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d48d6e7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_render_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d48d6e7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_proc_render_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=69.build.js.map