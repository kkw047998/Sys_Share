webpackJsonp([28],{

/***/ 1273:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            l_type: 'sick',
            st_time: '07:55',
            ed_time: '15:45',
            st_date: '',
            ed_date: '',
            show_form: true,
            hv_record: false,
            app_list: [],
            user_check: '',
            message: '',
            sign_data: [],
            signed: false,
            pwd: '',
            reason: '',
            sel_date: '',
            date_list: [],
            ready: false,
            tdy_date: '',
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Application Date', value: 'app_date', sortable: false }, { text: 'From', value: 'st_date', sortable: false }, { text: 'To', value: 'ed_date', sortable: false }, { text: 'Reason', value: 'reason', sortable: false }, { text: 'Leave Type', value: 'leave_type', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../../Procurement/user_setup');
            }
        });
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.tdy_date = today;
        await this.fetch_leave_date();
        await this.fetch_form();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        open_form: function open_form(id) {
            window.open("src/subsitude/my_record/backend/open_app_form.php?rid=" + id);
        },
        fetch_form: async function fetch_form() {
            var _this2 = this;

            await axios.get('subsitude/my_record/backend/app_form.php').then(function (response) {
                _this2.app_list = response.data;
            });
        },
        post_ssc: function post_ssc(event) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('pwd', this.pwd);
            axios.post('Procurement/reimbursement/backend/check_sign.php', formData).then(function (response) {
                _this3.sign_data = response.data;
                if (response.data[0].signature == undefined) {
                    _this3.message = response.data;
                } else {
                    _this3.signed = true;
                    _this3.message = '';
                }
            });
        },
        fetch_leave_date: async function fetch_leave_date() {
            var _this4 = this;

            await axios.get('subsitude/my_record/backend/leave_date.php').then(function (response) {
                _this4.date_list = response.data;
            });
            this.hv_record = true;
        },
        handleSubmit: function handleSubmit() {
            var _this5 = this;

            if (this.signed == true) {
                this.sel_date = this.st_date + "," + this.ed_date;
                var formData = new FormData();
                formData.append('reason', this.reason);
                formData.append('date', this.sel_date);
                formData.append('st_time', this.st_time);
                formData.append('ed_time', this.ed_time);
                formData.append('type', this.l_type);
                axios.post('subsitude/my_record/backend/insert_app_form.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this5.fetch_form();
                        _this5.$forceUpdate();
                        _this5.show_form = false;
                    } else {
                        console.log(response.data);
                    }
                });
            } else {
                this.$alert('Please Sign before submit');
            }
        }
    }
};

/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1581);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6e2c7d90", content, true, {});

/***/ }),

/***/ 1581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "td[data-v-aa2e357e]{transition:all .3s ease-in-out}th[data-v-aa2e357e]{font-size:.95rem}.inner_overlay[data-v-aa2e357e]{z-index:5;width:65%;max-height:60%;position:absolute;margin:auto;top:0;bottom:0;left:0;right:0;background-color:hsla(0,0%,100%,.95);box-shadow:5px 5px 5px 5px hsla(0,0%,83%,.6)}.fa-window-close[data-v-aa2e357e]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-aa2e357e]:hover{color:#fff}.sub_tr[data-v-aa2e357e]{height:5rem!important}", ""]);

// exports


/***/ }),

/***/ 1582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0"}},[(_vm.show_form)?_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0"}},[_c('form',{attrs:{"id":"form","enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-5"},[_vm._v("Reasons for the leave")]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason),expression:"reason"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Reason(s) for the leave"},domProps:{"value":(_vm.reason)},on:{"input":function($event){if($event.target.composing){ return; }_vm.reason=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-5"},[_vm._v("Leave Type")]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.l_type),expression:"l_type"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.l_type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"event"}},[_vm._v("Event")]),_vm._v(" "),_c('option',{attrs:{"value":"offical"}},[_vm._v("Official Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"casual"}},[_vm._v("Casual Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"sick"}},[_vm._v("Sick Leave")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-5"},[_vm._v("From")]),_vm._v(" "),_c('div',{staticClass:"col-7 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st_date),expression:"st_date"}],staticClass:"form-control date col-7",attrs:{"type":"date"},domProps:{"value":(_vm.st_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.st_date=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st_time),expression:"st_time"}],staticClass:"form-control col-5",attrs:{"type":"time"},domProps:{"value":(_vm.st_time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.st_time=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-5"},[_vm._v("To")]),_vm._v(" "),_c('div',{staticClass:"col-7 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed_date),expression:"ed_date"}],staticClass:"form-control date col-7",attrs:{"type":"date"},domProps:{"value":(_vm.ed_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed_date=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed_time),expression:"ed_time"}],staticClass:"form-control col-5",attrs:{"type":"time"},domProps:{"value":(_vm.ed_time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed_time=$event.target.value}}})])]),_vm._v(" "),(!_vm.signed)?_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-7 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control col-7",attrs:{"type":"password","onfocus":"this.value=''"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control col-5",staticStyle:{"padding-left":"0"},attrs:{"type":"button"},on:{"click":_vm.post_ssc}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-7 flex"},[_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_data[0].signature}})])]):_vm._e()]),_vm._v(" "),(_vm.message!='')?_c('div',{staticStyle:{"margin-left":"2rem","margin-bottom":"1rem"}},[_vm._v(_vm._s(_vm.message))]):_vm._e(),_vm._v(" "),_vm._m(3)])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"card",staticStyle:{"padding-left":"0"}},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"card-body",staticStyle:{"padding":"1.5rem 0 0 0"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.app_list,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.open_form(props.item.id)}}},[_vm._v("View")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.app_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.st_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.ed_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.reason))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.leave_type))])]}}],null,false,748539401)}):_vm._e()],1)])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Application Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',[_vm._v("    \n                                    Security Code : \n                                ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',[_vm._v("    \n                                    Signature \n                                ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Application Records")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_leave_record_vue__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_leave_record_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_leave_record_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_leave_record_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_leave_record_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa2e357e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_leave_record_vue__ = __webpack_require__(1582);
function injectStyle (ssrContext) {
  __webpack_require__(1580)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aa2e357e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_my_leave_record_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa2e357e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_leave_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=28.build.js.map