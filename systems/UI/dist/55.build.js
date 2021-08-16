webpackJsonp([55],{

/***/ 1262:
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

exports.default = {
    data: function data() {
        return {
            msgbox: false,
            pages: [],
            pdf_pg: 0,
            rejectable: false,
            hv_support: false,
            support_doc_url: '',
            pdf_ready: false,
            pdf_length: 0,
            isHead: false,
            st: '',
            ed: '',
            //baseURL:'https://s-g301-d009.munsang.edu.hk/portal_vue/UI/src',
            baseURL: '',
            //baseURL:'https://s-web-s033.munsang.edu.hk/src',
            doc_url: '',
            pdf_url: [],
            doc_type: 'Reimbursement',
            tag: '',
            reason: '',
            ready: false,
            return: ''
        };
    },
    created: async function created() {
        var protocol = location.protocol;
        var slashes = protocol.concat("//");
        var host = slashes.concat(window.location.hostname);
        //var src = host+'/portal_vue/UI/src';
        var src = host + '/systems/UI/src';
        this.baseURL = src;
        await this.load_info();
        await this.check_state();
        await this.fetch_pdf();
        await this.permission();
        this.ready = true;
    },

    methods: {
        open_msg: function open_msg() {
            this.msgbox = !this.msgbox;
        },
        prev_pdf: function prev_pdf() {
            if (this.pdf_pg > 0) {
                this.pdf_pg--;
            }
        },
        next_pdf: function next_pdf() {
            if (this.pdf_pg < this.pages.length - 1) {
                this.pdf_pg++;
            }
        },
        check_state: function check_state() {
            if (this.doc_type == 'Reimbursement') {
                this.check_reimb_stat();
            } else {
                this.check_proc_stat();
            }
        },
        check_reimb_stat: async function check_reimb_stat() {
            var _this = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/wrapper/backend/check_reimb.php', formData).then(function (response) {
                if (response.data == 'enable') {
                    _this.rejectable = true;
                } else {
                    _this.rejectable = false;
                }
            });
        },
        check_proc_stat: async function check_proc_stat() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            await axios.post('Procurement/wrapper/backend/check_proc.php', formData).then(function (response) {
                if (response.data == 'enable') {
                    _this2.rejectable = true;
                } else {
                    _this2.rejectable = false;
                }
            });
        },
        open_form: function open_form() {
            window.open(this.doc_url);
        },
        load_info: function load_info() {
            this.tag = document.getElementById('tmp_id').value;
            this.doc_type = document.getElementById('doc_type').value;
            this.st = document.getElementById('st_tmp').value;
            this.ed = document.getElementById('ed_tmp').value;
            if (this.doc_type == 'Reimbursement') {
                this.doc_url = this.baseURL + '/Procurement/reimbursement/backend/view_form_app.php?tag=' + this.tag + '&st=' + this.st + '&ed=' + this.ed;
            } else {
                this.doc_url = this.baseURL + '/Procurement/procurement/backend/comparision_table.php?p_id=' + this.tag;
            }
        },
        permission: async function permission() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            formData.append('type', this.doc_type);
            await axios.post('Procurement/wrapper/backend/permission.php', formData).then(function (response) {
                if (response.data == 'isHead') {
                    _this3.isHead = true;
                    if (_this3.doc_type == 'Reimbursement') {
                        _this3.return = '../reimbursement/reimb_records';
                    } else {
                        _this3.return = '../procurement/view_proc';
                    }
                } else {
                    _this3.isHead = false;
                    if (_this3.doc_type == 'Reimbursement') {
                        _this3.return = '../reimbursement/reimb_records';
                    } else {
                        _this3.return = '../procurement/view_proc';
                    }
                }
            });
        },
        fetch_pdf: async function fetch_pdf() {
            var _this4 = this;

            this.pdf_pg = 0;
            this.pages = [];
            this.pdf_url = [];
            this.pdf_ready = false;
            this.hv_support = false;
            var formData = new FormData();
            formData.append('tag', this.tag);
            formData.append('type', this.doc_type);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await axios.post('Procurement/wrapper/backend/fetch_pdf.php', formData).then(function (response) {
                if (response.data[0] != 'empty') {
                    _this4.pdf_length = response.data.length - 1;
                    var i = 0;
                    for (i = 0; i < _this4.pdf_length; i++) {
                        _this4.pdf_url[i] = _this4.baseURL + '/Procurement/pdf_files/' + response.data[i];
                    }
                    _this4.pages = _this4.pages.concat(_this4.pdf_url);
                    if (response.data[response.data.length - 1] != 'single') {
                        var max_id = response.data.length;
                        var check_proc = response.data[max_id - 1];
                        var proc_id = check_proc.proc_id;
                        if (_this4.doc_type == 'Procurement') {
                            var reimb_id = check_proc.reimb_tag;
                            _this4.support_doc_url = _this4.baseURL + '/Procurement/reimbursement/backend/view_form_app.php?tag=' + reimb_id + '&st=' + _this4.st + '&ed=' + _this4.ed;
                        } else {
                            if (check_proc.category == 2) {
                                _this4.support_doc_url = _this4.baseURL + '/Procurement/procurement/backend/comparision_table.php?p_id=' + proc_id;
                            } else {
                                _this4.support_doc_url = _this4.baseURL + '/Procurement/procurement/backend/cat_3_comparision_table.php?p_id=' + proc_id;
                            }
                        }
                        _this4.pages = _this4.pages.concat(_this4.support_doc_url);
                        _this4.hv_support = true;
                    }
                    _this4.$forceUpdate();
                    _this4.pdf_ready = true;
                }
            });
        },
        reject_reimb: function reject_reimb(mode) {
            var _this5 = this;

            if (this.reason == '') {
                this.$alert('Please Input reject reason');
            } else {
                var formData = new FormData();
                formData.append('tag', this.tag);
                formData.append('st', this.st);
                formData.append('ed', this.ed);
                formData.append('msg', this.reason);
                formData.append('mode', mode);
                axios.post('Procurement/reimbursement/backend/reject.php', formData).then(function (response) {
                    _this5.$alert(response.data).then(function () {
                        _this5.next();
                    });
                });
            }
        },
        reject_proc: function reject_proc(mode) {
            var _this6 = this;

            if (this.reason == '') {
                this.$alert('Please Input reject reason');
            } else {
                var formData = new FormData();
                formData.append('tag', this.tag);
                formData.append('reason', this.reason);
                formData.append('mode', mode);
                axios.post('Procurement/procurement/backend/reject.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        if (mode == 1) {
                            _this6.$alert('Successfully rejected record');
                        } else {
                            _this6.$alert('Successfully updated record');
                        }
                    } else {
                        console.log(response.data);
                    }
                });
            }
        },
        reject: function reject(mode) {
            if (this.doc_type == 'Reimbursement') {
                this.reject_reimb(mode);
            } else {
                this.reject_proc(mode);
            }
        },
        previous: async function previous() {
            if (this.doc_type == 'Reimbursement') {
                await this.pervious_reimb();
            } else {
                await this.previous_proc();
            }
            this.reason = '';
        },
        previous_proc: async function previous_proc() {
            var _this7 = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            await axios.post('Procurement/wrapper/backend/prev_proc.php', formData).then(function (response) {
                if (response.data == 'N/A') {
                    _this7.$alert("No next record,return to previous page");
                    _this7.$router.push(_this7.return);
                } else {
                    _this7.tag = response.data;
                    _this7.doc_url = _this7.baseURL + '/Procurement/procurement/backend/comparision_table.php?p_id=' + _this7.tag;
                    _this7.fetch_pdf();
                }
            });
        },
        pervious_reimb: async function pervious_reimb() {
            var _this8 = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('isHead', this.isHead);
            await axios.post('Procurement/wrapper/backend/prev_reimb.php', formData).then(function (response) {
                if (response.data == 'N/A') {
                    _this8.$alert("No previous record,return to previous page");
                    _this8.$router.push(_this8.return);
                } else {
                    _this8.tag = response.data;
                    _this8.doc_url = _this8.baseURL + '/Procurement/reimbursement/backend/view_form_app.php?tag=' + _this8.tag + '&st=' + _this8.st + '&ed=' + _this8.ed;
                    _this8.fetch_pdf();
                }
            });
        },
        next: async function next() {
            if (this.doc_type == 'Reimbursement') {
                await this.next_reimb();
            } else {
                await this.next_proc();
            }
            this.reason = '';
        },
        next_proc: async function next_proc() {
            var _this9 = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            await axios.post('Procurement/wrapper/backend/next_proc.php', formData).then(function (response) {
                if (response.data == 'N/A') {
                    _this9.$alert("No next record,return to endorsement page");
                    _this9.$router.push(_this9.return);
                } else {
                    _this9.tag = response.data;
                    _this9.doc_url = _this9.baseURL + '/Procurement/procurement/backend/comparision_table.php?p_id=' + _this9.tag;
                    _this9.fetch_pdf();
                }
            });
        },
        next_reimb: async function next_reimb() {
            var _this10 = this;

            var formData = new FormData();
            formData.append('tag', this.tag);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('isHead', this.isHead);
            await axios.post('Procurement/wrapper/backend/next_reimb.php', formData).then(function (response) {
                if (response.data == 'N/A') {
                    _this10.$alert("No next record,return to endorsement page");
                    _this10.$router.push(_this10.return);
                } else {
                    _this10.tag = response.data;
                    _this10.doc_url = _this10.baseURL + '/Procurement/reimbursement/backend/view_form_app.php?tag=' + _this10.tag + '&st=' + _this10.st + '&ed=' + _this10.ed;
                    _this10.fetch_pdf();
                }
            });
        },
        return_prev: function return_prev() {
            this.$router.push(this.return);
        }
    }
};

/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1550);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6856b8ec", content, true, {});

/***/ }),

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-740e8664]{display:flex;flex-direction:row}.inner_wrapper[data-v-740e8664]{height:77vh!important;padding:0;border:1px solid #000}.framewrapper[data-v-740e8664]{position:relative;overflow:hidden;padding:0}.framewrapper[data-v-740e8664],.scroll_frame[data-v-740e8664]{height:77vh!important;width:100%}.ios_frame[data-v-740e8664]{height:76.4vh!important;padding:0}.px0[data-v-740e8664]{padding-left:0;padding-right:0}.pdf[data-v-740e8664]{height:57vh!important}.fa-window-close[data-v-740e8664]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-740e8664]:hover{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"card",staticStyle:{"margin-bottom":"0.4rem"}},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("View "+_vm._s(_vm.doc_type)+" Record "+_vm._s(_vm.tag.toUpperCase()))])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0"}},[_c('div',{staticClass:"col-12 inner_wrapper"},[_c('div',{staticClass:"col-12 framewrapper"},[_c('div',{staticClass:"scroll_frame",staticStyle:{"overflow":"hidden"}},[_c('iframe',{staticClass:"col-12 ios_frame",attrs:{"src":_vm.doc_url}})])])])]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"padding-right":"0","position":"relative"}},[(_vm.pdf_ready)?_c('div',{staticClass:"col-12 framewrapper"},[_c('div',{staticClass:"frame_header"},[_c('div',{staticClass:"page_indicator"},[_c('div',{staticClass:"prev_pdf",on:{"click":function($event){return _vm.prev_pdf()}}},[_c('i',{staticClass:"fa fa-chevron-left"})]),_vm._v(" "),_c('div',{staticClass:"pages_pdf"},[_vm._v("\n                                    "+_vm._s(_vm.pdf_pg+1)+" / "+_vm._s(_vm.pages.length)+"\n                                ")]),_vm._v(" "),_c('div',{staticClass:"next_pdf",on:{"click":function($event){return _vm.next_pdf()}}},[_c('i',{staticClass:"fa fa-chevron-right"})])]),_vm._v(" "),(_vm.isHead)?_c('div',{staticClass:"msg_toggle",on:{"click":function($event){return _vm.open_msg()}}},[_c('i',{staticClass:"fa fa-comments"})]):_vm._e(),_vm._v(" "),(!_vm.isHead)?_c('div',{staticClass:"msg_toggle"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"scroll_frame"},[_c('iframe',{staticClass:"col-12 ios_frame",attrs:{"src":_vm.pages[_vm.pdf_pg]}})])]):_vm._e(),_vm._v(" "),(_vm.msgbox)?_c('div',{staticClass:"card overlay_box"},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[(_vm.rejectable&&_vm.isHead)?_c('strong',[_vm._v("Message / Reason of Rejection ")]):_vm._e(),_vm._v(" "),(!_vm.isHead)?_c('strong',[_vm._v("Message")]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.open_msg()}}})])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason),expression:"reason"}],staticClass:"form-control",attrs:{"placeholder":"Enter Message"},domProps:{"value":(_vm.reason)},on:{"input":function($event){if($event.target.composing){ return; }_vm.reason=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"card-footer",staticStyle:{"padding-top":"0","padding-bottom":"4px"}},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.reject(0)}}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Send Message\n                            ")]),_vm._v(" "),(_vm.isHead&&_vm.rejectable)?_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.reject(1)}}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reject\n                            ")]):_vm._e()])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('div',{staticClass:"flex"},[_c('div',[(_vm.isHead)?_c('button',{staticClass:"btn btn-danger btn-sm",staticStyle:{"margin-right":"1rem"},attrs:{"type":"button"},on:{"click":_vm.previous}},[_c('i',{staticClass:"fa fa-arrow-left"}),_vm._v(" Previous Record\n                    ")]):_vm._e(),_vm._v(" "),(_vm.isHead)?_c('button',{staticClass:"btn btn-primary btn-sm",staticStyle:{"margin-left":"1rem"},attrs:{"type":"button"},on:{"click":_vm.next}},[_vm._v("\n                        Next Record "),_c('i',{staticClass:"fa fa-arrow-right"})]):_vm._e()]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto"}},[_c('button',{staticClass:"btn btn-danger btn-sm",staticStyle:{"margin-right":"1rem"},attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n                    ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.open_form}},[_c('i',{staticClass:"fa fa-print"}),_vm._v(" Print \n                    ")])])])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_view_vue__ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_view_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_view_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_view_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_view_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_740e8664_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_view_vue__ = __webpack_require__(1551);
function injectStyle (ssrContext) {
  __webpack_require__(1549)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-740e8664"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_view_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_740e8664_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_view_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=55.build.js.map