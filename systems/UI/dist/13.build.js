webpackJsonp([13],{

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

/***/ 1269:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            counter_month: '',
            counterlist: [],
            c_name: [],
            sub: [],
            leave_c: [],
            count_leng: 0,
            key: '',
            c_key: '',
            list_leng: 0,
            ret_list: [],
            st: '',
            ed: '',
            date: [],
            leave: [],
            day: [],
            session: [],
            location: [],
            cls: []
        }, (0, _defineProperty3.default)(_ref, 'sub', []), (0, _defineProperty3.default)(_ref, 'type', []), (0, _defineProperty3.default)(_ref, 'app_type', []), (0, _defineProperty3.default)(_ref, 'assigned', []), (0, _defineProperty3.default)(_ref, 'ready', false), (0, _defineProperty3.default)(_ref, 'headers', [{ text: 'Name', value: 'name', sortable: true }, { text: 'Substitute', value: 'sub_counter', sortable: true }, { text: 'Leave', value: 'leave_counter', sortable: true }, { text: 'Balance', value: 'balance', sortable: true }]), _ref;
    },
    created: async function created() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.counter_month = yyyy + '-' + mm;
        this.st = today;
        this.ed = today;
        this.fetch_swap();
        this.fetch_counter();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        search_counter: async function search_counter() {
            var _this = this;

            var formData = new FormData();
            formData.append('month', this.counter_month);
            formData.append('key', this.c_key);
            await axios.post('subsitude/report/backend/counter.php', formData).then(function (response) {
                _this.count_leng = response.data.length;
                _this.counterlist = response.data;
                /*
                var i = 0;
                for(i=0;i<this.count_leng;i++){
                    this.c_name[i] = response.data[i].name;
                    this.sub[i] = response.data[i].sub_counter;
                    this.leave_c[i] = response.data[i].leave_counter;
                }*/
            });
        },
        open_report: function open_report() {
            window.open("../../src/subsitude/report/backend/export_report.php?month=" + this.counter_month);
        },
        fetch_counter: async function fetch_counter() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('month', this.counter_month);
            await axios.post('subsitude/report/backend/counter.php', formData).then(function (response) {
                _this2.count_leng = response.data.length;
                _this2.counterlist = response.data;
                /*
                var i = 0;
                for(i=0;i<this.count_leng;i++){
                    this.c_name[i] = response.data[i].name;
                    this.sub[i] = response.data[i].sub_counter;
                    this.leave_c[i] = response.data[i].leave_counter;
                }*/
            });
        },
        fetch_swap: async function fetch_swap() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('subsitude/report/backend/fetch_swap.php', formData).then(function (response) {
                _this3.ret_list = response.data;
                _this3.list_leng = _this3.ret_list.length;
                var i = 0;
                for (i = 0; i < _this3.list_leng; i++) {
                    _this3.leave[i] = _this3.ret_list[i].leave;
                    _this3.date[i] = _this3.ret_list[i].date;
                    _this3.app_type[i] = _this3.ret_list[i].app_type;
                    _this3.assigned[i] = _this3.ret_list[i].assign;
                    _this3.cls[i] = _this3.ret_list[i].class;
                    _this3.location[i] = _this3.ret_list[i].location;
                    _this3.session[i] = _this3.ret_list[i].session;
                    _this3.day[i] = _this3.ret_list[i].day;
                    _this3.type[i] = _this3.ret_list[i].type;
                }
            });
            this.key = '';
        },
        search_swap: async function search_swap() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('key', this.key);
            await axios.post('subsitude/report/backend/fetch_swap.php', formData).then(function (response) {
                _this4.ret_list = response.data;
                _this4.list_leng = _this4.ret_list.length;
                var i = 0;
                for (i = 0; i < _this4.list_leng; i++) {
                    _this4.leave[i] = _this4.ret_list[i].leave;
                    _this4.date[i] = _this4.ret_list[i].date;
                    _this4.app_type[i] = _this4.ret_list[i].app_type;
                    _this4.assigned[i] = _this4.ret_list[i].assign;
                    _this4.cls[i] = _this4.ret_list[i].class;
                    _this4.location[i] = _this4.ret_list[i].location;
                    _this4.session[i] = _this4.ret_list[i].session;
                    _this4.day[i] = _this4.ret_list[i].day;
                    _this4.type[i] = _this4.ret_list[i].type;
                }
            });
        }
    }
};

/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1571);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1de2b1be", content, true, {});

/***/ }),

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "th[data-v-14a68c7f]{font-size:1rem}td[data-v-14a68c7f]{font-size:.95rem;transition:all .3s ease-in-out}", ""]);

// exports


/***/ }),

/***/ 1572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"col-7"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Search key"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_swap,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-8",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"flex",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"flex col-6",staticStyle:{"padding-left":"0"}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.st)},on:{"change":_vm.fetch_swap,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"flex col-6",staticStyle:{"margin-left":"auto","padding-right":"0"}},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.ed)},on:{"change":_vm.fetch_swap,"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"padding":"1rem 0 0 0"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(3),_vm._v(" "),_c('tbody',_vm._l((_vm.list_leng),function(i){return (_vm.list_leng>0)?_c('tr',[_c('td',[_vm._v(_vm._s(_vm.date[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.leave[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.assigned[i-1]))]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_vm._v(_vm._s(_vm.day[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s((_vm.session[i-1]+1)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.cls[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.location[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.type[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.app_type[i-1]))])]):_vm._e()}),0)])])])])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"card"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"card-body",staticStyle:{"padding-left":"0","padding-right":"0","padding-bottom":"0"}},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-3"},[_c('button',{staticClass:"form-control",attrs:{"type":"button"},on:{"click":_vm.open_report}},[_vm._v("Export")])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.counter_month),expression:"counter_month"}],staticClass:"form-control",attrs:{"type":"month"},domProps:{"value":(_vm.counter_month)},on:{"change":_vm.fetch_counter,"input":function($event){if($event.target.composing){ return; }_vm.counter_month=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.c_key),expression:"c_key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Search key"},domProps:{"value":(_vm.c_key)},on:{"keyup":_vm.search_counter,"input":function($event){if($event.target.composing){ return; }_vm.c_key=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"padding":"1rem 0 0 0"}},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.counterlist,"sort-by":_vm.balance,"sort-desc":_vm.isDescending,"rows-per-page-items":[10],"disable-initial-sort":""},on:{"update:sortBy":function($event){_vm.balance=$event},"update:sort-by":function($event){_vm.balance=$event},"update:sortDesc":function($event){_vm.isDescending=$event},"update:sort-desc":function($event){_vm.isDescending=$event}},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.sub_counter))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.leave_counter))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.balance))])]}}],null,false,333862951)})],1)])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Swap Record")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4",staticStyle:{"padding-top":"0.35rem"}},[_c('label',[_vm._v("Start Date")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4",staticStyle:{"padding-top":"0.35rem"}},[_c('label',[_vm._v("End Date")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Date")]),_vm._v(" "),_c('th',[_vm._v("Leave")]),_vm._v(" "),_c('th',[_vm._v("Assigned To")]),_vm._v(" "),_c('th',[_vm._v("Day")]),_vm._v(" "),_c('th',[_vm._v("Period")]),_vm._v(" "),_c('th',[_vm._v("Class")]),_vm._v(" "),_c('th',[_vm._v("Location")]),_vm._v(" "),_c('th',[_vm._v("Leave Type")]),_vm._v(" "),_c('th',[_vm._v("Application Type")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Counters")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_record_vue__ = __webpack_require__(1269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_record_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_record_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_record_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_record_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14a68c7f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_record_vue__ = __webpack_require__(1572);
function injectStyle (ssrContext) {
  __webpack_require__(1570)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14a68c7f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_record_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14a68c7f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=13.build.js.map