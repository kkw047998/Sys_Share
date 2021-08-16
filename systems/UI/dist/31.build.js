webpackJsonp([31],{

/***/ 1271:
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

exports.default = {
    data: function data() {
        return {
            hv_record: false,
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }],
            key: '',
            curr_field: '',
            recep_data: [],
            o_teacher_id: '',
            n_teacher_id: '',
            from: '',
            to: ''
        };
    },
    created: async function created() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.from = today;
    },
    mounted: async function mounted() {},

    methods: {
        search_user: async function search_user(n) {
            var _this = this;

            if (n == 0) {
                this.key = this.o_teacher_id;
                this.curr_field = 'o';
            } else {
                this.key = this.n_teacher_id;
                this.curr_field = 'n';
            }
            var formData = new FormData();
            formData.append('key', this.key);
            await axios.post('subsitude/sub/backend/search_user.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this.recep_data = response.data;
                    _this.hv_record = true;
                } else {
                    _this.hv_record = false;
                }
            });
        },
        select_user: async function select_user(username) {
            if (this.curr_field == 'o') {
                this.o_teacher_id = username;
            } else {
                this.n_teacher_id = username;
            }
            this.key = '';
            this.hv_record = false;
        },
        handleSubmit: function handleSubmit() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('leave_id', this.o_teacher_id);
            formData.append('ext', this.n_teacher_id);
            formData.append('from', this.from);
            formData.append('to', this.to);
            axios.post('subsitude/admin/backend/add_ext.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this2.$alert('Successfully Submitted record');
                    _this2.$router.push('sup_op');
                }
            });
        }
    }
};

/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1577);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("31a1a09d", content, true, {});

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "td[data-v-e48e3a6e]{transition:all .3s ease-in-out}th[data-v-e48e3a6e]{font-size:.95rem}.inner_overlay[data-v-e48e3a6e]{z-index:5;width:65%;max-height:60%;position:absolute;margin:auto;top:0;bottom:0;left:0;right:0;background-color:hsla(0,0%,100%,.95);box-shadow:5px 5px 5px 5px hsla(0,0%,83%,.6)}.fa-window-close[data-v-e48e3a6e]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-e48e3a6e]:hover{color:#fff}.sub_tr[data-v-e48e3a6e]{height:5rem!important}.flex[data-v-e48e3a6e]{margin-top:1rem}", ""]);

// exports


/***/ }),

/***/ 1578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0"}},[_c('form',{attrs:{"id":"form","enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-5"},[_vm._v("Teacher on Leave")]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.o_teacher_id),expression:"o_teacher_id"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Teacher"},domProps:{"value":(_vm.o_teacher_id)},on:{"keyup":function($event){return _vm.search_user(0)},"input":function($event){if($event.target.composing){ return; }_vm.o_teacher_id=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-5"},[_vm._v("External Teacher")]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.n_teacher_id),expression:"n_teacher_id"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Teacher"},domProps:{"value":(_vm.n_teacher_id)},on:{"keyup":function($event){return _vm.search_user(1)},"input":function($event){if($event.target.composing){ return; }_vm.n_teacher_id=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-5"},[_vm._v("From")]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.from),expression:"from"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.from)},on:{"input":function($event){if($event.target.composing){ return; }_vm.from=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-5"},[_vm._v("To")]),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.to),expression:"to"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.to)},on:{"input":function($event){if($event.target.composing){ return; }_vm.to=$event.target.value}}})])])]),_vm._v(" "),_vm._m(1)])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"25%","top":"25%","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item.username)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,4024609899)}):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("External Subsititude Teacher")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Save\n                    ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\n                    ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ext_sub_vue__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ext_sub_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ext_sub_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ext_sub_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ext_sub_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e48e3a6e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ext_sub_vue__ = __webpack_require__(1578);
function injectStyle (ssrContext) {
  __webpack_require__(1576)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e48e3a6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ext_sub_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e48e3a6e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ext_sub_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=31.build.js.map