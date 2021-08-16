webpackJsonp([29],{

/***/ 1270:
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

exports.default = {
    data: function data() {
        return {
            exc_f6: false,
            btn_text: 'Generate Message',
            dp_textarea: false,
            msg: '',
            id: [0],
            sub1: [''],
            sub1_id: [''],
            sub2: [''],
            sub2_id: [''],
            sub3: [''],
            sub3_id: [''],
            sub4: [''],
            sub4_id: [''],
            sub5: [''],
            sub5_id: [''],
            sub6: [''],
            sub6_id: [''],
            assigned_id: [''],
            day: [0],
            session: [0],
            cls: [''],
            loc: [''],
            leave_type: [''],
            app_type: [''],
            ready: false,
            tdy_date: '',
            ret_list: [''],
            leave: [''],
            assign: [''],
            list_leng: 0
        };
    },
    created: async function created() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.tdy_date = today;
        await this.get_record();
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        invert: function invert() {
            this.exc_f6 = !this.exc_f6;
        },
        gen_report: async function gen_report() {
            var _this = this;

            var formData = new FormData();
            formData.append('date', this.tdy_date);
            await axios.post('subsitude/admin/backend/generate_msg.php', formData).then(function (response) {
                _this.msg = response.data;
                _this.msg = _this.msg.replace(/<br>/g, '\r\n');
                _this.dp_textarea = true;
                _this.btn_text = 'Copy Message';
                var textarea = document.getElementById("msg");
                textarea.select();
                document.execCommand("copy");
            });
        },
        change_assign: async function change_assign(i) {
            var _this2 = this;

            this.btn_text = 'Generate Message';
            this.dp_textarea = false;
            this.msg = '';
            var formData = new FormData();
            formData.append('record_id', this.id[i]);
            formData.append('assign_id', this.assigned_id[i]);
            await axios.post('subsitude/admin/backend/update_assign.php', formData).then(function (response) {
                _this2.$alert(response.data);
            });
        },
        get_record: async function get_record() {
            var _this3 = this;

            this.btn_text = 'Generate Message';
            this.dp_textarea = false;
            this.msg = '';
            this.list_leng = this.list_leng - 1;
            this.id.slice(0, this.list_leng);
            this.leave.slice(0, this.list_leng);
            this.assigned_id.slice(0, this.list_leng);
            this.assign.slice(0, this.list_leng);
            this.sub1.slice(0, this.list_leng);
            this.sub1_id.slice(0, this.list_leng);
            this.sub2.slice(0, this.list_leng);
            this.sub2_id.slice(0, this.list_leng);
            this.sub3.slice(0, this.list_leng);
            this.sub3_id.slice(0, this.list_leng);
            this.day.slice(0, this.list_leng);
            this.session.slice(0, this.list_leng);
            this.cls.slice(0, this.list_leng);
            this.loc.slice(0, this.list_leng);
            this.leave_type.slice(0, this.list_leng);
            this.app_type.slice(0, this.list_leng);
            this.list_leng = 0;
            var formData = new FormData();
            formData.append('date', this.tdy_date);
            await axios.post('subsitude/admin/backend/fetch_record.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.ret_list = response.data;
                    _this3.list_leng = _this3.ret_list.length;
                    var i = 0;
                    for (i = 0; i < _this3.ret_list.length; i++) {
                        _this3.id[i] = _this3.ret_list[i].id;
                        _this3.leave[i] = _this3.ret_list[i].leave_name;
                        _this3.assigned_id[i] = _this3.ret_list[i].assigned_id;
                        _this3.assign[i] = _this3.ret_list[i].assigned_name;
                        _this3.sub1[i] = _this3.ret_list[i].sub_name1;
                        _this3.sub1_id[i] = _this3.ret_list[i].sub_id1;
                        _this3.sub2[i] = _this3.ret_list[i].sub_name2;
                        _this3.sub2_id[i] = _this3.ret_list[i].sub_id2;
                        _this3.sub3[i] = _this3.ret_list[i].sub_name3;
                        _this3.sub3_id[i] = _this3.ret_list[i].sub_id3;
                        _this3.sub4[i] = _this3.ret_list[i].sub_name4;
                        _this3.sub4_id[i] = _this3.ret_list[i].sub_id4;
                        _this3.sub5[i] = _this3.ret_list[i].sub_name5;
                        _this3.sub5_id[i] = _this3.ret_list[i].sub_id5;
                        _this3.sub6[i] = _this3.ret_list[i].sub_name6;
                        _this3.sub6_id[i] = _this3.ret_list[i].sub_id6;
                        _this3.day[i] = _this3.ret_list[i].day;
                        _this3.session[i] = _this3.ret_list[i].session;
                        _this3.cls[i] = _this3.ret_list[i].class;
                        _this3.loc[i] = _this3.ret_list[i].location;
                        _this3.leave_type[i] = _this3.ret_list[i].type;
                        _this3.app_type[i] = _this3.ret_list[i].app_type;
                    }
                }
            });
            this.$forceUpdate();
        },
        handleSubmit: function handleSubmit() {
            var formData = new FormData();
        },
        open_sign_form: function open_sign_form() {
            window.open("src/subsitude/admin/backend/sign_form.php?date=" + this.tdy_date);
        },
        re_assign: function re_assign() {
            var _this4 = this;

            var formData = new FormData();
            formData.append("date", this.tdy_date);
            axios.post('subsitude/admin/backend/rearrange.php', formData).then(function (response) {
                if (response.data) {
                    _this4.get_record();
                    _this4.$forceUpdate();
                }
            });
        },
        del_record: function del_record(id) {
            var _this5 = this;

            var msg = "Confirm deleting subsititude record?";
            if (confirm(msg)) {
                var formData = new FormData();
                formData.append('rid', id);
                axios.post('subsitude/admin/backend/del_record.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this5.re_assign();
                    }
                });
            }
        }
    }
};

/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1574);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("329109da", content, true, {});

/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "td[data-v-65f72f64]{transition:all .3s ease-in-out}th[data-v-65f72f64]{font-size:.95rem}.del[data-v-65f72f64]{cursor:pointer;text-align:center}.del[data-v-65f72f64]:hover{background-color:rgba(255,0,0,.5);color:#fff}.inner_overlay[data-v-65f72f64]{z-index:5;width:65%;max-height:60%;position:absolute;margin:auto;top:0;bottom:0;left:0;right:0;background-color:hsla(0,0%,100%,.95);box-shadow:5px 5px 5px 5px hsla(0,0%,83%,.6)}.fa-window-close[data-v-65f72f64]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-65f72f64]:hover{color:#fff}.sub_tr[data-v-65f72f64]{height:5rem!important}", ""]);

// exports


/***/ }),

/***/ 1575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"position":"relative"}},[_c('form',{attrs:{"id":"form","enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control",on:{"click":_vm.gen_report}},[_vm._v(_vm._s(_vm.btn_text))])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control",on:{"click":_vm.open_sign_form}},[_vm._v("Generate Form")])]),_vm._v(" "),_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4 flex"},[_c('div',{staticClass:"col-2"}),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tdy_date),expression:"tdy_date"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.tdy_date)},on:{"change":_vm.get_record,"input":function($event){if($event.target.composing){ return; }_vm.tdy_date=$event.target.value}}})])])]),_vm._v(" "),(_vm.dp_textarea)?_c('div',{staticClass:"col-12",staticStyle:{"margin-top":"1rem"}},[_c('div',{staticClass:"col-12"},[_c('textarea',{staticClass:"form-control",attrs:{"id":"msg"}},[_vm._v(_vm._s(_vm.msg))])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"padding":"1rem 0 0 0"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(2),_vm._v(" "),_c('tbody',_vm._l((_vm.list_leng),function(i){return (_vm.list_leng>0)?_c('tr',[_c('td',[_c('div',{staticClass:"del",on:{"click":function($event){return _vm.del_record(_vm.id[i-1])}}},[_vm._v("Delete")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.leave[i-1]))]),_vm._v(" "),_c('td',{staticStyle:{"padding-top":"0.4rem"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.assigned_id[i-1]),expression:"assigned_id[i-1]"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.assigned_id, i-1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.change_assign(i-1)}]}},[_c('option',{domProps:{"value":_vm.sub1_id[i-1]}},[_vm._v(_vm._s(_vm.sub1[i-1]))]),_vm._v(" "),_c('option',{domProps:{"value":_vm.sub2_id[i-1]}},[_vm._v(_vm._s(_vm.sub2[i-1]))]),_vm._v(" "),_c('option',{domProps:{"value":_vm.sub3_id[i-1]}},[_vm._v(_vm._s(_vm.sub3[i-1]))]),_vm._v(" "),_c('option',{domProps:{"value":_vm.sub4_id[i-1]}},[_vm._v(_vm._s(_vm.sub4[i-1]))]),_vm._v(" "),_c('option',{domProps:{"value":_vm.sub5_id[i-1]}},[_vm._v(_vm._s(_vm.sub5[i-1]))]),_vm._v(" "),_c('option',{domProps:{"value":_vm.sub6_id[i-1]}},[_vm._v(_vm._s(_vm.sub6[i-1]))]),_vm._v(" "),_c('option',{attrs:{"value":"LSS1"}},[_vm._v("Substitute Teacher #1")]),_vm._v(" "),_c('option',{attrs:{"value":"LSS2"}},[_vm._v("Substitute Teacher #2")])])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_vm._v(_vm._s(_vm.day[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s((parseInt(_vm.session[i-1])+1)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.cls[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.loc[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.leave_type[i-1]))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.app_type[i-1]))])]):_vm._e()}),0)])])])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Substitude Records")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4",staticStyle:{"padding-top":"0.35rem"}},[_c('label',[_vm._v("Select Date:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Action")]),_vm._v(" "),_c('th',[_vm._v("Leave")]),_vm._v(" "),_c('th',[_vm._v("Assigned To")]),_vm._v(" "),_c('th',[_vm._v("Day")]),_vm._v(" "),_c('th',[_vm._v("Period")]),_vm._v(" "),_c('th',[_vm._v("Class")]),_vm._v(" "),_c('th',[_vm._v("Location")]),_vm._v(" "),_c('th',[_vm._v("Leave Type")]),_vm._v(" "),_c('th',[_vm._v("Application Type")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sup_op_vue__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sup_op_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sup_op_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sup_op_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sup_op_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65f72f64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sup_op_vue__ = __webpack_require__(1575);
function injectStyle (ssrContext) {
  __webpack_require__(1573)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65f72f64"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sup_op_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65f72f64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sup_op_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=29.build.js.map