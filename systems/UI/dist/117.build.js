webpackJsonp([117],{

/***/ 1200:
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

exports.default = {
    data: function data() {
        return {
            loc_data: [],
            ready: false,
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Location', value: 'location', sortable: false }],
            loc_key: '',
            user_check: ''
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            var perm = response.data[0];
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
            if (perm.proc_level < 4) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/shared_backend/location.php').then(function (response) {
            if (response.data != 'empty') {
                _this.loc_data = response.data;
                _this.loc_data.id = response.data.id;
                _this.loc_data.code = response.data.code;
            }
        });
        this.ready = true;
    },

    methods: {
        remove: function remove(targetID) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('id', targetID);
            axios.post('Procurement/admin/backend/remove_location.php', formData).then(function (response) {
                _this2.loc_data = response.data;
                _this2.loc_data.id = response.data.id;
                _this2.loc_data.code = response.data.code;
            });
        },
        searchloc: function searchloc() {
            var _this3 = this;

            var formData = new FormData();
            var key = this.loc_key;
            formData.append('code', key);
            axios.post('Procurement/admin/backend/search_location.php', formData).then(function (response) {
                _this3.loc_data = response.data;
                _this3.loc_data.id = response.data.id;
                _this3.loc_data.code = response.data.code;
            });
        },
        add_new: function add_new() {
            var _this4 = this;

            var formData = new FormData();
            var loc = this.loc_key;
            formData.append('code', loc);
            axios.post('Procurement/admin/backend/new_location.php', formData).then(function (response) {
                _this4.loc_data = response.data;
                _this4.loc_data.id = response.data.id;
                _this4.loc_data.code = response.data.code;
                _this4.loc_key = '';
            });
        }
    }
};

/***/ }),

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-lg-6",attrs:{"data-app":""}},[_c('label',{staticStyle:{"margin-right":"0.5em","padding-top":"0.3em"}},[_vm._v("Insert New location")]),_vm._v(" "),_c('div',{staticClass:"form-group",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc_key),expression:"loc_key"}],staticClass:"form-control",staticStyle:{"width":"20em"},attrs:{"type":"text","placeholder":"Search / Add location"},domProps:{"value":(_vm.loc_key)},on:{"keyup":_vm.searchloc,"input":function($event){if($event.target.composing){ return; }_vm.loc_key=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"form-control",staticStyle:{"margin-left":"auto","width":"5em"},on:{"click":function($event){$event.preventDefault();return _vm.add_new($event)}}},[_vm._v("Insert")])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.loc_data,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.remove(props.item.id)}}},[_c('td',[_vm._v("Remove")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.code))])])]}}],null,false,3856838132)}),_c('br')],1):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locmngt_vue__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locmngt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locmngt_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locmngt_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locmngt_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_585d9de2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_locmngt_vue__ = __webpack_require__(1401);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_locmngt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_585d9de2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_locmngt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=117.build.js.map