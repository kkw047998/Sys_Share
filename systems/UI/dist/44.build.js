webpackJsonp([44],{

/***/ 1285:
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

exports.default = {
    data: function data() {
        return {
            ready: false,
            rank: '',
            title: 'Member',
            title_dep: ['Secretary', 'Member'],
            search_user_key: "",
            userlist: [],
            userdata: [],
            userlist_ready: false,
            hv_user: false,
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }, { text: 'Username', value: 'username', sortable: false }, { text: 'Rank', value: 'permission', sortable: false }],
            headers_list: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }, { text: 'Username', value: 'username', sortable: false }]
        };
    },
    created: async function created() {
        await this.fetch_user();
        this.ready = true;
    },

    methods: {
        fetch_user: async function fetch_user() {
            var _this = this;

            await axios.get('inventory/web/backend/inv_admin_list.php').then(function (response) {
                if (response.data != 'empty') {
                    _this.userlist = response.data;
                } else {
                    _this.userlist = [];
                }
            });
            this.userlist_ready = true;
            this.$forceUpdate();
        },
        add_user: async function add_user(uid, name) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('username', uid);
            formData.append('name', name);
            formData.append('rank', this.rank);
            if (this.rank != '') {
                await axios.post('inventory/web/backend/add_inv_admin.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this2.fetch_user();
                        _this2.search_user_key = '';
                        _this2.hv_user = false;
                    }
                });
                this.$alert('Successfully added user : ' + name + ' as ' + this.rank);
            } else {
                this.$alert('Please Select Rank');
            }
        },
        search_user: function search_user() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('key', this.search_user_key);
            axios.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this3.hv_user = false;
                } else {
                    _this3.userdata = response.data;
                    _this3.userdata.id = response.data.id;
                    _this3.userdata.username = response.data.username;
                    _this3.userdata.name = response.data.name;
                    _this3.hv_user = true;
                }
            });
        },
        remove_user: async function remove_user(uid, name) {
            var _this4 = this;

            this.$confirm('Confirm Removing User ' + name + ' ?').then(async function () {
                var formData = new FormData();
                formData.append('uid', uid);
                await axios.post('inventory/web/backend/remove_inv_admin.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this4.$alert('Successfully Removed User ' + name);
                        _this4.fetch_user();
                    }
                });
            });
        }
    }
};

/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1625);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0e5c0574", content, true, {});

/***/ }),

/***/ 1625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-7e07eca9]{padding-left:0;padding-right:0}.flex[data-v-7e07eca9]{display:flex;flex-direction:row}", ""]);

// exports


/***/ }),

/***/ 1626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-8",attrs:{"data-app":""}},[_c('label',[_vm._v("User Management")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-12 px0 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-6 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_user_key),expression:"search_user_key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search User"},domProps:{"value":(_vm.search_user_key)},on:{"keyup":_vm.search_user,"input":function($event){if($event.target.composing){ return; }_vm.search_user_key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-4 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.rank),expression:"rank"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.rank=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"","disabled":""}},[_vm._v("Please Select Rank Below")]),_vm._v(" "),_c('option',{attrs:{"value":"user"}},[_vm._v("User")]),_vm._v(" "),_c('option',{attrs:{"value":"secretary"}},[_vm._v("Secretary")]),_vm._v(" "),_c('option',{attrs:{"value":"admin"}},[_vm._v("Admin")])])])]),_vm._v(" "),(_vm.hv_user)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_list,"items":_vm.userdata,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.add_user(props.item.username,props.item.name)}}},[_vm._v("Add")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.username))])]}}],null,false,3064899461)}):_vm._e()],1),_vm._v(" "),(_vm.userlist_ready)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.userlist,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.remove_user(props.item.username,props.item.name)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.username))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.permission))])]}}],null,false,1696998687)}):_vm._e(),_c('br')],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_setting_vue__ = __webpack_require__(1285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_setting_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_setting_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_setting_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e07eca9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_admin_setting_vue__ = __webpack_require__(1626);
function injectStyle (ssrContext) {
  __webpack_require__(1624)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e07eca9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e07eca9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_admin_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=44.build.js.map