webpackJsonp([64],{

/***/ 1231:
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
            processing: false,
            invoice: '',
            data_list: [],
            counter_list: [],
            occ_counter: 0,
            occ_max: 0,
            sum_max: 0,
            tmp_cat_id: '',
            counter_src: [],
            reimb_type: 'Recursive',
            dept: [],
            procurement_id: '',
            dept_list: [],
            sub_dept_list: [],
            asset_list: [],
            fund_list: [],
            check_num: true,
            //table
            sum: 0,
            cat_list: [],
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
            rtype: 'company',
            search_rec: '',
            hv_record: false,
            proc_data: [],
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
        await _axios2.default.get('Procurement/department/backend/dept_member_reimb.php').then(function (response) {
            _this.dept_list = response.data;
            var d = 0;
            for (d = 0; d < _this.counter + 1; d++) {
                _this.dept[d] = _this.dept_list[0].full_dept;
            }
        });
        await _axios2.default.get('../user_info.php').then(function (response) {
            _this.applicant = response.data[1];
        });
        await _axios2.default.get('Procurement/shared_backend/location.php').then(function (response) {
            _this.loc_list = response.data;
        });

        var formData = new FormData();
        formData.append('dept', this.dept[0]);
        await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
            var i;
            for (i = 0; i < _this.counter + 1; i++) {
                _this.cat_list[i] = response.data;
                _this.cat[i] = _this.cat_list[i][0].name;
            }
        });
        formData.append('cat', this.cat[0]);
        await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
            var i = 0;
            for (i = 0; i < _this.counter + 1; i++) {
                _this.bp_list[i] = response.data;
                _this.bp[i] = _this.bp_list[i][0].description;
                _this.bp_tag[i] = _this.bp_list[i][0].tag;
                _this.fund[i] = _this.bp_list[i][0].fundsrc;
            }
        });

        //fetch from procurement (dept,category,item(nature) company name)
        var formData_fetch_proc = new FormData();
        var proc_id = document.getElementById('tmp_id').value;
        this.procurement_id = proc_id;
        formData_fetch_proc.append('proc_id', proc_id);
        await _axios2.default.post('Procurement/reimbursement/backend/get_counter.php', formData_fetch_proc).then(function (response) {
            _this.counter_list = response.data;
            _this.occ_counter = _this.counter_list[0].counter;
        });
        await _axios2.default.post('Procurement/reimbursement/backend/fetch_from_proc.php', formData_fetch_proc).then(function (response) {
            _this.counter_list = response.data;
            _this.occ_max = _this.counter_list[0].occur;
        });
        await _axios2.default.post('Procurement/reimbursement/backend/get_recur_reimb.php', formData_fetch_proc).then(function (response) {
            _this.counter_list = response.data;
            _this.counter_src[0] = _this.counter_list.length - 1;
            var i = 0;
            for (i = 0; i < _this.counter_src[0] + 1; i++) {
                _this.amount[i] = _this.counter_list[i].amount;
                _this.dept[i] = _this.counter_list[i].dept_full;
                _this.cat[i] = _this.counter_list[i].asset_full;
                _this.bp[i] = _this.counter_list[i].bp_d;
                _this.fund[i] = _this.counter_list[i].fundsrc;
                _this.nature[i] = _this.counter_list[i].nature;
                _this.loc[i] = _this.counter_list[i].location;
                _this.reason[i] = _this.counter_list[i].reason;
                _this.rtype = _this.counter_list[i].receiver_type;
                _this.search_rec = _this.counter_list[i].receiver_name;
            }
        });
        var i = 0;
        for (i = 0; i < this.counter_src[0] + 1; i++) {
            var formData = new FormData();
            formData.append('dept', this.dept[i]);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this.cat_list[i] = response.data;
                _this.$forceUpdate();
            });
            await formData.append('cat', this.cat[i]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this.bp_list[i] = response.data;
                _this.$forceUpdate();
            });
            await formData.append('bp', this.bp[i]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this.fund_list[i] = response.data;
                _this.$forceUpdate();
            });
        }
        this.counter = 1;
        this.sum_max = 9999999;
        this.ready = true;

        //fetch from procurement (dept,category,item(nature) company name)


        //asset category of department   
    },
    mounted: async function mounted() {},

    methods: {
        load_info: async function load_info(event) {
            var _this2 = this;

            //change dept update all
            var formData = new FormData();
            formData.append('dept', this.dept[event]);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this2.cat_list[event] = response.data;
                _this2.cat[event] = _this2.cat_list[event][0].name;
                _this2.$forceUpdate();
            });
            await formData.append('cat', this.cat[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this2.bp_list[event] = response.data;
                _this2.bp[event] = _this2.bp_list[event][0].description;
                _this2.bp_tag[event] = _this2.bp_list[event][0].tag;
                _this2.$forceUpdate();
            });
            await formData.append('bp', this.bp[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this2.fund_list[event] = response.data;
                _this2.fund[event] = _this2.fund_list[event][0].fundsrc;
                _this2.fund_max[event] = parseFloat(_this2.fund_list[event][0].cost_total) - parseFloat(_this2.fund_list[event][0].expense);
                _this2.fund_max_ini[event] = _this2.fund_max[event];
                _this2.$forceUpdate();
            });
            this.$forceUpdate();
        },
        load_info_id: async function load_info_id(id) {
            var _this3 = this;

            var sel = document.getElementById(id);
            var dept = sel.options[sel.selectedIndex].text;
            var formData = new FormData();
            formData.append('dept', dept);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this3.cat_list[id] = response.data;
                _this3.tmp_cat_id = 'cat_' + id.substring(5);
                _this3.$forceUpdate();
            });
            var cat_id = this.tmp_cat_id;
            var sel = document.getElementById(cat_id);
            var cat = sel.options[sel.selectedIndex].text;
            await formData.append('cat', cat);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this3.bp_list[cat_id] = response.data;
                _this3.tmp_cat_id = 'bp_' + id.substring(5);
                _this3.$forceUpdate();
            });
            var bp_id = this.tmp_cat_id;
            var sel = document.getElementById(bp_id);
            var bp = sel.options[sel.selectedIndex].text;
            await formData.append('bp', bp);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this3.fund_list[bp_id] = response.data;
                _this3.$forceUpdate();
            });
            this.$forceUpdate();
        },
        load_bp_id: function load_bp_id(id) {
            var _this4 = this;

            var tmp_id = id.substring(4);
            var dept_id = 'dept_' + tmp_id;
            var dept_sel = document.getElementById(dept_id);
            var dept = dept_sel.options[dept_sel.selectedIndex].text;
            var cat_id = 'cat_' + tmp_id;
            var cat_sel = document.getElementById(cat_id);
            var cat = cat_sel.options[cat_sel.selectedIndex].text;
            var bp_id = 'bp_' + tmp_id;
            this.tmp_cat_id = bp_id;
            var target = '';
            var formData = new FormData();
            formData.append('dept', dept);
            formData.append('cat', cat);
            _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                if (!(response.data == '')) {
                    _this4.bp_list[cat_id] = response.data;
                    var f_id = _this4.tmp_cat_id;
                    _this4.fund_list[f_id] = response.data;
                    _this4.$forceUpdate();
                } else {
                    var f_id = _this4.tmp_cat_id;
                    _this4.bp_list[cat_id] = [''];
                    _this4.fund_list[f_id] = [''];
                    _this4.$forceUpdate();
                }
            });
        },
        load_bp: async function load_bp(event) {
            var _this5 = this;

            var target = '';
            var formData = new FormData();
            formData.append('dept', this.dept[event]);
            formData.append('cat', this.cat[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this5.bp_list[event] = response.data;
                _this5.fund_list[event] = response.data;
                _this5.bp[event] = _this5.bp_list[event][0].description;
                _this5.bp_tag[event] = _this5.bp_list[event][0].tag;
                _this5.fund[event] = _this5.fund_list[event][0].fundsrc;
                _this5.fund_max[event] = parseFloat(_this5.bp_list[event][0].cost_total) - parseFloat(_this5.bp_list[event][0].expense);
                _this5.fund_max_ini[event] = _this5.fund_max[event];
                _this5.$forceUpdate();
            });
        },
        post_ssc: function post_ssc(event) {
            var _this6 = this;

            var formData = new FormData();
            formData.append('pwd', this.pwd);
            _axios2.default.post('Procurement/reimbursement/backend/check_sign.php', formData).then(function (response) {
                _this6.sign_data = response.data;
                if (response.data[0].signature == undefined) {
                    _this6.message = response.data;
                } else {
                    _this6.signed = true;
                    _this6.message = '';
                }
            });
            this.$forceUpdate();
        },
        cal_num: function cal_num(event) {
            this.total = this.unit_cost * this.quantity;
            if (isNaN(this.total)) {
                this.total = '...';
                this.check_num = false;
            }
            this.fund_cost[0] = this.total;
            this.$forceUpdate();
        },
        new_row: function new_row(event) {
            this.counter_src[event] = parseInt(this.counter_src[event]) + 1;
            var n = this.counter_src[event];
            this.cat_list['dept_' + event + '_' + n] = this.cat_list[event];
            this.bp_list['cat_' + event + '_' + n] = this.bp_list[event];
            this.fund_list['bp_' + event + '_' + n] = this.fund_list[event];
            this.$forceUpdate();
        },
        remove_row: function remove_row(event) {
            if (!(this.counter_src[event] == 0)) {
                this.counter_src[event] = parseInt(this.counter_src[event]) - 1;
            }
            this.$forceUpdate();
        },
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
            var _this7 = this;

            var formData = new FormData();
            formData.append('key', this.applicant_sec);
            _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this7.hv_record_sec = false;
                } else {
                    _this7.recep_data = response.data;
                    _this7.hv_record_sec = true;
                }
            });
        },
        search_record: function search_record(event) {
            var _this8 = this;

            var formData = new FormData();
            formData.append('key', this.search_rec);
            if (this.rtype == 'staff') {
                _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                    if (response.data == "Empty") {
                        _this8.hv_record = false;
                    } else {
                        _this8.recep_data = response.data;
                        _this8.recep_data.username = response.data.username;
                        _this8.recep_data.name = response.data.name;
                        _this8.hv_record = true;
                    }
                });
            } else if (this.rtype == 'company') {
                _axios2.default.post('Procurement/shared_backend/supplier_list.php', formData).then(function (response) {
                    if (response.data == "Empty") {
                        _this8.hv_record = false;
                        _this8.new_sup = false;
                    } else if (response.data == "new") {
                        _this8.new_sup = true;
                    } else {
                        _this8.recep_data = response.data;
                        _this8.recep_data.username = response.data.username;
                        _this8.recep_data.name = response.data.name;
                        _this8.hv_record = true;
                        _this8.new_sup = false;
                    }
                });
            }
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
        new_bp_id: function new_bp_id(id) {
            var _this9 = this;

            var tmp_id = id.substring(3);

            var dept_id = 'dept_' + tmp_id;
            var dept_sel = document.getElementById(dept_id);
            var dept = dept_sel.options[dept_sel.selectedIndex].text;
            var cat_id = 'cat_' + tmp_id;
            var cat_sel = document.getElementById(cat_id);
            var cat = cat_sel.options[cat_sel.selectedIndex].text;
            var bp_id = 'bp_' + tmp_id;
            var bp_sel = document.getElementById(bp_id);
            var bp = bp_sel.options[bp_sel.selectedIndex].text;

            var formData = new FormData();
            formData.append('dept', dept);
            formData.append('cat', cat);
            formData.append('bp', bp);
            _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                _this9.fund_list[bp_id] = response.data;
            });
            this.$forceUpdate();
        },
        new_bp: function new_bp(event) {
            var _this10 = this;

            var formData = new FormData();
            formData.append('dept', this.dept[event]);
            formData.append('cat', this.cat[event]);
            formData.append('bp', this.bp[event]);
            _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                _this10.fund_list[event] = response.data;
                _this10.fund[event] = _this10.fund_list[event][0].fundsrc;
                _this10.fund_max[event] = parseFloat(_this10.fund_list[event][0].cost_total) - parseFloat(_this10.fund_list[event][0].expense);
                _this10.fund_max_ini[event] = _this10.fund_max[event];
            });
            this.$forceUpdate();
        },
        handleSubmit: async function handleSubmit(event) {
            var _this11 = this;

            if (!(this.sum > this.sum_max)) {
                if (this.level != 2 && this.signed) {
                    var formData = new FormData();
                    var i = 0;
                    var count_files = 0;
                    formData.append('invoice', this.invoice);
                    formData.append('occur', this.occ_counter);
                    formData.append('proc_id', this.procurement_id);
                    formData.append('applicant', this.applicant);
                    formData.append('newsup', this.new_sup);
                    if (this.new_sup == true) {
                        formData.append('address', this.company_address);
                        formData.append('contact', this.company_contact);
                    }
                    //counter loop
                    for (i = 0; i < this.counter_src[0] + 1; i++) {
                        formData.append('dept' + i, this.dept[i]);
                        formData.append('asset_cat' + i, this.cat[i]);
                        formData.append('nature' + i, this.nature[i]);
                        formData.append('location' + i, this.loc[i]);
                        formData.append('reason' + i, this.reason[i]);
                        formData.append('bp' + i, this.bp[i]);
                        formData.append('fundsrc' + i, this.fund[i]);
                        formData.append('amount' + i, this.amount[i]);
                        formData.append('counter_src_' + i, this.counter_src[i]);
                    }
                    for (var i = 0; i < this.pdf.length; i++) {
                        var file = this.pdf[i];
                        formData.append('files' + i, file);
                        count_files = count_files + 1;
                    }
                    formData.append('count_files', count_files);
                    //counter loop
                    formData.append('total', this.sum);
                    formData.append('reimb_type', this.reimb_type);
                    formData.append('r_type', this.rtype);
                    formData.append('r_name', this.search_rec);
                    formData.append('sign_stat', "true");
                    formData.append('counter', this.counter);
                    this.processing = true;
                    await _axios2.default.post('Procurement/reimbursement/backend/recur_reimb_child.php', formData).then(function (response) {
                        if (response.data == 'OK') {
                            _this11.$alert('Successfully submitted record').then(function () {
                                _this11.processing = false;
                            });
                            _this11.$router.push('../procurement/view_proc');
                        } else {
                            _this11.$alert(response.data);
                        }
                    });
                } else if (this.level == 2 && this.signed == false) {
                    var formData = new FormData();
                    var i = 0;
                    var count_files = 0;
                    formData.append('occur', this.occ_counter);
                    formData.append('proc_id', this.procurement_id);
                    formData.append('applicant', this.applicant_sec);
                    formData.append('newsup', this.new_sup);
                    if (this.new_sup == true) {
                        formData.append('address', this.company_address);
                        formData.append('contact', this.company_contact);
                    }
                    //counter loop
                    for (i = 0; i < this.counter_src[0] + 1; i++) {
                        formData.append('dept' + i, this.dept[i]);
                        formData.append('asset_cat' + i, this.cat[i]);
                        formData.append('nature' + i, this.nature[i]);
                        formData.append('location' + i, this.loc[i]);
                        formData.append('reason' + i, this.reason[i]);
                        formData.append('bp' + i, this.bp[i]);
                        formData.append('fundsrc' + i, this.fund[i]);
                        formData.append('amount' + i, this.amount[i]);
                        formData.append('counter_src_' + i, this.counter_src[i]);
                    }
                    for (var i = 0; i < this.pdf.length; i++) {
                        var _file = this.pdf[i];
                        formData.append('files' + i, _file);
                        count_files = count_files + 1;
                    }
                    formData.append('count_files', count_files);
                    //counter loop
                    formData.append('total', this.sum);
                    formData.append('reimb_type', this.reimb_type);
                    formData.append('r_type', this.rtype);
                    formData.append('r_name', this.search_rec);
                    formData.append('sign_stat', "true");
                    formData.append('counter', this.counter);
                    this.processing = true;
                    await _axios2.default.post('Procurement/reimbursement/backend/recur_reimb_child.php', formData).then(function (response) {
                        if (response.data == 'OK') {
                            _this11.$alert('Successfully submitted record').then(function () {
                                _this11.processing = false;
                            });
                            _this11.$router.push('../procurement/view_proc');
                        } else {
                            _this11.$alert(response.data);
                        }
                    });
                } else if (this.level != 2 && this.signed == false) {
                    this.$alert('Please Sign the form !');
                }
            } else {
                this.$alert('Total Amount Should not exist HK$' + this.sum_max);
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

/***/ }),

/***/ 1482:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1483);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("72d7561d", content, true, {});

/***/ }),

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-a64fc3c6]{background-color:transparent;border-left:0}input[type=date][data-v-a64fc3c6]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}", ""]);

// exports


/***/ }),

/***/ 1484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-9 col-md-9"},[_c('div',[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Reimbursement Form "+_vm._s(Number(_vm.occ_counter)+1)+" out of "+_vm._s(_vm.occ_max)+" ")])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[(_vm.level!=2)?_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant),expression:"applicant"}],staticClass:"form-control",attrs:{"type":"text","readonly":_vm.level!=2,"required":""},domProps:{"value":(_vm.applicant)},on:{"input":function($event){if($event.target.composing){ return; }_vm.applicant=$event.target.value}}})])]):_vm._e(),_vm._v(" "),(_vm.level==2)?_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant_sec),expression:"applicant_sec"}],staticClass:"form-control",attrs:{"type":"text","readonly":_vm.level!=2,"required":""},domProps:{"value":(_vm.applicant_sec)},on:{"keyup":_vm.search_record_sec,"input":function($event){if($event.target.composing){ return; }_vm.applicant_sec=$event.target.value}}})])]):_vm._e(),_vm._v(" "),(_vm.level!=2)?_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement_id),expression:"procurement_id"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.procurement_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.procurement_id=$event.target.value}}})])]):_vm._e(),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"row form-group",staticStyle:{"margin-left":"-1.26em","margin-right":"-1.26em"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"15%"}}),_vm._v(" "),(_vm.counter>=1)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 1\n                    ")]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item "+_vm._s(n+1)+"\n                    ")])})],2)]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Department")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept[0]),expression:"dept[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.dept, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_info(0)}]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.full_dept))])}),0)]),_vm._v(" "),_vm._l((_vm.counter_src[0]),function(s){return _c('div',{style:({width:((1/(_vm.counter_src[0]+1)*100)-2.5)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept[s]),expression:"dept[s]"}],staticClass:"form-control select",staticStyle:{"margin-left":"2.5%"},attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.dept, s, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_info(s)}]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.full_dept))])}),0)])})],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[0]),expression:"cat[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(0)}]}},_vm._l((_vm.cat_list[0]),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),0)]),_vm._v(" "),_vm._l((_vm.counter_src[0]),function(s){return _c('div',{style:({width:((1/(_vm.counter_src[0]+1)*100)-2.5)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[s]),expression:"cat[s]"}],staticClass:"form-control select",staticStyle:{"margin-left":"2.5%"},attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, s, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(s)}]}},_vm._l((_vm.cat_list[s]),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),0)])})],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Nature")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[0]),expression:"nature[0]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[n]),expression:"nature[n]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, n, $event.target.value)}}})])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Location")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[0]),expression:"loc[0]"}],staticClass:"form-control",attrs:{"required":"","readonly":""},domProps:{"value":(_vm.loc[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[n]),expression:"loc[n]"}],staticClass:"form-control",attrs:{"required":"","readonly":""},domProps:{"value":(_vm.loc[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, n, $event.target.value)}}})])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Reason for application")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[0]),expression:"reason[0]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[n]),expression:"reason[n]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, n, $event.target.value)}}})])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Budget Plan Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(0)}]}},_vm._l((_vm.bp_list[0]),function(bpl){return _c('option',[_vm._v(_vm._s(bpl.description))])}),0)]),_vm._v(" "),_vm._l((_vm.counter_src[0]),function(s){return _c('div',{style:({width:((1/(_vm.counter_src[0]+1)*100)-2.5)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[s]),expression:"bp[s]"}],staticClass:"form-control select",staticStyle:{"margin-left":"2.5%"},attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, s, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(s)}]}},_vm._l((_vm.bp_list[s]),function(bpl){return _c('option',[_vm._v(_vm._s(bpl.description))])}),0)])})],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Fund Source")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list[0]),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0)]),_vm._v(" "),_vm._l((_vm.counter_src[0]),function(s){return _c('div',{style:({width:((1/(_vm.counter_src[0]+1)*100)-2.5)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[s]),expression:"fund[s]"}],staticClass:"form-control select",staticStyle:{"margin-left":"2.5%"},attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, s, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list[s]),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0)])})],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Amount HK$")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[0]),expression:"amount[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0"},domProps:{"value":(_vm.amount[0])},on:{"change":function($event){return _vm.cal_sum(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 0, $event.target.value)}}})]),_vm._v(" "),_vm._l((_vm.counter_src[0]),function(s){return _c('div',{style:({width:((1/(_vm.counter_src[0]+1)*100)-2.5)+'%'})},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[s]),expression:"amount[s]"}],staticClass:"form-control",staticStyle:{"margin-left":"2.5%"},attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0"},domProps:{"value":(_vm.amount[s])},on:{"change":function($event){return _vm.cal_sum(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, s, $event.target.value)}}})])})],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Support document (.pdf)")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{ref:"pdf_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","multiple":"","required":""},on:{"change":function($event){return _vm.addfile_pdf()}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invoice),expression:"invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":""},domProps:{"value":(_vm.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.invoice=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"15%","padding-left":"0.3%"}},[_vm._v("Recipient type :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"2em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"staff","required":""},domProps:{"checked":_vm._q(_vm.rtype,"staff")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="staff"}}}),_c('label',[_vm._v("Staff")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"1em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"company"},domProps:{"checked":_vm._q(_vm.rtype,"company")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="company"}}}),_c('label',[_vm._v("Company")])]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0"}},[_c('label',{staticStyle:{"padding-top":"0.4em","padding-left":"0.55%","padding-right":"0","width":"30.45%"}},[_vm._v("Name of recipient :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_rec),expression:"search_rec"}],staticClass:"form-control input col-8",attrs:{"type":"text","required":""},domProps:{"value":(_vm.search_rec)},on:{"keyup":_vm.search_record,"input":function($event){if($event.target.composing){ return; }_vm.search_rec=$event.target.value}}})]),_vm._v(" "),(_vm.new_sup==true)?_c('div',{staticStyle:{"padding-top":"0.4em"}},[_c('div',{staticClass:"col-6",staticStyle:{"display":"flex","flex-direction":"row","width":"100%","padding-left":"0"}},[_c('div',{staticClass:"col-8",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_address),expression:"company_address"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Address","required":""},domProps:{"value":(_vm.company_address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_address=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_contact),expression:"company_contact"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Contact","required":""},domProps:{"value":(_vm.company_contact)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_contact=$event.target.value}}})])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[(_vm.signed==false)?_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0"}},[_c('label',{staticStyle:{"width":"30.45%","padding-top":"0.4em","padding-left":"0.55%","padding-right":"0"}},[_vm._v("    \n                            Security Code : \n                        ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control col-5",attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control col-3",staticStyle:{"padding-left":"0"},attrs:{"type":"button"},on:{"click":_vm.post_ssc}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em","margin-top":"2.5em"}},[_vm._v("    \n                        Signature \n                    ")]),_vm._v(" "),_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_data[0].signature}})]):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-control-label",staticStyle:{"margin-left":"auto","margin-top":"2.5em"}},[_c('b',[_vm._v("Total Amount in HK$: "+_vm._s(_vm.sum))])])])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n        ")]),_vm._v(" "),_vm._m(4)])])])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record_sec)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user_sec(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,2693139455)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,1258826261)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Procurement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"font-size":"0.85em","color":"rgba(0,0,0,0.7)"}},[_vm._v("Description of Goods Purchased / Services Delivered:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset","onclick":"document.getElementById('general_req_form').reset()"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n        ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_reimb_vue__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_reimb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_reimb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_reimb_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_reimb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a64fc3c6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recur_reimb_vue__ = __webpack_require__(1484);
function injectStyle (ssrContext) {
  __webpack_require__(1482)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a64fc3c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_reimb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a64fc3c6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recur_reimb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=64.build.js.map