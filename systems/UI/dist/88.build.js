webpackJsonp([88],{

/***/ 1214:
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

exports.default = {
    data: function data() {
        return {
            all_checker: false,
            selected_tags: [],
            show_child: [],
            dept: '',
            dept_list: [],
            ready: false,
            selected_st: 0,
            selected_ed: 0,
            target_st: '',
            target_ed: '',
            data: [],
            user_check: ''
        };
    },
    created: async function created() {
        var _this = this;

        await axios.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            var perm = response.data[0];
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
            if (perm.proc_level < 3) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        await axios.get('Procurement/shared_backend/fetch_dept.php').then(function (response) {
            _this.dept_list = response.data;
            var prev = document.getElementById('query').value;
            if (prev != '' && prev != null && prev != undefined) {
                _this.dept = prev;
            } else {
                _this.dept = _this.dept_list[0].dept_id;
            }
        });
        await axios.get('Procurement/shared_backend/default_period.php').then(function (response) {
            var st = response.data.st;
            var ed = response.data.ed;
            var st_yr = st.split("-");
            _this.selected_st = parseInt(st_yr[0]);
            _this.target_st = parseInt(st_yr[0]) + 1;
            var ed_yr = ed.split("-");
            _this.selected_ed = _this.selected_st + 1;
            _this.target_ed = _this.target_st + 1;
        });
        await this.fetch_data();
        this.ready = true;
    },

    methods: {
        scrollTop: function scrollTop() {
            document.getElementById('top_page').scrollIntoView();
        },
        edit_form: function edit_form(tag) {
            document.getElementById('tmp_id').value = tag;
            document.getElementById('st_tmp').value = this.selected_st + '-08';
            document.getElementById('ed_tmp').value = this.selected_ed + '-07';
            this.$router.push('edit_bp_full');
        },
        print_val: function print_val() {
            this.all_checker = false;
        },
        approve_bp: function approve_bp() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('selected_id', this.selected_tags);
            formData.append('dept_id', this.dept);
            formData.append('st', this.selected_st);
            formData.append('ed', this.selected_ed);
            if (this.selected_tags.length > 0) {
                var msg = "Confirm approving budgets : " + this.selected_tags + ' ?';
                this.$confirm(msg).then(function () {
                    axios.post('Procurement/budget/backend/approve_bp.php', formData).then(function (response) {
                        if (response.data == 'no_perm') {
                            _this2.$alert('No Permission');
                        } else if (response.data == 'OK') {
                            _this2.$alert('Successfully Approved Budgets : ' + _this2.selected_tags).then(function () {
                                _this2.fetch_data();
                            });
                        } else {
                            _this2.$alert(response.data);
                        }
                    });
                });
            } else {
                this.$alert("Please select at least one record");
            }
        },
        check_all: function check_all() {
            var k = 0;
            console.log(this.all_checker);
            if (this.all_checker == false) {
                var i = 0;
                for (i = 0; i < this.data.length; i++) {
                    var j = 0;
                    for (j = 0; j < this.data[i].item.length; j++) {
                        if (this.data[i].item[j].status[0] == 'waiting' || this.data[i].item[j].status[0] == 'approve_head') {
                            this.selected_tags[k] = this.data[i].item[j].tag;
                            k++;
                        }
                    }
                }
            } else {
                this.selected_tags = [];
            }
            console.log(this.selected_tags);
            this.$forceUpdate();
        },
        display_content: function display_content(status) {
            var dp_content = '';
            switch (status) {
                case 'approve_principal':
                    dp_content = 'Approved by Principal';
                    break;
                case 'approve_head':
                    dp_content = 'Approved by Head';
                    break;
                case 'waiting':
                    dp_content = 'Pending';
                    break;
            }
            return dp_content;
        },
        change_child_dp: function change_child_dp(id) {
            if (this.show_child[id] == false) {
                this.show_child[id] = true;
            } else {
                this.show_child[id] = false;
            }
            this.$forceUpdate();
        },
        update_ed: function update_ed(mode) {
            switch (mode) {
                case "from":
                    this.selected_ed = parseInt(this.selected_st) + 1;
                    break;
                case "to":
                    this.target_ed = parseInt(this.target_st) + 1;
                    break;
            }
            this.fetch_data();
        },
        fetch_data: async function fetch_data() {
            var _this3 = this;

            document.getElementById('query').value = this.dept;
            this.selected_tags = [];
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('from_st', this.selected_st);
            formData.append('from_ed', this.selected_ed);
            formData.append('to_st', this.target_st);
            formData.append('to_ed', this.target_ed);
            await axios.post('Procurement/budget/backend/printlist_json.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.data = response.data;
                } else {
                    _this3.data = [];
                }
            });
        }
    }
};

/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1436);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("10e88b34", content, true, {});

/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".action[data-v-55f5257a]{cursor:pointer}.action[data-v-55f5257a]:hover{color:#888}.pl0[data-v-55f5257a]{padding-left:0}.pr0[data-v-55f5257a]{padding-right:0}.px0[data-v-55f5257a]{padding-left:0;padding-right:0}.flex[data-v-55f5257a]{display:flex;flex-direction:row}.lower_part[data-v-55f5257a]{margin-top:1rem}.asset_bar[data-v-55f5257a]{color:#fff;background-color:#ee1c25;border-bottom:2.5px solid #fff;cursor:pointer;transition:.3s;font-weight:600}.asset_bar[data-v-55f5257a]:hover{background-color:#9c0a0e!important}.inner_item[data-v-55f5257a]{height:2rem}.inner_item[data-v-55f5257a]:first-child{padding-top:11px}td[data-v-55f5257a]{border:1px solid #fff;vertical-align:middle}.approve_principal[data-v-55f5257a]{color:green}.approve_head[data-v-55f5257a]{color:#8bb8e8}", ""]);

// exports


/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"height":"87.5vh"}},[_c('div',{staticClass:"col-12 px0"},[_c('div',{staticClass:"upper_part",attrs:{"id":"top_page"}},[_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-3 px0"},[_c('label',[_vm._v("Select Department")]),_vm._v(" "),_c('div',{staticClass:"col-12 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetch_data()}]}},_vm._l((_vm.dept_list),function(d){return (d.in_dept==1)?_c('option',{domProps:{"value":d.dept_id}},[_vm._v(_vm._s(d.full_dept))]):_vm._e()}),0)])]),_vm._v(" "),_c('div',{staticClass:"col-1 px0"}),_vm._v(" "),_c('div',{staticClass:"col-2 px0"}),_vm._v(" "),_c('div',{staticClass:"col-3"}),_vm._v(" "),_c('div',{staticClass:"col-3 px0"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0"},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_st),expression:"selected_st"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(_vm.selected_st)},on:{"change":function($event){return _vm.update_ed('from')},"input":function($event){if($event.target.composing){ return; }_vm.selected_st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_ed),expression:"selected_ed"}],staticClass:"form-control",attrs:{"type":"number","readonly":""},domProps:{"value":(_vm.selected_ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.selected_ed=$event.target.value}}})])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex px0",staticStyle:{"margin-top":"1rem"}},[_c('div',{staticClass:"col-2 px0"},[_c('div',{staticClass:"col-12 pl0"},[_c('button',{staticClass:"form-control",attrs:{"type":"submit"},on:{"click":_vm.approve_bp}},[_vm._v("Approve Selected Items")])])]),_vm._v(" "),_vm._m(1)])]),_vm._v(" "),_c('div',{staticClass:"lower_part"},[_c('div',{staticClass:"col-12 px0"},[_c('table',{staticClass:"table table-striped first-td-padding",staticStyle:{"font-size":"0.875rem!important"}},[_c('thead',[_c('tr',{staticStyle:{"background-color":"rgb(238,28,37)"}},[_c('th',{staticClass:"bp_th",staticStyle:{"vertical-align":"middle!important","width":"4rem!important"}},[_c('div',{staticClass:"col-12 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.all_checker),expression:"all_checker"}],staticClass:"form-control",attrs:{"type":"checkbox"},domProps:{"value":'all',"checked":Array.isArray(_vm.all_checker)?_vm._i(_vm.all_checker,'all')>-1:(_vm.all_checker)},on:{"click":_vm.check_all,"change":function($event){var $$a=_vm.all_checker,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v='all',$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.all_checker=$$a.concat([$$v]))}else{$$i>-1&&(_vm.all_checker=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.all_checker=$$c}}}})])]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("ID")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Description")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Unit Cost")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Quantity")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Total Cost")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Source of Fund")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Status")]),_vm._v(" "),_c('th',{staticClass:"bp_th"},[_vm._v("Action")])])]),_vm._v(" "),_vm._l((_vm.data.length),function(l){return _c('tbody',[_c('tr',{staticClass:"asset_bar",staticStyle:{"background-color":"rgb(238,28,37)"},on:{"click":function($event){return _vm.change_child_dp(l-1)}}},[_c('td',{attrs:{"colspan":"9"}},[_vm._v(_vm._s(_vm.data[l-1].ref_id)+". "+_vm._s(_vm.data[l-1].asset))])]),_vm._v(" "),_vm._l((_vm.data[l-1].item.length),function(n){return (_vm.data[l-1].item[0].tag!=null)?_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.show_child[l-1]!=false),expression:"show_child[l-1]!=false"}]},[_c('td',{staticStyle:{"vertical-align":"middle"}},[_c('div',{staticClass:"col-12 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_tags),expression:"selected_tags"}],staticClass:"form-control",attrs:{"type":"checkbox","disabled":_vm.data[l-1].item[n-1].status[0]=='approve_principal'},domProps:{"value":_vm.data[l-1].item[n-1].tag,"checked":Array.isArray(_vm.selected_tags)?_vm._i(_vm.selected_tags,_vm.data[l-1].item[n-1].tag)>-1:(_vm.selected_tags)},on:{"click":_vm.print_val,"change":function($event){var $$a=_vm.selected_tags,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.data[l-1].item[n-1].tag,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.selected_tags=$$a.concat([$$v]))}else{$$i>-1&&(_vm.selected_tags=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.selected_tags=$$c}}}})])]),_vm._v(" "),_c('td',[_vm._v("\n                                "+_vm._s(_vm.data[l-1].item[n-1].tag)+"\n                            ")]),_vm._v(" "),_c('td',[_vm._v("\n                                "+_vm._s(_vm.data[l-1].item[n-1].description[0])+"\n                            ")]),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].cost_unit.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].cost_unit[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].quantity.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].quantity[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].cost_total.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].cost_total[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',_vm._l((_vm.data[l-1].item[n-1].fundsrc.length),function(d){return _c('div',{staticClass:"inner_item"},[_vm._v("\n                                    "+_vm._s(_vm.data[l-1].item[n-1].fundsrc[d-1])+"\n                                ")])}),0),_vm._v(" "),_c('td',{class:_vm.data[l-1].item[n-1].status[0]},[_vm._v(_vm._s(_vm.display_content(_vm.data[l-1].item[n-1].status[0])))]),_vm._v(" "),_c('td',[(_vm.data[l-1].item[n-1].status[0]!='approve_principal')?_c('div',[_c('a',{staticClass:"action",on:{"click":function($event){return _vm.edit_form(_vm.data[l-1].item[n-1].tag)}}},[_c('u',[_vm._v("Edit Record")])])]):_vm._e(),_vm._v(" "),(_vm.data[l-1].item[n-1].status[0]=='approve_principal')?_c('div',[_c('a',{staticClass:"action",on:{"click":function($event){return _vm.edit_form(_vm.data[l-1].item[n-1].tag)}}},[_c('u',[_vm._v("View Details")])])]):_vm._e()])]):_vm._e()})],2)})],2)])])]),_vm._v(" "),_c('div',{staticClass:"corner_nav"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"corner_item",on:{"click":_vm.scrollTop}},[_c('i',{staticClass:"fa fa-2x fa-arrow-up",staticStyle:{"color":"rgba(255,255,255,0.9)"}})])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('label',[_vm._v("School Year")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-1 px0"},[_c('div',{staticClass:"pr0"},[_c('form',{attrs:{"method":"post","action":"src/Procurement/budget/backend/export.php"}},[_c('input',{attrs:{"type":"hidden","name":"export","value":"n"}}),_vm._v(" "),_c('button',{staticClass:"form-control",attrs:{"type":"submit"}},[_vm._v("Export")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_bp_json_vue__ = __webpack_require__(1214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_bp_json_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_bp_json_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_bp_json_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_bp_json_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55f5257a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_bp_json_vue__ = __webpack_require__(1437);
function injectStyle (ssrContext) {
  __webpack_require__(1435)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55f5257a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_bp_json_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55f5257a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_bp_json_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=88.build.js.map