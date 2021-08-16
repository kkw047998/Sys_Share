webpackJsonp([35],{

/***/ 1293:
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
//
//
//
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
            key: '',
            view_mode: 'all',
            headers: [{ text: 'Item Code', value: 'item_code', sortable: true }, { text: 'Barcode', value: 'barcode', sortable: true }, { text: 'Name', value: 'item_eng_name', sortable: true }, { text: 'Location', value: 'sub_location_code', sortable: true }, { text: 'Status', value: 'stocktake', sortable: true }],
            datalist: [],
            record_list: [],
            selected_record: '',
            description: '',
            period: {
                start: '',
                end: ''
            },
            mode: 'view',
            grplist: [],
            grpcode: '',
            percentage: 100,
            item_count: 0,
            section: '',
            checktype: 'full',
            ready: false
        };
    },
    created: async function created() {
        await this.load_filter();
        await this.fetch_stocktake_records();
        this.ready = true;
    },

    methods: {
        updateItem: async function updateItem(item) {
            var perform = false;
            var msg = "Confirm stocktake [" + item.item_code + ']' + item.item_eng_name + '?';
            this.$confirm(msg).then(async function () {
                var formData = new FormData();
                formData.append('item_code', item.item_code);
                await axios.post("inventory/web/backend/updateStocktake.php", formData).then(function (response) {
                    item.stocktake = true;
                    perform = true;
                });
            });
            if (perform == false) {
                item.stocktake = false;
            }
        },
        export_list: function export_list() {
            var _this = this;

            if (this.selected_record != '') {
                var formData = new FormData();
                formData.append('rid', this.selected_record);
                axios.post("inventory/web/backend/export_takelist.php", formData).then(function (response) {
                    var url = window.URL.createObjectURL(new Blob([response.data]));
                    var link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'StocktakeRecord_' + _this.selected_record + '.csv'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            } else {
                this.$alert("Please choose a stocktake list.");
            }
        },
        checkview: function checkview(mode) {
            if (this.view_mode == 'all') {
                return true;
            } else {
                switch (this.view_mode) {
                    case 'completed':
                        if (mode == true) {
                            return true;
                        } else {
                            return false;
                        }
                        break;
                    case 'pending':
                        if (mode == false) {
                            return true;
                        } else {
                            return false;
                        }
                        break;
                }
            }
        },
        fetch_stock_take_list: function fetch_stock_take_list() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('rid', this.selected_record);
            axios.post("inventory/web/backend/fetch_stocktake_list.php", formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.datalist = response.data.data;
                } else {
                    _this2.datalist = [];
                }
            });
        },
        fetch_stocktake_records: async function fetch_stocktake_records() {
            var _this3 = this;

            await axios.get("inventory/web/backend/fetch_generated_list.php").then(function (response) {
                if (response.data != 'empty') {
                    _this3.record_list = response.data;
                    _this3.selected_record = '';
                } else {
                    _this3.record_list = [];
                }
            });
            await this.fetch_stock_take_list();
        },
        return_pg: function return_pg() {
            this.$router.go(-1);
        },
        resetCount: function resetCount() {
            this.percentage = 100;
            this.count_items();
        },
        count_full: function count_full() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            formData.append('grp_code', this.grpcode);
            formData.append('type', 'full');
            formData.append('percentage', 100);
            axios.post('inventory/web/backend/count_items.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this4.item_count = response.data;
                } else {
                    _this4.$alert("No records found").then(function () {
                        _this4.item_count = 0;
                    });
                }
            });
        },
        count_items: function count_items() {
            var _this5 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            formData.append('grp_code', this.grpcode);
            formData.append('type', this.checktype);
            formData.append('percentage', this.percentage);
            axios.post('inventory/web/backend/count_items.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this5.item_count = response.data;
                    if (_this5.item_count < 11) {
                        _this5.checktype = 'full';
                        _this5.count_full();
                    }
                } else {
                    _this5.$alert("No records found").then(function () {
                        _this5.item_count = 0;
                    });
                }
            });
        },
        load_filter: async function load_filter() {
            var _this6 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            await axios.post('inventory/web/backend/filter_preload.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this6.grplist = response.data.grp_code;
                    _this6.grpcode = '';
                }
            });
            this.count_items();
        },
        select_mode: function select_mode(mode) {
            this.mode = mode;
        },
        display_title: function display_title() {
            if (this.mode == 'view') {
                return 'View Stocktake List';
            }
            if (this.mode == 'gen') {
                return 'Generate Stocktake List';
            }
        },
        createList: function createList() {
            var _this7 = this;

            if (this.period.start != '' && this.period.end != '') {
                var formData = new FormData();
                formData.append('dp', this.description);
                formData.append('section', this.section);
                formData.append('grp_code', this.grpcode);
                formData.append('type', this.checktype);
                formData.append('percentage', this.percentage);
                formData.append('item_count', this.item_count);
                formData.append('st', this.period.start);
                formData.append('end', this.period.end);
                var msg = "Confirm Generating Stocktake list ?";
                this.$confirm(msg).then(function () {
                    axios.post("inventory/web/backend/gen_stocktake_list.php", formData).then(function (response) {
                        if (response.data == "OK") {
                            _this7.$alert("Successfully generated stocktake list").then(function () {
                                _this7.fetch_stocktake_records();
                                _this7.section = '';
                                _this7.grpcode = '';
                                _this7.period.start = '';
                                _this7.period.end = '';
                                _this7.item_count = 0;
                                _this7.percentage = 100;
                                _this7.checktype = 'full';
                                _this7.mode = 'view';
                            });
                        }
                    });
                });
            } else {
                this.$alert("Please pick the dates");
            }
        }
    }
};

/***/ }),

/***/ 1648:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1649);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2dc786a1", content, true, {});

/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "input[type=radio][data-v-9e33b932]{margin-top:.25rem}.rowWrapper[data-v-9e33b932]{margin-top:1rem;margin-bottom:1rem}.px0[data-v-9e33b932]{padding-left:0;padding-right:0}.flex[data-v-9e33b932]{display:flex;flex-direction:row}.tabs[data-v-9e33b932]{position:absolute;bottom:0;height:40px;left:0;right:0}.leftTab[data-v-9e33b932]{text-align:left;padding-left:20px;left:0;right:50%;border-top-right-radius:35px}.rightTab[data-v-9e33b932]{text-align:right;padding-right:20px;right:0;left:50%;border-top-left-radius:35px}.subTabs[data-v-9e33b932]{font-weight:700;padding-top:5px;position:absolute;bottom:-2px!important;background-color:#fff;height:35px;opacity:.4;cursor:pointer;transition:.3s;transition-property:opacity}.activeTab[data-v-9e33b932]{opacity:1!important;z-index:10}.leftTab.activeTab[data-v-9e33b932]{right:45%}.rightTab.activeTab[data-v-9e33b932]{left:45%}.bodyWrapper[data-v-9e33b932]{margin-top:10px;padding-left:8px;padding-right:8px;opacity:0;transition:.3s}.disableTab[data-v-9e33b932]:hover{opacity:.65}", ""]);

// exports


/***/ }),

/***/ 1650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.createList($event)}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",staticStyle:{"height":"73px!important","position":"relative"}},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v(_vm._s(_vm.display_title()))])]),_vm._v(" "),_c('div',{staticClass:"tabs"},[_c('div',{staticClass:"flex"},[_c('div',{class:['leftTab subTabs',{'activeTab':_vm.mode=='view'},{'disableTab':_vm.mode=='gen'}],on:{"click":function($event){return _vm.select_mode('view')}}},[_c('u',[_vm._v("View Stocktake List")])]),_vm._v(" "),_c('div',{class:['rightTab subTabs',{'activeTab':_vm.mode=='gen'},{'disableTab':_vm.mode=='view'}],on:{"click":function($event){return _vm.select_mode('gen')}}},[_c('u',[_vm._v("Generate Stocktake List")])])])])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"0 0 0 0"}},[(_vm.mode=='view')?_c('div',[_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"col-12"},[_c('v-card-title',{staticClass:"px0"},[_c('div',{staticClass:"col-6 px0 flex",staticStyle:{"padding-top":"15px"}},[_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_record),expression:"selected_record"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selected_record=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.fetch_stock_take_list]}},[_c('option',{attrs:{"value":"","disabled":""}},[_vm._v("Choose record below")]),_vm._v(" "),_vm._l((_vm.record_list),function(rs){return _c('option',{domProps:{"value":rs.id}},[_vm._v(_vm._s(rs.dp))])})],2)]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.view_mode),expression:"view_mode"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.view_mode=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"all"}},[_vm._v("All Records")]),_vm._v(" "),_c('option',{attrs:{"value":"completed"}},[_vm._v("Checked Records")]),_vm._v(" "),_c('option',{attrs:{"value":"pending"}},[_vm._v("Pending Records")])])])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-text-field',{attrs:{"append-icon":"search","label":"Search","single-line":"","hide-details":""},model:{value:(_vm.key),callback:function ($$v) {_vm.key=$$v},expression:"key"}})],1),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"search":_vm.key,"headers":_vm.headers,"items":_vm.datalist,"rows-per-page-items":[10],"disable-initial-sort":"","show-select":"","item-key":"item_code"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [(_vm.checkview(props.item.stocktake))?_c('tr',{staticStyle:{"cursor":"pointer"}},[_c('td',{staticClass:"click_row"},[_vm._v(_vm._s(props.item.item_code))]),_vm._v(" "),_c('td',{staticClass:"click_row"},[_vm._v(_vm._s(props.item.barcode))]),_vm._v(" "),_c('td',{staticClass:"click_row"},[_vm._v(_vm._s(props.item.item_eng_name))]),_vm._v(" "),_c('td',{staticClass:"click_row"},[_vm._v(_vm._s(props.item.building_code+' > '+props.item.location_code+' > '+props.item.sub_location_code))]),_vm._v(" "),_c('td',{staticClass:"click_row"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(props.item.stocktake),expression:"props.item.stocktake"}],staticClass:"form-control select",attrs:{"disabled":props.item.stocktake==true},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(props.item, "stocktake", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updateItem(props.item)}]}},[_c('option',{domProps:{"value":true}},[_vm._v("Checked")]),_vm._v(" "),_c('option',{domProps:{"value":false}},[_vm._v("Pending")])])])]):_vm._e()]}}],null,false,4071824666)})],1)])]):_vm._e(),_vm._v(" "),(_vm.mode=='gen')?_c('div',[_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Description\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",attrs:{"type":"text","required":"","placeholder":"Enter Description"},domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})])])]),_vm._v(" "),_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Section\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.section),expression:"section"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.section=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.load_filter]}},[_c('option',{attrs:{"value":""}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"S"}},[_vm._v("Secondary")]),_vm._v(" "),_c('option',{attrs:{"value":"P"}},[_vm._v("Primary")]),_vm._v(" "),_c('option',{attrs:{"value":"K"}},[_vm._v("Kindergarten")])])])])]),_vm._v(" "),_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Group\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.grpcode),expression:"grpcode"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.grpcode=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.count_items]}},[_c('option',{attrs:{"value":""}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.grplist),function(grp){return _c('option',{domProps:{"value":grp.groupcode}},[_vm._v(_vm._s(grp.group_description))])})],2)])])]),_vm._v(" "),_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Type\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-4 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checktype),expression:"checktype"}],staticClass:"form-control",attrs:{"type":"radio","value":"full"},domProps:{"checked":_vm.item_count<11,"checked":_vm._q(_vm.checktype,"full")},on:{"click":_vm.resetCount,"change":function($event){_vm.checktype="full"}}}),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{staticClass:"col-4 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checktype),expression:"checktype"}],staticClass:"form-control",attrs:{"type":"radio","value":"part"},domProps:{"checked":_vm._q(_vm.checktype,"part")},on:{"change":function($event){_vm.checktype="part"}}}),_vm._v(" "),_vm._m(1)])])]),_vm._v(" "),(_vm.checktype=='part')?_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Percentage (%)\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.percentage),expression:"percentage"}],staticClass:"form-control",attrs:{"type":"number","step":"1","min":"0","max":"100"},domProps:{"value":(_vm.percentage)},on:{"change":_vm.count_items,"input":function($event){if($event.target.composing){ return; }_vm.percentage=$event.target.value}}})])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Item Count\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_count),expression:"item_count"}],staticClass:"form-control",attrs:{"type":"number","step":"1","min":"0","max":"100","readonly":""},domProps:{"value":(_vm.item_count)},on:{"input":function($event){if($event.target.composing){ return; }_vm.item_count=$event.target.value}}})])])]),_vm._v(" "),_c('div',{staticClass:"rowWrapper"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Duration\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('div',{staticClass:"flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-4 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.period.start),expression:"period.start"}],staticClass:"form-control",attrs:{"type":"date","readonly":"","required":""},domProps:{"value":(_vm.period.start)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.period, "start", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.period.end),expression:"period.end"}],staticClass:"form-control",attrs:{"type":"date","readonly":"","required":""},domProps:{"value":(_vm.period.end)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.period, "end", $event.target.value)}}})])]),_vm._v(" "),_c('VueCtkDateTimePicker',{attrs:{"noHeader":true,"noKeyboard":true,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"formatted":'ll',"format":'YYYY-MM-DD',"id":'DatePicker',"label":'Select Date Range',"noButtonNow":true,"range":true,"inline":true},model:{value:(_vm.period),callback:function ($$v) {_vm.period=$$v},expression:"period"}})],1)])])]):_vm._e()]),_vm._v(" "),(_vm.mode=='view')?_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.export_list}},[_c('i',{staticClass:"fa fa-file-excel-o"}),_vm._v(" Export\n                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_pg}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n                ")])]):_vm._e(),_vm._v(" "),(_vm.mode=='gen')?_c('div',{staticClass:"card-footer"},[_vm._m(2),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_pg}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n                ")])]):_vm._e()])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._v("Full Stock Take"),_c('label')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._v("Partial Take"),_c('label')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit \n                ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_stocktakelist_vue__ = __webpack_require__(1293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_stocktakelist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_stocktakelist_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_stocktakelist_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_stocktakelist_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e33b932_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_stocktakelist_vue__ = __webpack_require__(1650);
function injectStyle (ssrContext) {
  __webpack_require__(1648)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9e33b932"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_stocktakelist_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e33b932_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_stocktakelist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=35.build.js.map