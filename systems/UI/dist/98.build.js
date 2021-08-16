webpackJsonp([98],{

/***/ 1272:
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

exports.default = {
    data: function data() {
        return {
            off: 1,
            auth_data: [],
            rank: 'Admin',
            hv_user: false,
            userdata: [],
            key: '',
            ready: false,
            show_res: false,
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Username', value: 'username', sortable: false }, { text: 'Name', value: 'Name', sortable: false }],
            headers_data: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Username', value: 'username', sortable: false }, { text: 'Name', value: 'Name', sortable: false }, { text: 'Rank', value: 'rank', sortable: false }]
        };
    },
    created: async function created() {
        await this.fetch_auth();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        fetch_auth: async function fetch_auth() {
            var _this = this;

            await axios.get('subsitude/admin/backend/fetch_auth.php').then(function (response) {
                _this.auth_data = response.data;
            });
        },
        search_user: function search_user() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('key', this.key);
            axios.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this2.hv_user = false;
                } else {
                    _this2.userdata = response.data;
                    _this2.hv_user = true;
                }
            });
        },
        remove: function remove() {
            var _this3 = this;

            var targetID = event.currentTarget.id;
            var formData = new FormData();
            formData.append('id', targetID);
            axios.post('subsitude/admin/backend/remove_auth.php', formData).then(function (response) {
                if (response.data != 'OK') {
                    console.log(response.data); //console log error
                } else {
                    _this3.fetch_auth();
                    _this3.$forceUpdate();
                }
            });
        },
        adduser: function adduser() {
            var _this4 = this;

            var targetID = event.currentTarget.id;
            var formData = new FormData();
            formData.append('id', targetID);
            formData.append('rank', this.rank);
            if (this.rank == 'half') {
                formData.append('off', this.off);
            }
            axios.post('subsitude/admin/backend/add_user_auth.php', formData).then(function (response) {
                if (response.data != 'OK') {
                    console.log(response.data); //console log error
                } else {
                    _this4.fetch_auth();
                    _this4.$forceUpdate();
                }
            });
        },
        handleSubmit: function handleSubmit() {
            var formData = new FormData();
        }
    }
};

/***/ }),

/***/ 1579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"col-8",staticStyle:{"padding-bottom":"1rem"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search User Name"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_user,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),(_vm.hv_user)?_c('div',{staticClass:"col-8"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.userdata,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.adduser($event)}}},[_vm._v("Add")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.username))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,584734274)}),_c('br'),_vm._v(" "),_c('div',{staticClass:"flex col-12",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"flex col-4",staticStyle:{"margin-left":"auto","padding-left":"0","padding-right":"0"}},[(_vm.rank=='half')?_c('div',{staticClass:"col-4 flex"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-7",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.off),expression:"off"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.off=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((6),function(i){return _c('option',[_vm._v(_vm._s(i))])}),0)])]):_vm._e(),_vm._v(" "),(_vm.rank!='half')?_c('div',{staticClass:"col-4"}):_vm._e(),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.rank),expression:"rank"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.rank=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"Admin"}},[_vm._v("Admin")]),_vm._v(" "),_c('option',{attrs:{"value":"vp"}},[_vm._v("Vice Principal")]),_vm._v(" "),_c('option',{attrs:{"value":"ap"}},[_vm._v("Assistant Principal")]),_vm._v(" "),_c('option',{attrs:{"value":"dc"}},[_vm._v("Discipline Committee")]),_vm._v(" "),_c('option',{attrs:{"value":"half"}},[_vm._v("Half-post Teacher")])])])])]),_c('br')],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_data,"items":_vm.auth_data,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.remove($event)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.username))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.rank))])]}}],null,false,1425043508)})],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0","padding-right":"0","margin-top":"0.35rem"}},[_c('label',[_vm._v("Off:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0","padding-right":"0","padding-top":"0.35rem"}},[_c('label',[_vm._v("Rank")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__ = __webpack_require__(1272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90831e0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_settings_vue__ = __webpack_require__(1579);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90831e0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_settings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=98.build.js.map