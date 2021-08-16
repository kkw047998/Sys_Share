webpackJsonp([49],{

/***/ 1177:
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
//
//
//
//
//
//
//
//
//
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
            rep_type: 'handler',
            reply_msg: '',
            ready_table: false,
            collapse: true,
            item_count: 1,
            max_length: 0,
            re_msg: '',
            selected_id: [],
            status: '',
            record_clr: [],
            ticket_length: 0,
            ticket_data: [],
            ticket: false,
            pooldata: [],
            record_id: '',
            ready: false,
            headers: [{ text: 'Action', value: 'item_id', sortable: false }, { text: 'Details', value: 'item_id', sortable: false }, { text: 'ID', value: 'item_id', sortable: false }, { text: 'Requester', value: 'Req_Name', sortable: false }, { text: 'Description', value: 'Description', sortable: false }, { text: 'Location', value: 'Location', sortable: false }, { text: 'Due date', value: 'Due_date', sortable: false }, { text: 'Due Time', value: 'Due_time', sortable: false }, { text: 'Assigned to', value: 'Handler', sortable: false }, { text: 'Issue Status', value: 'Status', sortable: false }],
            headers_app: [{ text: 'ID', value: 'item_id', sortable: false }, { text: 'Requester', value: 'Req_Name', sortable: false }, { text: 'Description', value: 'Description', sortable: false }, { text: 'Location', value: 'Location', sortable: false }, { text: 'Due date', value: 'Due_date', sortable: false }, { text: 'Due Time', value: 'Due_time', sortable: false }, { text: 'Assigned to', value: 'Handler', sortable: false }, { text: 'Issue Status', value: 'Status', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e) {
                e.returnValue = 'Changes you made may not be saved.';
            }
            return 'Changes you made may not be saved.';
        };
        if (document.getElementById('tmp_id').value == undefined) {
            this.$alert('No Record Selected').then(function () {
                _this.$router.push('IR');
            });
        }
        this.rep_type = document.getElementById('tmp_id_2').value;
        this.record_id = document.getElementById('tmp_id').value;
        await this.fetch_record();
        await this.fetch_ticket();
        this.ready = true;
    },
    mounted: async function mounted() {
        this.$forceUpdate();
    },
    updated: function updated() {
        if (this.ticket) {
            var container = document.getElementById('container');
            container.scrollTop = container.scrollHeight;
        }
    },
    destroyed: function destroyed() {
        window.onbeforeunload = null;
    },

    methods: {
        return_prev: async function return_prev() {
            this.$router.go(-1);
        },
        editform: function editform(event) {
            var targetID = event;
            document.getElementById('tmp_id').value = targetID;
            //document.getElementById('query').value = this.search_key;
            //this.$router.push('edit_form');
            this.$router.push('edit_form');
        },
        expand_table: async function expand_table() {
            this.ready_table = false;
            await this.set_length();
            this.collapse = !this.collapse;
            this.ready_table = true;
            this.$forceUpdate();
        },
        collapse_table: async function collapse_table() {
            this.ready_table = false;
            await this.set_length();
            this.collapse = !this.collapse;
            this.ready_table = true;
            this.$forceUpdate();
        },
        set_length: function set_length() {
            var leng = 0;
            if (this.collapse) {
                if (this.max_length > 5) {
                    leng = 5;
                } else {
                    leng = this.max_length;
                }
                this.item_count = leng;
            } else {
                this.item_count = 1;
            }
        },
        fetch_record: async function fetch_record() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('record_id', this.record_id);
            formData.append('rep_type', this.rep_type);
            await axios.post('RequestPortal/backend/fetch_record_header.php', formData).then(function (response) {
                _this2.pooldata = response.data;
                _this2.status = response.data[0].Status;
                _this2.selected_id[0] = document.getElementById('tmp_id').value;
                _this2.max_length = response.data.length;
                _this2.re_msg = response.data[0].Description;
            });
            this.ready_table = true;
        },
        fetch_ticket: async function fetch_ticket() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('record_id', this.record_id);
            await axios.post('RequestPortal/backend/fetch_ticket.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.ticket_data = response.data;
                    _this3.ticket_length = _this3.ticket_data.length;
                    _this3.ticket = true;
                } else {
                    _this3.ticket = false;
                }
            });
        },
        display_selected_ticket: async function display_selected_ticket() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('select_id', this.selected_id);
            await axios.post('RequestPortal/backend/fetch_ticket.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this4.ticket_data = response.data;
                    _this4.ticket_length = _this4.ticket_data.length;
                    _this4.re_msg = response.data[0].Description;
                    _this4.ticket = true;
                } else {
                    _this4.ticket = false;
                }
            });
        },
        update_message: function update_message() {
            var _this5 = this;

            var ready_for_submit = false;
            if (this.status != 'Completed' && this.status != 'In Progress') {
                if (this.reply_msg.length > 0) {
                    ready_for_submit = true;
                } else {
                    ready_for_submit = false;
                }
            } else {
                ready_for_submit = true;
            }
            if (ready_for_submit) {
                var formData = new FormData();
                formData.append('select_id', this.selected_id);
                formData.append('msg', this.reply_msg);
                formData.append('stat', this.status);
                formData.append('rep_type', this.rep_type);
                axios.post('RequestPortal/backend/submit_message.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this5.$alert('Successfully Submitted');
                        document.getElementById('query').value = '';
                        _this5.$router.go(-1);
                    } else if (response.data = 'Session Time Out') {
                        _this5.$alert('Session Time Out');
                        _this5.$router.push('PortalHome');
                    } else {
                        console.log(response.data);
                    }
                });
            } else {
                this.$alert('Please fill in message box');
            }
        }
    }
};

/***/ }),

/***/ 1336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c2b42724", content, true, {});

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-f817632c]{display:flex;flex-direction:row}.px0[data-v-f817632c]{padding-left:0;padding-right:0}.dpbox[data-v-f817632c]:first-line{font-weight:700!important}", ""]);

// exports


/***/ }),

/***/ 1338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"card",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"card-body card-block",staticStyle:{"overflow-y":"auto","padding":"0"}},[((_vm.ready_table)&&(_vm.rep_type=='handler'))?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.pooldata,"rows-per-page-items":[_vm.item_count],"disable-initial-sort":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_id),expression:"selected_id"}],staticClass:"form-control",attrs:{"type":"checkbox"},domProps:{"value":props.item.item_id,"checked":Array.isArray(_vm.selected_id)?_vm._i(_vm.selected_id,props.item.item_id)>-1:(_vm.selected_id)},on:{"change":[function($event){var $$a=_vm.selected_id,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=props.item.item_id,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.selected_id=$$a.concat([$$v]))}else{$$i>-1&&(_vm.selected_id=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.selected_id=$$c}},_vm.display_selected_ticket]}})]),_vm._v(" "),_c('td',{staticClass:"relative"},[_c('a',{attrs:{"href":"","id":props.item.item_id},on:{"click":function($event){$event.preventDefault();return _vm.editform(props.item.item_id)}}},[_vm._v("Details "),(props.item.imgstat=='true')?_c('i',{staticClass:"attachment fa fa-paperclip",attrs:{"aria-hidden":"true"}}):_vm._e()])]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.ref_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Req_Name))]),_vm._v(" "),_c('td',{staticStyle:{"width":"55em"}},[_vm._v(_vm._s(props.item.Description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Location))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Due_date))]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.Due_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Handler))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Status))])]}}],null,false,1471197254)}):_vm._e(),_vm._v(" "),((_vm.ready_table)&&(_vm.rep_type=='applicant'))?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_app,"items":_vm.pooldata,"rows-per-page-items":[_vm.item_count],"disable-initial-sort":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.item_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Req_Name))]),_vm._v(" "),_c('td',{staticStyle:{"width":"55em"}},[_vm._v(_vm._s(props.item.Description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Location))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Due_date))]),_vm._v(" "),_c('td',{staticStyle:{"width":"5em"}},[_vm._v(_vm._s(props.item.Due_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Handler))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.Status))])]}}],null,false,1499744603)}):_vm._e()],1),_vm._v(" "),(_vm.rep_type=='handler')?_c('div',{staticClass:"card-footer",staticStyle:{"padding-top":"0.2rem","padding-bottom":"0.2rem"}},[(_vm.collapse)?_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.expand_table}},[_c('i',{staticClass:"fa fa-arrow-down"}),_vm._v(" Expand\n            ")]):_vm._e(),_vm._v(" "),(!_vm.collapse)?_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.collapse_table}},[_c('i',{staticClass:"fa fa-arrow-up"}),_vm._v(" Collapse\n            ")]):_vm._e()]):_vm._e()]),_vm._v(" "),(_vm.ticket)?_c('div',{staticClass:"card",staticStyle:{"margin-top":"1rem","max-height":"44vh!important","margin-bottom":"1rem"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"overflow-y":"auto"},attrs:{"id":"container"}},_vm._l((_vm.ticket_length),function(n){return _c('div',[(_vm.ticket_data[n-1].rep_type=='handler')?_c('div',[_c('div',{staticClass:"col-8",staticStyle:{"margin-top":"0.25rem"}},[_c('textarea',{staticClass:"form-control dpbox",staticStyle:{"resize":"none"},attrs:{"readonly":"","rows":"4"}},[_vm._v("#"+_vm._s(n)+" RE: "+_vm._s(_vm.ticket_data[n-1].rep_grp)+"\r\n"+_vm._s(_vm.ticket_data[n-1].message))]),_vm._v(" "),_c('div',{staticClass:"flex col-12 px0",staticStyle:{"margin-top":"0.15rem"}},[_c('div',{staticClass:"col-6 px0",staticStyle:{"font-size":"0.7rem"}},[_vm._v("\n                                Replied by: "),_c('b',[_vm._v(_vm._s(_vm.ticket_data[n-1].rep_by_name))])]),_vm._v(" "),_c('div',{staticClass:"col-6 px0",staticStyle:{"font-size":"0.7rem","text-align":"right"}},[_vm._v("\n                                Replied on: "),_c('b',[_vm._v(_vm._s(_vm.ticket_data[n-1].rep_date)+"  "+_vm._s(_vm.ticket_data[n-1].rep_time))])])])])]):_vm._e(),_vm._v(" "),(_vm.ticket_data[n-1].rep_type=='applicant')?_c('div',[_c('div',{staticClass:"col-8",staticStyle:{"margin-left":"auto","margin-top":"0.25rem"}},[_c('textarea',{staticClass:"form-control dpbox",staticStyle:{"resize":"none"},attrs:{"readonly":"","rows":"4"}},[_vm._v("#"+_vm._s(n)+" RE: "+_vm._s(_vm.ticket_data[n-1].rep_grp)+"\r\n"+_vm._s(_vm.ticket_data[n-1].message))]),_vm._v(" "),_c('div',{staticClass:"flex col-12 px0",staticStyle:{"margin-top":"0.15rem"}},[_c('div',{staticClass:"col-6 px0",staticStyle:{"font-size":"0.7rem"}},[_vm._v("\n                                Replied by: "),_c('b',[_vm._v(_vm._s(_vm.ticket_data[n-1].rep_by_name))])]),_vm._v(" "),_c('div',{staticClass:"col-6 px0",staticStyle:{"font-size":"0.7rem","text-align":"right"}},[_vm._v("\n                                Replied on: "),_c('b',[_vm._v(_vm._s(_vm.ticket_data[n-1].rep_date)+"  "+_vm._s(_vm.ticket_data[n-1].rep_time))])])])])]):_vm._e()])}),0)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card",staticStyle:{"margin-top":"1rem","max-height":"25vh!important"}},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Reply to Request ID: "),_vm._l((_vm.selected_id.length),function(sel){return _c('span',[_vm._v(_vm._s(_vm.selected_id[sel-1])+" ")])})],2)]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 flex px0"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-10"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reply_msg),expression:"reply_msg"}],staticClass:"form-control",attrs:{"placeholder":"Enter Message"},domProps:{"value":(_vm.reply_msg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.reply_msg=$event.target.value}}})])]),_vm._v(" "),(_vm.rep_type=='handler')?_c('div',{staticClass:"col-12 flex px0",staticStyle:{"margin-top":"0.5rem"}},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-10"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',[_vm._v("Not Started")]),_vm._v(" "),_c('option',[_vm._v("In Progress")]),_vm._v(" "),_c('option',[_vm._v("Completed")]),_vm._v(" "),_c('option',[_vm._v("Waiting on something else")]),_vm._v(" "),_c('option',[_vm._v("Re-Opened")]),_vm._v(" "),_c('option',[_vm._v("Cancelled")]),_vm._v(" "),_c('option',[_vm._v("Rejected")])])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.update_message}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n            ")])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Support Tickets")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Follow-up")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Status")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ticket_vue__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ticket_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ticket_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ticket_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ticket_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f817632c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ticket_vue__ = __webpack_require__(1338);
function injectStyle (ssrContext) {
  __webpack_require__(1336)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f817632c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ticket_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f817632c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ticket_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=49.build.js.map