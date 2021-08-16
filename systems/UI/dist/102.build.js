webpackJsonp([102],{

/***/ 1183:
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

exports.default = {
    data: function data() {
        return {
            ready_for_display: false,
            locker: {
                id: "",
                form: "",
                class: "",
                lockerid: "",
                description: "",
                created_by: "",
                action: "",
                status: ""
            },
            fetchdata: [],
            formlevel: ['F1', 'F2', 'F3', 'F4', 'F5'],
            formclass: ['A', 'B', 'C', 'D', 'E'],
            issue_stat: ['Pending', 'Completed'],
            req_name: "",
            return_msg: ""
        };
    },
    created: async function created() {
        var _this = this;

        var id = document.getElementById('tmp_id').value;
        var formData = new FormData();
        formData.append('id', id);
        await axios.post('RequestPortal/backend/edit_locker.php', formData).then(function (response) {
            _this.fetchdata = response.data;
            console.log(_this.fetchdata[0]);
            _this.locker.id = _this.fetchdata[0].id;
            _this.locker.form = _this.fetchdata[0].form;
            _this.locker.class = _this.fetchdata[0].class;
            _this.locker.lockerid = _this.fetchdata[0].lockerid;
            _this.locker.description = _this.fetchdata[0].description;
            _this.locker.created_by = _this.fetchdata[0].created_by;
            _this.locker.action = _this.fetchdata[0].action;
            _this.locker.status = _this.fetchdata[0].status;
        }, this.ready_for_display = true);
    },

    mounted: function mounted() {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e) {
                e.returnValue = 'Changes you made may not be saved.';
            }
            return 'Changes you made may not be saved.';
        };
    },
    destroyed: function destroyed() {
        window.onbeforeunload = null;
    },

    methods: {
        handleSubmit_locker: function handleSubmit_locker(scope) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('id', this.locker.id);
            formData.append('form', this.locker.form);
            formData.append('class', this.locker.class);
            formData.append('lockerid', this.locker.lockerid);
            formData.append('Description', this.locker.description);
            formData.append('created_by', this.locker.created_by);
            formData.append('action', this.locker.action);
            formData.append('status', this.locker.status);
            axios.post('RequestPortal/backend/update_locker.php', formData).then(function (response) {
                _this2.return_msg = response.data;
                if (_this2.return_msg == "success") {
                    _this2.$router.go(-1);
                }
            });
        }
    }
};

/***/ }),

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-6"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),(_vm.ready_for_display)?_c('form',{staticClass:"form-horizontal",attrs:{"id":"locker_form","data-vv-scope":"form2"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit_locker('form2')}}},[_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col col-md-9",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.form),expression:"locker.form"}],staticClass:"form-control",staticStyle:{"width":"5em"},attrs:{"name":"Request_for","id":"f"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "form", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.formlevel),function(fl){return _c('option',[_vm._v(_vm._s(fl))])}),0),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.class),expression:"locker.class"}],staticClass:"form-control",staticStyle:{"width":"5em"},attrs:{"name":"Request_for","id":"cls"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "class", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.formclass),function(fcls){return _c('option',[_vm._v(_vm._s(fcls))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.lockerid),expression:"locker.lockerid"}],staticClass:"form-control",attrs:{"type":"number","id":"locker_id","name":"locker_id"},domProps:{"value":(_vm.locker.lockerid)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.locker, "lockerid", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.description),expression:"locker.description"}],staticClass:"form-control",attrs:{"placeholder":"Enter Description","required":""},domProps:{"value":(_vm.locker.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.locker, "description", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.action),expression:"locker.action"}],staticClass:"form-control",attrs:{"placeholder":"Enter Description","required":""},domProps:{"value":(_vm.locker.action)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.locker, "action", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.status),expression:"locker.status"}],staticClass:"form-control",attrs:{"name":"Request_for","id":"f"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.issue_stat),function(is){return _c('option',[_vm._v(_vm._s(is))])}),0)])])]),_vm._v(" "),_vm._m(6)]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Locker Issues")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Class")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Locker ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Follow-up Action")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Status")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Update\r\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset","onclick":"window.history.go(-1); return false;"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\r\n            ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_locker_vue__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_locker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_locker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_locker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_locker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fad9dbe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_locker_vue__ = __webpack_require__(1350);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_locker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fad9dbe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_locker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=102.build.js.map