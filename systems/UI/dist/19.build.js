webpackJsonp([19],{

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      location: '',
      dd: '',
      Descript: '',
      Req_name: '',
      record_id: '',
      open_card: false,
      ready: false,
      test_content: '',
      events: [],
      config: {
        defaultView: 'month',
        eventRender: function eventRender(event, element) {
          if (event.end != null) {
            var formData = new FormData();
            formData.append('record_id', event.title);
            formData.append('new_due_date', event.end._i);
            axios.post('RequestPortal/backend/change_calendar.php', formData).then(function (response) {});
          }
        },
        eventClick: function eventClick(event) {
          document.getElementById('calendar_record_id').value = event.title;
          document.getElementById('calendar_card_opener').click();
        }
      }
    };
  },
  created: async function created() {
    var _this = this;

    await axios.get('RequestPortal/backend/get_calendar.php').then(function (response) {
      if (response.data.length > 0) {
        var i = 0;
        for (i = 0; i < response.data.length; i++) {
          _this.events[i] = [];
          _this.events[i]['extendedProps'] = [];
          _this.events[i]['title'] = '#' + response.data[i].title;
          _this.events[i]['start'] = response.data[i].start;
          _this.events[i]['end'] = response.data[i].end;
          _this.events[i]['extendedProps']['Location'] = response.data[i].extendedProps.Location;
          _this.events[i]['extendedProps']['Req_Name'] = response.data[i].extendedProps.Req_Name;
          //this.events[i]['description'] = response.data[i].description;
          _this.events[i]['backgroundColor'] = response.data[i].backgroundColor;
          _this.events[i]['borderColor'] = response.data[i].borderColor;
        }
      }
      _this.open_card = false;
      _this.ready = true;
    });
  },
  mounted: function mounted() {},
  updated: function updated() {
    document.getElementsByClassName('fc-right').innerHTML = "HI";
  },

  methods: {
    trigger_open_card: async function trigger_open_card() {
      this.record_id = document.getElementById('calendar_record_id').value;
      this.fetch_request();
      this.open_card = true;
    },
    fetch_request: async function fetch_request() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('record_id', this.record_id);
      await axios.post('RequestPortal/backend/fetch_request.php', formData).then(function (response) {
        _this2.Req_name = response.data[0].Req_Name;
        _this2.Descript = response.data[0].Description;
        _this2.location = response.data[0].Location;
        _this2.dd = response.data[0].Due_date;
      });
    },
    goto_ticket: function goto_ticket() {
      var tmp_id = this.record_id;
      tmp_id = tmp_id.replace('#', '');
      document.getElementById('tmp_id').value = tmp_id;
      document.getElementById('tmp_id_2').value = 'handler';
      this.$router.push('ticket');
    },
    close_overlay: function close_overlay() {
      this.open_card = false;
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

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3eed3642", content, true, {});

/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".fc-day-header{height:3rem!important;font-size:1.5rem!important}.fc-day-number,div.fc-content{font-size:1rem!important}div.fc-content{height:1.2rem!important}span.fc-time,span.fc-title{color:hsla(0,0%,100%,.8)!important}.fc-event .fc-bg{opacity:1!important}td.fc-axis.fc-widget-content>span{font-size:.8rem!important}span.fc-day-number{color:#000!important;font-weight:400}.fc-bg{background-color:#faefd2!important;opacity:1!important}.center_card{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}.fa-window-close{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close:hover{color:#fff}.flex{display:flex;flex-direction:row}.px0{padding-left:0;padding-right:0}tr>td.fc-today{background-color:#acf2c2!important}.fc-right{width:19.5%!important;height:1rem!important}div.fc-right>div.fc-button-group{display:none!important}", ""]);

// exports


/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1364);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("79ad861d", content, true, {});

/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".redirect[data-v-145ac88f]{cursor:pointer;color:rgba(0,0,0,.85)}.redirect[data-v-145ac88f]:hover{color:rgba(0,0,0,.7)}.legend[data-v-145ac88f]{position:absolute;right:0;top:0;font-size:1.2rem;padding-top:.2rem}.flex[data-v-145ac88f]{display:flex;flex-direction:row}.red_bar[data-v-145ac88f]{background-color:#ee1c25;color:hsla(0,0%,100%,.8);font-weight:700}.blue_bar[data-v-145ac88f]{background-color:#72a3e8;color:hsla(0,0%,100%,.8);font-weight:700}.inner_text[data-v-145ac88f]{font-size:.75rem!important;text-align:center}.px0[data-v-145ac88f]{padding-left:0;padding-right:0}", ""]);

// exports


/***/ }),

/***/ 1365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"relative"}},[_vm._m(0),_vm._v(" "),(_vm.ready)?_c('full-calendar',{attrs:{"config":_vm.config,"events":_vm.events}}):_vm._e(),_vm._v(" "),_c('button',{staticStyle:{"display":"none"},attrs:{"type":"button","id":"calendar_card_opener"},on:{"click":_vm.trigger_open_card}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"calendar_record_id","value":""}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"calendar_value","value":""}}),_vm._v(" "),(_vm.open_card)?_c('div',{staticClass:"center_card",staticStyle:{"z-index":"10000","margin-left":"25%","margin-right":"25%","margin-top":"15%"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("View Record "+_vm._s(_vm.record_id))]),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.35rem"}},[_c('div',{staticClass:"col-3 px0"},[_vm._v("Requested By")]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_vm._v(_vm._s(_vm.Req_name))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.35rem"}},[_c('div',{staticClass:"col-3 px0"},[_vm._v("Description")]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_vm._v(_vm._s(_vm.Descript))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.35rem"}},[_c('div',{staticClass:"col-3 px0"},[_vm._v("Location")]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_vm._v(_vm._s(_vm.location))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.35rem"}},[_c('div',{staticClass:"col-3 px0"},[_vm._v("Due Date")]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_vm._v(_vm._s(_vm.dd))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.35rem"}},[_c('div',{staticClass:"col-3 px0"},[_vm._v("Details")]),_vm._v(" "),_c('div',{staticClass:"col-1"},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('u',{staticClass:"redirect"},[_c('a',{on:{"click":_vm.goto_ticket}},[_vm._v("View Ticket(s)")])])])])])])]):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"legend",staticStyle:{"width":"20%"}},[_c('div',{staticClass:"flex col-12 px0"},[_c('label',{staticClass:"col-5 px0"}),_vm._v(" "),_c('label',{staticClass:"red_bar inner_text col-7 px0"},[_vm._v("Unhandled Tasks")])]),_vm._v(" "),_c('div',{staticClass:"flex col-12 px0"},[_c('label',{staticClass:"col-5 px0"}),_vm._v(" "),_c('label',{staticClass:"blue_bar inner_text col-7 px0"},[_vm._v("Tasks be responsible for ")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_view_vue__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_view_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_view_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_view_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_view_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_145ac88f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_calendar_view_vue__ = __webpack_require__(1365);
function injectStyle (ssrContext) {
  __webpack_require__(1361)
  __webpack_require__(1363)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-145ac88f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_view_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_145ac88f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_calendar_view_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=19.build.js.map