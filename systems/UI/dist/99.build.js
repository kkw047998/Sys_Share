webpackJsonp([99],{

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(266);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            ready: false,
            search_key: '',
            pooldata: [],
            userid: "",
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'ID', value: 'item_id', sortable: true }, { text: 'Requester', value: 'Req_Name', sortable: true }, { text: 'Description', value: 'Description', sortable: true }, { text: 'Location', value: 'Location', sortable: true }, { text: 'Due date', value: 'Due_date', sortable: true }, { text: 'Due Time', value: 'Due_time', sortable: false }, { text: 'Assigned to', value: 'Handler', sortable: true }, { text: 'Issue Status', value: 'Status', sortable: true }]
        };
    },
    created: async function created() {
        var _this = this;

        var formData = new FormData();
        formData.append('key', this.search_key);
        await _axios2.default.post('RequestPortal/backend/outstanding.php', formData).then(function (response) {
            _this.pooldata = response.data;
        });
        this.search_key = document.getElementById('query').value;
        await this.search_key_data();
        this.ready = true;
    },
    mounted: function mounted() {
        window.addEventListener('focus', this.search_key_data);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('focus', this.search_key_data);
    },

    methods: {
        editform: function editform(event) {
            var targetID = event.currentTarget.id;
            document.getElementById('tmp_id').value = targetID;
            document.getElementById('tmp_id_2').value = 'handler';
            document.getElementById('entry_type').value = 'outstanding';
            document.getElementById('query').value = this.search_key;
            //this.$router.push('edit_form');
            this.$router.push('ticket');
        },
        search_key_data: async function search_key_data() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('key', this.search_key);
            await _axios2.default.post('RequestPortal/backend/outstanding.php', formData).then(function (response) {
                _this2.pooldata = response.data;
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-xs-12 col-md-12",attrs:{"data-app":""}},[_c('div',{staticClass:"col-7",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_key),expression:"search_key"}],staticClass:"form-control",staticStyle:{"margin-bottom":"0.5em"},attrs:{"type":"text","placeholder":"Live Search Field"},domProps:{"value":(_vm.search_key)},on:{"keyup":_vm.search_key_data,"input":function($event){if($event.target.composing){ return; }_vm.search_key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"table-responsive"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.pooldata,"rows-per-page-items":[20],"disable-initial-sort":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticStyle:{"text-align":"center"}},[_c('a',{staticStyle:{"font-size":"1.3rem"},attrs:{"href":"","id":props.item.item_id},on:{"click":function($event){$event.preventDefault();return _vm.editform($event)}}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.ref_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Req_Name))]),_vm._v(" "),_c('td',{staticStyle:{"width":"55em"}},[_vm._v(_vm._s(props.item.Description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Location))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Due_date))]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.Due_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Handler))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Status))])]}}],null,false,2389624477)})],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_outstanding_vue__ = __webpack_require__(1192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_outstanding_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_outstanding_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_outstanding_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_outstanding_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e83f7ba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_outstanding_vue__ = __webpack_require__(1360);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_outstanding_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e83f7ba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_outstanding_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=99.build.js.map