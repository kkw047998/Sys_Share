webpackJsonp([43],{

/***/ 1290:
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

exports.default = {
    data: function data() {
        return {
            open: false,
            new_stat: '',
            info: {},
            data: [],
            key: '',
            status: 'all',
            ready: false,
            headers: [],
            headers_all: [{ text: 'Name', value: 'item_eng_name', sortable: true }, { text: 'Item Code', value: 'item_code', sortable: true }, { text: 'Borrowed by', value: 'borrow_by', sortable: true }, { text: 'Borrow Date', value: 'borrow_date', sortable: true }, { text: 'Return Date', value: 'return_date', sortable: true }, { text: 'Status', value: 'status', sortable: true }]
        };
    },
    created: async function created() {
        this.headers = this.headers_all;
        await this.fetch_details();
        this.ready = true;
    },
    mounted: function mounted() {},

    methods: {
        close_overlay: function close_overlay() {
            this.open = false;
        },
        update_record: function update_record() {
            var _this = this;

            var formData = new FormData();
            formData.append('item_code', this.info.item_code);
            formData.append('status', this.new_stat);
            axios.post('inventory/web/backend/update_borrow.php', formData).then(function (response) {
                if (response.data == "OK") {
                    _this.$alert("Successfully updated record").then(function () {
                        _this.open = false;
                        _this.update_list();
                    });
                }
            });
        },
        new_record: function new_record() {
            this.$router.push('NewBorrowRecord');
        },
        update_list: async function update_list() {
            await this.fetch_details();
            this.$forceUpdate();
        },
        search_record: function search_record() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('key', this.key);
            formData.append('status', this.status);
            axios.post('inventory/web/backend/search_borrow.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.data = response.data;
                } else {
                    _this2.data = [];
                }
            });
        },
        view_details: function view_details(item) {
            this.info = item;
            this.new_stat = item.status;
            this.open = true;
        },
        fetch_details: function fetch_details() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('status', this.status);
            axios.post('inventory/web/backend/borrow_record.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.data = response.data;
                } else {
                    _this3.data = [];
                }
            });
        }
    }
};

/***/ }),

/***/ 1639:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1640);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7be02e7a", content, true, {});

/***/ }),

/***/ 1640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-05f89446]{display:flex;flex-direction:row}.px0[data-v-05f89446]{padding-left:0;padding-right:0}.click_row[data-v-05f89446]{cursor:pointer}.returned[data-v-05f89446]{font-weight:600;text-transform:capitalize;color:#0a8a41!important}.pending[data-v-05f89446]{font-weight:600;text-transform:capitalize;color:#db1414!important}.borrowed[data-v-05f89446]{font-weight:600;text-transform:capitalize;color:#074b94!important}.inner_item[data-v-05f89446]{position:absolute;left:0;right:0;margin-top:15vh;margin-left:auto;margin-right:auto;width:40%;z-index:100}.fa-window-close[data-v-05f89446]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-05f89446]:hover{color:#fff}.inner_row[data-v-05f89446]{display:flex;flex-direction:row;margin-bottom:1rem}", ""]);

// exports


/***/ }),

/***/ 1641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[(_vm.open)?_c('div',{staticClass:"inner_item"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.update_record()}}},[_c('div',{staticClass:"card col-12",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("View Details")]),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 flex px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Item Code\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.info.item_code),expression:"info.item_code"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.info.item_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.info, "item_code", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Item Name\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.info.item_eng_name),expression:"info.item_eng_name"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.info.item_eng_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.info, "item_eng_name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Borrowed Date\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.info.borrow_date),expression:"info.borrow_date"}],staticClass:"form-control",attrs:{"type":"date","readonly":""},domProps:{"value":(_vm.info.borrow_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.info, "borrow_date", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Borrowed By\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.info.borrow_by),expression:"info.borrow_by"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.info.borrow_by)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.info, "borrow_by", $event.target.value)}}})])]),_vm._v(" "),((_vm.info.status=='returned')&&(_vm.info.return_date!='0000-00-00'))?_c('div',{staticClass:"col-12 flex px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Return Date\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.info.return_date),expression:"info.return_date"}],staticClass:"form-control",attrs:{"type":"date","readonly":""},domProps:{"value":(_vm.info.return_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.info, "return_date", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Status\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[(_vm.info.status=='borrowed')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_stat),expression:"new_stat"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.new_stat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"returned"}},[_vm._v("Returned")]),_vm._v(" "),_c('option',{attrs:{"value":"borrowed"}},[_vm._v("Borrowed")])]):_vm._e(),_vm._v(" "),(_vm.info.status=='returned')?_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":"","value":"Returned"}}):_vm._e()])])]),_vm._v(" "),(_vm.info.status!='returned')?_c('div',{staticClass:"card-footer"},[_vm._m(0)]):_vm._e()])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 px0"},[_c('div',{staticClass:"col-12 px0 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-4 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Live Search"},domProps:{"value":(_vm.key)},on:{"keyup":function($event){return _vm.search_record()},"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.update_list]}},[_c('option',{attrs:{"value":"all"}},[_vm._v("View All Records")]),_vm._v(" "),_c('option',{attrs:{"value":"borrowed"}},[_vm._v("View Borrowed Records")]),_vm._v(" "),_c('option',{attrs:{"value":"returned"}},[_vm._v("View Returned Records")]),_vm._v(" "),_c('select')])]),_vm._v(" "),_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-2 px0"},[_c('button',{staticClass:"form-control",attrs:{"type":"button"},on:{"click":_vm.new_record}},[_vm._v("New Record")])])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.data,"rows-per-page-items":[15],"disable-initial-sort":"","show-select":"","item-key":"item_code"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.view_details(props.item)}}},[_c('td',[_vm._v(_vm._s(props.item.item_eng_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.item_code))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.borrow_by))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.borrow_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.return_date))]),_vm._v(" "),_c('td',[_c('u',{class:props.item.status},[_vm._v(_vm._s(props.item.status))])])])]}}],null,false,374598508)})],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                        ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_borrow_vue__ = __webpack_require__(1290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_borrow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_borrow_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_borrow_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_borrow_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05f89446_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_borrow_vue__ = __webpack_require__(1641);
function injectStyle (ssrContext) {
  __webpack_require__(1639)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05f89446"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_borrow_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05f89446_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_borrow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=43.build.js.map