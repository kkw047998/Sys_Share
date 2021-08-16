webpackJsonp([50],{

/***/ 1191:
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
            ready: false,
            feeType: 'regular',
            activityType: '',
            issueDate: '',
            title: '',
            organizer: '',
            nature: '',
            targetStudents: '',
            noOfStudents: '',
            teacher: '',
            activityDate: '',
            activityTime: '',
            venue: '',
            remarks: '',
            fee: ''
        };
    },
    created: async function created() {
        console.log(this.ready);
        this.ready = true;
    },

    methods: {
        submitCircular: function submitCircular() {
            var _this = this;

            console.log('test');
            var formdata = new FormData();
            formdata.append("feeType", this.feeType);
            formdata.append("activityType", this.activityType);
            formdata.append("issueDate", this.issueDate);
            formdata.append("title", this.title);
            formdata.append("organizer", this.organizer);
            formdata.append("nature", this.nature);
            formdata.append("targetStudents", this.targetStudents);
            formdata.append("noOfStudents", this.noOfStudents);
            formdata.append("teacher", this.teacher);
            formdata.append("activityDate", this.activityDate);
            formdata.append("activityTime", this.activityTime);
            formdata.append("venue", this.venue);
            formdata.append("remarks", this.remarks);
            _axios2.default.post("eCircular/backend/submitForm.php", formdata).then(function (response) {
                _this.$alert(response);
            });
        },
        click: function click() {
            // do nothing
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1358);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1ec0fd96", content, true, {});

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-8b7280de]{background-color:transparent;border-left:0}", ""]);

// exports


/***/ }),

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[(_vm.ready)?_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"card"},[_c('form',{staticClass:"form-horizontal",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.submitCircular()}}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col col-md-9"},[_c('div',{staticClass:"form-check-inline form-check"},[_c('label',{staticClass:"form-check-label ",attrs:{"for":"inline-radio1"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.feeType),expression:"feeType"}],attrs:{"type":"radio","value":"regular"},domProps:{"checked":_vm._q(_vm.feeType,"regular")},on:{"change":function($event){_vm.feeType="regular"}}}),_vm._v("Without Fee Collection\n                ")]),_vm._v(" "),_c('label',{staticClass:"form-check-label ",attrs:{"for":"inline-radio2"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.feeType),expression:"feeType"}],attrs:{"type":"radio","value":"fee"},domProps:{"checked":_vm._q(_vm.feeType,"fee")},on:{"change":function($event){_vm.feeType="fee"}}}),_vm._v("With Fee Collection\n                ")])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col col-md-9"},[_c('div',{staticClass:"form-check-inline form-check"},[_c('label',{staticClass:"form-check-label ",attrs:{"for":"inline-radio1"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activityType),expression:"activityType"}],attrs:{"type":"radio","value":"AAC"},domProps:{"checked":_vm._q(_vm.activityType,"AAC")},on:{"change":function($event){_vm.activityType="AAC"}}}),_vm._v("AAC\n                ")]),_vm._v(" "),_c('label',{staticClass:"form-check-label ",attrs:{"for":"inline-radio2"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activityType),expression:"activityType"}],attrs:{"type":"radio","value":"CCA"},domProps:{"checked":_vm._q(_vm.activityType,"CCA")},on:{"change":function($event){_vm.activityType="CCA"}}}),_vm._v("CCA\n                ")])])])]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Issue Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.issueDate),expression:"issueDate"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"date"},domProps:{"value":(_vm.issueDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.issueDate=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Title")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.title),expression:"title"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.title=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Organizer")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.organizer),expression:"organizer"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.organizer)},on:{"input":function($event){if($event.target.composing){ return; }_vm.organizer=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Nature")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature),expression:"nature"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature)},on:{"input":function($event){if($event.target.composing){ return; }_vm.nature=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Target Students")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.targetStudents),expression:"targetStudents"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.targetStudents)},on:{"input":function($event){if($event.target.composing){ return; }_vm.targetStudents=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Number of Students")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.noOfStudents),expression:"noOfStudents"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.noOfStudents)},on:{"input":function($event){if($event.target.composing){ return; }_vm.noOfStudents=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Teacher(s)-in-charge")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.teacher),expression:"teacher"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.teacher)},on:{"input":function($event){if($event.target.composing){ return; }_vm.teacher=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Activity Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activityDate),expression:"activityDate"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"date"},domProps:{"value":(_vm.activityDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.activityDate=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Activity Time")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activityTime),expression:"activityTime"}],staticClass:"form-control",staticStyle:{"width":"95%"},attrs:{"type":"time"},domProps:{"value":(_vm.activityTime)},on:{"input":function($event){if($event.target.composing){ return; }_vm.activityTime=$event.target.value}}})]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Venue")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.venue),expression:"venue"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.venue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.venue=$event.target.value}}})]),_vm._v(" "),(_vm.feeType=='fee')?_c('div',[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Fee")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.fee),expression:"fee"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","cols":"50"},domProps:{"value":(_vm.fee)},on:{"input":function($event){if($event.target.composing){ return; }_vm.fee=$event.target.value}}})]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.4em"}},[_c('label',{staticStyle:{"margin-top":"0.2em","margin-right":"0.4em"}},[_vm._v("Remarks")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.remarks),expression:"remarks"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","cols":"50","required":""},domProps:{"value":(_vm.remarks)},on:{"input":function($event){if($event.target.composing){ return; }_vm.remarks=$event.target.value}}})])]),_vm._v(" "),_vm._m(3)])])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("eCircular")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Circular Type")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Activity Type")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n          ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n          ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submitForm_vue__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submitForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submitForm_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submitForm_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submitForm_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b7280de_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_submitForm_vue__ = __webpack_require__(1359);
function injectStyle (ssrContext) {
  __webpack_require__(1357)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8b7280de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submitForm_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b7280de_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_submitForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=50.build.js.map