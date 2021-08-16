webpackJsonp([101],{

/***/ 1180:
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
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            req: {
                id: "",
                req_for: "",
                cat: "",
                descript: "",
                location: "",
                dd: "",
                dt: "00:00",
                remarks: "",
                name: "",
                handler: ""
            },
            hv_record: false,
            hv_record_handler: false,
            fetchdata: [],
            reqdp: ['IT & Resources', 'Academic'],
            category: ['Service', 'Maintenance'],
            issue_stat: ['Not Started', 'In Progress', 'Completed', 'Waiting on something else', 'Cancelled', 'Rejected'],
            req_name: "",
            return_msg: "",
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }],
            recep_data: []
        };
    },
    mounted: function mounted() {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e) {
                e.returnValue = 'Changes you made may not be saved.';
            }
            return 'Changes you made may not be saved.';
        };
        var tmr = new Date();
        tmr.setDate(tmr.getDate() + 1);
        var month = ('0' + (tmr.getMonth() + 1)).slice(-2);
        var date = ('0' + tmr.getDate()).slice(-2);
        var year = tmr.getFullYear();
        var formattedDate = year + '-' + month + '-' + date;
        this.req.dd = formattedDate;
    },
    destroyed: function destroyed() {
        window.onbeforeunload = null;
    },

    methods: {
        search_record: function search_record(event) {
            var _this = this;

            if (!(event.keyCode == 27)) {
                var formData = new FormData();
                formData.append('key', this.req.name);
                axios.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                    if (response.data == "Empty") {
                        _this.hv_record = false;
                    } else {
                        _this.recep_data = response.data;
                        _this.recep_data.username = response.data.username;
                        _this.recep_data.name = response.data.name;
                        _this.hv_record = true;
                    }
                });
            }
        },
        search_record_handler: function search_record_handler(event) {
            var _this2 = this;

            if (!(event.keyCode == 27)) {
                var formData = new FormData();
                formData.append('key', this.req.handler);
                axios.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                    if (response.data == "Empty") {
                        _this2.hv_record_handler = false;
                    } else {
                        _this2.recep_data = response.data;
                        _this2.recep_data.username = response.data.username;
                        _this2.recep_data.name = response.data.name;
                        _this2.hv_record_handler = true;
                    }
                });
            }
        },
        select_user: function select_user(event) {
            this.req.name = event;
            this.hv_record = false;
        },
        select_handler: function select_handler(event) {
            this.req.handler = event;
            this.hv_record_handler = false;
        },
        handleUpdate: function handleUpdate(scope) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('Request_for', this.req.req_for);
            formData.append('Status', this.req.stat);
            formData.append('Requester', this.req.name);
            formData.append('Handler', this.req.handler);
            formData.append('Description', this.req.descript);
            formData.append('Location', this.req.location);
            formData.append('Due_date', this.req.dd);
            formData.append('Due_time', this.req.dt);
            formData.append('remarks', this.req.remarks);
            formData.append('Category', this.req.cat);
            axios.post('RequestPortal/backend/newform_fullctrl.php', formData).then(function (response) {
                _this3.return_msg = response.data;
                console.log(_this3.return_msg);
                if (_this3.return_msg == "success") {
                    _this3.$router.go(-1);
                }
            });
        }
    }
};

/***/ }),

/***/ 1345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-8"},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleUpdate('form1')}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.name),expression:"req.name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Requester Name / Username","maxlength":"50","required":""},domProps:{"value":(_vm.req.name)},on:{"keyup":function($event){return _vm.search_record($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.req_for),expression:"req.req_for"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"rf","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.req, "req_for", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.reqdp),function(dp){return _c('option',[_vm._v(_vm._s(dp))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.cat),expression:"req.cat"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"rf","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.req, "cat", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.category),function(cat){return _c('option',[_vm._v(_vm._s(cat))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.stat),expression:"req.stat"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"rf","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.req, "stat", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.issue_stat),function(stat){return _c('option',[_vm._v(_vm._s(stat))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.descript),expression:"req.descript"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticClass:"form-control",class:{ 'is-invalid': _vm.submitted && _vm.errors.has('Description') },attrs:{"id":"Description","name":"Description","rows":"3","cols":"80","placeholder":"Enter description","maxlength":"250","required":""},domProps:{"value":(_vm.req.descript)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "descript", $event.target.value)}}}),_vm._v(" "),(_vm.submitted && _vm.errors.has('Description'))?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.errors.first('Description')))]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.location),expression:"req.location"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticClass:"form-control",class:{ 'is-invalid': _vm.submitted && _vm.errors.has('Location') },attrs:{"type":"text","id":"Location","name":"Location","placeholder":"Enter Location","maxlength":"150","required":""},domProps:{"value":(_vm.req.location)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "location", $event.target.value)}}}),_vm._v(" "),(_vm.submitted && _vm.errors.has('Location'))?_c('div',{staticClass:"invalid-feedback"},[_vm._v(_vm._s(_vm.errors.first('Location')))]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.handler),expression:"req.handler"}],staticClass:"form-control",attrs:{"type":"text","id":"handler","name":"handler","placeholder":"Seperate multiple input with ,","required":""},domProps:{"value":(_vm.req.handler)},on:{"keyup":function($event){return _vm.search_record_handler($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "handler", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{attrs:{"type":"hidden","id":"date_limit","name":"date_limit","value":""}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.dd),expression:"req.dd"}],staticClass:"form-control",attrs:{"type":"date","id":"Due_date","name":"Due_date","data-date-split-input":"true","id":"min_date","required":""},domProps:{"value":(_vm.req.dd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "dd", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.dt),expression:"req.dt"}],staticClass:"form-control",attrs:{"type":"time","name":"Due_time","value":"00:00"},domProps:{"value":(_vm.req.dt)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "dt", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(10),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.remarks),expression:"req.remarks"}],staticClass:"form-control",attrs:{"type":"text","name":"remarks"},domProps:{"value":(_vm.req.remarks)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "remarks", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12 col-md-9"},[_vm._v("\r\n                   "+_vm._s(_vm.return_msg)+"\r\n                ")])])]),_vm._v(" "),_vm._m(11)])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item.name)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,2639096634)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record_handler)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_handler(props.item.name)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,3009022931)}):_vm._e()],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("General Request Form (Full Control)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Requester"}},[_vm._v("Requester")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Request For")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Status")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Location"}},[_vm._v("Location")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"handler"}},[_vm._v("Assigned To")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Due_date"}},[_vm._v("Due Date")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Due_time"}},[_vm._v("Due Time")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Due_time"}},[_vm._v("Remarks")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Update\r\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button","onclick":"window.history.go(-1); return false;"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\r\n            ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullctrl_vue__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullctrl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullctrl_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullctrl_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullctrl_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05604804_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fullctrl_vue__ = __webpack_require__(1345);
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullctrl_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05604804_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fullctrl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=101.build.js.map