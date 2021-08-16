webpackJsonp([37],{

/***/ 1281:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            reason: '',
            ready: false,
            data: [],
            singleSelect: false,
            selected: [],
            headers: [{ text: 'Details', value: 'item_code', sortable: false }, { text: 'Item Code', value: 'item_code', sortable: true }, { text: 'Barcode', value: 'barcode', sortable: true }, { text: 'Name', value: 'eng_name', sortable: true }, { text: 'Location', value: 'location', sortable: true }, { text: 'Batch Process', value: 'item_code', sortable: false }],
            section: 'All',
            grp_list: [],
            grp: 'All',
            room_list: [],
            room: 'All',
            category_list: [],
            category: 'All',
            sub_category_list: [],
            sub_category: 'All',
            scope: 'All',
            blk: 'All',
            blks: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            flr: 'All',
            index_sup: ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th'],
            type: 'All',
            key: ''

        };
    },
    created: async function created() {
        await this.fetch_inv_list();
        await this.load_filter();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        change_grp: async function change_grp() {
            await this.fetch_inv_list();
            await this.load_filter();
        },
        batch_process: function batch_process() {
            var _this = this;

            if (this.selected[0] != undefined) {
                if (this.reason != '') {
                    this.$confirm('Confirm Write Off : ' + this.selected + ' ?').then(function () {
                        var formData = new FormData();
                        formData.append('item_code', _this.selected);
                        formData.append('type', _this.scope);
                        formData.append('reason', _this.reason);
                        axios.post('inventory/web/backend/batch_process.php', formData).then(function (response) {
                            if (response.data == 'OK') {
                                _this.$alert('Successfully Applied Write-off for ' + _this.selected);
                                _this.reason = '';
                                _this.selected = [];
                                _this.fetch_inv_list();
                            } else {
                                console.log(response.data);
                            }
                        });
                    });
                } else {
                    this.$alert('Enter write-off reason');
                }
            } else {
                this.$alert('Please select at least one record');
            }
        },
        new_record: function new_record() {
            this.$router.push('insert_item');
        },
        fetch_inv_list: async function fetch_inv_list() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            formData.append('blk', this.blk);
            formData.append('floor', this.flr);
            formData.append('school', this.grp);
            formData.append('scope', this.scope);
            formData.append('key', this.key);
            formData.append('category', this.category);
            formData.append('sub_category', this.sub_category);
            await axios.post('inventory/web/backend/fetch_inv_list.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.data = response.data;
                } else {
                    _this2.data = [];
                }
            });
        },
        load_filter: async function load_filter() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            await axios.post('inventory/web/backend/filter_preload.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.category_list = response.data.category;
                    _this3.grp_list = response.data.grp_code;
                    _this3.grp = 'All';
                }
            });
        },
        view_details: async function view_details(id) {
            document.getElementById('query').value = this.section;
            document.getElementById('tmp_id').value = id;
            document.getElementById('tmp_id_2').value = this.scope;
            this.$router.push('edit_item');
        },
        fetch_sub_category: async function fetch_sub_category() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('category', this.category);
            await axios.post('inventory/web/backend/fetch_sub_category.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this4.sub_category_list = response.data;
                    _this4.sub_category = 'All';
                } else {
                    _this4.sub_category_list = [];
                    _this4.sub_category = 'All';
                }
            });
            await this.fetch_inv_list();
        },
        initialize: async function initialize() {
            this.category = 'All';
            this.blk = 'All';
            this.flr = 'All';
            this.grp = 'All';
            this.key = '';
        },
        reset: async function reset() {
            await this.initialize();
            await this.fetch_inv_list();
        }
    }
};

/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1613);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("08708033", content, true, {});

/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-36ac47ea]{display:flex;flex-direction:row}.px0[data-v-36ac47ea]{padding-left:0;padding-right:0}.click_row[data-v-36ac47ea]{cursor:pointer}u[data-v-36ac47ea]{color:rgba(0,0,0,.6)}.cprow[data-v-36ac47ea]{margin-bottom:1rem}td[data-v-36ac47ea]{text-transform:capitalize!important}label[data-v-36ac47ea]{padding-top:.35rem!important}", ""]);

// exports


/***/ }),

/***/ 1614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"flex col-12 px0"},[_c('div',{staticClass:"col-8"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.data,"rows-per-page-items":[15],"disable-initial-sort":"","show-select":"","item-key":"item_code"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',[_c('td',{staticClass:"click_row",on:{"click":function($event){return _vm.view_details(props.item.item_code)}}},[_c('u',[_vm._v("Details")])]),_vm._v(" "),_c('td',{staticClass:"click_row",on:{"click":function($event){return _vm.view_details(props.item.item_code)}}},[_vm._v(_vm._s(props.item.item_code))]),_vm._v(" "),_c('td',{staticClass:"click_row",on:{"click":function($event){return _vm.view_details(props.item.item_code)}}},[_vm._v(_vm._s(props.item.barcode))]),_vm._v(" "),_c('td',{staticClass:"click_row",on:{"click":function($event){return _vm.view_details(props.item.item_code)}}},[_vm._v(_vm._s(props.item.eng_name))]),_vm._v(" "),_c('td',{staticClass:"click_row",on:{"click":function($event){return _vm.view_details(props.item.item_code)}}},[_vm._v(_vm._s(props.item.location))]),_vm._v(" "),_c('td',{staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected),expression:"selected"}],staticClass:"form-control",attrs:{"type":"checkbox"},domProps:{"value":props.item.item_code,"checked":Array.isArray(_vm.selected)?_vm._i(_vm.selected,props.item.item_code)>-1:(_vm.selected)},on:{"change":function($event){var $$a=_vm.selected,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=props.item.item_code,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.selected=$$a.concat([$$v]))}else{$$i>-1&&(_vm.selected=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.selected=$$c}}}})])])]}}],null,false,553466139)})],1),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"card",staticStyle:{"height":"auto"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 px0 cprow"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Record(s)"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.fetch_inv_list,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.section),expression:"section"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.section=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.change_grp]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"S/"}},[_vm._v("Secondary section")]),_vm._v(" "),_c('option',{attrs:{"value":"P/"}},[_vm._v("Primary section")]),_vm._v(" "),_c('option',{attrs:{"value":"K/"}},[_vm._v("Kindergarten section")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.grp),expression:"grp"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.grp=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_inv_list]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.grp_list.length),function(g){return _c('option',{domProps:{"value":_vm.grp_list[g-1].groupcode}},[_vm._v(_vm._s(_vm.grp_list[g-1].group_description))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.blk),expression:"blk"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.blk=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_inv_list]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All Blocks")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_vm._l((8),function(n){return _c('option',{domProps:{"value":_vm.blks[n-1]}},[_vm._v("Block "+_vm._s(_vm.blks[n-1]))])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")]),_vm._v(" "),_c('option',{attrs:{"value":"OC"}},[_vm._v("Common Area")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.flr),expression:"flr"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.flr=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_inv_list]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_c('option',{attrs:{"value":"G"}},[_vm._v("Ground floor")]),_vm._v(" "),_vm._l((8),function(f){return _c('option',{domProps:{"value":f}},[_vm._v(" "+_vm._s(f)),_c('sup',[_vm._v(_vm._s(_vm.index_sup[f-1]))]),_vm._v(" floor")])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.category),expression:"category"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.category=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_sub_category]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.category_list.length),function(l){return _c('option',{domProps:{"value":_vm.category_list[l-1].main_category}},[_vm._v(_vm._s(_vm.category_list[l-1].main_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sub_category),expression:"sub_category"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sub_category=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_inv_list]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.sub_category_list.length),function(l){return _c('option',{domProps:{"value":_vm.sub_category_list[l-1].sub_category}},[_vm._v(_vm._s(_vm.sub_category_list[l-1].sub_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.scope),expression:"scope"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.scope=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_inv_list]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All Item(s)")]),_vm._v(" "),_c('option',{attrs:{"value":"single"}},[_vm._v("Single Item(s)")]),_vm._v(" "),_c('option',{attrs:{"value":"bulk"}},[_vm._v("Bulk Item(s)")])])])]),_vm._v(" "),(_vm.selected[0]!=undefined)?_c('div',{staticClass:"col-12 px0 cprow flex"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason),expression:"reason"}],staticClass:"form-control",attrs:{"placeholder":"Fill in write-off reason","rows":"3"},domProps:{"value":(_vm.reason)},on:{"input":function($event){if($event.target.composing){ return; }_vm.reason=$event.target.value}}})])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('div',{staticClass:"flex"},[_c('div',[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.new_record}},[_c('i',{staticClass:"fa fa-plus-circle"}),_vm._v(" New Record\n                        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.reset}},[_c('i',{staticClass:"fa fa-refresh"}),_vm._v(" Reset\n                        ")])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto"}},[_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.batch_process}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Batch Write Off\n                        ")])])])])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header",staticStyle:{"height":"4rem!important","padding-top":"1rem!important"}},[_c('strong',[_vm._v("Control Panel")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12 px0 cprow",staticStyle:{"margin-bottom":"0.5rem!important"}},[_c('label',[_c('b',[_c('u',[_vm._v("Filter(s)")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Section\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Group\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Block\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Floor\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Category\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Sub-Category\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Type\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("\n                            Reason\n                        ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_list_vue__ = __webpack_require__(1281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_list_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_36ac47ea_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_inventory_list_vue__ = __webpack_require__(1614);
function injectStyle (ssrContext) {
  __webpack_require__(1612)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-36ac47ea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_inventory_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_36ac47ea_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_inventory_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=37.build.js.map