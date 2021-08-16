webpackJsonp([112],{

/***/ 1247:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            dept_list: [],
            selected_dept: [],
            key: '',
            status: '*',
            print_list: '',
            view: false,
            url: '',
            base_url: 'src/Procurement/report/backend/IRG.php',
            category: '',
            st: '',
            ed: '',
            step: 0,
            cat_lv: 0,
            header_text: 'Select Report Category'
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            var user_check = response.data[0].signed;
            var perm = response.data[0];
            if (!(user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
            if (perm.proc_level < 2) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        var tdy = new Date();
        await this.fetch_dept_list();
        var month = tdy.getMonth();
        month = month + 1;
        if (month > 7) {
            this.st = tdy.getFullYear() + '-08-01';
            this.ed = tdy.getFullYear() + 1 + '-07-31';
        } else {
            this.st = tdy.getFullYear() - 1 + '-08-01';
            this.ed = tdy.getFullYear() + '-07-31';
        }
    },

    methods: {
        fetch_dept_list: async function fetch_dept_list() {
            var _this2 = this;

            await axios.get('Procurement/report/backend/IRG_dept.php').then(function (response) {
                if (response.data != 'empty') {
                    _this2.dept_list = response.data;
                    _this2.selected_dept = _this2.dept_list[0].dept_id;
                }
            });
        },
        change_dept: function change_dept() {
            this.url = this.base_url + '?cat=' + this.cat_lv + '&st=' + this.st + '&ed=' + this.ed + '&dept=' + this.selected_dept;
        },
        select_cat: async function select_cat(cat) {
            if (cat == 2) {
                this.header_text = 'Purchase by Quotation (>$5,000) Summary Report';
                this.cat_lv = 2;
                this.step = 2;
                this.url = this.base_url + '?cat=' + this.cat_lv + '&st=' + this.st + '&ed=' + this.ed + '&dept=' + this.selected_dept;
                this.$forceUpdate();
            } else if (cat == 3) {
                this.header_text = 'Written Quotation Summary Report';
                this.cat_lv = 3;
                this.step = 3;
                this.url = this.base_url + '?cat=' + this.cat_lv + '&st=' + this.st + '&ed=' + this.ed;
                this.$forceUpdate();
            } else if (cat == 4) {
                this.header_text = 'Tender Summary Report';
                this.cat_lv = 4;
                this.step = 4;
                this.url = this.base_url + '?cat=' + this.cat_lv + '&st=' + this.st + '&ed=' + this.ed;
                this.$forceUpdate();
            } else if (cat == 5) {
                this.header_text = 'Tender Summary Report (SSB)';
                this.cat_lv = 4;
                this.step = 4;
                this.url = this.base_url + '?cat=' + this.cat_lv + '&st=' + this.st + '&ed=' + this.ed + '&ssb=true';
                this.$forceUpdate();
            }
        },
        previous_step: function previous_step() {
            if (!(this.step == 0)) {
                this.view = false;
                this.header_text = 'Select Report Category';
                this.step = 0;
            } else {
                this.$router.go(-1);
            };
        },
        go_url: function go_url() {
            window.location.href = this.url;
        },
        new_data: function new_data() {
            this.url = this.base_url + '?cat=' + this.cat_lv + '&st=' + this.st + '&ed=' + this.ed + '&dept=' + this.selected_dept;
        },
        gen_report: function gen_report() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('cat', this.cat_lv);
            var dept = '';
            if (this.cat_lv == 2) {
                dept = this.selected_dept;
            }
            formData.append('dept', dept);
            axios.post('Procurement/report/backend/gen_rep.php', formData).then(function (response) {
                _this3.view = true;
                _this3.header_text = "View Generated Reports";
                axios.get('Procurement/report/backend/print_irg.php').then(function (response) {
                    _this3.print_list = response.data;
                });
            });
        },
        search_record: function search_record() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            axios.post('Procurement/report/backend/print_irg_live.php', formData).then(function (response) {
                _this4.print_list = response.data;
            });
        },
        view_record: function view_record() {
            var _this5 = this;

            this.step = this.step + 1;
            this.view = true;
            this.header_text = "View Generated Reports";
            axios.get('Procurement/report/backend/print_irg.php').then(function (response) {
                _this5.print_list = response.data;
            });
        },
        del_irg: function del_irg() {
            var _this6 = this;

            this.$confirm("Confirm Deleteing Selected Report ? ").then(function () {
                var rid = document.getElementById('tmp_id').value;
                var formData = new FormData();
                formData.append('id', rid);
                axios.post('Procurement/report/backend/del_irg.php', formData).then(function (response) {
                    _this6.print_list = response.data;
                });
            });
        }
    }
};

/***/ }),

/***/ 1532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('strong',[_vm._v(_vm._s(_vm.header_text))])])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"0 0 0 0"}},[(_vm.step==0)?_c('div',[_c('div',[_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b_view",on:{"click":_vm.view_record}},[_vm._m(0)])])]),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b2",on:{"click":function($event){return _vm.select_cat(2)}}},[_vm._m(1)])])]),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b3",on:{"click":function($event){return _vm.select_cat(3)}}},[_vm._m(2)])])]),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b4",on:{"click":function($event){return _vm.select_cat(4)}}},[_vm._m(3)])])])])]):_vm._e(),_vm._v(" "),((_vm.step>0)&&(_vm.view==false))?_c('div',[_c('div',{staticClass:"col-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","margin-top":"1.5%"}},[_c('div',{staticClass:"col-1"}),_vm._v(" "),_c('div',{staticClass:"col-3"},[(_vm.cat_lv==2)?_c('label',[_vm._v("Department/Committee")]):_vm._e(),_vm._v(" "),(_vm.cat_lv==2)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_dept),expression:"selected_dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selected_dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.change_dept]}},_vm._l((_vm.dept_list.length),function(items){return _c('option',{domProps:{"value":_vm.dept_list[items-1].dept_id}},[_vm._v(_vm._s(_vm.dept_list[items-1].full_dept))])}),0):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-1"}),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('label',[_vm._v("Start Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.st)},on:{"change":_vm.new_data,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('label',[_vm._v("End Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.ed)},on:{"change":_vm.new_data,"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-1"})]),_c('br'),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.5%"}},[_c('div',{staticClass:"col-1"}),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto"}},[_c('button',{staticClass:"form-control",on:{"click":_vm.gen_report}},[_vm._v("Generate Report")])]),_vm._v(" "),_c('div',{staticClass:"col-1"})]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"0.5%"}},[_c('div',{staticClass:"col-1"}),_vm._v(" "),_c('iframe',{staticClass:"fullframe col-10",staticStyle:{"height":"60vh"},attrs:{"src":_vm.url}}),_vm._v(" "),_c('div',{staticClass:"col-1"})])])]):_vm._e(),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"del_irg"},on:{"click":_vm.del_irg}}),_vm._v(" "),((_vm.step>0)&&(_vm.view==true))?_c('div',[_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"1em","margin-bottom":"1em"}},[_c('div',{staticClass:"col-8"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Start Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.st)},on:{"change":_vm.search_record,"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("End Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.ed)},on:{"change":_vm.search_record,"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0","padding-right":"0"},domProps:{"innerHTML":_vm._s(_vm.print_list)}},[_vm._v("\r\n                "+_vm._s(_vm.print_list)+"\r\n                ")])])]):_vm._e(),_c('br'),_vm._v(" "),_c('div',{staticClass:"card-footer"},[(_vm.step>1)?_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\r\n        ")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.previous_step}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\r\n        ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b_view_first"}),_vm._v(" "),_c('div',{staticClass:"b_view_first_char"},[_vm._v("V")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("iew Reports")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("All IRG Reports")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b2_first"}),_vm._v(" "),_c('div',{staticClass:"b2_first_char"},[_vm._v("Q")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("uotation")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Less than $50,000")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b3_first"}),_vm._v(" "),_c('div',{staticClass:"b3_first_char"},[_vm._v("W")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ritten Quotation")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("$50,000 to $200,000")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b4_first"}),_vm._v(" "),_c('div',{staticClass:"b4_first_char"},[_vm._v("T")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ender")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Over $200,000")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-2",staticStyle:{"padding-left":"0"}},[_c('label',[_c('b',[_c('u',[_vm._v("Preview Report")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IRG_vue__ = __webpack_require__(1247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IRG_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IRG_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IRG_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IRG_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_732d3756_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_IRG_vue__ = __webpack_require__(1532);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IRG_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_732d3756_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_IRG_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=112.build.js.map