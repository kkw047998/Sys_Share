webpackJsonp([38],{

/***/ 1287:
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

exports.default = {
    data: function data() {
        return {
            ready: false,
            data: [],
            headers: [{ text: 'Details', value: 'item_code', sortable: false }, { text: 'Item Code', value: 'item_code', sortable: true }, { text: 'Barcode', value: 'barcode', sortable: true }, { text: 'Name', value: 'eng_name', sortable: true }, { text: 'Location', value: 'location', sortable: true }],
            section: 'All',
            grp_list: [],
            school: 'All',
            room_list: [],
            room: 'All',
            category_list: [],
            category: 'All',
            sub_category_list: [],
            sub_category: 'All',
            scope: 'single',
            blk: 'All',
            blks: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            flr: 'All',
            index_sup: ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th'],
            type: 'All',
            key: ''
        };
    },
    created: async function created() {
        await this.load_filter();
        this.ready = true;
    },

    methods: {
        new_record: function new_record() {
            this.$router.push('insert_item');
        },
        export_file: async function export_file() {
            var _this = this;

            var formData = new FormData();
            formData.append('section', this.section);
            formData.append('blk', this.blk);
            formData.append('floor', this.flr);
            formData.append('school', this.school);
            formData.append('scope', this.scope);
            formData.append('key', this.key);
            formData.append('category', this.category);
            formData.append('sub_category', this.sub_category);
            await axios.post('inventory/web/backend/export_list.php', formData).then(function (response) {
                var url = window.URL.createObjectURL(new Blob([response.data]));
                var link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Inventory_record_' + _this.blk + '_' + _this.flr + '_' + _this.category + '_' + _this.sub_category + '.csv'); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        },
        load_filter: async function load_filter() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            await axios.post('inventory/web/backend/filter_preload.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.category_list = response.data.category;
                    _this2.grp_list = response.data.grp_code;
                }
            });
        },
        view_details: async function view_details(id) {
            document.getElementById('tmp_id').value = id;
            document.getElementById('tmp_id_2').value = this.scope;
            this.$router.push('edit_item');
        },
        fetch_sub_category: async function fetch_sub_category() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('category', this.category);
            await axios.post('inventory/web/backend/fetch_sub_category.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.sub_category_list = response.data;
                    _this3.sub_category = 'All';
                } else {
                    _this3.sub_category_list = [];
                    _this3.sub_category = 'All';
                }
            });
        },
        initialize: async function initialize() {
            this.category = 'All';
            this.blk = 'All';
            this.flr = 'All';
            this.school = 'All';
            this.key = '';
        },
        reset: async function reset() {
            await this.initialize();
        }
    }
};

/***/ }),

/***/ 1630:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1631);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2bd1fe77", content, true, {});

/***/ }),

/***/ 1631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-ad20758a]{display:flex;flex-direction:row}.px0[data-v-ad20758a]{padding-left:0;padding-right:0}.click_row[data-v-ad20758a]{cursor:pointer}u[data-v-ad20758a]{color:rgba(0,0,0,.6)}.cprow[data-v-ad20758a]{margin-bottom:1rem}td[data-v-ad20758a]{text-transform:capitalize!important}label[data-v-ad20758a]{padding-top:.35rem!important}", ""]);

// exports


/***/ }),

/***/ 1632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"card",staticStyle:{"height":"auto"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.section),expression:"section"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.section=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.load_filter]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"S/"}},[_vm._v("Secondary section")]),_vm._v(" "),_c('option',{attrs:{"value":"P/"}},[_vm._v("Primary section")]),_vm._v(" "),_c('option',{attrs:{"value":"K/"}},[_vm._v("Kindergarten section")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.school),expression:"school"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.school=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.grp_list.length),function(g){return _c('option',{domProps:{"value":_vm.grp_list[g-1].grp_code}},[_vm._v(_vm._s(_vm.grp_list[g-1].group_description))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.blk),expression:"blk"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.blk=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All Blocks")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_vm._l((8),function(n){return _c('option',{domProps:{"value":_vm.blks[n-1]}},[_vm._v("Block "+_vm._s(_vm.blks[n-1]))])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")]),_vm._v(" "),_c('option',{attrs:{"value":"OC"}},[_vm._v("Common Area")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.flr),expression:"flr"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.flr=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_c('option',{attrs:{"value":"G"}},[_vm._v("Ground floor")]),_vm._v(" "),_vm._l((8),function(f){return _c('option',{domProps:{"value":f}},[_vm._v(" "+_vm._s(f)),_c('sup',[_vm._v(_vm._s(_vm.index_sup[f-1]))]),_vm._v(" floor")])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.category),expression:"category"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.category=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.category_list.length),function(l){return _c('option',{domProps:{"value":_vm.category_list[l-1].main_category}},[_vm._v(_vm._s(_vm.category_list[l-1].main_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sub_category),expression:"sub_category"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sub_category=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.sub_category_list.length),function(l){return _c('option',{domProps:{"value":_vm.sub_category_list[l-1].sub_category}},[_vm._v(_vm._s(_vm.sub_category_list[l-1].sub_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.scope),expression:"scope"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.scope=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"single"}},[_vm._v("Single Item")]),_vm._v(" "),_c('option',{attrs:{"value":"bulk"}},[_vm._v("Bulk Item")])])])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.export_file}},[_c('i',{staticClass:"fa fa-file-excel-o"}),_vm._v(" Export\n                ")])])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Export Settings")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12 px0 cprow",staticStyle:{"margin-bottom":"0.5rem!important"}},[_c('label',[_c('b',[_c('u',[_vm._v("Filter(s)")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Section\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Group\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Block\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Floor\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Category\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Sub-Category\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Type\n                        ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_export_vue__ = __webpack_require__(1287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_export_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_export_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_export_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_export_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad20758a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_inventory_export_vue__ = __webpack_require__(1632);
function injectStyle (ssrContext) {
  __webpack_require__(1630)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad20758a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_export_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad20758a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_inventory_export_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=38.build.js.map