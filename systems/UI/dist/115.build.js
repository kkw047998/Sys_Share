webpackJsonp([115],{

/***/ 1207:
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

exports.default = {
    data: function data() {
        return {
            editdata: {
                name: '',
                code: ''
            },
            editing_asset: '',
            open_editor: false,
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Asset Category', value: 'name', sortable: false }, { text: 'Asset Code', value: 'max', sortable: false }],
            dept_list: [],
            dept: '',
            dept_ready: false,
            assetlist: [],
            st: '',
            ed: '',
            insert_fund_name: '',
            fund_current: 'Regular',
            fund_type: ['Regular', 'Special'],
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
            if (perm.proc_level < 3) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/department/backend/dept_member.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].department;
            _this.dept_ready = true;
            console.log(_this.dept_list);
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            _this.st = response.data.st.substring(0, 4);
            _this.ed = response.data.ed.substring(0, 4);
        });
        this.fetchdata();
    },

    methods: {
        close_overlay: function close_overlay() {
            this.open_editor = false;
        },
        open_overlay: function open_overlay(item) {
            this.editing_asset = item.code;
            this.editdata.name = item.name;
            this.editdata.code = item.code;
            this.open_editor = true;
        },
        edit_asset: async function edit_asset(code) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('original_code', this.editing_asset);
            formData.append('code', this.editdata.code);
            formData.append('name', this.editdata.name);
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/department/backend/update_asset.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this2.$alert("Successfully updated record").then(function () {
                        _this2.fetchdata();
                        _this2.open_editor = false;
                    });
                }
            });
        },
        fetchdata: async function fetchdata() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/department/backend/assetlist.php', formData).then(function (response) {
                _this3.assetlist = response.data;
                _this3.open_editor = false;
            });
        },
        update_yr: function update_yr() {
            this.ed = parseInt(this.st) + 1;
            this.new_list();
        },
        new_list: function new_list(event) {
            var _this4 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/department/backend/assetlist.php', formData).then(function (response) {
                _this4.assetlist = response.data;
                _this4.open_editor = false;
            });
        },
        new_asset_insert: function new_asset_insert(event) {
            var _this5 = this;

            var formData = new FormData();
            formData.append('name', this.insert_asset_name);
            formData.append('dept', this.dept);
            formData.append('code', this.insert_asset_code);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/department/backend/new_asset.php', formData).then(function (response) {
                _this5.fetchdata();
            });
            this.insert_asset_name = '';
            this.insert_asset_code = '';
        },
        remove: function remove(targetID) {
            var _this6 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('id', targetID);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/department/backend/remove_asset.php', formData).then(function (response) {
                if (response.data != "OK") {
                    _this6.$alert(response.data).then(function () {
                        _this6.fetchdata();
                    });
                } else {
                    _this6.fetchdata();
                }
            });
        }
    }
};

/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"table-responsive col-6 px0"},[_c('label',{staticStyle:{"font-size":"90%"}},[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.department))])}),0):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("School Year")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":_vm.update_yr,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.assetlist,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.open_overlay(props.item)}}},[_vm._v("Edit")]),_c('br'),_vm._v(" "),_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.remove(props.item.code)}}},[_vm._v("Remove")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.code))])]}}])}),_c('br'),_vm._v(" "),(_vm.open_editor==false)?_c('div',{staticClass:"form-group"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"margin-top":"0.25em","margin-right":"0.5em"}},[_vm._v("Insert New Asset :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.insert_asset_name),expression:"insert_asset_name"}],staticClass:"form-control",staticStyle:{"width":"18em","margin-right":"1em"},attrs:{"type":"text","maxlength":"80","placeholder":"Asset Name"},domProps:{"value":(_vm.insert_asset_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.insert_asset_name=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.insert_asset_code),expression:"insert_asset_code"}],staticClass:"form-control",staticStyle:{"width":"10em"},attrs:{"type":"text","maxlength":"80","placeholder":"Asset Code"},domProps:{"value":(_vm.insert_asset_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.insert_asset_code=$event.target.value}}}),_vm._v(" "),_c('input',{staticClass:"form-control",staticStyle:{"margin-left":"auto","width":"10em"},attrs:{"type":"button","value":"Insert"},on:{"click":_vm.new_asset_insert}})])]):_vm._e()],1),_vm._v(" "),(_vm.open_editor)?_c('div',{staticClass:"col-12"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.edit_asset(_vm.editing_asset)}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Edit Asset Category - "+_vm._s(_vm.editing_asset))])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"flex col-12 px0",staticStyle:{"margin-bottom":"8px"}},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Asset Name\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.name),expression:"editdata.name"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.editdata.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"flex col-12 px0"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                            Asset Code\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.code),expression:"editdata.code"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.editdata.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "code", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_vm._m(0),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.close_overlay}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Close\n                    ")])])])])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                    ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_mngt_vue__ = __webpack_require__(1207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_mngt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_mngt_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_mngt_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_mngt_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_292758fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_asset_mngt_vue__ = __webpack_require__(1416);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_mngt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_292758fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_asset_mngt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=115.build.js.map