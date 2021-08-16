webpackJsonp([58],{

/***/ 1263:
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

exports.default = {
    data: function data() {
        return {
            dd: '',
            style: [],
            show: [],
            fundlist: [],
            fund: '*',
            key: '',
            st: '',
            ed: '',
            dept: '',
            dept_list: [],
            ready: false,
            data: []
        };
    },
    created: async function created() {
        var _this = this;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        this.dd = today;
        await axios.get('Procurement/shared_backend/department.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].dept_id;
        });
        /*
        var tdy = new Date();
        var month = tdy.getMonth();
        month = month+1;
        if(month>7){
            this.st = tdy.getFullYear()+'-08-01';
            this.ed = (tdy.getFullYear()+1)+'-07-31';
        } else {
            this.st = (tdy.getFullYear()-1)+'-08-01';
            this.ed = tdy.getFullYear()+'-07-31';
        }
        */
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st.split("-");
            var ed = response.data.ed.split("-");
            _this.st = st[0];
            _this.ed = parseInt(ed[0]);
        });
        var formData = new FormData();
        formData.append('dept', this.dept);
        formData.append('st', this.st);
        formData.append('ed', this.ed);
        await axios.post('Procurement/report/backend/dept_fund.php', formData).then(function (response) {
            _this.fundlist = response.data;
        });
        await this.load_data();
        this.ready = true;
    },

    methods: {
        update_period: async function update_period() {
            var year = this.dd.substring(0, 4);
            var month = this.dd.substring(5, 7);
            var day = this.dd.substring(8, 10);
            if (month < 8) {
                this.st = parseInt(year) - 1;
                this.ed = parseInt(this.st) + 1;
            } else if (month > 7) {
                this.st = parseInt(year);
                this.ed = parseInt(this.st) + 1;
            }
            this.$forceUpdate();
            await this.load_data();
        },
        change_dp: function change_dp(k) {
            if (this.show[k] != true) {
                this.show[k] = true;
                this.style[k] = 'transform: rotate(180deg);';
            } else {
                this.style[k] = 'transform: rotate(0deg);';
                this.show[k] = false;
            }
            this.$forceUpdate();
        },
        load_data: async function load_data() {
            var _this2 = this;

            this.show = [];
            this.style = [];
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('dd', this.dd);
            formData.append('fund', this.fund);
            await axios.post('Procurement/report/font_render/backend/asset.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.data = response.data;
                } else {
                    _this2.data = [];
                }
            });
        }
    }
};

/***/ }),

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1553);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0ba84538", content, true, {});

/***/ }),

/***/ 1553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-4a4a4d03]{padding-left:0;padding-right:0}.w-6[data-v-4a4a4d03]{width:50%;vertical-align:top}.w-2[data-v-4a4a4d03]{width:16.67%;vertical-align:top}", ""]);

// exports


/***/ }),

/***/ 1554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0","margin-bottom":"1em"}},[_c('label',[_vm._v("Department")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.load_data()}]}},_vm._l((_vm.dept_list),function(d){return _c('option',{domProps:{"value":d.dept_id}},[_vm._v(_vm._s(d.full_dept))])}),0)]),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('label',[_vm._v("Fundings")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund),expression:"fund"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.fund=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.load_data()}]}},[_c('option',{attrs:{"value":"*"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.fundlist),function(f){return _c('option',[_vm._v(_vm._s(f.name))])})],2)]),_vm._v(" "),_c('div',{staticClass:"col-5"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.dd),expression:"dd"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.dd)},on:{"change":function($event){return _vm.update_period()},"input":function($event){if($event.target.composing){ return; }_vm.dd=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(0),_vm._v(" "),_vm._l((_vm.data.length),function(n){return _c('tbody',[_c('tr',{staticClass:"yel_tr",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.change_dp(n-1)}}},[_c('td',{staticClass:"report_td",staticStyle:{"text-align":"center","border-right":"2px solid white"}},[_c('i',{staticClass:"fa fa-caret-down report",style:(_vm.style[n-1])}),_vm._v(" "),_c('b',[_vm._v(_vm._s(_vm.data[n-1].asset_full))])]),_vm._v(" "),_c('td',{staticClass:"report_td",staticStyle:{"border-right":"2px solid white"}},[_c('b',[_vm._v("HK$"+_vm._s(_vm.data[n-1].total))])]),_vm._v(" "),_c('td',{staticClass:"report_td",staticStyle:{"border-right":"2px solid white"}},[_c('b',[_vm._v("HK$"+_vm._s(_vm.data[n-1].expense)+" ("+_vm._s(_vm.data[n-1].exp_percentage.toFixed(2))+"%)")])]),_vm._v(" "),_c('td',{staticClass:"report_td",staticStyle:{"border-right":"2px solid white"}},[_c('b',[_vm._v("HK$"+_vm._s(_vm.data[n-1].balance)+" ("+_vm._s(_vm.data[n-1].bal_percentage.toFixed(2))+"%)")])])]),_vm._v(" "),_vm._l((_vm.data[n-1].body.length),function(m){return (_vm.data[n-1].body)?_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.show[n-1]==true),expression:"show[n-1]==true"}],staticClass:"report_tr"},[_c('td',{staticClass:"report_td"},[_vm._v("\n                        "+_vm._s(_vm.data[n-1].body[m-1].fund)+"\n                    ")]),_vm._v(" "),_c('td',{staticClass:"report_td"},[_vm._v("\n                        HK$"+_vm._s(_vm.data[n-1].body[m-1].total)+"\n                    ")]),_vm._v(" "),_c('td',{staticClass:"report_td"},[_vm._v("\n                        HK$"+_vm._s(_vm.data[n-1].body[m-1].expense)+" ("+_vm._s(_vm.data[n-1].body[m-1].exp_percentage.toFixed(2))+"%)\n                    ")]),_vm._v(" "),_c('td',{staticClass:"report_td"},[_vm._v("\n                        HK$"+_vm._s(_vm.data[n-1].body[m-1].balance)+" ("+_vm._s(_vm.data[n-1].body[m-1].bal_percentage.toFixed(2))+"%)\n                    ")])]):_vm._e()})],2)})],2)])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('th',{staticClass:"red_th w-6",staticStyle:{"text-align":"center"}},[_vm._v("Asset Category")]),_vm._v(" "),_c('th',{staticClass:"red_th w-2"},[_vm._v("Opening Balance")]),_vm._v(" "),_c('th',{staticClass:"red_th w-2"},[_vm._v("Expense")]),_vm._v(" "),_c('th',{staticClass:"red_th w-2"},[_vm._v("Balance")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_rp_vue__ = __webpack_require__(1263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_rp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_rp_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_rp_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_rp_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a4a4d03_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_asset_rp_vue__ = __webpack_require__(1554);
function injectStyle (ssrContext) {
  __webpack_require__(1552)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a4a4d03"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asset_rp_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a4a4d03_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_asset_rp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=58.build.js.map