webpackJsonp([17],{

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1125);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1126), __esModule: true };

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1127);
var $Object = __webpack_require__(41).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(67);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(31), 'Object', { defineProperty: __webpack_require__(30).f });


/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var _ref;

        return _ref = {
            ready: false,
            subdept_list: [],
            subdept: '',
            title: 'Member',
            title_dep: ['Secretary', 'Member'],
            search_user_key: "",
            userlist: [],
            dept_list: [],
            dept_list_name: [],
            userdata: [],
            dept_ready: false,
            dept: 'IT & Resource Committee'
        }, (0, _defineProperty3.default)(_ref, 'title', "Member"), (0, _defineProperty3.default)(_ref, 'userlist_ready', false), (0, _defineProperty3.default)(_ref, 'hv_user', false), (0, _defineProperty3.default)(_ref, 'headers', [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }, { text: 'Username', value: 'username', sortable: false }, { text: 'Sub-Department', value: 'subdept', sortable: false }, { text: 'Title', value: 'department_title', sortable: false }]), (0, _defineProperty3.default)(_ref, 'headers_list', [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }, { text: 'Username', value: 'username', sortable: false }]), (0, _defineProperty3.default)(_ref, 'user_check', ''), _ref;
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            var perm = response.data[0];
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
            if (perm.proc_level < 2) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/department/backend/dept_member_head.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].deptmentid;
            _this.dept_ready = true;
        });
        var formData = new FormData();
        var dept = this.dept;
        formData.append('dept', dept);
        await axios.post('Procurement/admin/backend/userlist.php', formData).then(function (response) {
            if (response.data != 'empty') {
                _this.userlist = response.data;
            }
        });
        await this.fetch_subdept();
        this.ready = true;
    },

    methods: {
        add_user: function add_user(targetID) {
            var _this2 = this;

            var formData = new FormData();
            var dept = this.dept;
            var title = this.title;
            formData.append('username', targetID);
            formData.append('dept', dept);
            formData.append('subdept', this.subdept);
            formData.append('title', title);
            axios.post('Procurement/admin/backend/add_member.php', formData).then(function (response) {
                _this2.new_list();
                _this2.hv_user = false;
                _this2.search_user_key = "";
            });
        },
        search_user: function search_user() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('key', this.search_user_key);
            axios.post('Procurement/procurement/backend/search_user.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this3.userdata = [];
                    _this3.hv_user = false;
                } else {
                    _this3.userdata = response.data;
                    _this3.hv_user = true;
                }
            });
        },
        fetch_sub_list: function fetch_sub_list() {
            var _this4 = this;

            if (this.subdept == this.dept) {
                this.new_list();
            } else {
                this.title = 'Member';
                var formData = new FormData();
                formData.append('maindept', this.dept);
                formData.append('subdept', this.subdept);
                axios.post('Procurement/admin/backend/subdept_member_head.php', formData).then(function (response) {
                    if (response.data == 'empty') {
                        _this4.userlist = [];
                    } else {
                        _this4.userlist = response.data;
                    }
                });
            }
        },
        new_list: function new_list() {
            var _this5 = this;

            var formData = new FormData();
            var dept = this.dept;
            this.subdept = dept;
            formData.append('dept', dept);
            axios.post('Procurement/admin/backend/userlist.php', formData).then(function (response) {
                if (response.data == 'empty') {
                    _this5.userlist = [];
                } else {
                    _this5.userlist = response.data;
                }
                _this5.fetch_subdept();
            });
        },
        fetch_subdept: function fetch_subdept() {
            var _this6 = this;

            var formData = new FormData();
            formData.append('maindept', this.dept);
            axios.post("Procurement/shared_backend/fetch_sub_dept.php", formData).then(function (response) {
                if (response.data == 'empty') {
                    _this6.subdept_list = [];
                    _this6.subdept = _this6.dept;
                } else {
                    _this6.subdept_list = response.data;
                    _this6.subdept = _this6.dept;
                }
            });
        },
        remove_user: function remove_user(target) {
            var _this7 = this;

            var formData = new FormData();
            formData.append('username', target.username);
            formData.append('dept', this.dept);
            formData.append('subdept', target.subdept);
            axios.post('Procurement/admin/backend/delete_user.php', formData).then(function (response) {
                _this7.new_list();
            });
        }
    }
};

/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1411);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1f6bff9e", content, true, {});

/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".click_row[data-v-2b19473b]{cursor:pointer}.flex[data-v-2b19473b]{display:flex;flex-direction:row}.px0[data-v-2b19473b]{padding-left:0;padding-right:0}", ""]);

// exports


/***/ }),

/***/ 1412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('label',[_vm._v("User Group Management")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_user_key),expression:"search_user_key"}],staticClass:"form-control",staticStyle:{"margin-bottom":"1rem"},attrs:{"type":"text","placeholder":"Search User"},domProps:{"value":(_vm.search_user_key)},on:{"keyup":_vm.search_user,"input":function($event){if($event.target.composing){ return; }_vm.search_user_key=$event.target.value}}}),_vm._v(" "),(_vm.hv_user)?_c('div',{staticStyle:{"margin-bottom":"1rem"}},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_list,"items":_vm.userdata,"search":_vm.search,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.add_user(props.item.username)}}},[_c('td',[_vm._v("Add")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.username))])])]}}],null,false,604110156)})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex col-12 px0"},[_c('div',{staticClass:"col-4 px0"},[(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',{domProps:{"value":dep.deptmentid}},[_vm._v(_vm._s(dep.department))])}),0):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-4"},[(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.subdept),expression:"subdept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.subdept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_sub_list]}},[_c('option',{domProps:{"value":_vm.dept}},[_vm._v("N/A")]),_vm._v(" "),_vm._l((_vm.subdept_list),function(sdep){return _c('option',{domProps:{"value":sdep.subdept}},[_vm._v(_vm._s(sdep.subdept_full))])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-2 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.title),expression:"title"}],staticClass:"form-control select",attrs:{"disabled":_vm.dept!=_vm.subdept},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.title=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.title_dep),function(level){return _c('option',[_vm._v(_vm._s(level))])}),0)])])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.userlist,"rows-per-page-items":10},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',[_c('td',{style:(((props.item.department_title=='Department Head')||(props.item.department_title=='Committee Head'))?'pointer-events:none':'cursor:pointer'),on:{"click":function($event){return _vm.remove_user(props.item)}}},[_vm._v("Remove")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.username))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.subdept))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.department_title))])])]}}],null,false,1928172653)}),_c('br')],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_member_mngt_vue__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_member_mngt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_member_mngt_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_member_mngt_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_member_mngt_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b19473b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_member_mngt_vue__ = __webpack_require__(1412);
function injectStyle (ssrContext) {
  __webpack_require__(1410)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b19473b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_member_mngt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b19473b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_member_mngt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=17.build.js.map