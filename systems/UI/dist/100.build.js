webpackJsonp([100],{

/***/ 1182:
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
            formlevel: ['F1', 'F2', 'F3', 'F4', 'F5'],
            formclass: ['*', 'A', 'B', 'C', 'D', 'E'],
            status: ['Pending', 'Completed'],
            locker: {
                locker_form: 'F1',
                locker_class: '*',
                locker_status: 'Pending'
            },
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Form', value: 'form', sortable: false }, { text: 'Class', value: 'class', sortable: false }, { text: 'Locker ID', value: 'lockerid', sortable: false }, { text: 'Description', value: 'description', sortable: false }, { text: 'Follow Up Action', value: 'action', sortable: false }, { text: 'Submitted By', value: 'create_name', sortable: false }, { text: 'Status', value: 'status', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        var formData = new FormData();
        formData.append('Form', this.locker.locker_form);
        formData.append('Class', this.locker.locker_class);
        formData.append('Status', this.locker.locker_status);
        await _axios2.default.post('RequestPortal/backend/lockerlist.php', formData).then(function (response) {
            _this.pooldata = response.data;
        });
    },

    methods: {
        editform: function editform(event) {
            var targetID = event.currentTarget.id;
            document.getElementById('tmp_id').value = targetID;
            this.$router.push('edit_locker');
        },
        updatelist: function updatelist() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('Form', this.locker.locker_form);
            formData.append('Class', this.locker.locker_class);
            formData.append('Status', this.locker.locker_status);
            _axios2.default.post('RequestPortal/backend/lockerlist.php', formData).then(function (response) {
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
//
//
//
//
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

/***/ 1349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-lg-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-right":"0.5em","padding-top":"0.2em"}},[_vm._v("Class")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_form),expression:"locker.locker_form"}],staticClass:"form-control select",staticStyle:{"width":"5em"},attrs:{"name":"Request_for","id":"f"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "locker_form", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updatelist()}]}},_vm._l((_vm.formlevel),function(fl){return _c('option',[_vm._v(_vm._s(fl))])}),0),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_class),expression:"locker.locker_class"}],staticClass:"form-control select",staticStyle:{"width":"5em"},attrs:{"name":"Request_for","id":"cls"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "locker_class", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updatelist()}]}},_vm._l((_vm.formclass),function(fcls){return _c('option',[_vm._v(_vm._s(fcls))])}),0),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto","display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-right":"0.5em","padding-top":"0.2em"}},[_vm._v("Status")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_status),expression:"locker.locker_status"}],staticClass:"form-control select",staticStyle:{"width":"10em"},attrs:{"name":"Status","id":"cls"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "locker_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updatelist()}]}},_vm._l((_vm.status),function(stat){return _c('option',[_vm._v(_vm._s(stat))])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"table-responsive",attrs:{"data-app":""}},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.pooldata,"search":_vm.search,"rows-per-page-items":[20]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{staticStyle:{"font-size":"1.3rem"},attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.editform($event)}}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.form))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.class))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.lockerid))]),_vm._v(" "),_c('td',{staticStyle:{"width":"40em"}},[_vm._v(_vm._s(props.item.description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.action))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.create_name))]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.status))])]}}])})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locker_vue__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63645fce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_locker_vue__ = __webpack_require__(1349);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63645fce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_locker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=100.build.js.map