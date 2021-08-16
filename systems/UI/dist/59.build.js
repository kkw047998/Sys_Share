webpackJsonp([59],{

/***/ 1223:
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
        //var tmr =document.getElementById('tmr_date').value;
        return {
            skip_invoice: false,
            bp: ['', '', ''],
            fund: ['', '', ''],
            circular_pdf: '',
            is_new_circular: false,
            checking: 0,
            circular_val: [0, 0, 0],
            circular_list: [],
            hv_circular: false,
            reimb_type: 'regular',
            proc_exc: false,
            processing: false,
            head_view: false,
            loc_type: ['Internal', 'Internal', 'Internal'],
            new_sup: false,
            recep_data: [],
            search_rec: '',
            rtype: '',
            company_address: '',
            company_contact: '',
            invoice: '',
            pdf: '',
            dept_view: 'CCA',
            dept_list_view: [],
            show_form: true,
            req_reimb_data: [],
            dept: 'CCA',
            dept_list: [],
            loc: [],
            nature: [],
            reason: [],
            amount: [],
            fund_max: [9999999, 9999999, 9999999],
            sum: 0,
            counter: 1,
            ready: false,
            hv_record: false,
            headers: [{ text: 'Action', value: 'id', sortable: false }, { text: 'Tag', value: 'tag', sortable: false }, { text: 'Name', value: 'app_id', sortable: false }, { text: 'Invoice', value: 'support_doc_path', sortable: false }],
            headers_list: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }],
            circular_headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Circular Code', value: 'fundsrc', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        await _axios2.default.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            var check = response.data[0].signed;
            var perm = response.data[0];
            if (!(check == 'set')) {
                _this.$router.push('../user_setup');
            }
        });
        /*
        await axios.get('Procurement/shared_backend/department.php')
            .then(
                (response)=>{
                    this.dept_list = response.data;
                    this.dept = this.dept_list[0].dept_id;
                }
            ); 
        */
        await _axios2.default.get('Procurement/shared_backend/location.php').then(function (response) {
            _this.loc_list = response.data;
        });
        await this.dept_in();
        await this.get_reimb();
        this.ready = true;
        //asset category of department   
    },
    mounted: async function mounted() {
        //asset category of department   
    },

    methods: {
        makeid: function makeid(length) {
            if (this.skip_invoice == true) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                this.invoice = result;
                console.log(this.invoice);
            } else {
                this.invoice = '';
            }
        },
        updateMaxFund: function updateMaxFund(event) {
            this.fund_max[event] = this.circular_val[event];
            this.$forceUpdate();
        },
        select_circular: function select_circular(val) {
            this.fund[this.checking] = val;
            this.bp[this.checking] = val;
            this.circular_max();
            this.hv_circular = false;
        },
        circular_max: function circular_max() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('code', this.fund[this.checking]);
            _axios2.default.post('Procurement/reimbursement/backend/circular_max.php', formData).then(function (response) {
                if (response.data != '') {
                    _this2.fund_max[_this2.checking] = response.data.balance;
                    _this2.$forceUpdate();
                }
            });
        },
        check_circular: function check_circular(event) {
            var _this3 = this;

            var key = this.fund[event];
            var upper = key.toUpperCase();
            this.checking = event;
            this.fund[event] = upper;
            this.bp[event] = upper;
            this.$forceUpdate();
            if (key.length > 0) {
                var formData = new FormData();
                formData.append('key', upper);
                formData.append('dept', this.dept);
                _axios2.default.post("Procurement/reimbursement/backend/circular_code.php", formData).then(function (response) {
                    if (response.data != 'empty') {
                        _this3.circular_list = response.data;
                        _this3.is_new_circular = false;
                        _this3.hv_circular = true;
                    } else {
                        _this3.is_new_circular = true;
                        _this3.hv_circular = false;
                        _this3.fund_max[event] = 9999999;
                    }
                });
            } else {
                this.hv_circular = false;
            }
        },
        addcircular_pdf: function addcircular_pdf(event) {
            var isPdf = true;
            var i = 0;
            var tmp_type = '';
            this.circular_pdf = this.$refs.circular_file.files[0];
            tmp_type = this.$refs.circular_file.files[i].type;
            if (tmp_type != 'application/pdf') {
                isPdf = false;
            }
            if (isPdf == true) {
                this.circular_pdf = this.$refs.circular_file.files[0];
            } else {
                this.$alert('Please upload pdf file(s) with extension (.pdf)');
                this.$refs.circular_file.value = '';
            }
        },
        dept_in: async function dept_in() {
            var _this4 = this;

            await _axios2.default.get('Procurement/shared_backend/user_department.php').then(function (response) {
                if (response.data != 'empty') {
                    _this4.dept_list_view = response.data;
                    _this4.dept_view = 'CCA';
                    _this4.head_view = true;
                } else {
                    _this4.head_view = false;
                }
            });
        },
        get_reimb: function get_reimb() {
            var _this5 = this;

            var formData = new FormData();
            formData.append('dept', this.dept_view);
            _axios2.default.post('Procurement/reimbursement/backend/req_reimb_record.php', formData).then(function (response) {
                if (response.data != '') {
                    _this5.req_reimb_data = response.data;
                } else {
                    _this5.req_reimb_data = [];
                }
            });
        },
        open_reimb: function open_reimb(id) {
            document.getElementById('tmp_id').value = id;
            this.$router.push('gen_req_reimb');
        },
        new_row: function new_row(event) {
            if (this.counter < 3) {
                this.counter = this.counter + 1;
            }
        },
        remove_row: function remove_row(event) {
            if (this.counter > 1) {
                this.counter = this.counter - 1;
            }
        },
        select_user: function select_user(event) {
            this.search_rec = event;
            this.hv_record = false;
            this.new_sup = false;
        },
        clr: function clr(event) {
            this.search_rec = '';
            this.hv_record = false;
        },
        cls_table: function cls_table() {
            this.hv_record = false;
        },
        cal_sum: function cal_sum() {},
        search_record: function search_record(event) {
            var _this6 = this;

            if (!(event.keyCode == 27)) {
                var formData = new FormData();
                formData.append('key', this.search_rec);
                if (this.rtype == 'staff') {
                    _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                        if (response.data == "Empty") {
                            _this6.hv_record = false;
                        } else {
                            _this6.recep_data = response.data;
                            _this6.recep_data.username = response.data.username;
                            _this6.recep_data.name = response.data.name;
                            _this6.hv_record = true;
                        }
                    });
                } else if (this.rtype == 'company') {
                    _axios2.default.post('Procurement/shared_backend/supplier_list.php', formData).then(function (response) {
                        if (response.data == "Empty") {
                            _this6.hv_record = false;
                            _this6.new_sup = false;
                        } else if (response.data == "new") {
                            _this6.new_sup = true;
                        } else {
                            _this6.recep_data = response.data;
                            _this6.recep_data.username = response.data.username;
                            _this6.recep_data.name = response.data.name;
                            _this6.hv_record = true;
                            _this6.new_sup = false;
                        }
                    });
                }
            }
        },
        addfile_pdf: function addfile_pdf(event) {
            var isPdf = true;
            var i = 0;
            var tmp_type = '';
            for (i = 0; i < this.$refs.pdf_file.files.length; i++) {
                tmp_type = this.$refs.pdf_file.files[i].type;
                if (tmp_type != 'application/pdf') {
                    isPdf = false;
                }
            }
            if (isPdf == true) {
                this.pdf = this.$refs.pdf_file.files;
            } else {
                this.$alert('Please upload pdf file(s) with extension (.pdf)');
                this.$refs.pdf_file.value = '';
            }
            //this.pdf = this.$refs.pdf_file.files;
        },
        empty_loc: function empty_loc(id) {
            this.loc[id] = '';
        },
        dp_alert: function dp_alert() {
            if (!this.proc_exc) {
                this.$alert('I confirm that this reimbursement (over $5000) does not require procurement');
            }
        },
        handleSubmit: async function handleSubmit(event) {
            var _this7 = this;

            var checksum = 0;
            var cap = 5000;
            if (this.proc_exc) {
                cap = 99999999;
            } else {
                cap = 5000;
            }
            var ck = 0;
            for (ck = 0; ck < this.counter; ck++) {
                checksum += parseFloat(this.amount[ck]);
            }
            if (cap > checksum) {
                var count_files = 0;
                var formData = new FormData();
                var i = 0;
                formData.append('dept', this.dept);
                formData.append('invoice', this.invoice);
                formData.append('counter', this.counter);
                formData.append('circular_pdf', this.circular_pdf);
                formData.append('req_type', this.reimb_type);
                formData.append('new_circular', this.is_new_circular);
                for (i = 0; i < this.counter; i++) {
                    formData.append('circular_max' + i, this.circular_val[i]);
                    formData.append('fundsrc' + i, this.fund[i]);
                    formData.append('bp' + i, this.bp[i]);
                    formData.append('asset_cat' + i, this.reimb_type);
                    formData.append('nature' + i, this.nature[i]);
                    formData.append('location' + i, this.loc[i]);
                    formData.append('reason' + i, this.reason[i]);
                    formData.append('amount' + i, this.amount[i]);
                }
                var i = 0;
                for (var i = 0; i < this.pdf.length; i++) {
                    var file = this.pdf[i];
                    formData.append('files' + i, file);
                    count_files = count_files + 1;
                }
                formData.append('r_type', this.rtype);
                formData.append('newsup', this.new_sup);
                formData.append('address', this.company_address);
                formData.append('contact', this.company_contact);
                formData.append('r_name', this.search_rec);
                formData.append('count_files', count_files);
                this.processing = true;
                await _axios2.default.post('Procurement/reimbursement/backend/req_reimb_2.php', formData).then(function (response) {
                    if (response.data != 'OK') {
                        _this7.$alert(response.data);
                    } else {
                        _this7.$alert('Successfully Submitted').then(function () {
                            _this7.processing = false;
                        });
                        _this7.show_form = false;
                        _this7.get_reimb();
                        if (_this7.head_view == false) {
                            _this7.$router.push('reimb_records');
                        }
                    }
                });
            } else {
                this.$confirm("Procurement is required for reimbursement over $5000, proceed to procurement ?").then(function () {
                    _this7.$router.push("../procurement/new_proc");
                });
            }
        }
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

/***/ }),

/***/ 1458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1459);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0fa939ef", content, true, {});

/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-0a7ffb64]{background-color:transparent;border-left:0}input[type=date][data-v-0a7ffb64]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}", ""]);

// exports


/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 flex"},[(_vm.show_form)?_c('div',{staticClass:"col-6"},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"15px 0 0 0"}},[_c('div',{staticClass:"row form-group col-12"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"CCA"}},[_vm._v("Co-curricular Activity Committee")]),_vm._v(" "),_c('option',{attrs:{"value":"PTA"}},[_vm._v("Partent-teacher Association")])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group col-12"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-7 flex"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.reimb_type),expression:"reimb_type"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.reimb_type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{domProps:{"value":'regular'}},[_vm._v("Regular Request")]),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular Reimbursement")])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group col-12"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-7 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.proc_exc),expression:"proc_exc"}],staticStyle:{"margin-top":"5px","margin-right":"10px"},attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.proc_exc)?_vm._i(_vm.proc_exc,null)>-1:(_vm.proc_exc)},on:{"click":function($event){return _vm.dp_alert()},"change":function($event){var $$a=_vm.proc_exc,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.proc_exc=$$a.concat([$$v]))}else{$$i>-1&&(_vm.proc_exc=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.proc_exc=$$c}}}}),_vm._v(" "),_vm._m(4)])]),_vm._v(" "),_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"15%"}}),_vm._v(" "),(_vm.counter>=1)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 1"),_c('div',{staticClass:"fa fa-plus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.new_row();_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 2"),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row();_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 3"),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row();_vm.cal_sum()}}})]):_vm._e()])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Nature")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[0]),expression:"nature[0]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[1]),expression:"nature[1]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[2]),expression:"nature[2]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Location")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc_type[0]),expression:"loc_type[0]"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc_type, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.empty_loc(0)}]}},[_c('option',[_vm._v("Internal")]),_vm._v(" "),_c('option',[_vm._v("External")]),_vm._v(" "),_c('option',[_vm._v("N/A")])]),_vm._v(" "),(_vm.loc_type[0]=='Internal')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[0]),expression:"loc[0]"}],staticClass:"form-control",staticStyle:{"margin-top":"0.55rem"},attrs:{"multiple":"","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.loc_list),function(loc){return _c('option',[_vm._v(_vm._s(loc.code))])}),0):_vm._e(),_vm._v(" "),(_vm.loc_type[0]=='External')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[0]),expression:"loc[0]"}],staticClass:"form-control",staticStyle:{"margin-top":"0.55rem"},attrs:{"required":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 0, $event.target.value)}}}):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc_type[1]),expression:"loc_type[1]"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc_type, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.empty_loc(1)}]}},[_c('option',[_vm._v("Internal")]),_vm._v(" "),_c('option',[_vm._v("External")]),_vm._v(" "),_c('option',[_vm._v("N/A")])]),_vm._v(" "),(_vm.loc_type[1]=='Internal')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[1]),expression:"loc[1]"}],staticClass:"form-control",staticStyle:{"margin-top":"0.55rem"},attrs:{"multiple":"","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.loc_list),function(loc){return _c('option',[_vm._v(_vm._s(loc.code))])}),0):_vm._e(),_vm._v(" "),(_vm.loc_type[1]=='External')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[1]),expression:"loc[1]"}],staticClass:"form-control",staticStyle:{"margin-top":"0.55rem"},attrs:{"required":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 1, $event.target.value)}}}):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc_type[2]),expression:"loc_type[2]"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc_type, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.empty_loc(2)}]}},[_c('option',[_vm._v("Internal")]),_vm._v(" "),_c('option',[_vm._v("External")]),_vm._v(" "),_c('option',[_vm._v("N/A")])]),_vm._v(" "),(_vm.loc_type[2]=='Internal')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[2]),expression:"loc[2]"}],staticClass:"form-control",staticStyle:{"margin-top":"0.55rem"},attrs:{"multiple":"","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.loc_list),function(loc){return _c('option',[_vm._v(_vm._s(loc.code))])}),0):_vm._e(),_vm._v(" "),(_vm.loc_type[2]=='External')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[2]),expression:"loc[2]"}],staticClass:"form-control",staticStyle:{"margin-top":"0.55rem"},attrs:{"required":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 2, $event.target.value)}}}):_vm._e()]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Reason for application")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[0]),expression:"reason[0]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[1]),expression:"reason[1]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[2]),expression:"reason[2]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),(_vm.reimb_type=='Circular')?_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular Code")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code"},domProps:{"value":(_vm.fund[0])},on:{"keyup":function($event){return _vm.check_circular(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[1]),expression:"fund[1]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code"},domProps:{"value":(_vm.fund[1])},on:{"keyup":function($event){return _vm.check_circular(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[2]),expression:"fund[2]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code"},domProps:{"value":(_vm.fund[2])},on:{"keyup":function($event){return _vm.check_circular(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 2, $event.target.value)}}})]):_vm._e()]):_vm._e(),_vm._v(" "),((_vm.is_new_circular==true)&&(_vm.reimb_type=='Circular'))?_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular Amount HK$")]),_vm._v(" "),(_vm.reimb_type=='Circular'&&_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[0]),expression:"circular_val[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","required":"","value":"0"},domProps:{"value":(_vm.circular_val[0])},on:{"change":function($event){return _vm.updateMaxFund(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.reimb_type=='Circular'&&_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[1]),expression:"circular_val[1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","required":"","value":"0"},domProps:{"value":(_vm.circular_val[1])},on:{"change":function($event){return _vm.updateMaxFund(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.reimb_type=='Circular'&&_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[2]),expression:"circular_val[2]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","required":"","value":"0"},domProps:{"value":(_vm.circular_val[2])},on:{"change":function($event){return _vm.updateMaxFund(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 2, $event.target.value)}}})]):_vm._e()]):_vm._e(),_vm._v(" "),((_vm.is_new_circular==true)&&(_vm.reimb_type=='Circular'))?_c('tr',{attrs:{"colspan":"100%"}},[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular (.pdf)")]),_vm._v(" "),_c('td',[_c('input',{ref:"circular_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","required":""},on:{"change":function($event){return _vm.addcircular_pdf()}}})])]):_vm._e(),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Amount HK$")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[0]),expression:"amount[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0/"},domProps:{"value":(_vm.amount[0])},on:{"change":function($event){return _vm.cal_sum(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[1]),expression:"amount[1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[1],"required":"","value":"0/"},domProps:{"value":(_vm.amount[1])},on:{"change":function($event){return _vm.cal_sum(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[2]),expression:"amount[2]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[2],"required":"","value":"0/"},domProps:{"value":(_vm.amount[2])},on:{"change":function($event){return _vm.cal_sum(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Support document (.pdf)")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{ref:"pdf_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","multiple":"","required":""},on:{"change":function($event){return _vm.addfile_pdf()}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice\\Receipt Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[(_vm.skip_invoice==false)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invoice),expression:"invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":_vm.skip_invoice==false},domProps:{"value":(_vm.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.invoice=$event.target.value}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.skip_invoice),expression:"skip_invoice"}],staticStyle:{"margin-top":"4px","margin-right":"8px"},attrs:{"type":"checkbox","value":"na"},domProps:{"checked":Array.isArray(_vm.skip_invoice)?_vm._i(_vm.skip_invoice,"na")>-1:(_vm.skip_invoice)},on:{"change":[function($event){var $$a=_vm.skip_invoice,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="na",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.skip_invoice=$$a.concat([$$v]))}else{$$i>-1&&(_vm.skip_invoice=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.skip_invoice=$$c}},function($event){return _vm.makeid(10)}]}}),_vm._v(" "),_c('label',{staticStyle:{"margin-top":"2px"}},[_vm._v("No invoice number available")])])])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-3"},[_vm._v("Recipient type :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"staff","required":""},domProps:{"checked":_vm._q(_vm.rtype,"staff")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="staff"}}}),_c('label',[_vm._v("Staff")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"1em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"company"},domProps:{"checked":_vm._q(_vm.rtype,"company")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="company"}}}),_c('label',[_vm._v("Company")])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(5),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_rec),expression:"search_rec"}],staticClass:"form-control input col-8",attrs:{"type":"text","required":""},domProps:{"value":(_vm.search_rec)},on:{"keyup":function($event){return _vm.search_record($event)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cls_table($event)},"input":function($event){if($event.target.composing){ return; }_vm.search_rec=$event.target.value}}})])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                ")]),_vm._v(" "),_vm._m(6)])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"50%","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_list,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,1258826261)}):_vm._e()],1),_vm._v(" "),(_vm.hv_circular)?_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"50%","top":"250px","box-shadow":"#888888"}},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.circular_headers,"items":_vm.circular_list,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_circular(props.item.fundsrc)}}},[_c('td',[_c('a',{attrs:{"href":"","id":props.item.fundsrc},on:{"click":function($event){$event.preventDefault();return _vm.select_circular(props.item.fundsrc)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.fundsrc))])])]}}],null,false,2249847454)})],1):_vm._e(),_vm._v(" "),(_vm.head_view)?_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"card"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"0 0 0 0"}},[_c('div',{staticClass:"flex col-12",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-9",staticStyle:{"padding-right":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept_view),expression:"dept_view"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept_view=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.get_reimb]}},_vm._l((_vm.dept_list_view),function(dep){return _c('option',{domProps:{"value":dep.deptmentid}},[_vm._v(_vm._s(dep.department))])}),0)])]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.req_reimb_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item.name)}}},[_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.open_reimb(props.item.tag)}}},[_vm._v("Reimbursement")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.tag))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.app_id))]),_vm._v(" "),_c('td',_vm._l((props.item.pdf_length),function(length){return _c('div',[_c('a',{attrs:{"href":props.item.support_doc_path[length-1],"target":"_blank"}},[_vm._v("• "+_vm._s(props.item.pdf_name[length-1]))])])}),0)])]}}],null,false,4283707369)})],1)])]):_vm._e()])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Request Reimbursement Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Request To :")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Request Type :")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Procurement Excluded :")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticStyle:{"font-size":"14px","margin-top":"1px"}},[_c('i',[_vm._v("On checking, this reimbursement can be submitted directly even the amount is over $5000")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',[_vm._v("Name of recipient :")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset","onclick":"document.getElementById('general_req_form').reset()"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n                ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Request Reimbursement Records")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3",staticStyle:{"padding-top":"0.35rem","padding-left":"0"}},[_c('label',[_vm._v("Select Department")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_req_reimb_vue__ = __webpack_require__(1223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_req_reimb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_req_reimb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_req_reimb_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_req_reimb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a7ffb64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_req_reimb_vue__ = __webpack_require__(1460);
function injectStyle (ssrContext) {
  __webpack_require__(1458)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a7ffb64"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_req_reimb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a7ffb64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_req_reimb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=59.build.js.map