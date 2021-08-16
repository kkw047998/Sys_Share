webpackJsonp([34],{

/***/ 1288:
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

exports.default = {
    data: function data() {
        return {
            headers: [{ text: 'Select', value: 'id', sortable: false }, { text: 'Item Code', value: 'item_code', sortable: true }, { text: 'Item Name', value: 'name', sortable: true }, { text: 'Details', value: 'details', sortable: true }, { text: 'Applicant', value: 'action_by', sortable: true }, { text: 'Reason', value: 'reason', sortable: true }],
            item_list: [],
            details: [],
            status: 'pending',
            open_overlay: false,
            ready: false
        };
    },
    created: async function created() {
        await this.fetch_list();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        rej_write_off: function rej_write_off(code) {
            var _this = this;

            var formData = new FormData();
            formData.append('code', code);
            this.$confirm("Confirm rejecting write-off item :" + code + " ?").then(function () {
                axios.post("inventory/web/backend/rej_write_off.php", formData).then(function (response) {
                    if (response.data == "OK") {
                        _this.$alert("Successfully Rejected Write-off for : " + code).then(function () {
                            _this.open_overlay = false;
                            _this.fetch_list();
                        });
                    }
                });
            });
        },
        redirect: function redirect() {
            this.$router.push('inventory_list');
        },
        write_off: async function write_off(item_code) {
            var _this2 = this;

            await this.$confirm('Confirm Write Off item : ' + item_code + ' ?').then(async function () {
                var formData = new FormData();
                formData.append('item_code', item_code);
                await axios.post('inventory/web/backend/confirm_write_off.php', formData).then(async function (response) {
                    var res = response.data;
                    if (res == 'OK') {
                        _this2.$alert('Successfully approved write off for item ' + item_code);
                        await _this2.fetch_list();
                        _this2.open_overlay = false;
                    }
                });
            });
        },
        export_file: async function export_file() {
            var _this3 = this;

            await axios.get('inventory/web/backend/export_write_off.php').then(function (response) {
                if (response.data != 'empty') {
                    var url = window.URL.createObjectURL(new Blob([response.data]));
                    var link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'write_off.csv'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                } else {
                    _this3.$alert('No records');
                }
            });
        },
        close_overlay: function close_overlay() {
            this.open_overlay = false;
        },
        fetch_list: async function fetch_list() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('status', this.status);
            await axios.post('inventory/web/backend/fetch_write_off_item.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this4.item_list = response.data;
                } else {
                    _this4.item_list = [];
                }
            });
        },
        overlay: async function overlay(item_code) {
            var _this5 = this;

            var formData = new FormData();
            formData.append('item_code', item_code);
            await axios.post('inventory/web/backend/item_details.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this5.details = response.data;
                    _this5.open_overlay = true;
                }
            });
        }
    }
};

/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4c41dd99", content, true, {});

/***/ }),

/***/ 1634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".inner_row[data-v-7dae463b]{margin-bottom:1rem}.flex[data-v-7dae463b],.inner_row[data-v-7dae463b]{display:flex;flex-direction:row}.inneroverlay[data-v-7dae463b]{background-color:rgba(0,0,0,.4);position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;width:50%;height:50%;z-index:50}.px0[data-v-7dae463b]{padding-left:0;padding-right:0}.wrapper[data-v-7dae463b]{position:relative}.click_row[data-v-7dae463b]{cursor:pointer}.fa-window-close[data-v-7dae463b]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-7dae463b]:hover{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"relative","height":"90vh"}},[(_vm.open_overlay)?_c('div',{staticClass:"inneroverlay"},[_c('div',{staticClass:"card",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("Details for "+_vm._s(_vm.details[0].item_code))]),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Item Code\n                    ")]),_vm._v(":\n                    "),_c('div',{staticClass:"col-8"},[_vm._v("\n                        "+_vm._s(_vm.details[0].item_code)+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                        Name\n                    ")]),_vm._v(":\n                    "),_c('div',{staticClass:"col-8"},[_vm._v("\n                        "+_vm._s(_vm.details[0].item_eng_name)+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                       Location\n                    ")]),_vm._v(":\n                    "),_c('div',{staticClass:"col-8"},[_vm._v("\n                        "+_vm._s(_vm.details[0].sub_location_code)+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                       Details\n                    ")]),_vm._v(":\n                    "),(_vm.details[0].sn!=undefined)?_c('div',{staticClass:"col-8"},[_vm._v("\n                        "+_vm._s(_vm.details[0].sn)+"\n                    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                       Remarks\n                    ")]),_vm._v(":\n                    "),_c('div',{staticClass:"col-8"},[_vm._v("\n                        "+_vm._s(_vm.details[0].remarks)+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 inner_row"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                       Status\n                    ")]),_vm._v(":\n                    "),(_vm.status=='pending')?_c('div',{staticClass:"col-8"},[_vm._v("\n                        "+_vm._s(_vm.details[0].stocktake)+"\n                    ")]):_vm._e(),_vm._v(" "),(_vm.status=='write_off')?_c('div',{staticClass:"col-8"},[_c('b',{staticStyle:{"color":"rgb(165,28,37)"}},[_vm._v("Write-off Completed")])]):_vm._e()])]),_vm._v(" "),(_vm.status=='pending')?_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.write_off(_vm.details[0].item_code)}}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Confirm Write Off \n                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.rej_write_off(_vm.details[0].item_code)}}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reject\n                ")])]):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.ready)?_c('div',[_c('div',{staticClass:"col-12 px0"},[_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-2",staticStyle:{"margin-bottom":"0.75rem","padding-left":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_list]}},[_c('option',{attrs:{"value":"pending"}},[_vm._v("Pending")]),_vm._v(" "),_c('option',{attrs:{"value":"write_off"}},[_vm._v("Write Off Completed")])])]),_vm._v(" "),(_vm.status=='write_off')?_c('div',{staticClass:"col-2",staticStyle:{"margin-bottom":"0.75rem"}},[_c('button',{staticClass:"form-control",attrs:{"type":"button"},on:{"click":_vm.export_file}},[_vm._v("Export Write Off Items")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"margin-left":"auto","padding-right":"0"}},[_c('button',{staticClass:"form-control",attrs:{"type":"button"},on:{"click":_vm.redirect}},[_vm._v("Add Write Off Item(s)")])])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.item_list,"rows-per-page-items":[15],"disable-initial-sort":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticClass:"click_row",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.overlay(props.item.item_code)}}},[_c('td',[_c('u',[_vm._v("Details")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.item_code))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.item_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.details))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.applicant))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.reason))])])]}}],null,false,3923872194)})],1)]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_write_off_pending_vue__ = __webpack_require__(1288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_write_off_pending_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_write_off_pending_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_write_off_pending_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_write_off_pending_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dae463b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_write_off_pending_vue__ = __webpack_require__(1635);
function injectStyle (ssrContext) {
  __webpack_require__(1633)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dae463b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_write_off_pending_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dae463b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_write_off_pending_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=34.build.js.map