webpackJsonp([30],{

/***/ 1275:
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

exports.default = {
    data: function data() {
        return {
            filter: [],
            ready: false,
            double: 'false',
            cycle_empty: 'false',
            session_offset: 0,
            day_no_lesson: 'false'
        };
    },
    created: async function created() {
        await this.fetch_default();
        this.ready = true;
    },

    methods: {
        fetch_default: async function fetch_default() {
            var _this = this;

            await axios.get('subsitude/admin/backend/fetch_filters.php').then(function (response) {
                _this.filter = response.data;
                var i = 0;
                for (i = 0; i < _this.filter.length; i++) {
                    switch (_this.filter[i].name) {
                        case 'double_prevent':
                            _this.double = _this.filter[i].status;
                            break;
                        case 'empty_cycle':
                            _this.cycle_empty = _this.filter[i].status;
                            break;
                        case 'session_diff':
                            _this.session_offset = _this.filter[i].offset;
                            break;
                        case 'single_lesson':
                            _this.day_no_lesson = _this.filter[i].status;
                            break;
                    }
                }
            });
        },
        update_filter_swap: function update_filter_swap(type) {
            var formData = new FormData();
            formData.append('type', 'swap');
            formData.append('filter', type);
            switch (type) {
                case 'double_prevent':
                    formData.append('status', this.double);
                    break;
                case 'empty_cycle':
                    formData.append('status', this.cycle_empty);
                    break;
                case 'session_diff':
                    formData.append('offset', this.session_offset);
                    if (this.session_offset == 0) {
                        formData.append('status', 'false');
                    } else {
                        formData.append('status', 'enable');
                    }
                    break;
                case 'single_lesson':
                    formData.append('status', this.day_no_lesson);
                    break;
            }
            axios.post('subsitude/admin/backend/update_filter.php', formData).then(function (response) {});
        }
    }
};

/***/ }),

/***/ 1584:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1585);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("11e8d130", content, true, {});

/***/ }),

/***/ 1585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".row[data-v-ad39c5a6]{margin-top:14px}", ""]);

// exports


/***/ }),

/***/ 1586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"flex col-12"},[_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-8"},[_vm._v("\n                            Prevent breaking double lesson\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.double),expression:"double"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.double=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.update_filter_swap('double_prevent')}]}},[_c('option',{attrs:{"value":"enable"}},[_vm._v("Enable")]),_vm._v(" "),_c('option',{attrs:{"value":"false"}},[_vm._v("Disable")])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-8"},[_vm._v("\n                            No lesson for certain class during a week/cycle\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cycle_empty),expression:"cycle_empty"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.cycle_empty=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.update_filter_swap('empty_cycle')}]}},[_c('option',{attrs:{"value":"enable"}},[_vm._v("Enable")]),_vm._v(" "),_c('option',{attrs:{"value":"false"}},[_vm._v("Disable")])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-8"},[_vm._v("\n                            Maximum session difference\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.session_offset),expression:"session_offset"}],staticClass:"form-control",attrs:{"type":"number","step":"1"},domProps:{"value":(_vm.session_offset)},on:{"change":function($event){return _vm.update_filter_swap('session_diff')},"input":function($event){if($event.target.composing){ return; }_vm.session_offset=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-8"},[_vm._v("\n                            No lesson for certain day\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.day_no_lesson),expression:"day_no_lesson"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.day_no_lesson=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.update_filter_swap('single_lesson')}]}},[_c('option',{attrs:{"value":"enable"}},[_vm._v("Enable")]),_vm._v(" "),_c('option',{attrs:{"value":"false"}},[_vm._v("Disable")])])])])])])]),_vm._v(" "),_vm._m(1)])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Swap Filter Setting(s)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-6"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Substitude Filter Setting(s)")])]),_vm._v(" "),_c('div',{staticClass:"card-body"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_setting_vue__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_setting_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_setting_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_setting_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad39c5a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_setting_vue__ = __webpack_require__(1586);
function injectStyle (ssrContext) {
  __webpack_require__(1584)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad39c5a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad39c5a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=30.build.js.map