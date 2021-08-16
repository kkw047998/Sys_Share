webpackJsonp([68],{

/***/ 1234:
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
        var tmr = document.getElementById('tmr_date').value;
        return {
            is_new_circular: false,
            checking: 0,
            circular_val: [0, 0, 0],
            circular_list: [],
            hv_circular: false,
            data_list: [],
            processing: false,
            proc_id: '',
            period: '',
            loc_type: ['Internal', 'Internal', 'Internal'],
            req_tag: '',
            invoice: '',
            dept_list: [],
            sub_dept_list: [],
            asset_list: [],
            fund_list: [],
            check_num: true,
            //table
            sum: 0,
            cat: [],
            nature: [],
            loc: [],
            reason: [],
            bp: [],
            bp_tag: [],
            fund: [],
            amount: [0, 0, 0],
            pwd: '',
            ready: false,
            new_sup: false,
            company_address: '',
            company_contact: '',
            //table
            //sign
            sign_data: [],
            fund_cost: [],
            loc_list: [],
            bp_list: [],
            bp_list_0: [],
            bp_list_1: [],
            bp_list_2: [],
            fund_list_0: [],
            fund_list_1: [],
            fund_list_2: [],
            cat_list: [],
            recep_data: [],
            fund_max: [],
            fund_max_ini: [],
            counter: 1,
            applicant_sec: '',
            hv_record_sec: false,
            pdf: '',
            level: 0,
            message: '',
            user_check: '',
            signed: false,
            rtype: '',
            search_rec: '',
            hv_record: false,
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        await _axios2.default.get('../permission.php').then(function (response) {
            _this.level = response.data[0].proc_level;
        });
        await _axios2.default.get('Procurement/shared_backend/check_user_setup.php').then(function (response) {
            _this.user_check = response.data[0].signed;
            if (!(_this.user_check == 'set')) {
                _this.$router.push('../user_setup');
            }
        });
        await _axios2.default.get('Procurement/department/backend/dept_member.php').then(function (response) {
            _this.dept_list = response.data;
        });
        await _axios2.default.get('../user_info.php').then(function (response) {
            _this.applicant = response.data[1];
        });
        await _axios2.default.get('Procurement/shared_backend/location.php').then(function (response) {
            _this.loc_list = response.data;
        });
        await this.fetch_req_info();
        var formData = new FormData();
        formData.append('dept', this.dept);
        await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
            _this.cat_list = response.data;
            var i = 0;
            for (i = 0; i < 3; i++) {
                _this.cat[i] = _this.cat_list[0].name;
            }
        });
        formData.append('cat', this.cat[0]);
        await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
            _this.bp_list_0 = response.data;
            _this.fund[0] = _this.bp_list_0[0].fundsrc;
            _this.bp_list_1 = response.data;
            _this.fund[1] = _this.bp_list_1[0].fundsrc;
            _this.bp_list_2 = response.data;
            _this.fund[2] = _this.bp_list_2[0].fundsrc;
            _this.bp[0] = _this.bp_list_0[0].description;
            _this.bp_tag[0] = _this.bp_list_0[0].tag;
            _this.bp[1] = _this.bp_list_1[0].description;
            _this.bp_tag[1] = _this.bp_list_1[0].tag;
            _this.bp[2] = _this.bp_list_2[0].description;
            _this.bp_tag[2] = _this.bp_list_2[0].tag;
        });
        formData.append('bp', this.bp[0]);
        await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
            _this.fund_list_0 = response.data;
            _this.fund_list_1 = response.data;
            _this.fund_list_2 = response.data;

            _this.fund_max[0] = parseFloat(_this.fund_list_0[0].cost_total) - parseFloat(_this.fund_list_0[0].expense);
            _this.fund_max_ini[0] = _this.fund_max[0];

            _this.fund_max[1] = parseFloat(_this.fund_list_1[0].cost_total) - parseFloat(_this.fund_list_1[0].expense);
            _this.fund_max_ini[1] = _this.fund_max[1];

            _this.fund_max[2] = parseFloat(_this.fund_list_2[0].cost_total) - parseFloat(_this.fund_list_2[0].expense);
            _this.fund_max_ini[2] = _this.fund_max[2];
        });
        this.fetch_check_circular();
        this.ready = true;
        //asset category of department   
    },
    mounted: async function mounted() {
        //asset category of department   

    },

    methods: {
        check_circular: function check_circular(event) {
            var _this2 = this;

            var key = this.bp[event];
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
                        _this2.circular_list = response.data;
                        _this2.is_new_circular = false;
                        _this2.hv_circular = true;
                    } else {
                        _this2.is_new_circular = true;
                        _this2.hv_circular = false;
                    }
                });
            }
        },
        fetch_check_circular: function fetch_check_circular() {
            var i = 0;
            for (i = 0; i < this.data_list.length; i++) {
                if (this.data_list[i].asset_cat == 'Circular') {
                    this.cat[i] = 'Circular';
                    this.bp[i] = this.data_list[i].budget_src;
                    this.fund[i] = this.data_list[i].fundsrc;
                }
            }
        },
        reject_req: async function reject_req() {
            var _this3 = this;

            var msg = "Confirm Rejecting Reimbursement Request : " + this.req_tag + "?";
            this.$confirm(msg).then(async function () {
                var formData = new FormData();
                formData.append('tag', _this3.req_tag);
                formData.append('period', _this3.period);
                await _axios2.default.post('Procurement/reimbursement/backend/cancel_req.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this3.$router.push('req_reimb');
                    }
                });
            });
        },
        fetch_req_info: async function fetch_req_info() {
            var _this4 = this;

            var tag = document.getElementById('tmp_id').value;
            var formData = new FormData();
            this.req_tag = tag;
            formData.append('tag', tag);
            await _axios2.default.post('Procurement/reimbursement/backend/fetch_req_info.php', formData).then(function (response) {
                _this4.counter = response.data.length;
                _this4.data_list = response.data;
                var i = 0;
                for (i = 0; i < _this4.counter; i++) {
                    _this4.proc_id = response.data[0].proc_id;
                    _this4.nature[i] = response.data[i].nature;
                    var loc_tmp = response.data[i].location;
                    loc_tmp = loc_tmp.split(',');
                    _this4.loc[i] = loc_tmp;
                    _this4.invoice = response.data[0].invoice_num;
                    _this4.amount[i] = response.data[i].amount;
                    _this4.rtype = response.data[0].receiver_type;
                    _this4.search_rec = response.data[0].receiver_name;
                    _this4.reason[i] = response.data[i].reason;
                    _this4.applicant = response.data[0].app_id;
                    _this4.period = response.data[0].period;
                }
                _this4.dept = response.data[0].dept_full;
            });
            var i = 0;
            this.sum = 0;
            for (i = 0; i < this.counter; i++) {
                this.sum = Number(this.sum) + Number(this.amount[i]);
            }
        },
        load_supdept: function load_supdept(event) {
            var _this5 = this;

            var formData = new FormData();
            formData.append('dept', this.budget.dept);
            _axios2.default.post('Procurement/budget/backend/subdept.php', formData).then(function (response) {
                _this5.sub_dept_list = response.data;
                if (_this5.sub_dept_list == '') {
                    _this5.display_sub = false;
                } else {
                    _this5.budget.sub = _this5.sub_dept_list[0].subdept_full;
                    _this5.display_sub = true;
                }
            });
            _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this5.asset_list = response.data;
                _this5.budget.cat = _this5.asset_list[0].name;
            });
            _axios2.default.post('Procurement/budget/backend/fund.php', formData).then(function (response) {
                _this5.fund_list = response.data;
                _this5.budget.fund[0] = _this5.fund_list[0].name;
            });
        },
        load_info: async function load_info(event) {
            var _this6 = this;

            //change dept update all
            var formData = new FormData();
            formData.append('dept', this.dept);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this6.cat_list = response.data;
                var i = 0;
                for (i = 0; i < 3; i++) {
                    _this6.cat[i] = _this6.cat_list[0].name;
                }
            });
            formData.append('cat', this.cat[0]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this6.bp_list_0 = response.data;
                _this6.bp_list_1 = response.data;
                _this6.bp_list_2 = response.data;
                _this6.bp[0] = _this6.bp_list_0[0].description;
                _this6.bp_tag[0] = _this6.bp_list_0[0].tag;
                _this6.bp[1] = _this6.bp_list_1[0].description;
                _this6.bp_tag[1] = _this6.bp_list_1[0].tag;
                _this6.bp[2] = _this6.bp_list_2[0].description;
                _this6.bp_tag[2] = _this6.bp_list_2[0].tag;
            });
            formData.append('bp', this.bp[0]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this6.fund_list_0 = response.data;
                _this6.fund_list_1 = response.data;
                _this6.fund_list_2 = response.data;
                _this6.fund[0] = _this6.fund_list_0[0].fundsrc;
                _this6.fund_max[0] = parseFloat(_this6.fund_list_0[0].cost_total) - parseFloat(_this6.fund_list_0[0].expense);
                _this6.fund_max_ini[0] = _this6.fund_max[0];
                _this6.fund[1] = _this6.fund_list_1[0].fundsrc;
                _this6.fund_max[1] = parseFloat(_this6.fund_list_1[0].cost_total) - parseFloat(_this6.fund_list_1[0].expense);
                _this6.fund_max_ini[1] = _this6.fund_max[1];
                _this6.fund[2] = _this6.fund_list_2[0].fundsrc;
                _this6.fund_max[2] = parseFloat(_this6.fund_list_2[0].cost_total) - parseFloat(_this6.fund_list_2[0].expense);
                _this6.fund_max_ini[2] = _this6.fund_max[2];
            });
        },
        empty_loc: function empty_loc(id) {
            this.loc[id] = '';
        },
        load_bp: function load_bp(event) {
            var _this7 = this;

            var target = '';
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('cat', this.cat[event]);
            _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                if (response.data != '') {
                    if (event == 0) {
                        _this7.bp_list_0 = response.data;
                        _this7.fund_list_0 = response.data;
                        _this7.bp[0] = _this7.bp_list_0[0].description;
                        _this7.bp_tag[0] = _this7.bp_list_0[0].tag;
                        _this7.fund[0] = _this7.fund_list_0[0].fundsrc;
                        _this7.fund_max[0] = parseFloat(_this7.bp_list_0[0].cost_total) - parseFloat(_this7.bp_list_0[0].expense);
                        _this7.fund_max_ini[0] = _this7.fund_max[0];
                    } else if (event == 1) {
                        _this7.bp_list_1 = response.data;
                        _this7.fund_list_1 = response.data;
                        _this7.bp[1] = _this7.bp_list_1[0].description;
                        _this7.bp_tag[1] = _this7.bp_list_1[0].tag;
                        _this7.fund[1] = _this7.fund_list_1[0].fundsrc;
                        _this7.fund_max[1] = parseFloat(_this7.bp_list_1[0].cost_total) - parseFloat(_this7.bp_list_1[0].expense);
                        _this7.fund_max_ini[1] = _this7.fund_max[1];
                    } else if (event == 2) {
                        _this7.bp_list_2 = response.data;
                        _this7.fund_list_2 = response.data;
                        _this7.bp[2] = _this7.bp_list_2[0].description;
                        _this7.bp_tag[2] = _this7.bp_list_2[0].tag;
                        _this7.fund[2] = _this7.fund_list_2[0].fundsrc;
                        _this7.fund_max[2] = parseFloat(_this7.bp_list_2[0].cost_total) - parseFloat(_this7.bp_list_2[0].expense);
                        _this7.fund_max_ini[2] = _this7.fund_max[2];
                    };
                    _this7.new_bp(event);
                } else {
                    _this7.fund[event] = '';
                    _this7.bp[event] = '';
                }
            });
        },
        post_ssc: function post_ssc(event) {
            var _this8 = this;

            var formData = new FormData();
            formData.append('pwd', this.pwd);
            _axios2.default.post('Procurement/reimbursement/backend/check_sign.php', formData).then(function (response) {
                _this8.sign_data = response.data;
                if (response.data[0].signature == undefined) {
                    _this8.message = response.data;
                } else {
                    _this8.signed = true;
                    _this8.message = '';
                }
            });
        },
        cal_num: function cal_num(event) {
            this.total = this.unit_cost * this.quantity;
            if (isNaN(this.total)) {
                this.total = '...';
                this.check_num = false;
            }
            this.fund_cost[0] = this.total;
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
        submit_form: function submit_form(event) {},
        select_user: function select_user(event) {
            this.search_rec = event;
            this.hv_record = false;
            this.new_sup = false;
        },
        select_user_sec: function select_user_sec(event) {
            this.applicant_sec = event;
            this.hv_record_sec = false;
        },
        search_record_sec: function search_record_sec(event) {
            var _this9 = this;

            var formData = new FormData();
            formData.append('key', this.applicant_sec);
            _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this9.hv_record_sec = false;
                } else {
                    _this9.recep_data = response.data;
                    _this9.hv_record_sec = true;
                }
            });
        },
        search_record: function search_record(event) {
            var _this10 = this;

            if (!(event.keyCode == 27)) {
                var formData = new FormData();
                formData.append('key', this.search_rec);
                if (this.rtype == 'staff') {
                    _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                        if (response.data == "Empty") {
                            _this10.hv_record = false;
                        } else {
                            _this10.recep_data = response.data;
                            _this10.recep_data.username = response.data.username;
                            _this10.recep_data.name = response.data.name;
                            _this10.hv_record = true;
                        }
                    });
                } else if (this.rtype == 'company') {
                    _axios2.default.post('Procurement/shared_backend/supplier_list.php', formData).then(function (response) {
                        if (response.data == "Empty") {
                            _this10.hv_record = false;
                            _this10.new_sup = false;
                        } else if (response.data == "new") {
                            _this10.new_sup = true;
                        } else {
                            _this10.recep_data = response.data;
                            _this10.recep_data.username = response.data.username;
                            _this10.recep_data.name = response.data.name;
                            _this10.hv_record = true;
                            _this10.new_sup = false;
                        }
                    });
                }
            }
        },
        cls_table: function cls_table() {
            this.hv_record = false;
        },
        clr: function clr(event) {
            this.search_rec = '';
            this.hv_record = false;
        },
        addfile_pdf: function addfile_pdf(event) {
            this.pdf = this.$refs.pdf_file.files;
        },
        cal_sum: function cal_sum(event) {
            if (this.amount[event] == '') {
                this.amount[event] = 0;
            };
            // 0 case
            if (event == 0) {
                if (this.cat[0] == this.cat[1] && this.bp[0] == this.bp[1] && this.fund[0] == this.fund[1]) {
                    this.fund_max[1] = parseFloat(this.fund_max_ini[0]);
                    this.fund_max[1] = parseFloat(this.fund_max[1]) - parseFloat(this.amount[0]) - parseFloat(this.amount[2]);
                }
                if (this.cat[0] == this.cat[2] && this.bp[0] == this.bp[2] && this.fund[0] == this.fund[2]) {
                    this.fund_max[2] = parseFloat(this.fund_max_ini[0]);
                    this.fund_max[2] = parseFloat(this.fund_max[2]) - parseFloat(this.amount[0]) - parseFloat(this.amount[1]);
                }
            } else if (event == 1) {
                if (this.cat[1] == this.cat[0] && this.bp[1] == this.bp[0] && this.fund[1] == this.fund[0]) {
                    this.fund_max[0] = parseFloat(this.fund_max_ini[1]);
                    this.fund_max[0] = parseFloat(this.fund_max[0]) - parseFloat(this.amount[1]) - parseFloat(this.amount[2]);
                }
                if (this.cat[1] == this.cat[2] && this.bp[1] == this.bp[2] && this.fund[1] == this.fund[2]) {
                    this.fund_max[2] = parseFloat(this.fund_max_ini[1]);
                    this.fund_max[2] = parseFloat(this.fund_max[2]) - parseFloat(this.amount[1]) - parseFloat(this.amount[0]);
                }
            } else if (event == 2) {
                if (this.cat[2] == this.cat[0] && this.bp[2] == this.bp[0] && this.fund[2] == this.fund[0]) {
                    this.fund_max[0] = parseFloat(this.fund_max_ini[2]);
                    this.fund_max[0] = parseFloat(this.fund_max[0]) - parseFloat(this.amount[2]) - parseFloat(this.amount[1]);
                }
                if (this.cat[2] == this.cat[1] && this.bp[2] == this.bp[1] && this.fund[2] == this.fund[1]) {
                    this.fund_max[1] = parseFloat(this.fund_max_ini[2]);
                    this.fund_max[1] = parseFloat(this.fund_max[1]) - parseFloat(this.amount[2]) - parseFloat(this.amount[0]);
                }
            }

            //update max for same src
            var i = 0;
            this.sum = 0;
            for (i = 0; i < this.counter; i++) {
                this.sum = Number(this.sum) + Number(this.amount[i]);
            };
        },
        new_bp: function new_bp(event) {
            var _this11 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('cat', this.cat[event]);
            formData.append('bp', this.bp[event]);
            _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                if (event == 0) {
                    _this11.fund_list_0 = response.data;
                    _this11.fund[0] = _this11.fund_list_0[0].fundsrc;
                    _this11.fund_max[0] = parseFloat(_this11.fund_list_0[0].cost_total) - parseFloat(_this11.fund_list_0[0].expense);
                    _this11.fund_max_ini[0] = _this11.fund_max[0];
                } else if (event == 1) {
                    _this11.fund_list_1 = response.data;
                    _this11.fund[1] = _this11.fund_list_1[0].fundsrc;
                    _this11.fund_max[1] = parseFloat(_this11.fund_list_1[0].cost_total) - parseFloat(_this11.fund_list_1[0].expense);
                    _this11.fund_max_ini[1] = _this11.fund_max[1];
                } else if (event == 2) {
                    _this11.fund_list_2 = response.data;
                    _this11.fund[2] = _this11.fund_list_2[0].fundsrc;
                    _this11.fund_max[2] = parseFloat(_this11.fund_list_2[0].cost_total) - parseFloat(_this11.fund_list_2[0].expense);
                    _this11.fund_max_ini[2] = _this11.fund_max[2];
                }
            });
        },
        handleSubmit: async function handleSubmit(event) {
            var _this12 = this;

            //if(!(this.sum>5000)){
            //if(this.signed==false){
            this.processing = true;
            var formData = new FormData();
            var i = 0;
            var count_files = 0;
            if (this.proc_id != '') {
                formData.append('proc_id', this.proc_id);
            }
            formData.append('req_tag', this.req_tag);
            formData.append('applicant', this.applicant);
            formData.append('invoice', this.invoice);
            formData.append('dept', this.dept);
            //counter loop
            for (i = 0; i < this.counter; i++) {
                formData.append('asset_cat' + i, this.cat[i]);
                formData.append('nature' + i, this.nature[i]);
                formData.append('location' + i, this.loc[i]);
                formData.append('reason' + i, this.reason[i]);
                formData.append('bp' + i, this.bp[i]);
                formData.append('fundsrc' + i, this.fund[i]);
                formData.append('amount' + i, this.amount[i]);
            }
            for (var i = 0; i < this.pdf.length; i++) {
                var file = this.pdf[i];
                formData.append('files' + i, file);
                count_files = count_files + 1;
            }
            formData.append('count_files', count_files);
            //counter loop
            formData.append('total', this.sum);
            formData.append('r_type', this.rtype);
            formData.append('r_name', this.search_rec);
            formData.append('sign_stat', "false");
            formData.append('counter', this.counter);
            await _axios2.default.post('Procurement/reimbursement/backend/req_reimb.php', formData).then(function (response) {
                _this12.$alert('Successfully submitted record').then(function () {
                    _this12.processing = false;
                });
                _this12.$router.push('req_reimb');
            });
            //} 
            /*
            } else {
            this.$alert('As Cost is over 5000, procurement is required !');
            }
            */
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

/***/ }),

/***/ 1491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1492);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("79bda9c2", content, true, {});

/***/ }),

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-2f3daf01]{background-color:transparent;border-left:0}input[type=date][data-v-2f3daf01]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}", ""]);

// exports


/***/ }),

/***/ 1493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant),expression:"applicant"}],staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":(_vm.applicant)},on:{"input":function($event){if($event.target.composing){ return; }_vm.applicant=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.load_info]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.department))])}),0)])]),_vm._v(" "),(_vm.proc_id!='')?_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.proc_id),expression:"proc_id"}],staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":(_vm.proc_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.proc_id=$event.target.value}}})])]):_vm._e(),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticClass:"row form-group",staticStyle:{"margin-left":"-1.26em","margin-right":"-1.26em"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"15%"}}),_vm._v(" "),(_vm.counter>=1)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 1"),_c('div',{staticClass:"fa fa-plus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.new_row();_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 2"),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row();_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 3"),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row();_vm.cal_sum()}}})]):_vm._e()])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[0]),expression:"cat[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(0)}]}},[_vm._l((_vm.cat_list),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[1]),expression:"cat[1]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(1)}]}},[_vm._l((_vm.cat_list),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[2]),expression:"cat[2]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(2)}]}},[_vm._l((_vm.cat_list),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Nature")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[0]),expression:"nature[0]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[1]),expression:"nature[1]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[2]),expression:"nature[2]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Location")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[0]),expression:"loc[0]"}],staticClass:"form-control",attrs:{"required":"","readonly":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[1]),expression:"loc[1]"}],staticClass:"form-control",attrs:{"required":"","readonly":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[2]),expression:"loc[2]"}],staticClass:"form-control",attrs:{"required":"","readonly":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Reason for application")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[0]),expression:"reason[0]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[1]),expression:"reason[1]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[2]),expression:"reason[2]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Budget Plan Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[(_vm.cat[0]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":"","required":""},domProps:{"value":(_vm.bp[0])},on:{"keyup":function($event){return _vm.check_circular(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 0, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[0]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(0)}]}},_vm._l((_vm.bp_list_0),function(bpl){return _c('option',{domProps:{"value":bpl.description}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[(_vm.cat[1]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[1]),expression:"bp[1]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":"","required":""},domProps:{"value":(_vm.bp[1])},on:{"keyup":function($event){return _vm.check_circular(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 1, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[1]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[1]),expression:"bp[1]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(1)}]}},_vm._l((_vm.bp_list_1),function(bpl){return _c('option',{domProps:{"value":bpl.description}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[(_vm.cat[2]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[2]),expression:"bp[2]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":"","required":""},domProps:{"value":(_vm.bp[2])},on:{"keyup":function($event){return _vm.check_circular(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 2, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[2]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[2]),expression:"bp[2]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(2)}]}},_vm._l((_vm.bp_list_2),function(bpl){return _c('option',{domProps:{"value":bpl.description}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Fund Source")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[(_vm.cat[0]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[0],"value":(_vm.fund[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 0, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[0]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list_0),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[(_vm.cat[1]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[1]),expression:"fund[1]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[1],"value":(_vm.fund[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 1, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[1]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[1]),expression:"fund[1]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list_1),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[(_vm.cat[2]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[2]),expression:"fund[2]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[2],"value":(_vm.fund[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 2, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[2]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[2]),expression:"fund[2]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list_2),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Amount HK$")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[0]),expression:"amount[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0/"},domProps:{"value":(_vm.amount[0])},on:{"change":function($event){return _vm.cal_sum(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[1]),expression:"amount[1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[1],"required":"","value":"0/"},domProps:{"value":(_vm.amount[1])},on:{"change":function($event){return _vm.cal_sum(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[2]),expression:"amount[2]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[2],"required":"","value":"0/"},domProps:{"value":(_vm.amount[2])},on:{"change":function($event){return _vm.cal_sum(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invoice),expression:"invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":"","readonly":""},domProps:{"value":(_vm.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.invoice=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"15%","padding-left":"0.3%"}},[_vm._v("Recipient type :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"2em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"staff","required":""},domProps:{"checked":_vm._q(_vm.rtype,"staff")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="staff"}}}),_c('label',[_vm._v("Staff")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"1em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"company"},domProps:{"checked":_vm._q(_vm.rtype,"company")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="company"}}}),_c('label',[_vm._v("Company")])]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0"}},[_c('label',{staticStyle:{"padding-top":"0.4em","padding-left":"0.55%","padding-right":"0","width":"30.45%"}},[_vm._v("Name of recipient :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_rec),expression:"search_rec"}],staticClass:"form-control input col-8",attrs:{"type":"text","required":""},domProps:{"value":(_vm.search_rec)},on:{"keyup":function($event){return _vm.search_record($event)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cls_table($event)},"input":function($event){if($event.target.composing){ return; }_vm.search_rec=$event.target.value}}})]),_vm._v(" "),(_vm.new_sup==true)?_c('div',{staticStyle:{"padding-top":"0.4em"}},[_c('div',{staticClass:"col-6",staticStyle:{"display":"flex","flex-direction":"row","width":"100%","padding-left":"0"}},[_c('div',{staticClass:"col-8",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_address),expression:"company_address"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Address","required":""},domProps:{"value":(_vm.company_address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_address=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_contact),expression:"company_contact"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Contact","required":""},domProps:{"value":(_vm.company_contact)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_contact=$event.target.value}}})])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-left":"auto","margin-top":"2.5em"}},[_c('b',[_vm._v("Total Amount in HK$: "+_vm._s(_vm.sum))])])])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.reject_req}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reject\n        ")])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record_sec)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user_sec(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,2693139455)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item.name)}}},[_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user_sec(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,3130543717)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Reimbursement Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Committee / Department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Procurement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"font-size":"0.85em","color":"rgba(0,0,0,0.7)"}},[_vm._v("Description of Goods Purchased / Services Delivered:")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gen_req_reimb_vue__ = __webpack_require__(1234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gen_req_reimb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gen_req_reimb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gen_req_reimb_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gen_req_reimb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f3daf01_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gen_req_reimb_vue__ = __webpack_require__(1493);
function injectStyle (ssrContext) {
  __webpack_require__(1491)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f3daf01"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gen_req_reimb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f3daf01_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gen_req_reimb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=68.build.js.map