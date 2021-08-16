webpackJsonp([14],{

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1125);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1126), __esModule: true };

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1127);
var $Object = __webpack_require__(41).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(67);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(31), 'Object', { defineProperty: __webpack_require__(30).f });


/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var _ref;

        return _ref = {
            grp_list: [],
            hv_supplier: false,
            supplier_list: [],
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }, { text: 'Address', value: 'loc', sortable: false }, { text: 'Contact', value: 'contact_num', sortable: false }],
            hv_reimb: false,
            reimb_list: [],
            headers_reimb: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Tag', value: 'tag', sortable: false }, { text: 'Invoice', value: 'invoice_num', sortable: false }, { text: 'Purchase', value: 'nature', sortable: false }, { text: 'Fund Source', value: 'fundsrc', sortable: false }, { text: 'Total', value: 'total', sortable: false }],
            hv_proc: false,
            proc_list: [],
            headers_proc: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Department', value: 'dept_full', sortable: false }, { text: 'Category', value: 'category', sortable: false }, { text: 'Title', value: 'record_descript', sortable: false }, { text: 'Tag', value: 'proc_id', sortable: false }]
        }, (0, _defineProperty3.default)(_ref, 'proc_list', []), (0, _defineProperty3.default)(_ref, 'scope', ''), (0, _defineProperty3.default)(_ref, 'ready', false), (0, _defineProperty3.default)(_ref, 'item_code', ''), (0, _defineProperty3.default)(_ref, 'details', []), (0, _defineProperty3.default)(_ref, 'category_list', []), (0, _defineProperty3.default)(_ref, 'sub_category_list', []), (0, _defineProperty3.default)(_ref, 'blks', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']), (0, _defineProperty3.default)(_ref, 'index_sup', ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th']), (0, _defineProperty3.default)(_ref, 'code', {
            barcode: '',
            sn: '',
            category: '',
            sub_category: 'All'
        }), (0, _defineProperty3.default)(_ref, 'location', {
            grp_code: '',
            building_code: '',
            location_code: '',
            sub_location_code: ''
        }), (0, _defineProperty3.default)(_ref, 'product', {
            eng_name: '',
            chi_name: '',
            eng_dp: '',
            chi_dp: '',
            brand: '',
            license: '',
            ownership: 0
        }), (0, _defineProperty3.default)(_ref, 'purchase', {
            purchase_date: '',
            warranty_exp: '',
            quantity: 0,
            total_cost: 0.00,
            invoice: '',
            variance: ''
        }), (0, _defineProperty3.default)(_ref, 'supplier', {
            name: '',
            supplier_contact: '',
            supplier_address: ''
        }), (0, _defineProperty3.default)(_ref, 'procurement', {
            quot: '',
            tender: '',
            fundsrc: '',
            unit_cost: 0.00,
            fundsrc_2: '',
            unit_cost_2: 0.00
        }), (0, _defineProperty3.default)(_ref, 'action', {
            remarks: '',
            stocktake: '',
            tag: '',
            maint_details: ''
        }), _ref;
    },
    created: async function created() {
        this.scope = document.getElementById('tmp_id_2').value;
        this.item_code = document.getElementById('tmp_id').value;
        await this.load_filter();
        await this.fetch_details();
        await this.fetch_sub_category();
        this.ready = true;
    },
    mounter: async function mounter() {},

    methods: {
        write_off: async function write_off() {
            var _this = this;

            if (this.action.tag == "") {
                this.$alert('Please fill in write off reason');
            } else {
                this.$confirm('Confirm Write Off item :' + this.item_code + ' ?').then(async function () {
                    var formData = new FormData();
                    formData.append('item_code', _this.item_code);
                    formData.append('reason', _this.action.tag);
                    formData.append('eng_name', _this.product.eng_name);
                    if (_this.scope == 'single') {
                        formData.append('details', _this.code.sn);
                    }
                    await axios.post('inventory/web/backend/apply_write_off.php', formData).then(function (response) {
                        if (response.data == "OK") {
                            _this.$alert('Successfully applied write off for item :' + _this.item_code);
                            _this.$router.push('inventory_list');
                        }
                    });
                });
            }
        },
        search_records: function search_records(type) {
            this.hv_supplier = false;
            this.hv_reimb = false;
            this.hv_proc = false;
            if (type == 'supplier') {
                this.search_supplier();
            } else if (type == 'reimb') {
                this.search_reimbursement();
            } else if (type == 'proc') {
                this.search_procurement();
            }
        },
        close_overlay: function close_overlay() {
            this.hv_proc = false;
            this.hv_reimb = false;
            this.hv_supplier = false;
        },
        select_sup: function select_sup(name, loc, contact) {
            this.supplier.name = name;
            this.supplier.supplier_contact = contact;
            this.supplier.supplier_address = loc;
            this.hv_supplier = false;
        },
        select_reimb: function select_reimb(receiver, address, company_name, contact, tag, nature, total, invoice_num, fundsrc, reason) {
            this.procurement.quot = tag;
            this.purchase.total_cost = total;
            this.procurement.unit_cost = total / this.purchase.quantity;
            this.product.eng_name = nature;
            this.purchase.invoice = invoice_num;
            this.procurement.fundsrc = fundsrc;
            this.product.eng_dp = reason;
            if (receiver == 'company') {
                this.supplier.name = company_name;
                this.supplier.supplier_address = address;
                this.supplier.supplier_contact = contact;
            }
            this.hv_reimb = false;
        },
        select_proc: async function select_proc(proc_id, dept, record_descript, category) {
            this.procurement.tender = proc_id;
            this.hv_proc = false;
            await this.proc_reimb(proc_id);
        },
        proc_reimb: async function proc_reimb(proc_id) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('proc_id', proc_id);
            await axios.post('inventory/web/backend/search_proc_reimb.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.reimb_list = response.data;
                    _this2.hv_reimb = true;
                } else {
                    _this2.hv_reimb = false;
                }
            });
        },
        search_reimbursement: async function search_reimbursement() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('key', this.procurement.quot);
            await axios.post('inventory/web/backend/search_reimb.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.reimb_list = response.data;
                    _this3.hv_reimb = true;
                } else {
                    _this3.hv_reimb = false;
                }
            });
        },
        search_procurement: async function search_procurement() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('key', this.procurement.tender);
            await axios.post('inventory/web/backend/search_procurement.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this4.proc_list = response.data;
                    _this4.hv_proc = true;
                } else {
                    _this4.hv_proc = false;
                }
            });
        },
        search_supplier: async function search_supplier() {
            var _this5 = this;

            var formData = new FormData();
            formData.append('key', this.supplier.name);
            await axios.post('inventory/web/backend/search_supplier.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this5.supplier_list = response.data;
                    _this5.hv_supplier = true;
                } else {
                    _this5.hv_supplier = false;
                }
            });
        },
        load_filter: async function load_filter() {
            var _this6 = this;

            var formData = new FormData();
            //var section = document.getElementById('query').value;
            var section = this.item_code[0];
            formData.append('section', section);
            await axios.post('inventory/web/backend/filter_preload.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this6.category_list = response.data.category;
                    _this6.grp_list = response.data.grp_code;
                }
            });
            document.getElementById('query').value = '';
        },
        fetch_sub_category: async function fetch_sub_category() {
            var _this7 = this;

            var formData = new FormData();
            formData.append('category', this.code.category);
            await axios.post('inventory/web/backend/fetch_sub_category.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this7.sub_category_list = response.data;
                    //this.code.sub_category = 'All';
                } else {
                    _this7.sub_category_list = [];
                    //this.code.sub_category = 'All';
                }
            });
        },
        fetch_details: async function fetch_details() {
            var _this8 = this;

            var formData = new FormData();
            formData.append('item_code', this.item_code);
            formData.append('scope', this.scope);
            await axios.post('inventory/web/backend/fetch_details.php', formData).then(function (response) {
                if (response.data == 'timeout') {
                    _this8.$alert('Session time out');
                    _this8.$router.push('inventory_list');
                } else if (response.data != 'empty') {
                    _this8.details = response.data;
                    //code
                    _this8.code.barcode = response.data[0].barcode;
                    if (_this8.scope == 'single') {
                        _this8.code.sn = response.data[0].sn;
                    }
                    _this8.code.category = response.data[0].category_code;
                    _this8.code.sub_category = response.data[0].sub_category_code;
                    //[END] code
                    //location
                    _this8.location.grp_code = response.data[0].grp_code;
                    _this8.location.building_code = response.data[0].building_code;
                    _this8.location.location_code = response.data[0].location_code;
                    _this8.location.sub_location_code = response.data[0].sub_location_code;
                    //[END]location
                    //product
                    _this8.product.eng_name = response.data[0].item_eng_name;
                    _this8.product.chi_name = response.data[0].item_chi_name;
                    _this8.product.eng_dp = response.data[0].eng_dpt;
                    _this8.product.chi_dp = response.data[0].chi_dpt;
                    if (_this8.scope == 'single') {
                        _this8.product.brand = response.data[0].brand;
                    }
                    _this8.product.license = response.data[0].license;
                    _this8.product.ownership = response.data[0].ownership;
                    //[END]product
                    //Purchase
                    _this8.purchase.purchase_date = response.data[0].purchase_date;
                    if (_this8.scope == 'single') {
                        _this8.purchase.warranty_exp = response.data[0].warranty_exp;
                    }
                    _this8.purchase.quantity = response.data[0].quantity;
                    _this8.purchase.total_cost = response.data[0].total_cost;
                    _this8.purchase.invoice = response.data[0].invoice;
                    //[END]Purchase
                    //Supplier
                    _this8.supplier.name = response.data[0].supplier;
                    _this8.supplier.supplier_contact = response.data[0].supplier_contact;
                    _this8.supplier.supplier_address = response.data[0].supplier_address;
                    //[END]Supplier
                    //Procurement
                    _this8.procurement.quot = response.data[0].quot;
                    _this8.procurement.tender = response.data[0].tender;
                    _this8.procurement.fundsrc = response.data[0].fundsrc;
                    _this8.procurement.unit_cost = response.data[0].unit_cost;
                    if (_this8.scope == 'single') {
                        _this8.procurement.fundsrc_2 = response.data[0].fundsrc_2;
                        _this8.procurement.unit_cost_2 = response.data[0].unit_cost_2;
                    } else if (_this8.scope == 'bulk') {
                        _this8.purchase.variance = response.data[0].variance_mngt;
                    }
                    //[END]Procurement
                    //Action
                    if (_this8.scope == 'single') {
                        _this8.action.remarks = response.data[0].remarks;
                    }
                    _this8.action.stocktake = response.data[0].stocktake;
                    _this8.action.tag = response.data[0].tag;
                    _this8.action.maint_details = response.data[0].maintance_details;
                    //[END]Action
                }
            });
        },
        return_prev: function return_prev() {
            this.$router.go(-1);
        },
        handleSubmit: async function handleSubmit() {
            var _this9 = this;

            var formData = new FormData();
            formData.append('scope', this.scope);
            formData.append('item_code', this.item_code);
            //Code
            formData.append('barcode', this.code.barcode);
            formData.append('sn', this.code.sn);
            formData.append('category', this.code.category);
            formData.append('sub_category', this.code.sub_category);
            //Location
            formData.append('grp', this.location.grp_code);
            formData.append('building', this.location.building_code);
            formData.append('location', this.location.location_code);
            formData.append('sub_location', this.location.sub_location_code);
            //Product
            formData.append('eng_name', this.product.eng_name);
            formData.append('chi_name', this.product.chi_name);
            formData.append('eng_dp', this.product.eng_dp);
            formData.append('chi_dp', this.product.chi_dp);
            formData.append('brand', this.product.brand);
            formData.append('license', this.product.license);
            formData.append('ownership', this.product.ownership);
            //Purchase
            formData.append('purchase_date', this.purchase.purchase_date);
            formData.append('warranty_exp', this.purchase.warranty_exp);
            formData.append('quantity', this.purchase.quantity);
            formData.append('total_cost', this.purchase.total_cost);
            formData.append('invoice', this.purchase.invoice);
            formData.append('variance', this.purchase.variance);
            //Supplier
            formData.append('supplier_name', this.supplier.name);
            formData.append('supplier_contact', this.supplier.supplier_contact);
            formData.append('supplier_address', this.supplier.supplier_address);
            //Procurement
            formData.append('quot', this.procurement.quot);
            formData.append('tender', this.procurement.tender);
            formData.append('fundsrc', this.procurement.fundsrc);
            formData.append('unit_cost', this.procurement.unit_cost);
            formData.append('fundsrc_2', this.procurement.fundsrc_2);
            formData.append('unit_cost_2', this.procurement.unit_cost_2);
            //Action
            formData.append('remarks', this.action.remarks);
            //formData.append('stocktake',this.action.stocktake);
            formData.append('tag', this.action.tag);
            formData.append('maintance', this.action.maint_details);
            await axios.post('inventory/web/backend/update_inv.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this9.$alert('Successfully Updated Record: ' + _this9.item_code);
                    _this9.$router.push('inventory_list');
                } else {
                    _this9.$alert(response.data);
                }
            });
        }
    }
};

/***/ }),

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("586c42a6", content, true, {});

/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".flex[data-v-1057d1fe]{display:flex;flex-direction:row}.px0[data-v-1057d1fe]{padding-left:0;padding-right:0}.click_row[data-v-1057d1fe]{cursor:pointer}u[data-v-1057d1fe]{color:rgba(0,0,0,.6)}.cprow[data-v-1057d1fe]{margin-bottom:.55rem}td[data-v-1057d1fe]{text-transform:capitalize!important}label[data-v-1057d1fe]{padding-top:.35rem!important}.inner_overlay[data-v-1057d1fe]{position:relative;margin-top:0;width:100%}.cross_box[data-v-1057d1fe]{position:absolute;right:0;top:0}.fa-window-close[data-v-1057d1fe]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-1057d1fe]:hover{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-12 px0",staticStyle:{"position":"relative"}},[_c('form',{staticClass:"col-12 px0 flex",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit()}}},[_c('div',{staticClass:"card col-12",staticStyle:{"height":"auto","margin-bottom":"1.5rem","margin-top":"0"}},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Details for "+_vm._s(_vm.item_code))])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-4 px0"},[_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(this.code.barcode),expression:"this.code.barcode"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(this.code.barcode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(this.code, "barcode", $event.target.value)}}})])]),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(this.code.sn),expression:"this.code.sn"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(this.code.sn)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(this.code, "sn", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.code.category),expression:"code.category"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.code, "category", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.fetch_sub_category]}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.category_list.length),function(l){return _c('option',{domProps:{"value":_vm.category_list[l-1].main_category}},[_vm._v(_vm._s(_vm.category_list[l-1].main_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.code.sub_category),expression:"code.sub_category"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.code, "sub_category", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.sub_category_list.length),function(sl){return _c('option',{domProps:{"value":_vm.sub_category_list[sl-1].sub_category}},[_vm._v(_vm._s(_vm.sub_category_list[sl-1].sub_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.grp_code),expression:"location.grp_code"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.location, "grp_code", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.grp_list),function(grps){return _c('option',{domProps:{"value":grps.groupcode}},[_vm._v(_vm._s(grps.group_description))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.building_code),expression:"location.building_code"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.location, "building_code", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All Blocks")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_vm._l((8),function(n){return _c('option',{domProps:{"value":_vm.blks[n-1]}},[_vm._v("Block "+_vm._s(_vm.blks[n-1]))])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")]),_vm._v(" "),_c('option',{attrs:{"value":"OC"}},[_vm._v("Common Area")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.location_code),expression:"location.location_code"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.location, "location_code", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_c('option',{attrs:{"value":"G"}},[_vm._v("Ground floor")]),_vm._v(" "),_vm._l((8),function(f){return _c('option',{domProps:{"value":_vm.location.building_code+f}},[_vm._v(" "+_vm._s(f)),_c('sup',[_vm._v(_vm._s(_vm.index_sup[f-1]))]),_vm._v(" floor")])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.sub_location_code),expression:"location.sub_location_code"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.location.sub_location_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.location, "sub_location_code", $event.target.value)}}})])]),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.action.remarks),expression:"action.remarks"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.action.remarks)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.action, "remarks", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.action.stocktake),expression:"action.stocktake"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.action.stocktake)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.action, "stocktake", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(10),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.action.tag),expression:"action.tag"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.action.tag)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.action, "tag", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-4 px0"},[_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(11),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.eng_name),expression:"product.eng_name"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.product.eng_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "eng_name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(12),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.eng_dp),expression:"product.eng_dp"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.product.eng_dp)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "eng_dp", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(13),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.chi_name),expression:"product.chi_name"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.product.chi_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "chi_name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(14),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.chi_dp),expression:"product.chi_dp"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.product.chi_dp)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "chi_dp", $event.target.value)}}})])]),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(15),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.brand),expression:"product.brand"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.product.brand)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "brand", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(16),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.license),expression:"product.license"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.product.license)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "license", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(17),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.ownership),expression:"product.ownership"}],staticClass:"form-control",attrs:{"type":"number","min":"1"},domProps:{"value":(_vm.product.ownership)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "ownership", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(18),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.supplier.name),expression:"supplier.name"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.supplier.name)},on:{"keyup":function($event){return _vm.search_records('supplier')},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.supplier, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(19),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.supplier.supplier_contact),expression:"supplier.supplier_contact"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.supplier.supplier_contact)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.supplier, "supplier_contact", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(20),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.supplier.supplier_address),expression:"supplier.supplier_address"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.supplier.supplier_address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.supplier, "supplier_address", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(21),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.action.maint_details),expression:"action.maint_details"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.action.maint_details)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.action, "maint_details", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-4 px0"},[_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(22),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.invoice),expression:"purchase.invoice"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.purchase.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "invoice", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(23),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.purchase_date),expression:"purchase.purchase_date"}],staticClass:"form-control",attrs:{"type":"date","data-date-format":"YYYY-DD-MM"},domProps:{"value":(_vm.purchase.purchase_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "purchase_date", $event.target.value)}}})])]),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(24),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.warranty_exp),expression:"purchase.warranty_exp"}],staticClass:"form-control",attrs:{"type":"date","data-date-format":"YYYY-DD-MM"},domProps:{"value":(_vm.purchase.warranty_exp)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "warranty_exp", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(25),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.tender),expression:"procurement.tender"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.procurement.tender)},on:{"keyup":function($event){return _vm.search_records('proc')},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "tender", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(26),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.quot),expression:"procurement.quot"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.procurement.quot)},on:{"keyup":_vm.search_reimbursement,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "quot", $event.target.value)}}})])]),_vm._v(" "),(_vm.scope=='bulk')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(27),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.variance),expression:"purchase.variance"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.purchase.variance)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "variance", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(28),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.fundsrc),expression:"procurement.fundsrc"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.procurement.fundsrc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "fundsrc", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(29),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.unit_cost),expression:"procurement.unit_cost"}],staticClass:"form-control",attrs:{"type":"float","min":"0.00"},domProps:{"value":(_vm.procurement.unit_cost)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "unit_cost", $event.target.value)}}})])]),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(30),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.fundsrc_2),expression:"procurement.fundsrc_2"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.procurement.fundsrc_2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "fundsrc_2", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),(_vm.scope=='single')?_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(31),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.unit_cost_2),expression:"procurement.unit_cost_2"}],staticClass:"form-control",attrs:{"type":"float","min":"0.00"},domProps:{"value":(_vm.procurement.unit_cost_2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "unit_cost_2", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(32),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.quantity),expression:"purchase.quantity"}],staticClass:"form-control",attrs:{"type":"number","min":"1"},domProps:{"value":(_vm.purchase.quantity)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "quantity", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 cprow flex"},[_vm._m(33),_vm._v(" "),_c('div',{staticClass:"col-7 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.total_cost),expression:"purchase.total_cost"}],staticClass:"form-control",attrs:{"type":"float","min":"0.00"},domProps:{"value":(_vm.purchase.total_cost)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "total_cost", $event.target.value)}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('div',{staticClass:"flex"},[_vm._m(34),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-refresh"}),_vm._v(" Return\n                    ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",staticStyle:{"margin-left":"auto!important"},attrs:{"type":"button"},on:{"click":_vm.write_off}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Request Write Off\n                    ")])])])])]),_vm._v(" "),_c('div',{staticClass:"inner_overlay"},[_c('div',{staticClass:"cross_box"},[_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})]),_vm._v(" "),(_vm.hv_supplier)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.supplier_list,"rows-per-page-items":[3]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_sup(props.item.name,props.item.loc,props.item.contact_num)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.loc))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.contact_num))])])]}}],null,false,85396573)}):_vm._e(),_vm._v(" "),(_vm.hv_reimb)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_reimb,"items":_vm.reimb_list,"rows-per-page-items":[3]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_reimb(
                props.item.receiver,
                props.item.address,
                props.item.company_name,
                props.item.contact,
                props.item.tag,
                props.item.nature,
                props.item.total,
                props.item.invoice_num,
                props.item.fundsrc,
                props.item.reason
                )}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.tag))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.nature))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.invoice_num))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.fundsrc))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.total))])])]}}],null,false,963986707)}):_vm._e(),_vm._v(" "),(_vm.hv_proc)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_proc,"items":_vm.proc_list,"rows-per-page-items":[3]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_proc(props.item.proc_id,props.item.dept,props.item.record_descript,props.item.category)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.dept_full))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.category))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.record_descript))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.proc_id))])])]}}],null,false,3224055247)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Barcode")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("S/N")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Sub-Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Group Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Building Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Floor Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Room Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Remarks")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Stocktake")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Write Off Reason")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("English Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Description (ENG)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Chinese Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Description (CHI)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Brand")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("License")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Ownership")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Supplier")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Supplier Contact")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Supplier Address")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Maintenance")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Invoice Number")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Purchase Date")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Warranty Expire")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Procurement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Reimbursement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Variance")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Fund Source")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Unit Cost")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Fund Source (extra)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Unit Cost (extra)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Quantity")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5 px0"},[_c('label',[_vm._v("Total Amount")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-plus-circle"}),_vm._v(" Update\n                    ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_item_vue__ = __webpack_require__(1282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1057d1fe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_item_vue__ = __webpack_require__(1617);
function injectStyle (ssrContext) {
  __webpack_require__(1615)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1057d1fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1057d1fe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=14.build.js.map