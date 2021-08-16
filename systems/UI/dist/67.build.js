webpackJsonp([67],{

/***/ 1233:
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
            editdata: {
                id: '',
                balance: 0,
                amount: 0,
                date: '',
                pdf: '',
                pdf_path: '',
                pdf_name: '',
                invoice_no: '',
                hv_invoice: false,
                changed_pdf: false,
                record_tag: '',
                pdflist: []
            },
            open_editor: false,
            original_val: 0,
            original_pdf: '',
            new_pdf: false,
            skip_invoice: false,
            processing: false,
            show_form: true,
            record_list: [],
            spent: 0.00,
            maxval: 0.00,
            st: '',
            ed: '',
            invoice: '',
            check_num: true,
            sum: 0,
            cat: 'Medical Allowance',
            amount: 0,
            pwd: '',
            ready: false,
            sign_data: [],
            fund_max: 0.00,
            counter: 1,
            pdf: '',
            level: 0,
            message: '',
            user_check: '',
            signed: false,
            headers: [{ text: 'Action', value: 'reimb_tag', sortable: false }, { text: 'Tag', value: 'tag', sortable: false }, { text: 'Amount', value: 'total', sortable: false }, { text: 'Date', value: 'app_date', sortable: true }, { text: 'Form', value: 'reimb_tag', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        await _axios2.default.get('../permission.php').then(function (response) {
            _this.level = response.data[0].proc_level;
        });
        await _axios2.default.get('Procurement/admin/backend/med_period.php').then(function (response) {
            _this.st = response.data.st;
            _this.ed = response.data.ed;
        });
        await _axios2.default.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
        });
        await _axios2.default.get('../user_info.php').then(function (response) {
            _this.applicant = response.data[1];
        });
        await this.fetchdata();
        this.ready = true;
        //asset category of department   
    },
    mounted: async function mounted() {
        window.removeEventListener('focus', console.log('Lost Focus'));
        //asset category of department   
    },

    methods: {
        close_overlay: function close_overlay() {
            this.open_editor = false;
        },
        open_edit: async function open_edit(id, tag) {
            this.editdata.record_tag = tag;
            this.editdata.id = id;
            this.editdata.changed_pdf = false;
            await this.fetch_med_bal(id);
            await this.fetch_med_data(id);
            this.open_editor = true;
        },
        fetch_med_data: function fetch_med_data(id) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('rid', id);
            _axios2.default.post("Procurement/reimbursement/backend/med_data.php", formData).then(function (response) {
                _this2.editdata.date = response.data[0].date_app;
                _this2.editdata.amount = response.data[0].amount;
                _this2.editdata.pdflist = response.data[0].pdf;
            });
        },
        update_med_form: function update_med_form() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('tag', this.editdata.record_tag);
            formData.append('rid', this.editdata.id);
            formData.append('amount', this.editdata.amount);
            formData.append('new_pdf', this.editdata.changed_pdf);
            formData.append('count_files', this.editdata.pdf.length);
            formData.append('invoice', this.editdata.invoice_no);
            for (var i = 0; i < this.editdata.pdf.length; i++) {
                var file = this.editdata.pdf[i];
                formData.append('files' + i, file);
            }
            _axios2.default.post("Procurement/reimbursement/backend/update_med_record.php", formData).then(function (response) {
                _this3.$alert("Successfully Updated Medical Reimbursement Record").then(async function () {
                    await _this3.fetchdata();
                    _this3.open_editor = false;
                });
            });
        },
        fetchdata: async function fetchdata() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await _axios2.default.post('Procurement/reimbursement/backend/med_record.php', formData).then(function (response) {
                _this4.record_list = response.data;
            });
            await _axios2.default.get('Procurement/reimbursement/backend/fetch_med_bal.php').then(function (response) {
                _this4.maxval = response.data[0].max;
                _this4.spent = response.data[0].spent;
                _this4.fund_max = Number(response.data[0].max) - Number(response.data[0].spent);
            });
        },
        fetch_med_bal: function fetch_med_bal(id) {
            var _this5 = this;

            var formData = new FormData();
            formData.append('id', id);
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            formData.append('maxval', this.maxval);
            _axios2.default.post('Procurement/reimbursement/backend/med_av_bal.php', formData).then(function (response) {
                _this5.editdata.balance = response.data;
            });
        },
        cancel_reimb: function cancel_reimb(id) {
            var _this6 = this;

            this.$confirm("Confirm cancel reimbursement record ?").then(function () {
                var formData = new FormData();
                formData.append('rid', id);
                _axios2.default.post("Procurement/reimbursement/backend/cancel_med.php", formData).then(function (response) {
                    _this6.fetchdata();
                });
            });
        },
        makeid: function makeid(length) {
            if (this.skip_invoice == true) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                this.invoice = result;
            } else {
                this.invoice = '';
            }
            if (this.open_editor == true && this.editdata.hv_invoice == true) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                this.editdata.invoice_no = result;
            } else {
                this.editdata.invoice_no = '';
            }
        },
        addfile_pdf: function addfile_pdf(event) {
            this.pdf = this.$refs.pdf_file.files;
        },
        new_addfile_pdf: function new_addfile_pdf(event) {
            this.editdata.pdf = this.$refs.new_pdf_file.files;
            if (this.editdata.pdf != '') {
                this.editdata.changed_pdf = true;
            } else {
                this.editdata.changed_pdf = false;
            }
            console.log(this.editdata.pdf.length);
        },
        new_list: async function new_list() {
            var _this7 = this;

            this.ready = false;
            var formData = new FormData();
            formData.append('st', this.st);
            formData.append('ed', this.ed);
            await _axios2.default.post('Procurement/reimbursement/backend/med_record.php', formData).then(function (response) {
                _this7.record_list = response.data;
            });
            await _axios2.default.get('Procurement/reimbursement/backend/fetch_med_bal.php').then(function (response) {
                _this7.maxval = response.data[0].max;
                _this7.spent = response.data[0].spent;
                _this7.fund_max = Number(response.data[0].max) - Number(response.data[0].spent);
            });
            this.ready = true;
        },
        post_ssc: function post_ssc() {
            var _this8 = this;

            var formData = new FormData();
            formData.append('pwd', this.pwd);
            _axios2.default.post('Procurement/reimbursement/backend/check_sign.php', formData).then(function (response) {
                if (response.data[0].signature == undefined) {
                    _this8.$alert(response.data);
                    //this.message = response.data;
                } else {
                    _this8.sign_data = response.data[0].signature;
                    _this8.signed = true;
                    _this8.message = '';
                }
            });
            this.$forceUpdate();
        },
        open_reimb: function open_reimb(tag) {
            var url = 'src/Procurement/reimbursement/backend/view_form_app.php?tag=' + tag + '&st=' + this.st + '&ed=' + this.ed;
            window.open(url);
        },
        handleSubmit: async function handleSubmit(event) {
            var _this9 = this;

            if (this.signed == true) {
                this.processing = true;
                var formData = new FormData();
                var i = 0;
                var count_files = 0;
                formData.append('applicant', this.applicant);
                formData.append('invoice', this.invoice);
                formData.append('dept', 'Medical');
                //counter loop
                formData.append('asset_cat' + i, this.cat);
                formData.append('amount', this.amount);
                for (var i = 0; i < this.pdf.length; i++) {
                    var file = this.pdf[i];
                    formData.append('files' + i, file);
                    count_files = count_files + 1;
                }
                formData.append('count_files', count_files);
                //counter loop
                formData.append('total', this.amount);
                formData.append('r_type', 'staff');
                formData.append('r_name', this.applicant);
                formData.append('sign_stat', "true");
                formData.append('counter', this.counter);
                await _axios2.default.post('Procurement/reimbursement/backend/insert_reimb_med.php', formData).then(function (response) {
                    if (response.data == "OK") {
                        _this9.$alert('Successfully submitted record').then(function () {
                            _this9.processing = false;
                            _this9.$router.push('my_reimb_records');
                        });
                        _this9.show_form = false;
                        _this9.new_list();
                    } else {
                        _this9.$alert(response.data);
                    }
                });
            } else if (this.signed == false) {
                this.$alert('Please Sign the form !');
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

/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1489);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("30111b5c", content, true, {});

/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-3f456085]{background-color:transparent;border-left:0}input[type=date][data-v-3f456085]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.signature[data-v-3f456085]{border-bottom:1px solid #000;height:5rem}.bottom[data-v-3f456085]{vertical-align:bottom}.td_dp[data-v-3f456085]{width:35%;font-size:1.75em!important;padding-left:1.5em;padding-top:.8em}.cus_btn:hover>.white_text[data-v-3f456085]{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 flex"},[(_vm.show_form)?_c('div',{staticClass:"col-7"},[_c('div',[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant),expression:"applicant"}],staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":(_vm.applicant)},on:{"input":function($event){if($event.target.composing){ return; }_vm.applicant=$event.target.value}}})])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"row form-group",staticStyle:{"margin-left":"-1.26em","margin-right":"-1.26em"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_vm._m(3),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Category")]),_vm._v(" "),_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat),expression:"cat"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.cat)},on:{"input":function($event){if($event.target.composing){ return; }_vm.cat=$event.target.value}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Amount HK$")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount),expression:"amount"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max,"required":""},domProps:{"value":(_vm.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.amount=$event.target.value}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice\\Receipt (.pdf)")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{ref:"pdf_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","multiple":"","required":""},on:{"change":function($event){return _vm.addfile_pdf()}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice\\Receipt Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[(_vm.skip_invoice==false)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invoice),expression:"invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":_vm.skip_invoice==false},domProps:{"value":(_vm.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.invoice=$event.target.value}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.skip_invoice),expression:"skip_invoice"}],staticStyle:{"margin-top":"4px","margin-right":"8px"},attrs:{"type":"checkbox","value":"na"},domProps:{"checked":Array.isArray(_vm.skip_invoice)?_vm._i(_vm.skip_invoice,"na")>-1:(_vm.skip_invoice)},on:{"change":[function($event){var $$a=_vm.skip_invoice,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="na",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.skip_invoice=$$a.concat([$$v]))}else{$$i>-1&&(_vm.skip_invoice=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.skip_invoice=$$c}},function($event){return _vm.makeid(10)}]}}),_vm._v(" "),_c('label',{staticStyle:{"margin-top":"2px"}},[_vm._v("No invoice number available")])])])]),_vm._v(" "),_c('tr',[_c('td',{class:[{'bottom':_vm.signed}],staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Security Code :")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[(!_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control",staticStyle:{"width":"30%"},attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control",staticStyle:{"width":"20%"},attrs:{"type":"button"},on:{"click":_vm.post_ssc}},[_vm._v("Sign now !")])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('img',{staticClass:"signature",attrs:{"src":_vm.sign_data}})]):_vm._e()])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-left":"auto","margin-top":"1em","margin-right":"1em"}},[_c('b',[_vm._v("Total Amount in HK$: "+_vm._s(_vm.amount))])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                    ")])])])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"card"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"1rem"}},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Start Period")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.st),expression:"st"}],staticClass:"form-control",attrs:{"type":"month","readonly":""},domProps:{"value":(_vm.st)},on:{"input":function($event){if($event.target.composing){ return; }_vm.st=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("End Period")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ed),expression:"ed"}],staticClass:"form-control",attrs:{"type":"month","readonly":""},domProps:{"value":(_vm.ed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ed=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Total Allowance\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.maxval),expression:"maxval"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.maxval)},on:{"input":function($event){if($event.target.composing){ return; }_vm.maxval=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Spent\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.spent),expression:"spent"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.spent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.spent=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[_c('div',{staticClass:"col-4"},[_vm._v("\n                                Balance\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund_max),expression:"fund_max"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.fund_max)},on:{"input":function($event){if($event.target.composing){ return; }_vm.fund_max=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.record_list,"disable-initial-sort":"","rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',[_c('td',[_c('u',{staticStyle:{"cursor":"pointer"},attrs:{"id":props.item.tag},on:{"click":function($event){return _vm.open_edit(props.item.id,props.item.tag)}}},[_vm._v("Edit")]),_c('br'),_vm._v(" "),_c('u',{staticStyle:{"cursor":"pointer"},attrs:{"id":props.item.tag},on:{"click":function($event){return _vm.cancel_reimb(props.item.id)}}},[_vm._v("Cancel")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.tag))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.amount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.date_app))]),_vm._v(" "),_c('td',[_c('u',{staticStyle:{"cursor":"pointer"},attrs:{"id":props.item.tag},on:{"click":function($event){return _vm.open_reimb(props.item.tag)}}},[_vm._v("View")])])])]}}],null,false,1744770319)})],1)]),_vm._v(" "),(_vm.open_editor)?_c('div',{staticClass:"black_overlay"}):_vm._e(),_vm._v(" "),(_vm.open_editor)?_c('div',{staticClass:"center_card"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.update_med_form($event)}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Medical Reimbursement : "+_vm._s(_vm.editdata.record_tag))])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('table',{staticClass:"table table-striped first-td-padding"},[_c('tbody',[_c('tr',[_c('td',{staticClass:"td_dp"},[_vm._v("Date")]),_vm._v(" "),_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.date),expression:"editdata.date"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.editdata.date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "date", $event.target.value)}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"td_dp"},[_vm._v("Amount HK$")]),_vm._v(" "),_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.amount),expression:"editdata.amount"}],staticClass:"form-control",attrs:{"type":"number","max":_vm.editdata.balance,"required":""},domProps:{"value":(_vm.editdata.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "amount", $event.target.value)}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"td_dp"},[_vm._v("Invoice\\Receipt (.pdf)")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_vm._l((_vm.editdata.pdflist.length),function(l){return _c('div',[_c('u',[_c('a',{staticClass:"white_text",attrs:{"href":_vm.editdata.pdflist[l-1].pdf_path,"target":"_blank"}},[_vm._v(_vm._s(_vm.editdata.pdflist[l-1].pdf_name))])])])}),_vm._v(" "),_c('label',{staticClass:"form-control cus_btn mb0",attrs:{"for":"newpdf"}},[_vm._v("Update File")]),_vm._v(" "),_c('input',{ref:"new_pdf_file",staticClass:"hidden_btn",attrs:{"id":"newpdf","type":"file","accept":"application/pdf","multiple":""},on:{"change":function($event){return _vm.new_addfile_pdf()}}})],2)]),_vm._v(" "),(_vm.editdata.changed_pdf)?_c('tr',[_c('td',{staticClass:"td_dp"},[_vm._v("Invoice\\Receipt Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[(_vm.editdata.hv_invoice==false)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.invoice_no),expression:"editdata.invoice_no"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":_vm.skip_invoice==false},domProps:{"value":(_vm.editdata.invoice_no)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "invoice_no", $event.target.value)}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.hv_invoice),expression:"editdata.hv_invoice"}],staticStyle:{"margin-top":"4px","margin-right":"8px"},attrs:{"type":"checkbox","value":"na"},domProps:{"checked":Array.isArray(_vm.editdata.hv_invoice)?_vm._i(_vm.editdata.hv_invoice,"na")>-1:(_vm.editdata.hv_invoice)},on:{"change":[function($event){var $$a=_vm.editdata.hv_invoice,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="na",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.editdata, "hv_invoice", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.editdata, "hv_invoice", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.editdata, "hv_invoice", $$c)}},function($event){return _vm.makeid(10)}]}}),_vm._v(" "),_c('label',{staticStyle:{"margin-top":"2px"}},[_vm._v("No invoice number available")])])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                    ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.close_overlay}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n                    ")])])])])]):_vm._e()])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Reimbursement Form for Medical Allowance")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"font-size":"0.85em","color":"rgba(0,0,0,0.7)"}},[_vm._v("Description of Goods Purchased / Services Delivered:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"15%"}}),_vm._v(" "),_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 1")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Medical Allowance Info.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_reimb_vue__ = __webpack_require__(1233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_reimb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_reimb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_reimb_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_reimb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f456085_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_med_reimb_vue__ = __webpack_require__(1490);
function injectStyle (ssrContext) {
  __webpack_require__(1488)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f456085"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_med_reimb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f456085_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_med_reimb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=67.build.js.map