webpackJsonp([45],{

/***/ 1291:
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

exports.default = {
    data: function data() {
        return {
            headers: [{ text: 'Username', value: 'username', sortable: false }, { text: 'Name', value: 'name', sortable: true }],
            headers_item: [{ text: 'Item Code', value: 'item_code', sortable: false }, { text: 'Item Name', value: 'item_eng_name', sortable: true }],
            open: {
                user: false,
                item: false
            },
            borrow_date: '',
            item_name: '',
            isSelected: false,
            ready: false,
            key: '',
            item_code: '',
            sn: '',
            type: '',
            borrow_by: '',
            borrow_id: '',
            userlist: [],
            item_data: []
        };
    },

    watch: {
        item_code: function item_code(newVal, oldVal) {
            if (newVal == '') {
                this.item_name = '';
                this.sn = '';
            }
        },
        sn: function sn(newVal, oldVal) {
            if (newVal == '') {
                this.item_name = '';
                this.item_code = '';
            }
        }
    },
    created: async function created() {
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        clear: function clear() {
            this.item_name = '';
            this.item_code = '';
            this.sn = '';
        },
        close_overlay: function close_overlay(mode) {
            switch (mode) {
                case 'user':
                    this.open.user = false;
                    break;
                case 'item':
                    this.open.item = false;
                    break;
            }
        },
        handleSubmit: function handleSubmit() {
            var _this = this;

            if (this.borrow_date != '') {
                this.$confirm('Confirm Submitting?').then(function () {
                    var formData = new FormData();
                    formData.append('item_code', _this.item_code);
                    formData.append('item_name', _this.item_name);
                    formData.append('borrow_by', _this.borrow_by);
                    formData.append('borrow_date', _this.borrow_date);
                    axios.post('inventory/web/backend/submitBorrow.php', formData).then(function (response) {
                        if (response.data == "OK") {
                            _this.$alert("Successfully inserted item borrow record").then(function () {
                                _this.$router.push('borrow');
                            });
                        } else {
                            _this.$alert(response.data);
                        }
                    });
                });
            } else {
                this.$alert('Please Select Borrow Date');
            }
        },
        return_prev: function return_prev() {
            this.$router.push('borrow');
        },
        select_user: function select_user(username, name) {
            this.borrow_by = name;
            this.key = name;
            this.open.user = false;
        },
        search_user: function search_user() {
            var _this2 = this;

            this.borrow_by = '';
            var formData = new FormData();
            formData.append('key', this.key);
            axios.post('inventory/app/backend/search_user.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.userlist = response.data;
                    _this2.open.user = true;
                } else {
                    _this2.userlist = [];
                    _this2.open.user = false;
                }
            });
        },
        select_item: function select_item(item) {
            this.sn = item.details;
            this.item_code = item.item_code;
            this.item_name = item.item_eng_name;
            this.isSelected = true;
            this.open.item = false;
        },
        search_item: function search_item(tag) {
            var _this3 = this;

            this.isSelected = false;
            var formData = new FormData();
            var key = '';
            if (tag == 'sn') {
                key = this.sn;
                formData.append('key', this.sn);
            } else {
                key = this.item_code;
                formData.append('key', this.item_code);
            }
            if (key != '') {
                axios.post('inventory/web/backend/search_item_info.php', formData).then(function (response) {
                    if (response.data != 'empty') {
                        _this3.item_data = response.data;
                        _this3.open.item = true;
                    } else {
                        _this3.item_data = [];
                        _this3.open.item = false;
                    }
                });
            } else {
                this.open.item = false;
            }
        }
    }
};

/***/ }),

/***/ 1642:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1643);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("b4f1475c", content, true, {});

/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-621d2b86]{padding-left:0;padding-right:0}.inner_row[data-v-621d2b86]{display:flex;flex-direction:row;margin-bottom:1rem}.inner_item[data-v-621d2b86]{position:absolute;left:0;right:0;margin-top:15vh;margin-left:auto;margin-right:auto;width:50%;z-index:100}.fa-window-close[data-v-621d2b86]{right:0;top:0;position:absolute;margin-left:auto;margin-top:.25rem;margin-right:.5rem;cursor:pointer;z-index:101;transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-621d2b86]:hover{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"height":"85vh"}},[(_vm.open.user)?_c('div',{staticClass:"inner_item"},[_c('div',{staticStyle:{"position":"relative"}},[_c('i',{staticClass:"fa fa-window-close",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.close_overlay('user')}}}),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.userlist,"rows-per-page-items":[10],"disable-initial-sort":"","show-select":"","item-key":"item_code"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item.username,props.item.name)}}},[_c('td',[_vm._v(_vm._s(props.item.username))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,232021363)})],1)]):_vm._e(),_vm._v(" "),(_vm.open.item)?_c('div',{staticClass:"inner_item"},[_c('div',{staticStyle:{"position":"relative"}},[_c('i',{staticClass:"fa fa-window-close",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.close_overlay('item')}}}),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_item,"items":_vm.item_data,"rows-per-page-items":[10],"disable-initial-sort":"","show-select":"","item-key":"item_code"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_item(props.item)}}},[_c('td',[_vm._v(_vm._s(props.item.item_code))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.item_eng_name))])])]}}],null,false,120030903)})],1)]):_vm._e(),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit()}}},[_c('div',{staticClass:"card col-12",staticStyle:{"height":"100%"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Item Code\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_code),expression:"item_code"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Item Code","required":""},domProps:{"value":(_vm.item_code)},on:{"keyup":function($event){return _vm.search_item('item_code')},"input":function($event){if($event.target.composing){ return; }_vm.item_code=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Item Name\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_name),expression:"item_name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Item Name","readonly":"","required":""},domProps:{"value":(_vm.item_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.item_name=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Item Details\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sn),expression:"sn"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Serial Number","required":""},domProps:{"value":(_vm.sn)},on:{"keyup":function($event){return _vm.search_item('sn')},"input":function($event){if($event.target.composing){ return; }_vm.sn=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Borrowed By\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search User"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_user,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Borrowed Date\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('VueCtkDateTimePicker',{attrs:{"noHeader":true,"inline":true,"noKeyboard":true,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"format":'YYYY-MM-DD',"id":'DatePicker',"label":'Select Date',"noButtonNow":true,"onlyDate":true},model:{value:(_vm.borrow_date),callback:function ($$v) {_vm.borrow_date=$$v},expression:"borrow_date"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('div',{staticClass:"flex"},[_vm._m(1),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n                    ")])])])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("Insert New Borrow Record")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                    ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewBorrowRecord_vue__ = __webpack_require__(1291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewBorrowRecord_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewBorrowRecord_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewBorrowRecord_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewBorrowRecord_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_621d2b86_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NewBorrowRecord_vue__ = __webpack_require__(1644);
function injectStyle (ssrContext) {
  __webpack_require__(1642)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-621d2b86"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewBorrowRecord_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_621d2b86_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NewBorrowRecord_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=45.build.js.map