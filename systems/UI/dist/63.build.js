webpackJsonp([63],{

/***/ 1232:
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
            circular_pdf: '',
            dp_id: '',
            req_type: 'regular',
            is_new_circular: false,
            checking: 0,
            circular_val: [0, 0, 0],
            circular_list: [],
            hv_circular: false,
            processing: false,
            dept_id: '',
            occ_counter: 0,
            recur_id: 0,
            current_user_name: '',
            invoice: '',
            sum_max: 0.00,
            tmp_cat_id: '',
            counter_src: [],
            occur: 0,
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
            counter: 10,
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
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }],
            circular_headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Circular Code', value: 'fundsrc', sortable: false }]
        };
    },
    created: async function created() {
        var _this = this;

        window.removeEventListener('focus', console.log('Lost Focus'));
        await _axios2.default.get('../permission.php').then(function (response) {
            _this.current_user_name = response.data[0].name;
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
            for (d = 0; d < 3; d++) {
                _this.dept[d] = _this.dept_list[0].full_dept;
            }
        });
        await _axios2.default.get('../user_info.php').then(function (response) {
            _this.applicant = response.data[1];
        });
        await _axios2.default.get('Procurement/shared_backend/location.php').then(function (response) {
            _this.loc_list = response.data;
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
        formData_fetch_proc.append('proc_id', proc_id);
        await _axios2.default.post('Procurement/reimbursement/backend/fetch_from_proc.php', formData_fetch_proc).then(function (response) {
            _this.proc_data = response.data;
            var cl = _this.proc_data.length;
            _this.occur = response.data[0].occur;
            _this.counter = cl;
            var l = 0;
            for (l = 0; l < cl; l++) {
                _this.counter_src[l] = 0;
                _this.amount[l] = parseFloat(_this.proc_data[l].total_cost);
                //this.amount[l] = parseFloat(this.proc_data[l].unit_cost) * Number(this.proc_data[l].quantity);
                _this.nature[l] = _this.proc_data[l].item_name;
                _this.cat[l] = _this.proc_data[l].asset_full;
                _this.sum = parseFloat(_this.sum) + parseFloat(_this.amount[l]);
            }
            _this.rtype = 'company';
            _this.search_rec = _this.proc_data[0].company_name;
            _this.dept[0] = _this.proc_data[0].dept_full;
            _this.dept_id = _this.proc_data[0].dept;
        });
        var formData = new FormData();
        formData.append('dept', this.dept[0]);
        await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
            var i;
            for (i = 0; i < 3; i++) {
                _this.cat_list[i] = response.data;
                _this.cat[i] = _this.cat_list[i][0].name;
            }
        });
        formData.append('cat', this.cat[0]);
        await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
            var i = 0;
            for (i = 0; i < 3; i++) {
                _this.bp_list[i] = response.data;
                _this.bp[i] = _this.bp_list[i][0].tag;
                _this.bp_tag[i] = _this.bp_list[i][0].tag;
                _this.fund[i] = _this.bp_list[i][0].fundsrc;
            }
            _this.$forceUpdate();
        });
        formData.append('bp', this.bp[0]);
        await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
            var i = 0;
            for (i = 0; i < 3; i++) {
                _this.fund_list[i] = response.data;
                _this.fund_max[i] = parseFloat(_this.fund_list[i][0].cost_total) - parseFloat(_this.fund_list[i][0].expense);
                _this.fund_max_ini[i] = _this.fund_max[i];
            }
            _this.$forceUpdate();
        });
        //fetch from procurement (dept,category,item(nature) company name)   
        this.sum_max = this.sum;
        this.$forceUpdate();
        this.ready = true;
        //asset category of department   
    },
    mounted: async function mounted() {
        //asset category of department   

    },

    methods: {
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
        select_circular: function select_circular(val) {
            this.fund[this.checking] = val;
            this.bp[this.checking] = val;
            this.hv_circular = false;
        },
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
                formData.append('dept', this.dept_id);
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
        return_prev: function return_prev() {
            this.$router.go(-1);
        },
        load_info: async function load_info(event) {
            var _this3 = this;

            //change dept update all
            var formData = new FormData();
            formData.append('dept', this.dept[event]);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this3.cat_list[event] = response.data;
                _this3.cat[event] = _this3.cat_list[event][0].name;
                _this3.$forceUpdate();
            });
            await formData.append('cat', this.cat[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this3.bp_list[event] = response.data;
                _this3.bp[event] = _this3.bp_list[event][0].description;
                _this3.bp_tag[event] = _this3.bp_list[event][0].tag;
                _this3.$forceUpdate();
            });
            await formData.append('bp', this.bp[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this3.fund_list[event] = response.data;
                _this3.fund[event] = _this3.fund_list[event][0].fundsrc;
                _this3.fund_max[event] = parseFloat(_this3.fund_list[event][0].cost_total) - parseFloat(_this3.fund_list[event][0].expense);
                _this3.fund_max_ini[event] = _this3.fund_max[event];
                _this3.$forceUpdate();
            });
            this.$forceUpdate();
        },
        load_info_id: async function load_info_id(id) {
            var _this4 = this;

            var sel = document.getElementById(id);
            var dept = sel.options[sel.selectedIndex].text;
            var formData = new FormData();
            formData.append('dept', dept);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this4.cat_list[id] = response.data;
                _this4.tmp_cat_id = 'cat_' + id.substring(5);
                _this4.$forceUpdate();
            });
            var cat_id = this.tmp_cat_id;
            var sel = document.getElementById(cat_id);
            var cat = sel.options[sel.selectedIndex].text;
            await formData.append('cat', cat);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this4.bp_list[cat_id] = response.data;
                _this4.tmp_cat_id = 'bp_' + id.substring(5);
                _this4.$forceUpdate();
            });
            var bp_id = this.tmp_cat_id;
            var sel = document.getElementById(bp_id);
            var bp = sel.options[sel.selectedIndex].text;
            await formData.append('bp', bp);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this4.fund_list[bp_id] = response.data;
                _this4.$forceUpdate();
            });
            this.$forceUpdate();
        },
        load_bp_id: function load_bp_id(id) {
            var _this5 = this;

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
                    _this5.bp_list[cat_id] = response.data;
                    var f_id = _this5.tmp_cat_id;
                    _this5.fund_list[f_id] = response.data;
                    _this5.$forceUpdate();
                } else {
                    var f_id = _this5.tmp_cat_id;
                    _this5.bp_list[cat_id] = [''];
                    _this5.fund_list[f_id] = [''];
                    _this5.$forceUpdate();
                }
            });
        },
        load_bp: async function load_bp(event) {
            var _this6 = this;

            if (this.cat[event] != 'Circular') {
                var target = '';
                var formData = new FormData();
                formData.append('dept', this.dept[event]);
                formData.append('cat', this.cat[event]);
                await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                    if (response.data != '') {
                        _this6.bp_list[event] = response.data;
                        _this6.fund_list[event] = response.data;
                        _this6.bp[event] = _this6.bp_list[event][0].tag;
                        _this6.bp_tag[event] = _this6.bp_list[event][0].tag;
                        _this6.fund[event] = _this6.fund_list[event][0].fundsrc;
                        _this6.fund_max[event] = parseFloat(_this6.bp_list[event][0].cost_total) - parseFloat(_this6.bp_list[event][0].expense);
                        _this6.fund_max_ini[event] = _this6.fund_max[event];
                        _this6.$forceUpdate();
                    } else {
                        _this6.$alert('No approved budget found for :' + _this6.cat[event]).then(function () {
                            _this6.cat[event] = _this6.full_cat;
                            _this6.$forceUpdate();
                        });
                    }
                });
            } else {
                this.fund[event] = '';
                this.bp[event] = '';
            }
        },
        post_ssc: function post_ssc(event) {
            var _this7 = this;

            var formData = new FormData();
            formData.append('pwd', this.pwd);
            _axios2.default.post('Procurement/reimbursement/backend/check_sign.php', formData).then(function (response) {
                _this7.sign_data = response.data;
                if (response.data[0].signature == undefined) {
                    _this7.message = response.data;
                } else {
                    _this7.signed = true;
                    _this7.message = '';
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
            /*
            this.counter_src[event] = parseInt(this.counter_src[event])+1;
            var n = this.counter_src[event];
            this.cat_list[('dept_'+event+'_'+n)] = this.cat_list[event];
            this.bp_list[('cat_'+event+'_'+n)] = this.bp_list[event];
            this.fund_list[('bp_'+event+'_'+n)] = this.fund_list[event];
            */
            if (this.counter < 3) {
                this.counter++;
            }
            this.$forceUpdate();
        },
        remove_row: function remove_row(event) {
            /*
            if(!(this.counter_src[event]==0)){
            this.counter_src[event] = parseInt(this.counter_src[event])-1;
            }
            */
            if (this.counter > 1) {
                this.counter--;
            }
            this.$forceUpdate();
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
            var _this8 = this;

            var formData = new FormData();
            formData.append('key', this.applicant_sec);
            _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this8.hv_record_sec = false;
                } else {
                    _this8.recep_data = response.data;
                    _this8.hv_record_sec = true;
                }
            });
        },
        search_record: function search_record(event) {
            var _this9 = this;

            var formData = new FormData();
            formData.append('key', this.search_rec);
            if (this.rtype == 'staff') {
                _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                    if (response.data == "Empty") {
                        _this9.hv_record = false;
                    } else {
                        _this9.recep_data = response.data;
                        _this9.recep_data.username = response.data.username;
                        _this9.recep_data.name = response.data.name;
                        _this9.hv_record = true;
                    }
                });
            } else if (this.rtype == 'company') {
                _axios2.default.post('Procurement/shared_backend/supplier_list.php', formData).then(function (response) {
                    if (response.data == "Empty") {
                        _this9.hv_record = false;
                        _this9.new_sup = false;
                    } else if (response.data == "new") {
                        _this9.new_sup = true;
                    } else {
                        _this9.recep_data = response.data;
                        _this9.recep_data.username = response.data.username;
                        _this9.recep_data.name = response.data.name;
                        _this9.hv_record = true;
                        _this9.new_sup = false;
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
        new_bp_id: async function new_bp_id(id) {
            var _this10 = this;

            var tmp_id = id.substring(3);

            var dept_id = 'dept_' + tmp_id;
            var dept_sel = document.getElementById(dept_id);
            var dept = dept_sel.options[dept_sel.selectedIndex].text;
            var cat_id = 'cat_' + tmp_id;
            var cat_sel = document.getElementById(cat_id);
            var cat = cat_sel.options[cat_sel.selectedIndex].text;
            var bp_id = 'bp_' + tmp_id;
            var bp_sel = document.getElementById(bp_id);
            var bp = bp_sel.options[bp_sel.selectedIndex].value;
            var tmp_index = parseInt(tmp_id.substring(2));
            this.bp[tmp_index] = bp_sel.options[bp_sel.selectedIndex].value;
            console.log(this.bp[tmp_index]);
            var formData = new FormData();
            formData.append('dept', dept);
            formData.append('cat', cat);
            formData.append('bp', bp);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_tag.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                _this10.fund_list[bp_id] = response.data;
                _this10.$forceUpdate();
            });
            this.$forceUpdate();
        },
        new_bp: async function new_bp(event) {
            var _this11 = this;

            var formData = new FormData();
            formData.append('dept', this.dept[event]);
            formData.append('cat', this.cat[event]);
            formData.append('bp', this.bp[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_tag.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                _this11.fund_list[event] = response.data;
                _this11.fund[event] = _this11.fund_list[event][0].fundsrc;
                _this11.fund_max[event] = parseFloat(_this11.fund_list[event][0].cost_total) - parseFloat(_this11.fund_list[event][0].expense);
                _this11.fund_max_ini[event] = _this11.fund_max[event];
                _this11.$forceUpdate();
            });
            this.$forceUpdate();
        },
        handleSubmit: function handleSubmit(event) {
            var _this12 = this;

            if (this.level != 2 && this.signed) {
                var formData = new FormData();
                var i = 0;
                var count_files = 0;
                formData.append('dept_code', this.dept_id);
                formData.append('circular_pdf', this.circular_pdf);
                formData.append('new_circular', this.is_new_circular);
                formData.append('recur', 'true');
                formData.append('invoice', this.invoice);
                formData.append('occur', this.occur);
                formData.append('proc_id', this.procurement_id);
                formData.append('applicant', this.applicant);
                formData.append('newsup', this.new_sup);
                if (this.new_sup == true) {
                    formData.append('address', this.company_address);
                    formData.append('contact', this.company_contact);
                }
                //counter loop
                for (i = 0; i < this.counter; i++) {
                    formData.append('circular_max' + i, this.circular_val[i]);
                    formData.append('dept' + i, this.dept[i]);
                    formData.append('asset_cat' + i, this.cat[i]);
                    formData.append('nature' + i, this.nature[i]);
                    formData.append('location' + i, this.loc[i]);
                    formData.append('reason' + i, this.reason[i]);
                    formData.append('bp' + i, this.bp[i]);
                    formData.append('fundsrc' + i, this.fund[i]);
                    formData.append('amount' + i, this.amount[i]);
                    //formData.append('counter_src_'+i,this.counter_src[i]);
                    /*
                    var fs = 0;
                    for(fs=1;fs<this.counter_src[i]+1;fs++){
                        var tmp_id = i+'_'+fs;
                        //dept
                        var dept_id = 'dept_'+ tmp_id;
                        var dept_sel = document.getElementById(dept_id);
                        var dept = dept_sel.options[dept_sel.selectedIndex].text;
                        formData.append('dept_'+i+'_sub_'+fs,dept);                         
                        //dept
                        //category
                        var cat_id = 'cat_'+ tmp_id;
                        var cat_sel = document.getElementById(cat_id);
                        var cat = cat_sel.options[cat_sel.selectedIndex].text;
                        formData.append('cat_'+i+'_sub_'+fs,cat);                         
                        //category
                        //bp
                        var bp_id = 'bp_'+ tmp_id;
                        var bp_sel = document.getElementById(bp_id);
                        var bp = bp_sel.options[bp_sel.selectedIndex].text;
                        formData.append('bp_'+i+'_sub_'+fs,bp);       
                        //bp
                        //fund
                        var fund_id = 'fund_'+ tmp_id;
                        var fund_sel = document.getElementById(fund_id);
                        var fund = fund_sel.options[fund_sel.selectedIndex].text;
                        formData.append('fund_'+i+'_sub_'+fs,fund);       
                        //fund
                        //amount
                        var amount_id = 'amount_'+ tmp_id;
                        var amount_val = document.getElementById(amount_id).value;
                        formData.append('amount_'+i+'_sub_'+fs,amount_val);       
                        //amount
                    }
                    */
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
                _axios2.default.post('Procurement/reimbursement/backend/multi_src_reimb.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this12.$alert('Successfully submitted record');
                        _this12.$router.push('../procurement/view_proc');
                    } else {
                        _this12.$alert(response.data);
                    }
                });
            } else if (this.level == 2 && this.signed == false) {
                var formData = new FormData();
                var i = 0;
                var count_files = 0;
                formData.append('dept_code', this.dept_id);
                formData.append('recur', 'true');
                formData.append('occur', this.occur);
                formData.append('invoice', this.invoice);
                formData.append('proc_id', this.procurement_id);
                formData.append('applicant', this.applicant_sec);
                formData.append('newsup', this.new_sup);
                if (this.new_sup == true) {
                    formData.append('address', this.company_address);
                    formData.append('contact', this.company_contact);
                }
                //counter loop
                for (i = 0; i < this.counter; i++) {
                    formData.append('circular_max' + i, this.circular_val[i]);
                    formData.append('dept' + i, this.dept[i]);
                    formData.append('asset_cat' + i, this.cat[i]);
                    formData.append('nature' + i, this.nature[i]);
                    formData.append('location' + i, this.loc[i]);
                    formData.append('reason' + i, this.reason[i]);
                    formData.append('bp' + i, this.bp[i]);
                    formData.append('fundsrc' + i, this.fund[i]);
                    formData.append('amount' + i, this.amount[i]);
                    //formData.append('counter_src_'+i,this.counter_src[i]);
                    var fs = 0;
                    for (fs = 1; fs < this.counter_src[i] + 1; fs++) {
                        var tmp_id = i + '_' + fs;
                        //dept
                        var dept_id = 'dept_' + tmp_id;
                        var dept_sel = document.getElementById(dept_id);
                        var dept = dept_sel.options[dept_sel.selectedIndex].text;
                        formData.append('dept_' + i + '_sub_' + fs, dept);
                        //dept
                        //category
                        var cat_id = 'cat_' + tmp_id;
                        var cat_sel = document.getElementById(cat_id);
                        var cat = cat_sel.options[cat_sel.selectedIndex].text;
                        formData.append('cat_' + i + '_sub_' + fs, cat);
                        //category
                        //bp
                        var bp_id = 'bp_' + tmp_id;
                        var bp_sel = document.getElementById(bp_id);
                        var bp = bp_sel.options[bp_sel.selectedIndex].text;
                        formData.append('bp_' + i + '_sub_' + fs, bp);
                        //bp
                        //fund
                        var fund_id = 'fund_' + tmp_id;
                        var fund_sel = document.getElementById(fund_id);
                        var fund = fund_sel.options[fund_sel.selectedIndex].text;
                        formData.append('fund_' + i + '_sub_' + fs, fund);
                        //fund
                        //amount
                        var amount_id = 'amount_' + tmp_id;
                        var amount_val = document.getElementById(amount_id).value;
                        formData.append('amount_' + i + '_sub_' + fs, amount_val);
                        //amount
                    }
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
                formData.append('sign_stat', "false");
                formData.append('counter', this.counter);
                _axios2.default.post('Procurement/reimbursement/backend/multi_src_reimb.php', formData).then(function (response) {
                    if (response.data == 'OK') {
                        _this12.$alert('Successfully submitted record');
                        _this12.$router.push('../procurement/view_proc');
                    } else {
                        _this12.$alert(response.data);
                    }
                });
            } else if (this.level != 2 && this.signed == false) {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1486);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0061bf56", content, true, {});

/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-e9594946]{background-color:transparent;border-left:0}input[type=date][data-v-e9594946]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}", ""]);

// exports


/***/ }),

/***/ 1487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Reimbursement Form "+_vm._s(Number(_vm.occ_counter)+1)+" out of "+_vm._s(_vm.occ_max))])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[(_vm.level!=2)?_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant),expression:"applicant"}],staticClass:"form-control",attrs:{"type":"text","readonly":_vm.level!=2,"required":""},domProps:{"value":(_vm.applicant)},on:{"input":function($event){if($event.target.composing){ return; }_vm.applicant=$event.target.value}}})])]):_vm._e(),_vm._v(" "),(_vm.level==2)?_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant_sec),expression:"applicant_sec"}],staticClass:"form-control",attrs:{"type":"text","readonly":_vm.level!=2,"required":""},domProps:{"value":(_vm.applicant_sec)},on:{"keyup":_vm.search_record_sec,"input":function($event){if($event.target.composing){ return; }_vm.applicant_sec=$event.target.value}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.dept_list[0].full_dept}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement_id),expression:"procurement_id"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.procurement_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.procurement_id=$event.target.value}}})])]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticClass:"row form-group",staticStyle:{"margin-left":"-1.26em","margin-right":"-1.26em"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"15%"}}),_vm._v(" "),(_vm.counter>=1)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 1\n                    "),_c('div',{staticClass:"fa fa-plus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.new_row(0);_vm.cal_sum()}}}),_vm._v(" "),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row(0);_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item "+_vm._s(n+1)+"\n                    "),_c('div',{staticClass:"fa fa-plus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.new_row(n);_vm.cal_sum()}}}),_vm._v(" "),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row(n);_vm.cal_sum()}}})])})],2)]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[0]),expression:"cat[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(0)}]}},[_vm._l((_vm.cat_list[0]),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)])])]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"100%"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[n]),expression:"cat[n]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, n, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(n)}]}},_vm._l((_vm.cat_list[n]),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),0)])])])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Nature")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[0]),expression:"nature[0]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[n]),expression:"nature[n]"}],staticClass:"form-control",attrs:{"maxlength":"100","rows":"2","required":""},domProps:{"value":(_vm.nature[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, n, $event.target.value)}}})])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Location")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[0]),expression:"loc[0]"}],staticClass:"form-control",attrs:{"multiple":"","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.loc_list),function(loc){return _c('option',[_vm._v(_vm._s(loc.code))])}),0)]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[n]),expression:"loc[n]"}],staticClass:"form-control",attrs:{"multiple":"","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.loc, n, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.loc_list),function(loc){return _c('option',[_vm._v(_vm._s(loc.code))])}),0)])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Reason for application")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[0]),expression:"reason[0]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[n]),expression:"reason[n]"}],staticClass:"form-control",attrs:{"rows":"2","maxlength":"100","required":""},domProps:{"value":(_vm.reason[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, n, $event.target.value)}}})])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Budget Plan Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[(_vm.cat[0]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","required":""},domProps:{"value":(_vm.bp[0])},on:{"keyup":function($event){return _vm.check_circular(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 0, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[0]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(0)}]}},_vm._l((_vm.bp_list[0]),function(bpl){return _c('option',{domProps:{"value":bpl.tag}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"100%"}},[(_vm.cat[n]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[n]),expression:"bp[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","required":""},domProps:{"value":(_vm.bp[n])},on:{"keyup":function($event){return _vm.check_circular(n)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, n, $event.target.value)}}}):_vm._e(),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[n]),expression:"bp[n]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, n, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(n)}]}},_vm._l((_vm.bp_list[n]),function(bpl){return _c('option',{domProps:{"value":bpl.tag}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0)])])])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Fund Source")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[(_vm.cat[0]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[0],"value":(_vm.fund[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 0, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[0]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list[0]),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"100%"}},[(_vm.cat[n]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[n]),expression:"fund[n]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[n],"value":(_vm.fund[n])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, n, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[n]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[n]),expression:"fund[n]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, n, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list[n]),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()])])])})],2),_vm._v(" "),((_vm.is_new_circular==true)&&((_vm.cat[0]=='Circular')||(_vm.cat[1]=='Circular')||(_vm.cat[2]=='Circular')))?_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular Amount HK$")]),_vm._v(" "),(_vm.cat[0]=='Circular'&&_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[0]),expression:"circular_val[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0/"},domProps:{"value":(_vm.circular_val[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.cat[1]=='Circular'&&_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[1]),expression:"circular_val[1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[1],"required":"","value":"0/"},domProps:{"value":(_vm.circular_val[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.cat[2]=='Circular'&&_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[2]),expression:"circular_val[2]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[2],"required":"","value":"0/"},domProps:{"value":(_vm.circular_val[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 2, $event.target.value)}}})]):_vm._e()]):_vm._e(),_vm._v(" "),((_vm.is_new_circular==true)&&((_vm.cat[0]=='Circular')||(_vm.cat[1]=='Circular')||(_vm.cat[2]=='Circular')))?_c('tr',{attrs:{"colspan":"100%"}},[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular (.pdf)")]),_vm._v(" "),_c('td',[_c('input',{ref:"circular_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","required":""},on:{"change":function($event){return _vm.addcircular_pdf()}}})])]):_vm._e(),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Amount HK$")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{style:({width:(1/(_vm.counter_src[0]+1)*100)+'%'})},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[0]),expression:"amount[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0"},domProps:{"value":(_vm.amount[0])},on:{"change":function($event){return _vm.cal_sum(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 0, $event.target.value)}}})])])]):_vm._e(),_vm._v(" "),_vm._l(((_vm.counter-1)),function(n){return _c('td',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"100%"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[n]),expression:"amount[n]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[n],"required":"","value":"0"},domProps:{"value":(_vm.amount[n])},on:{"change":function($event){return _vm.cal_sum(n)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, n, $event.target.value)}}})])])])})],2),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Support document (.pdf)")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{ref:"pdf_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","multiple":"","required":""},on:{"change":function($event){return _vm.addfile_pdf()}}})])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invoice),expression:"invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":""},domProps:{"value":(_vm.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.invoice=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticStyle:{"width":"15%","padding-left":"0.3%"}},[_vm._v("Recipient type :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"2em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"staff","required":""},domProps:{"checked":_vm._q(_vm.rtype,"staff")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="staff"}}}),_c('label',[_vm._v("Staff")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"1em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"company"},domProps:{"checked":_vm._q(_vm.rtype,"company")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="company"}}}),_c('label',[_vm._v("Company")])]),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0"}},[_c('label',{staticStyle:{"padding-top":"0.4em","padding-left":"0.55%","padding-right":"0","width":"30.45%"}},[_vm._v("Name of recipient :")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_rec),expression:"search_rec"}],staticClass:"form-control input col-8",attrs:{"type":"text","required":""},domProps:{"value":(_vm.search_rec)},on:{"keyup":_vm.search_record,"input":function($event){if($event.target.composing){ return; }_vm.search_rec=$event.target.value}}})]),_vm._v(" "),(_vm.new_sup==true)?_c('div',{staticStyle:{"padding-top":"0.4em"}},[_c('div',{staticClass:"col-6",staticStyle:{"display":"flex","flex-direction":"row","width":"100%","padding-left":"0"}},[_c('div',{staticClass:"col-8",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_address),expression:"company_address"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Address","required":""},domProps:{"value":(_vm.company_address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_address=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0","padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_contact),expression:"company_contact"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Company Contact","required":""},domProps:{"value":(_vm.company_contact)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_contact=$event.target.value}}})])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[((_vm.current_user_name==_vm.applicant_sec)||(_vm.level!=2))?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[(_vm.signed==false)?_c('div',{staticClass:"col-6",staticStyle:{"padding-left":"0"}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row","padding-left":"0"}},[_c('label',{staticStyle:{"width":"30.45%","padding-top":"0.4em","padding-left":"0.55%","padding-right":"0"}},[_vm._v("    \n                            Security Code : \n                        ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control col-5",attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control col-3",staticStyle:{"padding-left":"0"},attrs:{"type":"button"},on:{"click":_vm.post_ssc}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em","margin-top":"2.5em"}},[_vm._v("    \n                        Signature \n                    ")]),_vm._v(" "),_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_data[0].signature}})]):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-control-label",staticStyle:{"margin-left":"auto","margin-top":"2.5em"}},[_c('b',[_vm._v("Total Amount in HK$: "+_vm._s(_vm.sum))])])]):_vm._e()])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_vm._m(5),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n        ")])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record_sec)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user_sec(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,2693139455)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,1258826261)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_circular)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.circular_headers,"items":_vm.circular_list,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_circular(props.item.fundsrc)}}},[_c('td',[_c('a',{attrs:{"href":"","id":props.item.fundsrc},on:{"click":function($event){$event.preventDefault();return _vm.select_circular(props.item.fundsrc)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.fundsrc))])])]}}],null,false,2249847454)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Committee / Department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Procurement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"font-size":"0.85em","color":"rgba(0,0,0,0.7)"}},[_vm._v("Description of Goods Purchased / Services Delivered:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n        ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_setup_vue__ = __webpack_require__(1232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_setup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_setup_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_setup_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_setup_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9594946_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recur_setup_vue__ = __webpack_require__(1487);
function injectStyle (ssrContext) {
  __webpack_require__(1485)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e9594946"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recur_setup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9594946_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recur_setup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=63.build.js.map