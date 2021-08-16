webpackJsonp([16],{

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

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _methods;

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
//
//
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
            list_ready: false,
            ready: false,
            cat: 'All',
            tag: '',
            dept_list: [],
            dept: '',
            dept_ready: false,
            assetlist: [],
            st: '',
            ed: '',
            insert_fund_name: '',
            fund_current: 'Regular',
            fund_type: ['Regular', 'Special'],
            cat_type: ['All', '5,001 ~ 50,000', '50,001 ~ 200,000', '>200,000'],
            printlist: '',
            key: '',
            user_check: '',
            status: 'All',
            stl: ['All', 'Preparing', 'Rejected']
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            if (!(response.data == 'bypass')) {
                _this.user_check = response.data[0].signed;
                if (!(_this.user_check == 'set')) {
                    _this.$router.push('../user_setup');
                }
            }
        });
        await axios.get('Procurement/department/backend/dept_member_sub.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].department;
            _this.dept_ready = true;
            var check_previos = document.getElementById('previous_selected').value;
            if (!(check_previos == 'none')) {
                _this.dept = check_previos;
            }
        });

        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = st[0];
            _this.ed = parseInt(ed[0]);
        });
        var formData = new FormData();
        formData.append('cat', this.cat);
        formData.append('dept', this.dept);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        formData.append('stat', this.status);
        await axios.post('Procurement/procurement/backend/printlist_proc.php', formData).then(function (response) {
            _this.printlist = response.data;
            _this.list_ready = true;
        });
        var check_entry = document.getElementById('entry').value;
        if (check_entry == 'proc_entry') {
            this.key = document.getElementById('tmp_id').value;
            this.dept = document.getElementById('tmp_id_2').value;
            document.getElementById('entry').value = '';
            var formData = new FormData();
            formData.append('cat', this.cat);
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            formData.append('stat', this.status);
            axios.post('Procurement/procurement/backend/printlist_proc_live.php', formData).then(function (response) {
                _this.printlist = response.data;
                _this.list_ready = true;
                _this.$forceUpdate();
            });
        }
        this.ready = true;
    },
    mounted: function mounted() {
        window.addEventListener('focus', this.focus_load);
    },
    beforeDestroy: function beforeDestroy() {
        document.getElementById('proc_element').value = '';
        window.removeEventListener('focus', this.focus_load);
    },

    methods: (_methods = {
        scrollTop: function scrollTop() {
            document.getElementById('top_page').scrollIntoView();
        },
        update_period: async function update_period() {
            this.ed = parseInt(this.st) + 1;
            this.$forceUpdate();
            await this.new_list();
        },
        view_proc_comp2: function view_proc_comp2() {
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            document.getElementById('doc_type').value = 'Procurement';
            this.$router.push('../wrapper/form_view');
        },
        resume_row: function resume_row(id) {
            var new_id = id.substring(9);
            var current = document.getElementById(new_id).style.display;
            var target = 'expand_' + new_id;
            if (current == 'none') {
                //EXPAND
                document.getElementById(new_id).style.display = '';
                document.getElementById('icon_' + new_id).style.transform = "rotate(-180deg)";
            } else {
                //COLLAPSE
                document.getElementById(new_id).style.display = 'none';
                document.getElementById('icon_' + new_id).style.transform = "rotate(0deg)";
            }
        },
        focus_load: async function focus_load() {
            var _this2 = this;

            var scroll_element = document.getElementById('content-panel');
            var top = scroll_element.scrollTop;
            var proc_array = document.getElementById('proc_element').value;
            if (proc_array != '') {
                var array = JSON.parse(proc_array);
            }
            this.printlist = '';
            this.list_ready = false;
            var formData = new FormData();
            formData.append('cat', this.cat);
            formData.append('dept', this.dept);
            formData.append('key', this.key);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('stat', this.status);
            //setTimeout(async function(){                      
            await axios.post('Procurement/procurement/backend/printlist_proc_live.php', formData).then(function (response) {
                _this2.printlist = response.data;
                _this2.list_ready = true;
            });
            //}, 500);
            this.$forceUpdate();
            var val = '';
            if (proc_array != '') {
                for (var a = 0; a < array.length; a++) {
                    val = array[a];
                    this.resume_row(val);
                }
            }
            scroll_element.scrollTop = top;
        },
        search_list: function search_list(event) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('cat', this.cat);
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            formData.append('stat', this.status);
            axios.post('Procurement/procurement/backend/printlist_proc_live.php', formData).then(function (response) {
                _this3.printlist = response.data;
            });
        },
        new_list: function new_list(event) {
            var _this4 = this;

            var formData = new FormData();
            formData.append('cat', this.cat);
            formData.append('dept', this.dept);
            formData.append('key', this.key);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('stat', this.status);
            axios.post('Procurement/procurement/backend/printlist_proc_live.php', formData).then(function (response) {
                _this4.printlist = response.data;
            });
        },
        view_form: function view_form() {
            var tag = document.getElementById('tmp_id').value;
            console.log(tag);
            var path = "src/Procurement/reimbursement/backend/view_form_app.php?tag=" + tag + "&st=" + this.st + "-08&ed=" + this.ed + '-07';
            window.open(path, "_blank");
        },
        newplan: function newplan() {
            this.$router.push('new_proc');
        },
        edit_proc_record: function edit_proc_record() {
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            this.$router.push('edit_proc');
        },
        view_proc_record: function view_proc_record() {
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            this.$router.push('view_only');
        },
        fill_return_record: function fill_return_record() {
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            this.$router.push('fill_return');
        },
        return_info: function return_info() {
            document.getElementById('st_tmp').value = this.st + '-08';
            document.getElementById('ed_tmp').value = this.ed + '-07';
            this.$router.push('return_info');
        },
        cancel_proc_record: function cancel_proc_record() {
            var id = document.getElementById('tmp_id').value;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('tag', id);
            if (confirm('Confirm Cancelling Record : ' + id + '?') == true) {
                axios.post('Procurement/procurement/backend/cancel.php', formData).then(function (response) {
                    location.reload();
                });
            }
        },
        reject_proc_record: function reject_proc_record() {
            var id = document.getElementById('tmp_id').value;
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('tag', id);
            if (confirm('Confirm Rejecting Record : ' + id + '?') == true) {
                axios.post('Procurement/procurement/backend/reject.php', formData).then(function (response) {
                    location.reload();
                });
            }
        },
        go_reimb: function go_reimb() {
            this.$router.push('../reimbursement/proc_reimb');
        }
    }, (0, _defineProperty3.default)(_methods, 'view_form', function view_form() {
        var tag = document.getElementById('tmp_id').value;
        var path = "src/Procurement/reimbursement/backend/view_form.php?tag=" + tag + "&st=" + this.st + "-08&ed=" + this.ed + '-07';
        window.open(path, "_blank");
    }), (0, _defineProperty3.default)(_methods, 'view_reimb_records', function view_reimb_records() {
        this.$router.push('../reimbursement/reimb_records');
    }), (0, _defineProperty3.default)(_methods, 'recur_reimb', function recur_reimb() {
        this.$router.push('../reimbursement/recur_setup');
    }), (0, _defineProperty3.default)(_methods, 'recur_reimb_setup', function recur_reimb_setup() {
        this.$router.push('../reimbursement/recur_setup');
    }), (0, _defineProperty3.default)(_methods, 'sign_code', function sign_code() {
        document.getElementById('st_tmp').value = this.st + '-08';
        document.getElementById('ed_tmp').value = this.ed + '-07';
        this.$router.push('sign_code');
    }), (0, _defineProperty3.default)(_methods, 'tender_meeting_setup', function tender_meeting_setup() {
        this.$router.push('tender_meeting_setup');
    }), (0, _defineProperty3.default)(_methods, 'tender_meeting_mat', function tender_meeting_mat() {
        this.$router.push('tender_meeting_mat');
    }), (0, _defineProperty3.default)(_methods, 'retender', function retender() {
        this.$router.push('retender');
    }), _methods)
};

/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1471);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("f9acd9d4", content, true, {});

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-44a595f3]{padding-left:0;padding-right:0}.pl0[data-v-44a595f3]{padding-left:0}.pr0[data-v-44a595f3]{padding-right:0}", ""]);

// exports


/***/ }),

/***/ 1472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"height":"87.5vh"}},[_c('div',{staticClass:"row",attrs:{"id":"top_page"}},[_c('div',{staticClass:"col-lg-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group",staticStyle:{"margin-bottom":"0.6em"}},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-left":"1em","padding-left":"0"}},[_c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Select Department")]),_vm._v(" "),(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control",staticStyle:{"width":"100%"},attrs:{"id":"dept_select"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.dept_list),function(dep){return _c('option',{domProps:{"value":dep.department}},[_vm._v(_vm._s(dep.dept_display))])}),0):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.3em","padding-left":"0"}},[_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0","padding-right":"0.125rem"}},[_c('button',{staticClass:"form-control",staticStyle:{"margin-top":"0.4em"},attrs:{"type":"button"},on:{"click":_vm.newplan}},[_vm._v("New")])]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0.125rem","padding-right":"0.125rem"}},[(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control",staticStyle:{"margin-top":"0.45em"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.stl),function(s){return _c('option',[_vm._v(_vm._s(s))])}),0):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0.125rem","padding-right":"0"}},[(_vm.dept_ready)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat),expression:"cat"}],staticClass:"form-control",staticStyle:{"margin-top":"0.45em"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.cat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},_vm._l((_vm.cat_type),function(c){return _c('option',[_vm._v(_vm._s(c))])}),0):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"col-5",staticStyle:{"padding-right":"0","margin-left":"auto"}},[_c('div',{staticClass:"col-12"},[_c('label',[_vm._v("Filter(s)")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Record"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_list,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"flex col-12",staticStyle:{"margin-top":"0.6em"}},[_c('div',{staticClass:"flex col-6 pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st)},on:{"change":_vm.update_period,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"flex col-6 pr0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12",attrs:{"data-app":""}},[_c('div',{staticClass:"form-group"},[(_vm.list_ready)?_c('div',{staticClass:"col-12 px0",attrs:{"id":"listWrapper"},domProps:{"innerHTML":_vm._s(_vm.printlist)}},[_vm._v("\r\n                        "+_vm._s(_vm.printlist)+"\r\n                    ")]):_vm._e(),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"v_reimb_f_proc"},on:{"click":_vm.view_form}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"edit_proc"},on:{"click":_vm.edit_proc_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"view_proc"},on:{"click":_vm.view_proc_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"view_proc_comp2"},on:{"click":_vm.view_proc_comp2}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"return_info"},on:{"click":_vm.return_info}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"fill_return"},on:{"click":_vm.fill_return_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"reject_proc_record"},on:{"click":_vm.reject_proc_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"cancel_proc_record"},on:{"click":_vm.cancel_proc_record}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"goreimb"},on:{"click":_vm.go_reimb}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"trigger_view_reimb_recur"},on:{"click":_vm.view_reimb_records}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"recur_reimb"},on:{"click":_vm.recur_reimb}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"recur_reimb_setup"},on:{"click":_vm.recur_reimb_setup}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"sign_code"},on:{"click":_vm.sign_code}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"tender_meeting_setup"},on:{"click":_vm.tender_meeting_setup}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"tender_meeting_mat"},on:{"click":_vm.tender_meeting_mat}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"retender"},on:{"click":_vm.retender}})])])])]),_vm._v(" "),_c('div',{staticClass:"corner_nav"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"corner_item",on:{"click":_vm.scrollTop}},[_c('i',{staticClass:"fa fa-2x fa-arrow-up",staticStyle:{"color":"rgba(255,255,255,0.9)"}})])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_vue__ = __webpack_require__(1227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44a595f3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_proc_vue__ = __webpack_require__(1472);
function injectStyle (ssrContext) {
  __webpack_require__(1470)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44a595f3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_view_proc_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44a595f3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_view_proc_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=16.build.js.map