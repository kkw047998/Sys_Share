webpackJsonp([75],{

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(266);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            selected_p: false,
            processing: false,
            sub_dept_list: [],
            sub_dept: '',
            min_close: '',
            ssb: 'Regular',
            percentage: 0,
            header_text: 'Select Procurement Category',
            dp_name: '',
            user_list: [],
            hv_user: false,
            v_date: '',
            v_time: '',
            cp_name: '',
            cp_num: '',
            site: 'no',
            tendor: '',
            fsrc: '',
            op: '',
            close: '',
            sup_list: [],
            user_check: '',
            cat_list: ['5001 - 50,000', '50,001 - 200,000', '>200,000'],
            category: '5001 - 50,000',
            counter_company: 1,
            counter_item: 0,
            cat_lv: 0,
            company_name: [],
            company_address: [],
            company_contact: [],
            cost_total: [],
            cost_item: [],
            unit: [],
            list_item: [],
            tmp: 0,
            count_total: 0,
            item_name: [],
            item: [],
            ready: false,
            dept_list: [],
            display_child: [true],
            quantity: [],
            step: 0,
            pdf: [],
            searching: 0,
            recep_data: [],
            check_company: false,
            check_item: false,
            check_quant: false,
            hv_record: false,
            asset_list: [],
            asset_cat: '',
            new_co: [],
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        await _axios2.default.get('Procurement/department/backend/dept_member.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].department;
            _this.load_subdept();
        });
        await _axios2.default.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            var perm = response.data[0];
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
            if (perm.proc_level < 1) {
                _this.$alert("No permission").then(function () {
                    _this.$router.go(-1);
                });
            }
        });
        var formData = new FormData();
        formData.append('dept', this.dept);
        await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
            _this.asset_list = response.data;
            _this.asset_cat = _this.asset_list[0].name;
        });
    },
    mounted: async function mounted() {
        window.removeEventListener('focus', console.log('Lost Focus'));
        //asset category of department   
    },

    methods: {
        update_progress: function update_progress(percentage) {
            if (this.percentage < percentage) {
                this.percentage = percentage;
            }
        },
        select_u: function select_u(name) {
            this.cp_name = name;
            this.hv_user = false;
            this.selected_p = true;
        },
        search_user: function search_user() {
            var _this2 = this;

            this.selected_p = false;
            var key = this.cp_name;
            if (key == '') {
                this.hv_user = false;
            } else {
                var formData = new FormData();
                formData.append('key', key);
                _axios2.default.post('Procurement/procurement/backend/search_user.php', formData).then(function (response) {
                    if (!(response.data == 'Empty')) {
                        _this2.hv_user = true;
                        _this2.user_list = response.data;
                    } else {
                        _this2.user_list = '';
                        _this2.hv_user = false;
                    }
                });
            }
        },
        load_subdept: function load_subdept() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            _axios2.default.post('Procurement/shared_backend/subdept.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.sub_dept_list = response.data;
                    _this3.sub_dept = '';
                } else {
                    _this3.sub_dept_list = [];
                    _this3.sub_dept = '';
                }
            });
        },
        load_info: function load_info() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this4.load_subdept();
                _this4.asset_list = response.data;
                _this4.asset_cat = _this4.asset_list[0].name;
            });
        },
        addfile_pdf: function addfile_pdf(event) {
            var n = event;
            this.pdf[n] = document.getElementById(n).files;
        },
        add_company: function add_company() {
            this.counter_company = this.counter_company + 1;
        },
        remove_company: function remove_company() {
            this.counter_company = this.counter_company - 1;
        },
        add_item: function add_item() {
            this.counter_item = this.counter_item + 1;
        },
        remove_item: function remove_item() {
            this.counter_item = this.counter_item - 1;
        },
        next_step: function next_step() {
            var i = 0;
            var j = 0;
            var x = 0;
            var y = 0;
            var n = 0;
            this.check_company = false;
            this.check_item = false;
            for (i = 0; i < this.counter_company + 1; i++) {
                if (this.new_co[i] == true) {
                    if (this.company_name[i] == undefined || this.company_address[i] == undefined || this.company_address[i] == undefined) {
                        this.check_company = false;
                    } else if (!(this.company_name[i].length > 0) || !(this.company_address[i].length > 0) || !(this.company_address[i].length > 0)) {
                        this.check_company = false;
                    } else if (this.company_name[i].length > 0 && this.company_address[i].length > 0 && this.company_address[i].length > 0) {
                        this.check_company = true;
                    }
                } else {
                    if (this.company_name[i] == undefined) {
                        this.check_company = false;
                    } else if (this.step == 1 && !(this.company_name[i].length > 0)) {
                        this.check_company = false;
                    } else if (this.step == 1 && this.company_name[i].length > 0) {
                        this.check_company = true;
                    }
                }
            };
            for (j = 0; j < this.counter_item + 1; j++) {
                if (this.item_name[j] == undefined || this.quantity[j] == undefined) {
                    this.check_item = false;
                } else if (this.step == 1 && !(this.item_name[j].length > 0) && !(this.quantity[j] > 0)) {
                    this.check_item = false;
                } else if (this.step == 1 && this.item_name[j].length > 0 && this.quantity[j] > 0) {
                    this.check_item = true;
                }
            }
            if (this.check_company == true && this.check_item == true) {
                for (x = 0; x < this.counter_company + 1; x++) {
                    this.cost_total[x] = [];
                    this.cost_item[x] = [];
                    for (y = 0; y < this.counter_item + 1; y++) {
                        this.cost_total[x][y] = 0;
                        this.cost_item[x][y] = 0;
                    }
                }
                this.step = this.step + 1;
            } else if (this.check_company == false) {
                this.$alert('Please Enter Company Info.');
            } else if (this.check_item == false) {
                this.$alert('Please Enter Item Info.');
            }
        },
        previous_step: function previous_step() {
            if (!(this.step == 0)) {
                if (this.step == 1) {
                    this.header_text = 'Select Procurement Category';
                }
                this.step = this.step - 1;
            } else {
                this.$router.go(-1);
            };
        },
        change_child_display: function change_child_display(id) {
            var display_id = 'display' + (id - 1);
            if (document.getElementById(display_id).style.display != 'none') {
                document.getElementById(display_id).style.display = 'none';
            } else if (document.getElementById(display_id).style.display == 'none') {
                document.getElementById(display_id).style.display = '';
            }
        },
        cal_sum: function cal_sum(x, y) {
            var id = 'cost_total[' + x + '][' + y + ']';
            this.cost_item[x][y] = Number(this.cost_item[x][y]);
            var tmp = Number(this.cost_item[x][y]) * Number(this.quantity[y]);
            this.cost_total[x][y] = Number(tmp);
            document.getElementById(id).value = this.cost_total[x][y];
        },
        cal_unit: function cal_unit(x, y) {
            var id = 'cost_total[' + x + '][' + y + ']';
            var tmp = document.getElementById(id).value;
            var result = Number(tmp) / Number(this.quantity[y]);
            result = Math.round(result * 100) / 100;
            this.cost_item[x][y] = result;
            this.$forceUpdate();
            console.log(result);
        },
        update_cat: function update_cat(event) {
            this.percentage = 0;
            if (this.category == '5001 - 50,000') {
                this.cat_lv = 2;
                this.counter_company = 1;
            } else if (this.category == '50,001 - 200,000') {
                this.cat_lv = 3;
                this.counter_company = 4;
            } else if (this.category == '>200,000') {
                this.cat_lv = 4;
            }
        },
        search_company: function search_company(event) {
            var _this5 = this;

            this.searching = event;
            var formData = new FormData();
            formData.append('key', this.company_name[event]);
            _axios2.default.post('Procurement/shared_backend/supplier_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this5.hv_record = false;
                    _this5.new_co[event] = false;
                } else if (response.data == 'new') {
                    _this5.new_co[event] = true;
                    _this5.hv_record = false;
                } else {
                    _this5.new_co[event] = false;
                    _this5.recep_data = response.data;
                    _this5.hv_record = true;
                }
            });
        },
        select_sup: function select_sup(event) {
            var id = this.searching;
            var i = 0;
            var sel_id = 0;
            var selected = false;
            for (i = 0; i < this.counter_company; i++) {
                if (this.company_name[i] == event) {
                    selected = true;
                    sel_id = i + 1;
                }
            }
            if (selected == true) {
                this.$alert(event + ' has already be selected as company:' + sel_id + ' !');
            } else {
                this.company_name[id] = event;
                this.hv_record = false;
            }
        },
        select_cat: function select_cat(cat) {
            if (cat == 2) {
                this.header_text = 'Procurement Form : < $50,000';
                this.cat_lv = 2;
                this.counter_company = 1;
                this.$forceUpdate();
            } else if (cat == 3) {
                this.header_text = 'Procurement Form : $50,001 ~ $200,000';
                this.cat_lv = 3;
                this.counter_company = 4;
                this.$forceUpdate();
            } else if (cat == 4) {
                this.header_text = 'Procurement Form : > $200,000';
                this.cat_lv = 4;
                this.counter_company = 4;
                this.$forceUpdate();
            }
            this.step = 1;
        },
        set_min_close: function set_min_close() {
            var st = new Date(this.op);
            st = st.getTime();
            var st_new = new Date(st + 21 * 24 * 60 * 60 * 1000);
            var date = st_new;
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            if (parseInt(monthIndex) < 9) {
                monthIndex = '0' + parseInt(monthIndex + 1);
            } else {
                monthIndex = parseInt(monthIndex + 1);
            }
            if (parseInt(day) < 9) {
                day = '0' + parseInt(monthIndex);
            } else {
                day = parseInt(day);
            }
            st_new = year + '-' + monthIndex + '-' + day;
            this.min_close = st_new;
        },
        handleSubmit: async function handleSubmit() {
            var _this6 = this;

            this.processing = true;
            //
            if (this.cat_lv == 2) {
                var i = 0;
                var j = 0;
                var p = 0;
                var bi = 0;
                var formData = new FormData();
                var count_files = 0;
                if (this.sub_dept != '') {
                    formData.append('subdept', this.sub_dept);
                }
                formData.append('display', this.dp_name);
                formData.append('dept', this.dept);
                formData.append('asset', this.asset_cat);
                formData.append('category', this.cat_lv);
                formData.append('counter_company', this.counter_company);
                formData.append('counter_item', this.counter_item);
                for (bi = 0; bi < this.counter_item + 1; bi++) {
                    formData.append('item' + bi, this.item_name[bi]);
                    formData.append('quantity' + bi, this.quantity[bi]);
                    formData.append('unit' + bi, this.unit[bi]);
                }
                for (i = 0; i < this.counter_company + 1; i++) {
                    count_files = 0;
                    formData.append('company_' + i, this.company_name[i]);
                    if (this.new_co[i] == true) {
                        formData.append('new_sup_' + i, this.new_co[i]);
                        formData.append('company_address_' + i, this.company_address[i]);
                        formData.append('company_contact_' + i, this.company_contact[i]);
                    }
                    for (j = 0; j < this.counter_item + 1; j++) {
                        formData.append('com_' + i + '_item_' + j, this.item_name[j]);
                        formData.append('com_' + i + '_ucost_' + j, this.cost_item[i][j]);
                        formData.append('com_' + i + '_totalcost_' + j, this.cost_total[i][j]);
                    }
                    if (this.pdf[i] != undefined) {
                        for (p = 0; p < this.pdf[i].length; p++) {
                            var file = this.pdf[i][p];
                            formData.append('files' + i + '_' + p, file);
                            count_files = count_files + 1;
                        }
                    }
                    formData.append('count_file' + i, count_files);
                }
                await _axios2.default.post('Procurement/procurement/backend/insert_proc.php', formData).then(function (response) {
                    _this6.$alert('Successfully Submitted !').then(function () {
                        _this6.processing = false;
                    });
                    _this6.$router.push('view_proc');
                });
            } else if (this.cat_lv >= 3) {
                if (this.selected_p) {
                    var i = 0;
                    var j = 0;
                    var p = 0;
                    var bi = 0;
                    var formData = new FormData();
                    var count_files = 0;
                    formData.append('ssb', this.ssb);
                    formData.append('display', this.tendor);
                    formData.append('op', this.op);
                    formData.append('v_date', this.v_date);
                    formData.append('v_time', this.v_time);
                    formData.append('cp_name', this.cp_name);
                    formData.append('cp_num', this.cp_num);
                    formData.append('fund_src', this.fsrc);
                    formData.append('close', this.close);
                    formData.append('dept', this.dept);
                    formData.append('title', this.tendor);
                    formData.append('asset', this.asset_cat);
                    formData.append('category', this.cat_lv);
                    formData.append('counter_company', this.counter_company);
                    formData.append('counter_item', this.counter_item);
                    for (bi = 0; bi < this.counter_item + 1; bi++) {
                        formData.append('item' + bi, this.item_name[bi]);
                        formData.append('quantity' + bi, this.quantity[bi]);
                        formData.append('unit' + bi, this.unit[bi]);
                    }
                    for (i = 0; i < this.counter_company + 1; i++) {
                        count_files = 0;
                        formData.append('company_' + i, this.company_name[i]);
                        if (this.new_co[i] == true) {
                            formData.append('new_sup_' + i, this.new_co[i]);
                            formData.append('company_address_' + i, this.company_address[i]);
                            formData.append('company_contact_' + i, this.company_contact[i]);
                        }
                        if (this.pdf[i] != undefined) {
                            for (p = 0; p < this.pdf[i].length; p++) {
                                var _file = this.pdf[i][p];
                                formData.append('files' + i + '_' + p, _file);
                                count_files = count_files + 1;
                            }
                        }
                        formData.append('count_file' + i, count_files);
                    }
                    await _axios2.default.post('Procurement/procurement/backend/insert_proc_cat3.php', formData).then(function (response) {
                        _this6.$alert('Successfully Submitted !').then(function () {
                            _this6.processing = false;
                        });
                        _this6.$router.push('view_proc');
                    });
                } else {
                    this.$alert('Please select contact person').then(function () {
                        _this6.cp_name = '';
                        _this6.processing = false;
                        _this6.selected_p = false;
                    });
                }
            }
        }
        //

    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1468);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("592d6e6c", content, true, {});

/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-e9418552]{background-color:transparent;border-left:0}input[type=date][data-v-e9418552]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}", ""]);

// exports


/***/ }),

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-12"},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('strong',[_vm._v(_vm._s(_vm.header_text))]),_vm._v(" "),(_vm.step>0)?_c('progress',{staticClass:"card_progress show-value",attrs:{"max":"100","content":_vm.percentage+'%'},domProps:{"value":_vm.percentage}}):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"0 0 0 0"}},[(_vm.step==0)?_c('div',[_c('div',[_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b2",on:{"click":function($event){return _vm.select_cat(2)}}},[_vm._m(0)])])]),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b3",on:{"click":function($event){return _vm.select_cat(3)}}},[_vm._m(1)])])]),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b4",on:{"click":function($event){return _vm.select_cat(4)}}},[_vm._m(2)])])])])]):_vm._e(),_vm._v(" "),(_vm.step==1)?_c('div',[_c('div',{staticClass:"inner_card_bd",staticStyle:{"padding-top":"1em"}},[_vm._m(3),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.load_info]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.department))])}),0)])]),_vm._v(" "),(_vm.sub_dept_list.length>0)?_c('div',{staticClass:"row form-group"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sub_dept),expression:"sub_dept"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sub_dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":""}},[_vm._v("N/A")]),_vm._v(" "),_vm._l((_vm.sub_dept_list),function(sdep){return _c('option',[_vm._v(_vm._s(sdep.subdept))])})],2)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.asset_cat),expression:"asset_cat"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.asset_cat=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.asset_list),function(asset){return _c('option',[_vm._v(_vm._s(asset.name))])}),0)])]),_vm._v(" "),(_vm.cat_lv==2)?_c('div',{staticClass:"row form-group"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.dp_name),expression:"dp_name"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.dp_name)},on:{"change":function($event){return _vm.update_progress(25)},"input":function($event){if($event.target.composing){ return; }_vm.dp_name=$event.target.value}}})])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"inner_card_bd",staticStyle:{"background-color":"rgb(229,229,229)"}},[_vm._m(8),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-top":"0.5em","margin-right":"0.5em"}},[_vm._v("1.")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_name[0]),expression:"company_name[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Name"},domProps:{"value":(_vm.company_name[0])},on:{"keyup":function($event){return _vm.search_company(0)},"change":function($event){_vm.update_progress(50);_vm.search_company(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.company_name, 0, $event.target.value)}}})])]),_vm._v(" "),(_vm.cat_lv==2)?_c('div',{staticClass:"col-5"},[_c('input',{staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","id":0,"multiple":"multiple"},on:{"change":function($event){return _vm.addfile_pdf(0)}}})]):_vm._e(),_vm._v(" "),(_vm.cat_lv>2)?_c('div',{staticClass:"col-5"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.add_company}},[_vm._v("  More  ")])])])]),_vm._v(" "),(_vm.new_co[0]==true)?_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-10",staticStyle:{"padding-left":"1.35em"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_address[0]),expression:"company_address[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Address","required":""},domProps:{"value":(_vm.company_address[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.company_address, 0, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_contact[0]),expression:"company_contact[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Contact Number","required":""},domProps:{"value":(_vm.company_contact[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.company_contact, 0, $event.target.value)}}})])])]):_vm._e(),_vm._v(" "),_vm._l((_vm.counter_company),function(n){return _c('div',[_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-top":"0.5em","margin-right":"0.5em"}},[_vm._v(_vm._s(n+1)+".")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_name[n]),expression:"company_name[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Name"},domProps:{"value":(_vm.company_name[n])},on:{"keyup":function($event){return _vm.search_company(n)},"change":function($event){_vm.update_progress(50);_vm.search_company(n)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.company_name, n, $event.target.value)}}})])]),_vm._v(" "),(_vm.cat_lv==2)?_c('div',{staticClass:"col-5"},[_c('input',{staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","id":n,"multiple":"multiple"},on:{"change":function($event){return _vm.addfile_pdf(n)}}})]):_vm._e(),_vm._v(" "),(_vm.cat_lv>2)?_c('div',{staticClass:"col-5"}):_vm._e(),_vm._v(" "),(((_vm.cat_lv==2)&&(_vm.counter_company>0)&&(n>0))||(n>4))?_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.remove_company}},[_vm._v("Remove")])]):_vm._e()])]),_vm._v(" "),(_vm.new_co[n]==true)?_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-10",staticStyle:{"padding-left":"1.35em"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_address[n]),expression:"company_address[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Address","required":""},domProps:{"value":(_vm.company_address[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.company_address, n, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_contact[n]),expression:"company_contact[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Contact Number","required":""},domProps:{"value":(_vm.company_contact[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.company_contact, n, $event.target.value)}}})])])]):_vm._e()])})],2),_vm._v(" "),(_vm.cat_lv==2)?_c('div',{staticClass:"inner_card_bd"},[_vm._m(9),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Item Name")]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-top":"0.5em","margin-right":"0.5em"}},[_vm._v("1.")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_name[0]),expression:"item_name[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Supply of ......"},domProps:{"value":(_vm.item_name[0])},on:{"change":function($event){return _vm.update_progress(75)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.item_name, 0, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('label',[_vm._v("Quantity")]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row","height":"auto"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.quantity[0]),expression:"quantity[0]"}],staticClass:"form-control",attrs:{"type":"number","required":""},domProps:{"value":(_vm.quantity[0])},on:{"change":function($event){return _vm.update_progress(100)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.quantity, 0, $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit[0]),expression:"unit[0]"}],staticClass:"form-control",staticStyle:{"width":"7em"},attrs:{"type":"text","placeholder":"Enter Unit","required":"","maxlength":"5"},domProps:{"value":(_vm.unit[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.unit, 0, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.add_item}},[_vm._v("  More  ")])])])]),_vm._v(" "),_vm._l((_vm.counter_item),function(n){return _c('div',{staticClass:"col-12",staticStyle:{"margin-top":"0.25em"}},[_c('div',{staticClass:"row form-group",staticStyle:{"margin-bottom":"0"}},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"padding-top":"0.5em","margin-right":"0.5em"}},[_vm._v(_vm._s(n+1)+".")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_name[n]),expression:"item_name[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Supply of ......"},domProps:{"value":(_vm.item_name[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.item_name, n, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","height":"auto"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.quantity[n]),expression:"quantity[n]"}],staticClass:"form-control",attrs:{"type":"number","required":""},domProps:{"value":(_vm.quantity[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.quantity, n, $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit[n]),expression:"unit[n]"}],staticClass:"form-control",staticStyle:{"width":"7em"},attrs:{"type":"text","placeholder":"Enter Unit","required":""},domProps:{"value":(_vm.unit[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.unit, n, $event.target.value)}}})])]),_vm._v(" "),(_vm.cat_lv==2)?_c('div',{staticClass:"col-2",staticStyle:{"padding-right":"0"}},[_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.remove_item}},[_vm._v("Remove")])]):_vm._e()])])])})],2)]):_vm._e(),_vm._v(" "),((_vm.cat_lv==3)||(_vm.cat_lv==4))?_c('div',{staticClass:"inner_card_bd"},[((_vm.cat_lv==3))?_c('div',[_vm._m(10),_c('br'),_c('br')]):_vm._e(),_vm._v(" "),((_vm.cat_lv==4))?_c('div',[_vm._m(11),_c('br'),_c('br')]):_vm._e(),_vm._v(" "),_c('div',[_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Title")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tendor),expression:"tendor"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Header of Tender/Written Quotation (e.g. Supply of ... )"},domProps:{"value":(_vm.tendor)},on:{"change":function($event){return _vm.update_progress(57.5)},"input":function($event){if($event.target.composing){ return; }_vm.tendor=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('label',[_vm._v("Fund Source(s)")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fsrc),expression:"fsrc"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Funding Source(s)","required":""},domProps:{"value":(_vm.fsrc)},on:{"change":function($event){return _vm.update_progress(65)},"input":function($event){if($event.target.composing){ return; }_vm.fsrc=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v("Site Visit")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.site),expression:"site"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.site=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"no"}},[_vm._v("False")]),_vm._v(" "),_c('option',{attrs:{"value":"yes"}},[_vm._v("True")])])])])]),_vm._v(" "),(_vm.site=='yes')?_c('div',{staticClass:"row form-group",staticStyle:{"padding-left":"0"}},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Site Visit Info")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.v_date),expression:"v_date"}],staticClass:"form-control",attrs:{"type":"date","required":""},domProps:{"value":(_vm.v_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.v_date=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.v_time),expression:"v_time"}],staticClass:"form-control",attrs:{"type":"time","required":""},domProps:{"value":(_vm.v_time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.v_time=$event.target.value}}})])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Contact Person")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cp_name),expression:"cp_name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search Contact Person","required":""},domProps:{"value":(_vm.cp_name)},on:{"keyup":_vm.search_user,"change":function($event){return _vm.update_progress(72.5)},"input":function($event){if($event.target.composing){ return; }_vm.cp_name=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('label',[_vm._v("Contact Number")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cp_num),expression:"cp_num"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Contact Number","required":""},domProps:{"value":(_vm.cp_num)},on:{"change":function($event){return _vm.update_progress(80)},"input":function($event){if($event.target.composing){ return; }_vm.cp_num=$event.target.value}}})])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Letter Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op),expression:"op"}],staticClass:"form-control",attrs:{"type":"date","required":""},domProps:{"value":(_vm.op)},on:{"change":function($event){_vm.update_progress(85);_vm.set_min_close()},"input":function($event){if($event.target.composing){ return; }_vm.op=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('label',[_vm._v("Return Deadline")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.close),expression:"close"}],staticClass:"form-control",attrs:{"type":"date","min":_vm.min_close,"required":""},domProps:{"value":(_vm.close)},on:{"change":function($event){return _vm.update_progress(90)},"input":function($event){if($event.target.composing){ return; }_vm.close=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Item Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_name[0]),expression:"item_name[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Supply of ..."},domProps:{"value":(_vm.item_name[0])},on:{"change":function($event){return _vm.update_progress(95)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.item_name, 0, $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('label',[_vm._v("Quantity")]),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.quantity[0]),expression:"quantity[0]"}],staticClass:"form-control col-7",attrs:{"type":"number","required":""},domProps:{"value":(_vm.quantity[0])},on:{"change":function($event){return _vm.update_progress(100)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.quantity, 0, $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit[0]),expression:"unit[0]"}],staticClass:"form-control col-5",attrs:{"type":"text","placeholder":"Enter Unit","required":"","maxlength":"5"},domProps:{"value":(_vm.unit[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.unit, 0, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.add_item}},[_vm._v("  More  ")])])])]),_vm._v(" "),_vm._l((_vm.counter_item),function(n){return _c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-5",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item_name[n]),expression:"item_name[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Supply of ..."},domProps:{"value":(_vm.item_name[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.item_name, n, $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.quantity[n]),expression:"quantity[n]"}],staticClass:"form-control col-7",attrs:{"type":"number","required":""},domProps:{"value":(_vm.quantity[n])},on:{"change":function($event){return _vm.update_progress(100)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.quantity, n, $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit[n]),expression:"unit[n]"}],staticClass:"form-control col-5",attrs:{"type":"text","placeholder":"Enter Unit","required":"","maxlength":"5"},domProps:{"value":(_vm.unit[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.unit, n, $event.target.value)}}})])]),_vm._v(" "),((_vm.cat_lv==3)||(_vm.cat_lv==4))?_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.remove_item}},[_vm._v("Remove")])]):_vm._e()])])})],2)]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.step==2)?_c('div',[_c('div',{staticClass:"inner_card_bd"},[_vm._m(12),_c('br'),_vm._v(" "),_c('div',{staticClass:"table-responsive"},_vm._l((_vm.counter_company+1),function(i){return _c('table',{staticClass:"table table-striped first-td-padding",staticStyle:{"width":"100%"}},[_c('tr',{staticStyle:{"width":"100%"}},[_c('th',{staticStyle:{"color":"#ffffff","background-color":"#db1900","cursor":"pointer","font-size":"1.5em","width":"40%"},on:{"click":function($event){return _vm.change_child_display(i)}}},[_vm._v("\r\n                            "+_vm._s(_vm.company_name[i-1])+"      \r\n                        ")]),_vm._v(" "),_c('th',{staticStyle:{"color":"#ffffff","background-color":"#db1900","cursor":"pointer","font-size":"1.5em"},on:{"click":function($event){return _vm.change_child_display(i)}}},[_vm._v("\r\n                            Unit Cost\r\n                        ")]),_vm._v(" "),_c('th',{staticStyle:{"color":"#ffffff","background-color":"#db1900","cursor":"pointer","font-size":"1.5em"},on:{"click":function($event){return _vm.change_child_display(i)}}},[_vm._v("\r\n                            Total Cost     \r\n                        ")])]),_vm._v(" "),_c('tbody',{staticStyle:{"display":"''","width":"100%"},attrs:{"id":'display'+(i-1)}},_vm._l((_vm.counter_item+1),function(j){return _c('tr',[_c('td',{staticStyle:{"font-size":"1.5em"}},[_vm._v(_vm._s(_vm.item_name[j-1]))]),_vm._v(" "),_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cost_item[(i-1)][(j-1)]),expression:"cost_item[(i-1)][(j-1)]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.001","placeholder":"Enter Unit Cost","onfocus":"this.value=''"},domProps:{"value":(_vm.cost_item[(i-1)][(j-1)])},on:{"change":function($event){_vm.cal_sum((i-1),(j-1))},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.cost_item[(i-1)], (j-1), $event.target.value)}}})]),_vm._v(" "),_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cost_total[(i-1)][(j-1)]),expression:"cost_total[(i-1)][(j-1)]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.001","placeholder":"Enter Unit Cost","onfocus":"this.value=''","id":'cost_total['+(i-1)+']['+(j-1)+']'},domProps:{"value":(_vm.cost_total[(i-1)][(j-1)])},on:{"change":function($event){_vm.cal_unit((i-1),(j-1))},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.cost_total[(i-1)], (j-1), $event.target.value)}}})])])}),0)])}),0)])]):_vm._e()]),_vm._v(" "),((_vm.step>0)&&(_vm.cat_lv==2))?_c('div',{staticClass:"card-footer"},[(_vm.step<2)?_c('button',{staticClass:"btn btn-primary btn-nt",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.next_step($event)}}},[_c('i',{staticClass:"fa fa-arrow-right"}),_vm._v(" Next Step\r\n            ")]):_vm._e(),_vm._v(" "),(_vm.step==2)?_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\r\n            ")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.previous_step}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\r\n            ")])]):_vm._e(),_vm._v(" "),((_vm.step>0)&&((_vm.cat_lv==3)||(_vm.cat_lv==4)))?_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\r\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.previous_step}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\r\n            ")])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_sup(props.item.name)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,3547505981)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_user)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.user_list,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.id},on:{"click":function($event){$event.preventDefault();return _vm.select_u(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,2208282378)}):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b2_first"}),_vm._v(" "),_c('div',{staticClass:"b2_first_char"},[_vm._v("Q")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("uotation")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Less than $50,001")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b3_first"}),_vm._v(" "),_c('div',{staticClass:"b3_first_char"},[_vm._v("W")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ritten Quotation")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("$50,001 to $200,000")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b4_first"}),_vm._v(" "),_c('div',{staticClass:"b4_first_char"},[_vm._v("T")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ender")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Over $200,001")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('b',[_vm._v("Step 1.1: Fill In Procurement Info.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Committee / Department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Sub-department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Asset Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Procurement Display Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('b',[_vm._v("Step 1.2: Enter Company Info.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('b',[_vm._v("Step 1.3: Enter Item Info.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('b',[_vm._v("Step 1.3: Enter Written Quotation Info.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('b',[_vm._v("Step 1.3: Enter Tender Info.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('b',[_vm._v("Step 2: Fill In Quotation Info.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_proc_vue__ = __webpack_require__(1226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_proc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_proc_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_proc_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_proc_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9418552_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_new_proc_vue__ = __webpack_require__(1469);
function injectStyle (ssrContext) {
  __webpack_require__(1467)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e9418552"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_proc_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9418552_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_new_proc_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=75.build.js.map