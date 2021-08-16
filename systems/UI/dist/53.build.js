webpackJsonp([53],{

/***/ 1179:
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
      search_key: '',
      pooldata: [],
      userid: "",
      st_yr: 0,
      ed_yr: 0,
      ready: false,
      headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'ID', value: 'item_id', sortable: true }, { text: 'Requester', value: 'Req_Name', sortable: true }, { text: 'Description', value: 'Description', sortable: true }, { text: 'Location', value: 'Location', sortable: true }, { text: 'Due date', value: 'Due_date', sortable: true }, { text: 'Due Time', value: 'Due_time', sortable: false }, { text: 'Assigned to', value: 'Handler', sortable: true }, { text: 'Issue Status', value: 'Status', sortable: true }]
    };
  },
  created: async function created() {
    var _this = this;

    this.get_period();
    var formData = new FormData();
    formData.append('key', this.search_key);
    formData.append('st', this.st_yr);
    formData.append('ed', this.ed_yr);
    await _axios2.default.post('RequestPortal/backend/academic.php', formData).then(function (response) {
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
    update_period: function update_period() {
      this.ed_yr = parseInt(this.st_yr) + 1;
      this.$forceUpdate();
      this.search_key_data();
    },
    get_period: function get_period() {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var year = dateObj.getUTCFullYear();
      if (month < 9) {
        this.st_yr = year - 1;
        this.ed_yr = year;
      } else {
        this.st_yr = year;
        this.ed_yr = year + 1;
      }
    },
    editform: function editform(event) {
      var targetID = event;
      document.getElementById('tmp_id').value = targetID;
      document.getElementById('tmp_id_2').value = 'handler';
      document.getElementById('entry_type').value = 'academic';
      document.getElementById('query').value = this.search_key;
      //this.$router.push('edit_form');
      this.$router.push('ticket');
    },
    search_key_data: async function search_key_data() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('key', this.search_key);
      formData.append('st', this.st_yr);
      formData.append('ed', this.ed_yr);
      await _axios2.default.post('RequestPortal/backend/academic.php', formData).then(function (response) {
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

/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("505eee68", content, true, {});

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".pl0[data-v-d72d63f0]{padding-left:0!important}.pr0[data-v-d72d63f0]{padding-right:0!important}", ""]);

// exports


/***/ }),

/***/ 1344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-xs-12 col-md-12",attrs:{"data-app":""}},[_c('div',{staticClass:"flex px0"},[_c('div',{staticClass:"col-7",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_key),expression:"search_key"}],staticClass:"form-control",staticStyle:{"margin-bottom":"0.5em"},attrs:{"type":"text","placeholder":"Live Search Field"},domProps:{"value":(_vm.search_key)},on:{"keyup":_vm.search_key_data,"input":function($event){if($event.target.composing){ return; }_vm.search_key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-3 px0 flex"},[_c('div',{staticClass:"col-6 pl0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st_yr),expression:"st_yr"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.st_yr)},on:{"change":function($event){return _vm.update_period()},"input":function($event){if($event.target.composing){ return; }_vm.st_yr=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-6 pr0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed_yr),expression:"ed_yr"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.ed_yr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed_yr=$event.target.value}}})])])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.pooldata,"rows-per-page-items":[20],"disable-initial-sort":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticStyle:{"text-align":"center"}},[_c('a',{staticStyle:{"font-size":"1.3rem"},attrs:{"href":"","id":props.item.item_id},on:{"click":function($event){$event.preventDefault();return _vm.editform(props.item.item_id)}}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.ref_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Req_Name))]),_vm._v(" "),_c('td',{staticStyle:{"width":"55em"}},[_vm._v(_vm._s(props.item.Description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Location))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Due_date))]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.Due_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Handler))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Status))])]}}],null,false,2028215081)})],1):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_academic_vue__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_academic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_academic_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_academic_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_academic_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d72d63f0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_academic_vue__ = __webpack_require__(1344);
function injectStyle (ssrContext) {
  __webpack_require__(1342)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d72d63f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_academic_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d72d63f0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_academic_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=53.build.js.map