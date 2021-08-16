webpackJsonp([15],{

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

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _axios = __webpack_require__(266);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        var _ref;

        var tmr = document.getElementById('tmr_date').value;
        return _ref = {
            circular_pdf: '',
            is_new_circular: false,
            checking: 0,
            circular_val: [0, 0, 0],
            circular_list: [],
            hv_circular: false,
            circular_headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Circular Code', value: 'fundsrc', sortable: false }],
            processing: false,
            my_name: '',
            invoice: '',
            tag: '',
            counter_old: 0,
            period: '',
            dept_list: [],
            sub_dept_list: [],
            asset_list: [],
            fund_list: [],
            check_num: true,
            fetchdata: [],
            fetch_max: [],
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
            //table
            //sign
            amount_old: [],
            cat_old: [],
            fund_old: [],
            bp_old: []
        }, (0, _defineProperty3.default)(_ref, 'bp_tag', []), (0, _defineProperty3.default)(_ref, 'sign_data', []), (0, _defineProperty3.default)(_ref, 'fund_cost', []), (0, _defineProperty3.default)(_ref, 'loc_list', []), (0, _defineProperty3.default)(_ref, 'bp_list', []), (0, _defineProperty3.default)(_ref, 'bp_list_0', []), (0, _defineProperty3.default)(_ref, 'bp_list_1', []), (0, _defineProperty3.default)(_ref, 'bp_list_2', []), (0, _defineProperty3.default)(_ref, 'fund_list_0', []), (0, _defineProperty3.default)(_ref, 'fund_list_1', []), (0, _defineProperty3.default)(_ref, 'fund_list_2', []), (0, _defineProperty3.default)(_ref, 'cat_list', []), (0, _defineProperty3.default)(_ref, 'recep_data', []), (0, _defineProperty3.default)(_ref, 'fund_max', []), (0, _defineProperty3.default)(_ref, 'fund_max_ini', []), (0, _defineProperty3.default)(_ref, 'counter', 1), (0, _defineProperty3.default)(_ref, 'applicant_sec', ''), (0, _defineProperty3.default)(_ref, 'hv_record_sec', false), (0, _defineProperty3.default)(_ref, 'pdf', ''), (0, _defineProperty3.default)(_ref, 'level', 0), (0, _defineProperty3.default)(_ref, 'message', ''), (0, _defineProperty3.default)(_ref, 'user_check', ''), (0, _defineProperty3.default)(_ref, 'signed', false), (0, _defineProperty3.default)(_ref, 'sign_img', ''), (0, _defineProperty3.default)(_ref, 'rtype', ''), (0, _defineProperty3.default)(_ref, 'search_rec', ''), (0, _defineProperty3.default)(_ref, 'hv_record', false), (0, _defineProperty3.default)(_ref, 'headers', [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }]), _ref;
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
        await _axios2.default.get('Procurement/department/backend/dept_member.php').then(function (response) {
            _this.dept_list = response.data;
            _this.dept = _this.dept_list[0].department;
        });
        await _axios2.default.get('../user_info.php').then(function (response) {
            _this.my_name = response.data[1];
        });
        await _axios2.default.get('Procurement/shared_backend/location.php').then(function (response) {
            _this.loc_list = response.data;
        });

        var formData = new FormData();
        var tag = document.getElementById('tmp_id').value;
        var st = document.getElementById('st_tmp').value;
        var ed = document.getElementById('ed_tmp').value;
        formData.append('tag', tag);
        formData.append('st', st);
        formData.append('ed', ed);
        var i = 0;
        await _axios2.default.post('Procurement/reimbursement/backend/edit_reimb.php', formData).then(function (response) {
            _this.fetchdata = response.data;
            _this.dept = _this.fetchdata[0].dept_full;
            _this.counter = Number(_this.fetchdata[0].counter);
            _this.counter_old = Number(_this.fetchdata[0].counter);
            _this.applicant = _this.fetchdata[0].app_id;
            _this.applicant_sec = _this.fetchdata[0].app_id;
            _this.tag = _this.fetchdata[0].tag;
            _this.period = _this.fetchdata[0].period;
            _this.signed = false;
            _this.rtype = _this.fetchdata[0].receiver_type;
            _this.search_rec = _this.fetchdata[0].receiver_name;
            _this.invoice = _this.fetchdata[0].invoice_num;
            for (i = 0; i < _this.counter; i++) {
                _this.cat[i] = _this.fetchdata[i].asset_full;
                _this.cat_old[i] = _this.fetchdata[i].asset_cat;
                _this.nature[i] = _this.fetchdata[i].nature;
                _this.loc[i] = _this.fetchdata[i].location;
                _this.reason[i] = _this.fetchdata[i].reason;
                _this.bp_tag[i] = _this.fetchdata[i].budget_src;
                _this.bp_old[i] = _this.fetchdata[i].budget_src;
                _this.bp[i] = _this.fetchdata[i].bp_d;
                _this.fund[i] = _this.fetchdata[i].fundsrc;
                _this.fund_old[i] = _this.fetchdata[i].fundsrc;
                _this.amount[i] = _this.fetchdata[i].amount;
                _this.amount_old[i] = _this.fetchdata[i].amount;
            };
            _this.sum = _this.fetchdata[0].total;
        });
        var formData_cat = new FormData();
        formData_cat.append('dept', this.dept);
        await _axios2.default.post('Procurement/budget/backend/asset.php', formData_cat).then(function (response) {
            _this.cat_list = response.data;
        });
        //loop
        var k = 0;
        for (k = 0; k < this.counter_old; k++) {
            formData_cat.append('cat', this.cat[k]); //post item 1 only
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData_cat).then(function (response) {
                if (k == 0) {
                    _this.bp_list_0 = response.data;
                } else if (k == 1) {
                    _this.bp_list_1 = response.data;
                } else if (k == 2) {
                    _this.bp_list_2 = response.data;
                }
            });
            formData_cat.append('bp', this.bp[k]); //post item 1 only
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData_cat).then(function (response) {
                if (k == 0) {
                    _this.fund_list_0 = response.data;
                } else if (k == 1) {
                    _this.fund_list_1 = response.data;
                } else if (k == 2) {
                    _this.fund_list_2 = response.data;
                }
            });
        }
        //loop
        var formData_max = new FormData();
        var y = 0;
        for (y = 0; y < this.counter; y++) {
            formData_max.append('dept', this.dept);
            formData_max.append('counter', y);
            formData_max.append('period', this.period);
            formData_max.append('cat' + y, this.cat[y]);
            formData_max.append('bp_tag' + y, this.bp_tag[y]);
            formData_max.append('bp' + y, this.bp[y]);
            formData_max.append('fund' + y, this.fund[y]);
            await _axios2.default.post('Procurement/reimbursement/backend/cal_max.php', formData_max).then(function (response) {
                _this.fetch_max = response.data;
                _this.fund_max[y] = parseFloat(_this.fetch_max[0].fundcost) - parseFloat(_this.fetch_max[0].expense) + parseFloat(_this.amount[0]);
            });
            var formData_max = new FormData();
        };

        this.ready = true;
        //asset category of department   
    },
    mounted: async function mounted() {
        //asset category of department   

    },

    methods: {
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
        return_prev: function return_prev() {
            this.$router.go(-1);
        },
        load_supdept: function load_supdept(event) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('dept', this.budget.dept);
            _axios2.default.post('Procurement/budget/backend/subdept.php', formData).then(function (response) {
                _this3.sub_dept_list = response.data;
                if (_this3.sub_dept_list == '') {
                    _this3.display_sub = false;
                } else {
                    _this3.budget.sub = _this3.sub_dept_list[0].subdept_full;
                    _this3.display_sub = true;
                }
            });
            _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this3.asset_list = response.data;
                _this3.budget.cat = _this3.asset_list[0].name;
            });
            _axios2.default.post('Procurement/budget/backend/fund.php', formData).then(function (response) {
                _this3.fund_list = response.data;
                _this3.budget.fund[0] = _this3.fund_list[0].name;
            });
        },
        load_info: async function load_info(event) {
            var _this4 = this;

            //change dept update all
            var formData = new FormData();
            formData.append('dept', this.dept);
            await _axios2.default.post('Procurement/budget/backend/asset.php', formData).then(function (response) {
                _this4.cat_list = response.data;
                var i = 0;
                for (i = 0; i < 3; i++) {
                    _this4.cat[i] = _this4.cat_list[0].name;
                }
            });
            formData.append('cat', this.cat[0]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                _this4.bp_list_0 = response.data;
                _this4.bp_list_1 = response.data;
                _this4.bp_list_2 = response.data;
                _this4.bp[0] = _this4.bp_list_0[0].description;
                _this4.bp_tag[0] = _this4.bp_list_0[0].tag;
                _this4.bp[1] = _this4.bp_list_1[0].description;
                _this4.bp_tag[1] = _this4.bp_list_1[0].tag;
                _this4.bp[2] = _this4.bp_list_2[0].description;
                _this4.bp_tag[2] = _this4.bp_list_2[0].tag;
            });
            formData.append('bp', this.bp[0]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData).then(function (response) {
                _this4.fund_list_0 = response.data;
                _this4.fund_list_1 = response.data;
                _this4.fund_list_2 = response.data;
                _this4.fund[0] = _this4.fund_list_0[0].fundsrc;
                _this4.fund_max[0] = parseFloat(_this4.fund_list_0[0].cost_total) - parseFloat(_this4.fund_list_0[0].expense);
                _this4.fund_max_ini[0] = _this4.fund_max[0];
                _this4.fund[1] = _this4.fund_list_1[0].fundsrc;
                _this4.fund_max[1] = parseFloat(_this4.fund_list_1[0].cost_total) - parseFloat(_this4.fund_list_1[0].expense);
                _this4.fund_max_ini[1] = _this4.fund_max[1];
                _this4.fund[2] = _this4.fund_list_2[0].fundsrc;
                _this4.fund_max[2] = parseFloat(_this4.fund_list_2[0].cost_total) - parseFloat(_this4.fund_list_2[0].expense);
                _this4.fund_max_ini[2] = _this4.fund_max[2];
            });
        },
        load_bp: function load_bp(event) {
            var _this5 = this;

            var target = '';
            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('cat', this.cat[event]);
            _axios2.default.post('Procurement/shared_backend/fetch_bp_item.php', formData).then(function (response) {
                if (response.data != '') {
                    if (event == 0) {
                        _this5.bp_list_0 = response.data;
                        _this5.fund_list_0 = response.data;
                        _this5.bp[0] = _this5.bp_list_0[0].description;
                        _this5.bp_tag[0] = _this5.bp_list_0[0].tag;
                        _this5.fund[0] = _this5.fund_list_0[0].fundsrc;
                        _this5.fund_max[0] = parseFloat(_this5.bp_list_0[0].cost_total) - parseFloat(_this5.bp_list_0[0].expense);
                        _this5.fund_max_ini[0] = _this5.fund_max[0];
                    } else if (event == 1) {
                        _this5.bp_list_1 = response.data;
                        _this5.fund_list_1 = response.data;
                        _this5.bp[1] = _this5.bp_list_1[0].description;
                        _this5.bp_tag[1] = _this5.bp_list_1[0].tag;
                        _this5.fund[1] = _this5.fund_list_1[0].fundsrc;
                        _this5.fund_max[1] = parseFloat(_this5.bp_list_1[0].cost_total) - parseFloat(_this5.bp_list_1[0].expense);
                        _this5.fund_max_ini[1] = _this5.fund_max[1];
                    } else if (event == 2) {
                        _this5.bp_list_2 = response.data;
                        _this5.fund_list_2 = response.data;
                        _this5.bp[2] = _this5.bp_list_2[0].description;
                        _this5.bp_tag[2] = _this5.bp_list_2[0].tag;
                        _this5.fund[2] = _this5.fund_list_2[0].fundsrc;
                        _this5.fund_max[2] = parseFloat(_this5.bp_list_2[0].cost_total) - parseFloat(_this5.bp_list_2[0].expense);
                        _this5.fund_max_ini[2] = _this5.fund_max[2];
                    };
                    _this5.new_bp(event);
                } else {
                    _this5.fund[event] = '';
                    _this5.bp[event] = '';
                }
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
                    _this6.sign_img = response.data[0].signature;
                }
            });
            console.log(this.signed);
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
        select_user: function select_user(event) {
            this.search_rec = event;
            this.hv_record = false;
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
                    } else {
                        _this8.recep_data = response.data;
                        _this8.recep_data.username = response.data.username;
                        _this8.recep_data.name = response.data.name;
                        _this8.hv_record = true;
                    }
                });
            }
        },
        clr: function clr(event) {
            this.search_rec = '';
            this.hv_record = false;
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
        new_bp: async function new_bp(event) {
            var _this9 = this;

            var formData = new FormData();
            formData.append('dept', this.dept);
            formData.append('cat', this.cat[event]);
            formData.append('bp', this.bp[event]);
            await _axios2.default.post('Procurement/shared_backend/fetch_bp_fund.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                if (event == 0) {
                    _this9.fund_list_0 = response.data;
                    _this9.fund[0] = _this9.fund_list_0[0].fundsrc;
                    _this9.fund_max[0] = parseFloat(_this9.fund_list_0[0].cost_total) - parseFloat(_this9.fund_list_0[0].expense);
                    _this9.fund_max_ini[0] = _this9.fund_max[0];
                    _this9.circular_val[0] = parseFloat(_this9.fund_list_0[0].cost_total);
                } else if (event == 1) {
                    _this9.fund_list_1 = response.data;
                    _this9.fund[1] = _this9.fund_list_1[0].fundsrc;
                    _this9.fund_max[1] = parseFloat(_this9.fund_list_1[0].cost_total) - parseFloat(_this9.fund_list_1[0].expense);
                    _this9.fund_max_ini[1] = _this9.fund_max[1];
                    _this9.circular_val[1] = parseFloat(_this9.fund_list_1[1].cost_total);
                } else if (event == 2) {
                    _this9.fund_list_2 = response.data;
                    _this9.fund[2] = _this9.fund_list_2[0].fundsrc;
                    _this9.fund_max[2] = parseFloat(_this9.fund_list_2[0].cost_total) - parseFloat(_this9.fund_list_2[0].expense);
                    _this9.fund_max_ini[2] = _this9.fund_max[2];
                    _this9.circular_val[2] = parseFloat(_this9.fund_list_2[2].cost_total);
                }
            });
        },
        handleSubmit: async function handleSubmit(event) {
            var _this10 = this;

            if (this.my_name == this.applicant) {
                if (this.signed) {
                    var formData = new FormData();
                    var i = 0;
                    var count_files = 0;
                    formData.append('applicant', this.applicant);
                    formData.append('dept', this.dept);
                    formData.append('tag', this.tag);
                    formData.append('period', this.period);
                    formData.append('invoice', this.invoice);
                    formData.append('new_circular', this.is_new_circular);
                    //counter loop
                    for (i = 0; i < this.counter; i++) {
                        formData.append('circular_max' + i, this.circular_val[i]);
                        formData.append('asset_cat' + i, this.cat[i]);
                        formData.append('nature' + i, this.nature[i]);
                        formData.append('location' + i, this.loc[i]);
                        formData.append('reason' + i, this.reason[i]);
                        formData.append('bp' + i, this.bp[i]);
                        formData.append('fundsrc' + i, this.fund[i]);
                        formData.append('amount' + i, this.amount[i]);
                        formData.append('amount_old' + i, this.amount_old[i]);
                        formData.append('cat_old' + i, this.cat_old[i]);
                        formData.append('fund_old' + i, this.fund_old[i]);
                        formData.append('bp_old' + i, this.bp_old[i]);
                    }
                    formData.append('circular_pdf', this.circular_pdf);
                    formData.append('count_files', count_files);
                    //counter loop
                    formData.append('total', this.sum);
                    formData.append('r_type', this.rtype);
                    formData.append('r_name', this.search_rec);
                    formData.append('sign_stat', "true");
                    formData.append('counter', this.counter);
                    formData.append('counter_old', this.counter_old);
                    this.processing = true;
                    await _axios2.default.post('Procurement/reimbursement/backend/update_edited_reimb_record.php', formData).then(function (response) {
                        _this10.$alert('Successfully submitted record').then(function () {
                            _this10.processing = false;
                            _this10.$router.push('view_record');
                        });
                    });
                } else {
                    this.$alert('Please Sign the form !');
                }
            } else if (this.level == 2 && this.my_name != this.applicant && this.signed == false) {
                var formData = new FormData();
                var i = 0;
                var count_files = 0;
                formData.append('tag', this.tag);
                formData.append('period', this.period);
                formData.append('applicant', this.applicant_sec);
                formData.append('dept', this.dept);
                formData.append('invoice', this.invoice);
                formData.append('new_circular', this.is_new_circular);
                //counter loop
                for (i = 0; i < this.counter; i++) {
                    formData.append('circular_max' + i, this.circular_val[i]);
                    formData.append('asset_cat' + i, this.cat[i]);
                    formData.append('nature' + i, this.nature[i]);
                    formData.append('location' + i, this.loc[i]);
                    formData.append('reason' + i, this.reason[i]);
                    formData.append('bp' + i, this.bp[i]);
                    formData.append('fundsrc' + i, this.fund[i]);
                    formData.append('amount' + i, this.amount[i]);
                    formData.append('amount_old' + i, this.amount_old[i]);
                    formData.append('cat_old' + i, this.cat_old[i]);
                    formData.append('fund_old' + i, this.fund_old[i]);
                    formData.append('bp_old' + i, this.bp_old[i]);
                }
                formData.append('circular_pdf', this.circular_pdf);
                formData.append('count_files', count_files);
                //counter loop
                formData.append('total', this.sum);
                formData.append('r_type', this.rtype);
                formData.append('r_name', this.search_rec);
                formData.append('sign_stat', "false");
                formData.append('counter', this.counter);
                formData.append('counter_old', this.counter_old);
                this.processing = true;
                await _axios2.default.post('Procurement/reimbursement/backend/update_edited_reimb_record.php', formData).then(function (response) {
                    _this10.$alert('Successfully submitted record').then(function () {
                        _this10.processing = false;
                    });
                    _this10.$router.push('view_record');
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

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1456);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("43f2cdbe", content, true, {});

/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-d0c499d0]{background-color:transparent;border-left:0}input[type=date][data-v-d0c499d0]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.px0[data-v-d0c499d0]{padding-left:0;padding-right:0}.flex[data-v-d0c499d0]{display:flex;flex-direction:row}", ""]);

// exports


/***/ }),

/***/ 1457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-9 col-md-9"},[_c('div',[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Edit Reimbursement Record - "+_vm._s(_vm.tag))])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.applicant),expression:"applicant"}],staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":(_vm.applicant)},on:{"input":function($event){if($event.target.composing){ return; }_vm.applicant=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dept),expression:"dept"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.dept=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.load_info]}},_vm._l((_vm.dept_list),function(dep){return _c('option',[_vm._v(_vm._s(dep.department))])}),0)])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"row form-group",staticStyle:{"margin-left":"-1.26em","margin-right":"-1.26em"}},[_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"15%"}}),_vm._v(" "),(_vm.counter>=1)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 1"),_c('div',{staticClass:"fa fa-plus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.new_row();_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 2"),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row();_vm.cal_sum()}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('th',{staticStyle:{"font-size":"1.5em!important"}},[_vm._v("Item 3"),_c('div',{staticClass:"fa fa-minus",staticStyle:{"padding-top":"0.4em","padding-left":"0.8em","cursor":"pointer"},on:{"click":function($event){_vm.remove_row();_vm.cal_sum()}}})]):_vm._e()])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[0]),expression:"cat[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(0)}]}},[_vm._l((_vm.cat_list),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[1]),expression:"cat[1]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(1)}]}},[_vm._l((_vm.cat_list),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.cat[2]),expression:"cat[2]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.cat, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.load_bp(2)}]}},[_vm._l((_vm.cat_list),function(cat){return _c('option',[_vm._v(_vm._s(cat.name))])}),_vm._v(" "),_c('option',{domProps:{"value":'Circular'}},[_vm._v("Fee-collecting Circular")])],2)]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Nature")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[0]),expression:"nature[0]"}],staticClass:"form-control",attrs:{"rows":"2","required":""},domProps:{"value":(_vm.nature[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[1]),expression:"nature[1]"}],staticClass:"form-control",attrs:{"rows":"2","required":""},domProps:{"value":(_vm.nature[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.nature[2]),expression:"nature[2]"}],staticClass:"form-control",attrs:{"rows":"2","required":""},domProps:{"value":(_vm.nature[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.nature, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Location")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[0]),expression:"loc[0]"}],staticClass:"form-control",attrs:{"required":"","readonly":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[1]),expression:"loc[1]"}],staticClass:"form-control",attrs:{"required":"","readonly":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loc[2]),expression:"loc[2]"}],staticClass:"form-control",attrs:{"required":"","readonly":"","type":"text","placeholder":"Other location"},domProps:{"value":(_vm.loc[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loc, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Reason for application")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[0]),expression:"reason[0]"}],staticClass:"form-control",attrs:{"rows":"2","required":""},domProps:{"value":(_vm.reason[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[1]),expression:"reason[1]"}],staticClass:"form-control",attrs:{"rows":"2","required":""},domProps:{"value":(_vm.reason[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reason[2]),expression:"reason[2]"}],staticClass:"form-control",attrs:{"rows":"2","required":""},domProps:{"value":(_vm.reason[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.reason, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Budget Plan Category")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[(_vm.cat[0]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","required":""},domProps:{"value":(_vm.bp[0])},on:{"keyup":function($event){return _vm.check_circular(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 0, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[0]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[0]),expression:"bp[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(0)}]}},_vm._l((_vm.bp_list_0),function(bpl){return _c('option',{domProps:{"value":bpl.description}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[(_vm.cat[1]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[1]),expression:"bp[1]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","required":""},domProps:{"value":(_vm.bp[1])},on:{"keyup":function($event){return _vm.check_circular(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 1, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[1]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[1]),expression:"bp[1]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(1)}]}},_vm._l((_vm.bp_list_1),function(bpl){return _c('option',{domProps:{"value":bpl.description}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[(_vm.cat[2]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[2]),expression:"bp[2]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","required":""},domProps:{"value":(_vm.bp[2])},on:{"keyup":function($event){return _vm.check_circular(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.bp, 2, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[2]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.bp[2]),expression:"bp[2]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.bp, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.new_bp(2)}]}},_vm._l((_vm.bp_list_2),function(bpl){return _c('option',{domProps:{"value":bpl.description}},[_vm._v("("+_vm._s(bpl.tag)+") "+_vm._s(bpl.description))])}),0):_vm._e()]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Fund Source")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[(_vm.cat[0]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[0],"value":(_vm.fund[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 0, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[0]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[0]),expression:"fund[0]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list_0),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[(_vm.cat[1]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[1]),expression:"fund[1]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[1],"value":(_vm.fund[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 1, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[1]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[1]),expression:"fund[1]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list_1),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[(_vm.cat[2]=='Circular')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[2]),expression:"fund[2]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Circular Code","readonly":""},domProps:{"value":_vm.bp[2],"value":(_vm.fund[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.fund, 2, $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.cat[2]!='Circular')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.fund[2]),expression:"fund[2]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.fund, 2, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.fund_list_2),function(f){return _c('option',[_vm._v(_vm._s(f.fundsrc))])}),0):_vm._e()]):_vm._e()]),_vm._v(" "),((_vm.is_new_circular==true)&&((_vm.cat[0]=='Circular')||(_vm.cat[1]=='Circular')||(_vm.cat[2]=='Circular')))?_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular Amount HK$")]),_vm._v(" "),(_vm.cat[0]=='Circular'&&_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[0]),expression:"circular_val[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0","readonly":""},domProps:{"value":(_vm.circular_val[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.cat[1]=='Circular'&&_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[1]),expression:"circular_val[1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[1],"required":"","value":"0","readonly":""},domProps:{"value":(_vm.circular_val[1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.cat[2]=='Circular'&&_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.circular_val[2]),expression:"circular_val[2]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[2],"required":"","value":"0","readonly":""},domProps:{"value":(_vm.circular_val[2])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.circular_val, 2, $event.target.value)}}})]):_vm._e()]):_vm._e(),_vm._v(" "),((_vm.is_new_circular==true)&&((_vm.cat[0]=='Circular')||(_vm.cat[1]=='Circular')||(_vm.cat[2]=='Circular')))?_c('tr',{attrs:{"colspan":"100%"}},[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Circular (.pdf)")]),_vm._v(" "),_c('td',[_c('input',{ref:"circular_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"application/pdf","required":""},on:{"change":function($event){return _vm.addcircular_pdf()}}})])]):_vm._e(),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Amount HK$")]),_vm._v(" "),(_vm.counter>=1)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[0]),expression:"amount[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[0],"required":"","value":"0/"},domProps:{"value":(_vm.amount[0])},on:{"change":function($event){return _vm.cal_sum(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=2)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[1]),expression:"amount[1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[1],"required":"","value":"0/"},domProps:{"value":(_vm.amount[1])},on:{"change":function($event){return _vm.cal_sum(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 1, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(_vm.counter>=3)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount[2]),expression:"amount[2]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","max":_vm.fund_max[2],"required":"","value":"0/"},domProps:{"value":(_vm.amount[2])},on:{"change":function($event){return _vm.cal_sum(2)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.amount, 2, $event.target.value)}}})]):_vm._e()]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"15%","font-size":"1.75em!important","padding-left":"1.5em"}},[_vm._v("Invoice Number")]),_vm._v(" "),_c('td',{attrs:{"colspan":"100%"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invoice),expression:"invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Separate multiple invoice with ,","required":""},domProps:{"value":(_vm.invoice)},on:{"input":function($event){if($event.target.composing){ return; }_vm.invoice=$event.target.value}}})])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-2 px0"},[_vm._v("\n                        Recipient type :\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-6 flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"staff","required":""},domProps:{"checked":_vm._q(_vm.rtype,"staff")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="staff"}}}),_c('label',[_vm._v("Staff")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rtype),expression:"rtype"}],staticStyle:{"margin-left":"1em","margin-top":"0.2em"},attrs:{"type":"radio","name":"type_rec","value":"company"},domProps:{"checked":_vm._q(_vm.rtype,"company")},on:{"click":_vm.clr,"change":function($event){_vm.rtype="company"}}}),_c('label',[_vm._v("Company")])])]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 flex"},[_c('div',{staticClass:"col-2 px0"},[_vm._v("\n                        Name of recipient :\n                    ")]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search_rec),expression:"search_rec"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.search_rec)},on:{"keyup":_vm.search_record,"input":function($event){if($event.target.composing){ return; }_vm.search_rec=$event.target.value}}})])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[((_vm.signed==false)&&(this.my_name==this.applicant))?_c('div',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em"}},[_vm._v("    \n                            Signature Security Code : \n                        ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control",staticStyle:{"width":"10em","margin-right":"1em"},attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control",staticStyle:{"width":"10em"},attrs:{"type":"button"},on:{"click":_vm.post_ssc}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em","margin-top":"2.5em"}},[_vm._v("    \n                        Signature \n                    ")]),_vm._v(" "),_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_img}})]):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-control-label",staticStyle:{"margin-left":"auto","margin-top":"2.5em"}},[_c('b',[_vm._v("Total Amount in HK$: "+_vm._s(_vm.sum))])])])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit","disabled":_vm.processing}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.return_prev}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n        ")])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record_sec)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user_sec(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,2693139455)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])]}}],null,false,1258826261)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_circular)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.circular_headers,"items":_vm.circular_list,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_circular(props.item.fundsrc)}}},[_c('td',[_c('a',{attrs:{"href":"","id":props.item.fundsrc},on:{"click":function($event){$event.preventDefault();return _vm.select_circular(props.item.fundsrc)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.fundsrc))])])]}}],null,false,2249847454)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Name of Applicant")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Committee / Department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticStyle:{"font-size":"0.85em","color":"rgba(0,0,0,0.7)"}},[_vm._v("Description of Goods Purchased / Services Delivered:")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_reimb_record_vue__ = __webpack_require__(1222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_reimb_record_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_reimb_record_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_reimb_record_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_reimb_record_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0c499d0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_reimb_record_vue__ = __webpack_require__(1457);
function injectStyle (ssrContext) {
  __webpack_require__(1455)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d0c499d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_reimb_record_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0c499d0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_reimb_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=15.build.js.map