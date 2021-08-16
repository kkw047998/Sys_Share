webpackJsonp([103],{

/***/ 1190:
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

exports.default = {
    data: function data() {
        return {
            reqdp: '',
            category: '',
            status: ['Not Started', 'In Progress', 'Completed'],
            ready: false,
            fetchdata: [],
            req: {
                id: '',
                name: '',
                sub: '',
                cat: '',
                stat: '',
                descript: '',
                location: '',
                remarks: '',
                imgstat: 'false'
            },
            notshow: true
        };
    },
    created: async function created() {
        var _this = this;

        var id = document.getElementById('tmp_id').value;
        var formData = new FormData();
        formData.append('id', id);
        await axios.post('RequestPortal/backend/fetch_check_record.php', formData).then(function (response) {
            _this.fetchdata = response.data;
            _this.req.id = response.data[0].id;
            _this.fetchdata.req_name = response.data.req_name;
            _this.req.sub = response.data[0].sub_dept;
            _this.req.cat = response.data[0].item;
            _this.req.descript = response.data[0].description;
            _this.req.location = response.data[0].location;
            _this.req.stat = response.data[0].status;
            _this.req.remarks = response.data[0].remarks;
            _this.req.imgstat = response.data[0].img_hv;
            _this.ready = true;
        });
    },
    mounted: async function mounted() {
        var _this2 = this;

        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e) {
                e.returnValue = 'Changes you made may not be saved.';
            }
            return 'Changes you made may not be saved.';
        };
        var id = document.getElementById('tmp_id').value;
        var formData = new FormData();
        formData.append('id', id);
        await axios.post('RequestPortal/backend/dlimg_checklist.php', formData).then(function (response) {
            _this2.imgbox = response.data;
        });
        this.notshow = false;
    },
    destroyed: function destroyed() {
        window.onbeforeunload = null;
    },

    methods: {
        handleUpdate: function handleUpdate(scope) {
            var formData = new FormData();
            var id = document.getElementById('tmp_id').value;
            formData.append('id', id);
            formData.append('status', this.req.stat);
            formData.append('remarks', this.req.remarks);
            axios.post('RequestPortal/backend/update_check_record.php', formData);
            this.$router.go(-1);
        }
    }
};

/***/ }),

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[(_vm.ready)?_c('div',{staticClass:"col-lg-8"},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleUpdate('form1')}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('p',{staticClass:"form-control-static"},[_vm._v(_vm._s(_vm.fetchdata[0].req_name))])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.sub),expression:"req.sub"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":""},domProps:{"value":(_vm.req.sub)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "sub", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.cat),expression:"req.cat"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":""},domProps:{"value":(_vm.req.cat)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "cat", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.stat),expression:"req.stat"}],staticClass:"form-control",attrs:{"name":"Request_for","id":"rf","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.req, "stat", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.status),function(state){return _c('option',[_vm._v(_vm._s(state))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.descript),expression:"req.descript"}],staticClass:"form-control",attrs:{"id":"Description","name":"Description","rows":"3","cols":"80","placeholder":"Enter description","maxlength":"250","required":"","readonly":""},domProps:{"value":(_vm.req.descript)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "descript", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.location),expression:"req.location"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Location","maxlength":"15","required":"","readonly":""},domProps:{"value":(_vm.req.location)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "location", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.remarks),expression:"req.remarks"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.req.remarks)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "remarks", $event.target.value)}}})])]),_vm._v(" "),(_vm.req.imgstat!='false')?_c('div',{staticClass:"row form-group",staticStyle:{"height":"auto"}},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[(_vm.notshow)?_c('button',{ref:"showimg",staticClass:"form-control",staticStyle:{"width":"8em","height":"2.5em"},attrs:{"type":"button","value":"View Image"},on:{"click":_vm.viewimg}},[_vm._v("View Image")]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"height":"13em"},domProps:{"innerHTML":_vm._s(_vm.imgbox)}},[_vm._v(" "+_vm._s(_vm.imgbox))])])]):_vm._e()]),_vm._v(" "),_vm._m(9)])])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Check List Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Requester")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Sub department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Item")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Status")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Location"}},[_vm._v("Location")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Due_time"}},[_vm._v("Action")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Supporting Image")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Update\r\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button","onclick":"window.history.go(-1); return false;"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\r\n            ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_checklist_vue__ = __webpack_require__(1190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_checklist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_checklist_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_checklist_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_checklist_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67a60622_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_checklist_vue__ = __webpack_require__(1356);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_checklist_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67a60622_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_checklist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=103.build.js.map