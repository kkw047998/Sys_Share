webpackJsonp([104],{

/***/ 1189:
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
            search: '',
            pooldata: [],
            userid: "",
            dept: 'ITSD',
            stat: 'Not Started',
            subdept_list: ['ITSD', 'Resources'],
            stat_list: ['Not Started', 'In Progress', 'Completed'],
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'ID', value: 'id', sortable: false }, { text: 'Requester', value: 'req_name', sortable: false }, { text: 'Item Category', value: 'item', sortable: false }, { text: 'Description', value: 'description', sortable: false }, { text: 'Location', value: 'location', sortable: false }, { text: 'Status', value: 'status', sortable: false }, { text: 'Remarks', value: 'remarks', sortable: false }]
        };
    },

    created: function created() {
        var _this = this;

        var formData = new FormData();
        formData.append('subdept', this.dept);
        formData.append('stat', this.stat);
        _axios2.default.post('RequestPortal/backend/checklist_fetch.php', formData).then(function (response) {
            _this.pooldata = response.data;
            _this.pooldata.id = response.data.id;
            _this.pooldata.req_name = response.data.req_name;
            _this.pooldata.item = response.data.item;
            _this.pooldata.description = response.data.description;
            _this.pooldata.location = response.data.location;
            _this.pooldata.status = response.data.status;
            _this.pooldata.remarks = response.data.remarks;
        });
    },
    methods: {
        editform: function editform(event) {
            var targetID = event.currentTarget.id;
            document.getElementById('tmp_id').value = targetID;
            this.$router.push('edit_checklist');
        },
        new_list: function new_list(event) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('subdept', this.dept);
            formData.append('stat', this.stat);
            _axios2.default.post('RequestPortal/backend/checklist_fetch.php', formData).then(function (response) {
                _this2.pooldata = response.data;
                _this2.pooldata.id = response.data.id;
                _this2.pooldata.req_name = response.data.req_name;
                _this2.pooldata.item = response.data.item;
                _this2.pooldata.description = response.data.description;
                _this2.pooldata.location = response.data.location;
                _this2.pooldata.status = response.data.status;
                _this2.pooldata.remarks = response.data.remarks;
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

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-12",attrs:{"data-app":""}},[_c('div',{staticClass:"table-responsive"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-bottom":"0.4em"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-top":"0.2em","margin-right":"0.5em"}},[_vm._v("Department:")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",staticStyle:{"width":"15em"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.subdept_list),function(subdept){return _c('option',[_vm._v(_vm._s(subdept))])}),0)]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-left":"auto"}},[_c('label',{staticStyle:{"padding-top":"0.2em","margin-right":"0.5em"}},[_vm._v("Status:")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.stat),expression:"stat"}],staticClass:"form-control select",staticStyle:{"width":"15em"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.stat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.stat_list),function(c_stat){return _c('option',[_vm._v(_vm._s(c_stat))])}),0)])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.pooldata,"rows-per-page-items":[20]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.editform($event)}}},[_vm._v("Edit")])]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.req_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.item))]),_vm._v(" "),_c('td',{staticStyle:{"width":"55em"}},[_vm._v(_vm._s(props.item.description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.location))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.status))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.remarks))])]}}])})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checklist_vue__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checklist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checklist_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checklist_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checklist_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9a92632_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checklist_vue__ = __webpack_require__(1355);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checklist_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9a92632_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checklist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=104.build.js.map