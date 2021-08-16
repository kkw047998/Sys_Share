webpackJsonp([41],{

/***/ 1286:
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

exports.default = {
    data: function data() {
        return {
            selected_cat: '',
            cat_name: '',
            cat_code: '',
            title: 'Category Settings',
            main_ready: false,
            ready: false,
            mode: 'entry',
            main_cat_list: [],
            sub_cat_list: [],
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'cat_name', sortable: false }, { text: 'Code', value: 'cat_code', sortable: false }],
            headers_sub: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Name', value: 'sub_cat_name', sortable: false }, { text: 'Code', value: 'sub_category', sortable: false }]
        };
    },
    created: async function created() {
        this.ready = true;
    },
    mounted: async function mounted() {
        await this.fetch_main_category();
        this.main_ready = true;
    },

    methods: {
        remove_main_cat: async function remove_main_cat(code) {
            var _this = this;

            var formData = new FormData();
            formData.append('code', code);
            await axios.post('inventory/web/backend/remove_main_category.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this.$alert('Successfully Deleted Category ' + code);
                    _this.cat_code = '';
                    _this.cat_name = '';
                    _this.fetch_main_category();
                    _this.$forceUpdate();
                } else {
                    _this.cat_code = '';
                    _this.cat_name = '';
                    _this.$alert(response.data);
                }
            });
        },
        insert_main: async function insert_main() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('name', this.cat_name);
            formData.append('code', this.cat_code);
            await axios.post('inventory/web/backend/insert_main.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this2.$alert('Successfully Inserted New Record');
                    _this2.cat_code = '';
                    _this2.cat_name = '';
                    _this2.fetch_main_category();
                    _this2.$forceUpdate();
                } else {
                    _this2.cat_code = '';
                    _this2.cat_name = '';
                    console.log(response);
                }
            });
        },
        insert_sub: async function insert_sub() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('name', this.cat_name);
            formData.append('code', this.cat_code);
            formData.append('main_category', this.selected_cat);
            await axios.post('inventory/web/backend/insert_sub_category.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this3.cat_code = '';
                    _this3.cat_name = '';
                    _this3.fetch_sub_category();
                    _this3.$forceUpdate();
                } else {
                    _this3.$alert($response.data);
                }
            });
        },
        remove_sub_cat: async function remove_sub_cat(rid) {
            var _this4 = this;

            var formData = new FormData();
            formData.append('rid', rid);
            await axios.post('inventory/web/backend/remove_sub_cat.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    if (response.data == 'OK') {
                        _this4.$alert('Successfully Deleted Sub-Category');
                        _this4.fetch_sub_category();
                    } else {
                        _this4.$alert(response.data);
                    }
                } else {
                    _this4.$alert('Record not found');
                }
            });
        },
        fetch_main_category: async function fetch_main_category() {
            var _this5 = this;

            await axios.get('inventory/web/backend/fetch_main_cat.php').then(function (response) {
                if (response.data != 'empty') {
                    _this5.main_cat_list = response.data;
                }
            });
        },
        fetch_sub_category: async function fetch_sub_category() {
            var _this6 = this;

            var formData = new FormData();
            formData.append('category', this.selected_cat);
            await axios.post('inventory/web/backend/fetch_sub_category.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this6.sub_cat_list = response.data;
                }
            });
        },
        select_mode: async function select_mode(mode) {
            if (mode == 'main') {
                this.title = 'Main Category Settings';
                this.mode = mode;
            } else if (mode == 'sub') {
                if (this.main_cat_list.length > 0) {
                    this.selected_cat = this.main_cat_list[0].cat_code;
                    await this.fetch_sub_category();
                    this.title = 'Sub Category Settings';
                    this.mode = mode;
                } else {
                    this.$alert('Please Create Main Category.');
                }
            }
        },
        return_prev: function return_prev() {
            if (this.mode == 'entry') {
                this.$router.go(-1);
            } else {
                this.mode = 'entry';
                this.title = 'Category Settings';
            }
        }
    }
};

/***/ }),

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1628);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1b381079", content, true, {});

/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-3849f3c6]{padding-left:0;padding-right:0}.pl0[data-v-3849f3c6]{padding-left:0}.pr0[data-v-3849f3c6]{padding-right:0}.description[data-v-3849f3c6]{font-weight:600}", ""]);

// exports


/***/ }),

/***/ 1629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"card col-12 px0",staticStyle:{"height":"auto"}},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[(_vm.mode=='entry')?_c('div',[_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b2",on:{"click":function($event){return _vm.select_mode('main')}}},[_vm._m(0)])])]),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b3",on:{"click":function($event){return _vm.select_mode('sub')}}},[_vm._m(1)])])])]):_vm._e(),_vm._v(" "),(_vm.mode=='main')?_c('div',[_vm._m(2),_vm._v(" "),(_vm.main_ready)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.main_cat_list,"rows-per-page-items":[5]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.remove_main_cat(props.item.cat_code)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.cat_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.cat_code))])]}}],null,false,3568713455)}):_vm._e(),_c('br'),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('form',{staticClass:"col-12 px0 flex",on:{"submit":function($event){$event.preventDefault();return _vm.insert_main($event)}}},[_c('div',{staticClass:"col-6 pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat_name),expression:"cat_name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Category Name","required":""},domProps:{"value":(_vm.cat_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.cat_name=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat_code),expression:"cat_code"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Category Code","required":""},domProps:{"value":(_vm.cat_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.cat_code=$event.target.value}}})]),_vm._v(" "),_vm._m(4)])],1):_vm._e(),_vm._v(" "),(_vm.mode=='sub')?_c('div',[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-4 pl0",staticStyle:{"margin-bottom":"0.75rem"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_cat),expression:"selected_cat"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selected_cat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_sub_category]}},_vm._l((_vm.main_cat_list.length),function(n){return _c('option',{domProps:{"value":_vm.main_cat_list[n-1].cat_code}},[_vm._v(_vm._s(_vm.main_cat_list[n-1].cat_name))])}),0)]),_vm._v(" "),(_vm.main_ready)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_sub,"items":_vm.sub_cat_list,"rows-per-page-items":[5]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.remove_sub_cat(props.item.id)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.sub_cat_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.sub_category))])]}}],null,false,612483197)}):_vm._e(),_c('br'),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('form',{staticClass:"col-12 px0 flex",on:{"submit":function($event){$event.preventDefault();return _vm.insert_sub($event)}}},[_c('div',{staticClass:"col-6 pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat_name),expression:"cat_name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Category Name","required":""},domProps:{"value":(_vm.cat_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.cat_name=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat_code),expression:"cat_code"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Category Code","required":""},domProps:{"value":(_vm.cat_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.cat_code=$event.target.value}}})]),_vm._v(" "),_vm._m(7)])],1):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n            ")])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b2_first"}),_vm._v(" "),_c('div',{staticClass:"b2_first_char",staticStyle:{"left":"1.375rem!important","top":"-0.6rem!important"}},[_vm._v("M")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ain Category ")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Settings")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b3_first"}),_vm._v(" "),_c('div',{staticClass:"b3_first_char",staticStyle:{"left":"2.75rem!important"}},[_vm._v("S")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ub Category")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Settings")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('u',{staticClass:"description"},[_vm._v("Main Category List")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('u',{staticClass:"description"},[_vm._v("Create New Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2 pr0"},[_c('button',{staticClass:"form-control",attrs:{"type":"submit"}},[_vm._v("Insert")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('u',{staticClass:"description"},[_vm._v("Sub Category List")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('u',{staticClass:"description"},[_vm._v("Create New Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2 pr0"},[_c('button',{staticClass:"form-control",attrs:{"type":"submit"}},[_vm._v("Insert")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_setting_vue__ = __webpack_require__(1286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_setting_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_setting_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_setting_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3849f3c6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_setting_vue__ = __webpack_require__(1629);
function injectStyle (ssrContext) {
  __webpack_require__(1627)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3849f3c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_category_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3849f3c6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=41.build.js.map