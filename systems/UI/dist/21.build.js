webpackJsonp([21],{

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(266);

var _axios2 = _interopRequireDefault(_axios);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
exports.default = {
    data: function data() {
        return {
            DQ_counter: 0,
            company_stat: [],
            user_type: ['teacher', 'teacher'],
            interval: null,
            scored_counter: 0,
            total_counter: 0,
            signed_combined: false,
            sub_header: '',
            signed_declar: false,
            iframe: '',
            sub_view: 'regular',
            user_rank: '',
            all_scored: false,
            phase: '',
            params: window.location.href.substr(window.location.href.indexOf('?')),
            ret_url_sign: '',
            sign_data: [],
            signed: false,
            pwd: '',
            message: '',
            scored: false,
            whoami: '',
            live_sign: false,
            isuser_list: [],
            inlist: false,
            is_sys_user: false,
            sign: '',
            score: [],
            sum: [],
            e3: false,
            score_rank: [],
            comp_list: [],
            company: [],
            counter_company: 0,
            principal_p: '',
            principal_k: '',
            fetch_list: [],
            isSET: false,
            counter_cat: 1,
            score_cat: [],
            score_percentage: [],
            display_tag: '',
            isTWQA: false,
            tender_list: [],
            isSSB: false,
            ready: false,
            ssb: '',
            teacher: [],
            counter_teacher: 1,
            principal: '',
            imc: '',
            imc_ssb: '',
            pta: '',
            sgm: '',
            sgm_list: [],
            form: false,
            header_text: 'Tender Meeting',
            proc_id: '',
            entry: 0,
            user_data: [],
            hv_user: false,
            teacher_selected: [],
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }],
            user_index: 0
        };
    },
    created: async function created() {
        this.create_load();
        this.ready = true;
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.interval);
    },

    methods: {
        DQ: function DQ(id) {
            var i = 0;
            var DQ_val = 0;
            for (i = 0; i < this.counter_company; i++) {
                if (this.company_stat[i] == 'DQ') {
                    DQ_val++;
                    var n = 0;
                    for (n = 0; n < this.cat_list.length; n++) {
                        this.score_rank[n][i] = 0;
                    }
                    this.sum[i] = 0;
                };
            }
            this.DQ_counter = DQ_val;
            this.cal_sum();
            this.$forceUpdate();
        },
        search_user: function search_user(n) {
            var _this = this;

            this.teacher_selected[n] = '';
            var formData = new FormData();
            formData.append('key', this.teacher[n]);
            _axios2.default.post('RequestPortal/backend/search_user_list.php', formData).then(function (response) {
                if (response.data == "Empty") {
                    _this.hv_user = false;
                } else {
                    _this.user_index = n;
                    _this.user_data = response.data;
                    _this.hv_user = true;
                }
            });
        },
        select_user: function select_user(event) {
            var i = this.user_index;
            this.teacher[i] = event.name;
            this.teacher_selected[i] = event.username;
            this.hv_user = false;
            this.$forceUpdate();
        },
        check_val: function check_val(x, y) {
            if (this.score_rank[x][y] == '') {
                this.score_rank[x][y] = 0;
            } else {
                this.score_rank[x][y] = '';
            }
            this.$forceUpdate();
        },
        reload_data: async function reload_data() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('proc_id', this.proc_id);
            await _axios2.default.post('Procurement/procurement/backend/allscored_check.php', formData).then(function (response) {
                if (response.data == 'yes') {
                    _this2.all_scored = true;
                }
            });
            await _axios2.default.post('Procurement/procurement/backend/wait_counter.php', formData).then(function (response) {
                _this2.scored_counter = response.data[0];
                _this2.total_counter = response.data[1];
            });
            await _axios2.default.post('Procurement/procurement/backend/inlist_tender_meeting.php', formData).then(function (response) {
                if (!(response.data == 'empty')) {
                    _this2.inlist = true;
                    _this2.isuser_list = response.data;
                    _this2.whoami = _this2.isuser_list[0].name;
                    _this2.user_rank = _this2.isuser_list[0].rank;
                    var scored = _this2.isuser_list[0].scored;
                    if (scored == 'true') {
                        _this2.scored = true;
                    }
                    var signed = _this2.isuser_list[0].sign_code;
                    if (!(signed.length == 0)) {
                        _this2.signed_declar = true;
                    }
                    var signed_combine = _this2.isuser_list[0].combined_sign;
                    if (signed_combine == 'true') {
                        _this2.signed_combined = true;
                    }
                    var i = 0;
                    for (i = 0; i < _this2.isuser_list.length; i++) {
                        if (_this2.isuser_list[i].rank == 'IMC Manager' || _this2.isuser_list[i].rank == 'PTA Representative') {
                            _this2.live_sign = true;
                        }
                    }
                } else if (_this2.isTWQA == false & response.data == 'empty') {
                    _this2.$alert('You are not invited to this tender meeting');
                    _this2.$router.go(-1);
                }
            });
            this.update_phase();
        },
        create_load: async function create_load() {
            var _this3 = this;

            this.proc_id = document.getElementById('tmp_id').value;
            var param = new URLSearchParams(this.params);
            if (param.has('proc_id')) {
                this.proc_id = param.get('proc_id');
            }
            var formData = new FormData();
            formData.append('proc_id', this.proc_id);
            await _axios2.default.post('Procurement/procurement/backend/attendence_list_fetch.php', formData).then(function (response) {
                var id = 0;
                if (!(response.data == 'empty')) {
                    _this3.fetch_list = response.data;
                    _this3.imc = _this3.fetch_list[id].name; //0    
                    _this3.principal = _this3.fetch_list[id + 1].name; //2
                    if (_this3.fetch_list[id + 2].rank == 'Principal(P)') {
                        _this3.principal_p = _this3.fetch_list[id + 2].name; //2(ssb)
                        _this3.principal_k = _this3.fetch_list[id + 3].name; //3(ssb)
                        id = id + 1;
                    } else {
                        _this3.pta = _this3.fetch_list[id + 2].name; //2(non ssb)
                    }
                    _this3.sgm = _this3.fetch_list[id + 3].username; //ssb:4 non-ssb:3
                    var i = id + 4;
                    _this3.counter_teacher = _this3.counter_teacher - 2;
                    var y = 0;
                    for (i = id + 4; i < _this3.fetch_list.length; i++) {
                        _this3.user_type[y] = _this3.fetch_list[i].rank;
                        _this3.teacher_selected[y] = _this3.fetch_list[i].username;
                        _this3.teacher[y] = _this3.fetch_list[i].name;
                        _this3.counter_teacher++;
                        y++;
                    }
                }
            });
            await _axios2.default.post('Procurement/procurement/backend/fetch_score_sheet.php', formData).then(function (response) {
                if (!(response.data == 'Empty')) {
                    _this3.cat_list = response.data;
                    var i = 0;
                    _this3.counter_cat = _this3.cat_list.length - 1;
                    for (i = 0; i < _this3.cat_list.length; i++) {
                        _this3.score_cat[i] = _this3.cat_list[i].category;
                        _this3.score_percentage[i] = _this3.cat_list[i].percentage;
                    }
                }
            });
            await _axios2.default.get('Procurement/procurement/backend/isTWQA.php').then(function (response) {
                if (response.data == 'exist') {
                    _this3.entry = 0;
                    _this3.isTWQA = true;
                }
            });
            await _axios2.default.post('Procurement/procurement/backend/allscored_check.php', formData).then(function (response) {
                if (response.data == 'yes') {
                    _this3.all_scored = true;
                }
            });
            await _axios2.default.post('Procurement/procurement/backend/inlist_tender_meeting.php', formData).then(function (response) {
                if (!(response.data == 'empty')) {
                    _this3.inlist = true;
                    _this3.isuser_list = response.data;
                    _this3.whoami = _this3.isuser_list[0].name;
                    _this3.user_rank = _this3.isuser_list[0].rank;
                    var scored = _this3.isuser_list[0].scored;
                    if (scored == 'true') {
                        _this3.scored = true;
                    }
                    var signed = _this3.isuser_list[0].sign_code;
                    if (!(signed.length == 0)) {
                        _this3.signed_declar = true;
                    }
                    var signed_combine = _this3.isuser_list[0].combined_sign;
                    if (signed_combine == 'true') {
                        _this3.signed_combined = true;
                    }
                    var i = 0;
                    for (i = 0; i < _this3.isuser_list.length; i++) {
                        if (_this3.isuser_list[i].rank == 'IMC Manager' || _this3.isuser_list[i].rank == 'PTA Representative') {
                            _this3.live_sign = true;
                        }
                    }
                } else if (_this3.isTWQA == false & response.data == 'empty') {
                    _this3.$alert('You are not invited to this tender meeting');
                    _this3.$router.go(-1);
                }
            });
            await _axios2.default.post('Procurement/procurement/backend/tender_meeting_isssb.php', formData).then(function (response) {
                _this3.tender_list = response.data;
                _this3.ssb = _this3.tender_list[0].ssb;
                _this3.display_tag = _this3.tender_list[0].display_tag;
                _this3.phase = _this3.tender_list[0].phase;
                if (_this3.ssb == 'yes') {
                    _this3.isSSB = true;
                } else {
                    _this3.isSSB = false;
                }
            });
            await _axios2.default.get('Procurement/procurement/backend/fetch_smg_list.php').then(function (response) {
                _this3.sgm_list = response.data;
            });
            var formData = new FormData();
            formData.append('proc_id', this.proc_id);
            await _axios2.default.post('Procurement/procurement/backend/wait_counter.php', formData).then(function (response) {
                _this3.scored_counter = response.data[0];
                _this3.total_counter = response.data[1];
            });
            this.loadData();
        },
        select_cat: async function select_cat(cat) {
            var _this4 = this;

            if (cat == 1) {
                if (this.isTWQA) {
                    this.header_text = 'Tender Declaration Setup';
                    this.form = true;
                    this.entry = cat;
                } else {
                    this.$alert('No Permission');
                }
            } else if (cat == 2) {
                if (this.isTWQA) {
                    this.header_text = 'Score Sheet Setup';
                    this.form = true;
                    this.entry = cat;
                } else {
                    this.$alert('No Permission');
                }
            } else if (cat == 3) {
                this.sub_header = ' > Enter Score';
                this.entry = cat;
                //fetch company + category info for score sheet 
                var formData = new FormData();
                formData.append('proc_id', this.proc_id);
                await _axios2.default.post('Procurement/procurement/backend/score_sheet_comp.php', formData).then(function (response) {
                    var i = 0;
                    var y = 0;
                    var offset = '';
                    if (!(response.data == 'empty')) {
                        _this4.comp_list = response.data;
                        var counter = _this4.comp_list.length;
                        for (i = 0; i < counter; i++) {
                            var check = _this4.comp_list[i].company_name;
                            if (offset.includes(check) == false) {
                                offset = offset + _this4.comp_list[i].company_name;
                                _this4.company[y] = _this4.comp_list[i].company_name;
                                _this4.company_stat[y] = 'active';
                                y++;
                            }
                        }
                        _this4.counter_company = y;
                    }
                });
                var l = 0;
                var c = 0;
                for (c = 0; c < this.cat_list.length; c++) {
                    this.score_rank[c] = [];
                    this.score[c] = [];
                    for (l = 0; l < this.counter_company; l++) {
                        this.score_rank[c][l] = 0;
                        this.score[c][l] = 0;
                    }
                }
                this.form = true;
                this.e3 = true;
                //fetch company + category info for score sheet 
            }
        },
        previous: async function previous() {
            if (this.entry > 0) {
                await this.reload_data();
                this.header_text = 'Tender Meeting';
                this.form = false;
                this.entry = 0;
                this.sub_view = 'regular';
                this.sub_header = '';
            } else {
                this.$router.go(-1);
            }
        },
        reload_score_sheet: function reload_score_sheet() {
            var _this5 = this;

            var formData = new FormData();
            formData.append('proc_id', this.proc_id);
            _axios2.default.post('Procurement/procurement/backend/fetch_score_sheet.php', formData).then(function (response) {
                if (!(response.data == 'Empty')) {
                    _this5.cat_list = response.data;
                    var i = 0;
                    _this5.counter_cat = _this5.cat_list.length - 1;
                    for (i = 0; i < _this5.cat_list.length; i++) {
                        _this5.score_cat[i] = _this5.cat_list[i].category;
                        _this5.score_percentage[i] = _this5.cat_list[i].percentage;
                    }
                }
            });
        },
        add: function add() {
            var i = this.counter_teacher + 1;
            if (this.user_type[i] == null || this.user_type[i] == undefined || this.user_type[i] == '') {
                this.user_type[i] = "teacher";
            }
            this.counter_teacher++;
        },
        open_full: function open_full() {
            window.open(this.iframe);
        },
        declar_form: function declar_form() {
            this.entry = 5;
            this.sub_view = 'declar';
            this.sub_header = ' > Declaration Form';
            var url = "src/Procurement/procurement/backend/declaration_form.php?proc_id=" + this.proc_id;
            this.iframe = url;
        },
        combined_score_sheet: function combined_score_sheet() {
            this.entry = 6;
            this.sub_view = 'combined';
            this.sub_header = ' > Combined Score Sheet';
            var url = "src/Procurement/procurement/backend/combined_score_sheet.php?proc_id=" + this.proc_id;
            this.iframe = url;
        },
        remove: function remove() {
            this.counter_teacher--;
        },
        add_cat: function add_cat() {
            if (this.counter_cat < 4) {
                this.counter_cat++;
            }
        },
        remove_cat: function remove_cat() {
            if (this.counter_cat > 1) {
                this.counter_cat--;
            }
        },
        cal_sum: function cal_sum() {
            var i = 0;
            var j = 0;
            var row_sum = [];
            //initialize setup
            for (i = 0; i < this.cat_list.length; i++) {
                row_sum[i] = 0;
                for (j = 0; j < this.counter_company; j++) {
                    if (this.score_rank[i][j] > 0) {
                        row_sum[i] = Number(row_sum[i]) + (this.counter_company - this.DQ_counter) - (Number(this.score_rank[i][j]) - 1);
                    }
                }
            }
            //initialize setup
            //calculation
            var x = 0;
            var y = 0;
            var sum_tmp = 0;

            for (x = 0; x < this.counter_company; x++) {
                if (this.company_stat[x] != 'DQ') {
                    var sum_tmp = 0;
                    this.sum[x] = 0;
                    for (y = 0; y < this.cat_list.length; y++) {
                        if (this.score_rank[y][x] > 0) {
                            sum_tmp = (this.counter_company - this.DQ_counter - (this.score_rank[y][x] - 1)) / row_sum[y];
                            sum_tmp = sum_tmp * Number(this.score_percentage[y]);
                        } else {
                            sum_tmp = 0;
                        }
                        this.sum[x] = this.sum[x] + sum_tmp;
                        this.sum[x] = Math.round(this.sum[x] * 100) / 100;
                    }
                } else {
                    this.sum[x] = 0;
                }
            }
            this.$forceUpdate();
            //calculation
        },
        undo: function undo() {
            if (this.sub_view == 'declar') {
                this.$refs.signaturePad_declar.undoSignature();
            } else if (this.sub_view == 'combined') {
                this.$refs.signaturePad_combine.undoSignature();
            } else {
                this.$refs.signaturePad.undoSignature();
            }
        },
        save: function save() {
            var _$refs$signaturePad$s = this.$refs.signaturePad.saveSignature(),
                isEmpty = _$refs$signaturePad$s.isEmpty,
                data = _$refs$signaturePad$s.data;

            if (isEmpty) {
                this.$alert('Signature board cannot be empty!');
            } else {
                this.sign = data;
            }
        },
        post_ssc: function post_ssc(event) {
            var _this6 = this;

            var formData = new FormData();
            formData.append('pwd', this.pwd);
            _axios2.default.post('Procurement/reimbursement/backend/check_sign.php', formData).then(function (response) {
                _this6.sign_data = response.data;
                if (response.data[0].signature == undefined) {
                    _this6.$alert(response.data).then(function () {
                        _this6.pwd = '';
                    });
                } else {
                    _this6.signed = true;
                    _this6.message = '';
                    _this6.pwd = '';
                }
            });
        },
        sign_declar_pw: function sign_declar_pw() {
            var _this7 = this;

            var formData = new FormData();
            formData.append('pw', this.pwd);
            formData.append('proc_id', this.proc_id);
            //if(confirm("Confirm signing declaration form?")==true){
            this.$confirm('Confirm signing declaration form?').then(function () {
                _axios2.default.post('Procurement/procurement/backend/sign_declar.php', formData).then(function (response) {
                    _this7.sign_data = response.data;
                    if (response.data == "Successfully Signed !") {
                        _this7.$alert(response.data);
                        _this7.reload_data();
                        _this7.message = '';
                        _this7.signed_declar = true;
                        _this7.sub_view = 'regular';
                        _this7.entry = 0;
                        _this7.sub_header = '';
                        _this7.pwd = '';
                        _this7.$forceUpdate();
                    } else {
                        _this7.message = response.data;
                    }
                });
            });
        },
        sign_combine_pw: function sign_combine_pw() {
            var _this8 = this;

            var formData = new FormData();
            formData.append('name', this.whoami);
            formData.append('pw', this.pwd);
            formData.append('proc_id', this.proc_id);
            //if(confirm("Confirm signing combined score sheet?")==true){
            this.$confirm('Confirm signing combined score sheet?').then(function () {
                _axios2.default.post('Procurement/procurement/backend/update_combine_sign_pw.php', formData).then(function (response) {
                    _this8.sign_data = response.data;
                    if (response.data == "Successfully Signed !") {
                        _this8.$alert(response.data);
                        _this8.reload_data();
                        _this8.update_phase();
                        _this8.message = '';
                        _this8.signed_combined = true;
                        /*
                        this.sub_view='regular';
                        this.entry=0;
                        this.sub_header='';
                        this.pwd='';
                        */
                        _this8.$forceUpdate();
                    } else {
                        _this8.message = response.data;
                    }
                });
            });
        },
        summary: function summary() {
            var url = "src/Procurement/procurement/backend/ret_stat_cat4.php?p_id=" + this.proc_id + "&name=" + this.whoami;
            window.open(url);
        },
        indv_score_sheet: function indv_score_sheet() {
            var url = "src/Procurement/procurement/backend/score_sheet_ind.php?proc_id=" + this.proc_id;
            window.open(url);
        },
        update_phase: function update_phase() {
            var _this9 = this;

            var formData = new FormData();
            formData.append('proc_id', this.proc_id);
            _axios2.default.post('Procurement/procurement/backend/tender_meeting_isssb.php', formData).then(function (response) {
                _this9.tender_list = response.data;
                _this9.phase = _this9.tender_list[0].phase;
            });
        },
        sign_declar: function sign_declar() {
            var _this10 = this;

            var _$refs$signaturePad_d = this.$refs.signaturePad_declar.saveSignature(),
                isEmpty = _$refs$signaturePad_d.isEmpty,
                data = _$refs$signaturePad_d.data;

            if (isEmpty) {
                this.$alert('Please Sign');
            } else {
                //if(confirm("Confirm signing declaration form?")==true){
                this.$confirm("Confirm signing declaration form?").then(function () {
                    _this10.sign = data;
                    var formData = new FormData();
                    formData.append('sign', _this10.sign);
                    formData.append('proc_id', _this10.proc_id);
                    _axios2.default.post('Procurement/procurement/backend/live_sign_attend_post.php', formData).then(function (response) {
                        if (response.data == "OK") {
                            _this10.update_phase();
                            _this10.reload_data();
                            _this10.$forceUpdate();
                            _this10.sub_view = 'regular';
                            _this10.signed_declar = true;
                            _this10.entry = 0;
                            _this10.sub_header = '';
                        } else {
                            _this10.$alert(response.data);
                        }
                    });
                });
            }
            //} 
        },
        loadData: function loadData() {
            var _this11 = this;

            if (this.scored_counter == this.total_counter) {
                clearInterval(this.interval);
            } else {
                this.interval = setInterval(function () {
                    var formData = new FormData();
                    formData.append('proc_id', _this11.proc_id);
                    _axios2.default.post('Procurement/procurement/backend/wait_counter.php', formData).then(function (response) {
                        _this11.scored_counter = response.data[0];
                        _this11.total_counter = response.data[1];
                    });
                }, 10000);
            }
        },
        sign_combine: function sign_combine() {
            var _this12 = this;

            var _$refs$signaturePad_c = this.$refs.signaturePad_combine.saveSignature(),
                isEmpty = _$refs$signaturePad_c.isEmpty,
                data = _$refs$signaturePad_c.data;

            if (isEmpty) {
                this.$alert('Please Sign');
            } else {
                this.sign = data;
                var formData = new FormData();
                formData.append('live', 'live');
                formData.append('access_name', this.whoami);
                formData.append('proc_id', this.proc_id);
                formData.append('sign_code', this.sign);
                _axios2.default.post('Procurement/procurement/backend/update_combine_sign_pw.php', formData).then(function (response) {
                    if (response.data == 'Successfully Signed !') {
                        _this12.$alert(response.data);
                        _this12.update_phase();
                        _this12.reload_data();
                        //this.entry=0;
                        _this12.$forceUpdate();
                        //this.entry=0;
                        _this12.signed_combined = true;
                        //this.sub_header='';                                                              
                    }
                });
            }
        },
        handleSubmit: function handleSubmit() {
            var _this13 = this;

            if (this.entry == 1) {
                //attendence list
                var formData = new FormData();
                formData.append('proc_id', this.proc_id);
                formData.append('manager', this.imc);
                formData.append('ssb', this.isSSB);
                if (this.isSSB == true) {
                    formData.append('principal_p', this.principal_p);
                    formData.append('principal_k', this.principal_k);
                } else {
                    formData.append('pta', this.pta);
                }
                formData.append('principal', this.principal);
                formData.append('sgm', this.sgm);
                formData.append('counter', this.counter_teacher);
                var i = 0;
                for (i = 0; i < this.counter_teacher + 1; i++) {
                    formData.append('usertype_' + i, this.user_type[i]);
                    formData.append('teacher_' + i, this.teacher_selected[i]);
                }
                var confirm_msg = "Confirm Submitting Declaration Form Name List?";
                //if(confirm(confirm_msg)){
                this.$confirm(confirm_msg).then(function () {
                    _axios2.default.post('Procurement/procurement/backend/attendence_setup.php', formData).then(function (response) {
                        if (response.data == 'OK') {
                            _this13.$alert('Successfully Submitted, Return to previous page');
                            _this13.$router.go(-1);
                        } else {
                            _this13.$alert(response.data);
                        }
                    });
                });
                //}
                //attendence list
            } else if (this.entry == 2) {
                var formData = new FormData();
                var i = 0;
                var check_p = 0;
                formData.append('proc_id', this.proc_id);
                formData.append('counter', this.counter_cat);
                for (i = 0; i < this.counter_cat + 1; i++) {
                    formData.append('cat_' + i, this.score_cat[i]);
                    formData.append('percent_' + i, this.score_percentage[i]);
                    check_p = check_p + Number(this.score_percentage[i]);
                }
                if (check_p == 100) {
                    _axios2.default.post('Procurement/procurement/backend/insert_score_sheet.php', formData).then(function (response) {
                        if (response.data == 'OK') {
                            _this13.reload_score_sheet();
                            _this13.reload_data();
                            _this13.sub_view = 'regular';
                            _this13.entry = 0;
                            _this13.sub_header = '';
                            _this13.scored = true;
                        } else {
                            _this13.$alert(response.data);
                        }
                    });
                } else {
                    this.$alert('Please Ensure Total Percentage Equals to 100');
                }
            } else if (this.entry == 3 && this.live_sign) {
                var _$refs$signaturePad$s2 = this.$refs.signaturePad.saveSignature(),
                    isEmpty = _$refs$signaturePad$s2.isEmpty,
                    data = _$refs$signaturePad$s2.data;

                if (isEmpty) {
                    this.$alert('Signature board cannot be empty!');
                } else {
                    var checksum = 0;
                    this.sign = data;
                    var formData = new FormData();
                    var i = 0;
                    var j = 0;
                    formData.append('sign_code', this.sign);
                    formData.append('user_rank', this.user_rank);
                    formData.append('proc_id', this.proc_id);
                    formData.append('name', this.whoami);
                    formData.append('counter_cat', this.cat_list.length);
                    formData.append('counter_comp', this.counter_company);
                    for (i = 0; i < this.counter_company; i++) {
                        formData.append('company_' + i, this.company[i]);
                        for (j = 0; j < this.cat_list.length; j++) {
                            formData.append('com_' + i + '_cat_' + j, this.score_rank[j][i]);
                        }
                        checksum = checksum + this.sum[i];
                        formData.append('sum_' + i, this.sum[i]);
                    }
                    if (checksum > 99) {
                        this.$confirm('Confirm submitting individual score sheet?').then(function () {
                            _axios2.default.post('Procurement/procurement/backend/insert_personal_score.php', formData).then(function (response) {
                                if (response.data == 'OK') {
                                    _this13.$alert('Successfully Submitted Score Sheet');
                                    var url = "src/Procurement/procurement/backend/combined_score_sheet.php?proc_id=" + _this13.proc_id;
                                    _this13.iframe = url;
                                    _this13.reload_data();
                                    _this13.sub_view = 'combined';
                                } else {
                                    _this13.$alert(response.data);
                                }
                            });
                        });
                    } else {
                        this.$alert("Please Input all ranks");
                    }
                }
            } else if (this.entry == 3 && this.live_sign == false) {
                var checksum = 0;
                if (this.signed) {
                    var formData = new FormData();
                    var i = 0;
                    var j = 0;
                    formData.append('sign_code', this.sign_data[0].signature);
                    formData.append('proc_id', this.proc_id);
                    formData.append('name', this.whoami);
                    formData.append('user_rank', this.user_rank);
                    formData.append('counter_cat', this.cat_list.length);
                    formData.append('counter_comp', this.counter_company);
                    for (i = 0; i < this.counter_company; i++) {
                        formData.append('company_' + i, this.company[i]);
                        for (j = 0; j < this.cat_list.length; j++) {
                            formData.append('com_' + i + '_cat_' + j, this.score_rank[j][i]);
                        }
                        checksum = checksum + this.sum[i];
                        formData.append('sum_' + i, this.sum[i]);
                    }
                    if (checksum > 99) {
                        _axios2.default.post('Procurement/procurement/backend/insert_personal_score.php', formData).then(function (response) {
                            if (response.data == 'OK') {
                                _this13.$alert('Successfully Submitted Score Sheet');
                                var url = "src/Procurement/procurement/backend/combined_score_sheet.php?proc_id=" + _this13.proc_id;
                                _this13.iframe = url;
                                _this13.reload_data();
                                _this13.sub_view = 'combined';
                            } else {
                                _this13.$alert(response.data);
                            }
                        });
                    } else {
                        this.$alert("Please Input all ranks");
                    }
                    this.signed = false;
                    this.$forceUpdate();
                } else {
                    this.$alert('Please Sign');
                }
            }
        }
    }

};

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1519);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("e756c832", content, true, {});

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".unassign[data-v-07545e0b]{background-color:#ff0}.input-group-addon[data-v-07545e0b]{background-color:transparent;border-left:0}input[type=date][data-v-07545e0b]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}", ""]);

// exports


/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("ca810c1e", content, true, {});

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#signature{border:3px double transparent;border-radius:5px;background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#4bc5e8,#9f6274);background-origin:border-box;background-clip:content-box,border-box}.company_name{text-align:center;margin-left:2.5%;margin-right:2.5%}", ""]);

// exports


/***/ }),

/***/ 1522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticClass:"col-xs-12 col-md-12"},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('strong',[_vm._v(_vm._s(_vm.header_text)+" - "+_vm._s(_vm.proc_id)+" "+_vm._s(_vm.sub_header))])])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block",staticStyle:{"padding":"0 0 0 0"}},[(_vm.entry==0)?_c('div',[_c('div',[(_vm.isTWQA)?_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b_view",on:{"click":function($event){return _vm.select_cat(1)}}},[_vm._m(0)])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b2",on:{"click":function($event){return _vm.declar_form()}}},[_vm._m(1)])])]),_vm._v(" "),(_vm.isTWQA)?_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b_view",on:{"click":function($event){return _vm.select_cat(2)}}},[_vm._m(2)])])]):_vm._e(),_vm._v(" "),((!_vm.scored)&&!(_vm.user_rank=='teacher')&&!(_vm.user_rank=='staff'))?_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b3",on:{"click":function($event){return _vm.select_cat(3)}}},[_vm._m(3)])])]):_vm._e(),_vm._v(" "),(_vm.scored)?_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b4",on:{"click":function($event){return _vm.combined_score_sheet()}}},[_vm._m(4)])])]):_vm._e(),_vm._v(" "),(_vm.all_scored)?_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b_ssb",on:{"click":function($event){return _vm.indv_score_sheet()}}},[_vm._m(5)])])]):_vm._e()]),_vm._v(" "),((_vm.phase=='Scored')||(_vm.phase=='Signed_lpg'))?_c('div',{staticClass:"vertical_card",staticStyle:{"margin-left":"5%","margin-right":"5%"}},[_c('div',{staticStyle:{"padding-top":"1vh","padding-bottom":"1vh","padding-left":"1vh","padding-right":"1vh"}},[_c('div',{staticClass:"ret_wrapper b_view",on:{"click":function($event){return _vm.summary()}}},[_vm._m(6)])])]):_vm._e()]):_vm._e(),_vm._v(" "),((_vm.entry==1)&&(_vm.sub_view=='regular'))?_c('div',{staticClass:"inner_card_bd"},[_c('h3',[_vm._v("Select Participant for tender meeting id: "+_vm._s(_vm.display_tag)+" ")]),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.imc),expression:"imc"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Full name of IMC Manager"},domProps:{"value":(_vm.imc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.imc=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.principal),expression:"principal"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Full name of Principal","readonly":""},domProps:{"value":(_vm.principal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.principal=$event.target.value}}})])]),_vm._v(" "),(_vm.isSSB)?_c('div',{staticClass:"row form-group"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.principal_p),expression:"principal_p"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Full name of Principal (Primany)"},domProps:{"value":(_vm.principal_p)},on:{"input":function($event){if($event.target.composing){ return; }_vm.principal_p=$event.target.value}}})])]):_vm._e(),_vm._v(" "),(_vm.isSSB)?_c('div',{staticClass:"row form-group"},[_vm._m(10),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.principal_k),expression:"principal_k"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Full name of Principal (Kindergarden)"},domProps:{"value":(_vm.principal_k)},on:{"input":function($event){if($event.target.composing){ return; }_vm.principal_k=$event.target.value}}})])]):_vm._e(),_vm._v(" "),(!_vm.isSSB)?_c('div',{staticClass:"row form-group"},[_vm._m(11),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pta),expression:"pta"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Full name of PTA Representative"},domProps:{"value":(_vm.pta)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pta=$event.target.value}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(12),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sgm),expression:"sgm"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sgm=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.sgm_list),function(s){return _c('option',{domProps:{"value":s.username}},[_vm._v(_vm._s(s.name))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.user_type[0]),expression:"user_type[0]"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.user_type, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"teacher"}},[_vm._v("Teacher")]),_vm._v(" "),_c('option',{attrs:{"value":"staff"}},[_vm._v("Staff")])])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.teacher[0]),expression:"teacher[0]"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.teacher[0])},on:{"keyup":function($event){return _vm.search_user(0)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.teacher, 0, $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.add}},[_vm._v("Add Teacher")])])]),_vm._v(" "),_vm._l((_vm.counter_teacher),function(n){return _c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.user_type[n]),expression:"user_type[n]"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.user_type, n, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"teacher"}},[_vm._v("Teacher")]),_vm._v(" "),_c('option',{attrs:{"value":"staff"}},[_vm._v("Staff")])])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.teacher[n]),expression:"teacher[n]"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.teacher[n])},on:{"keyup":function($event){return _vm.search_user(n)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.teacher, n, $event.target.value)}}})]),_vm._v(" "),(n>1)?_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control button",attrs:{"type":"button"},on:{"click":_vm.remove}},[_vm._v("Remove")])]):_vm._e()])})],2):_vm._e(),_vm._v(" "),((_vm.entry==2)&&(_vm.sub_view=='regular'))?_c('div',{staticClass:"inner_card_bd"},[_c('br'),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-8"}),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control button",staticStyle:{"color":"green"},attrs:{"type":"button"},on:{"click":function($event){return _vm.add_cat()}}},[_c('b',[_vm._v("Add")])])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('button',{staticClass:"form-control button",staticStyle:{"color":"red"},attrs:{"type":"button"},on:{"click":function($event){return _vm.remove_cat()}}},[_c('b',[_vm._v("Remove")])])])])]),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-8",staticStyle:{"padding-left":"0"}},[_c('label',[_vm._v("Enter Score Category")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.score_cat[0]),expression:"score_cat[0]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Category Description"},domProps:{"value":(_vm.score_cat[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.score_cat, 0, $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Enter Percentage (%)")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.score_percentage[0]),expression:"score_percentage[0]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01"},domProps:{"value":(_vm.score_percentage[0])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.score_percentage, 0, $event.target.value)}}})])])]),_vm._v(" "),_vm._l((_vm.counter_cat),function(l){return _c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-8",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.score_cat[l]),expression:"score_cat[l]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Category Description"},domProps:{"value":(_vm.score_cat[l])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.score_cat, l, $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.score_percentage[l]),expression:"score_percentage[l]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01"},domProps:{"value":(_vm.score_percentage[l])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.score_percentage, l, $event.target.value)}}})])])])})],2):_vm._e(),_vm._v(" "),((_vm.entry>0)&&(this.sub_view=='declar'))?_c('div',{staticClass:"inner_card_bd"},[_c('h3',[_vm._v("Sign Declaration Form: "+_vm._s(_vm.display_tag)+" below : ")]),_c('br'),_vm._v(" "),((_vm.live_sign)&&(_vm.signed_declar==false))?_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"2em"}},[_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('VueSignaturePad',{ref:"signaturePad_declar",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",attrs:{"type":"button"},on:{"click":_vm.undo}},[_vm._v("\r\n                                    Undo\r\n                                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",attrs:{"type":"submit"},on:{"click":_vm.sign_declar}},[_vm._v("\r\n                                    Sign\r\n                                ")])])],1),_vm._v(" "),_c('div',{staticClass:"col-3"})]):_vm._e(),_vm._v(" "),(!(_vm.live_sign)&&(_vm.signed_declar==false))?_c('div',{staticClass:"col-8",staticStyle:{"margin-top":"2em"}},[_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[(_vm.signed==false)?_c('div',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em"}},[_vm._v("    \r\n                                        Signature Security Code : \r\n                                    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control",staticStyle:{"width":"10em","margin-right":"1em"},attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control",staticStyle:{"width":"10em"},attrs:{"type":"button"},on:{"click":_vm.sign_declar_pw}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em","margin-top":"2.5em"}},[_vm._v("    \r\n                                    Signature \r\n                                ")]),_vm._v(" "),_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_data[0].signature}})]):_vm._e()])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-bottom":"1em"}},[_c('div',{staticClass:"col-2",staticStyle:{"padding-left":"0"}},[_c('button',{staticClass:"form-control col-10",on:{"click":_vm.open_full}},[_vm._v("View Form")])])]),_vm._v(" "),_c('div',{staticClass:"col-12 framewrapper"},[_c('div',{staticClass:"col-12 scroll_frame",staticStyle:{"height":"100%!important","width":"100%!important","padding-left":"0","padding-right":"0"}},[_c('iframe',{staticClass:"col-12 ios_frame",staticStyle:{"height":"100%!important","width":"100%!important","padding-left":"0","padding-right":"0"},attrs:{"src":_vm.iframe}}),_c('br')])])])]):_vm._e(),_vm._v(" "),((_vm.entry>0)&&(this.sub_view=='combined'))?_c('div',{staticClass:"inner_card_bd"},[(_vm.scored_counter==_vm.total_counter)?_c('div',[_c('h3',[_vm._v("Sign Combined Score Sheet: "+_vm._s(_vm.display_tag)+" below : ")])]):_vm._e(),_vm._v(" "),(!(_vm.scored_counter==_vm.total_counter))?_c('div',[_c('h3',[_vm._v("Combined Score Sheet: "+_vm._s(_vm.display_tag)+" - Please Wait for All Members to Submit Scores")])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),((_vm.live_sign)&&(_vm.signed_combined==false)&&(_vm.scored_counter==_vm.total_counter))?_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"2em"}},[_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('VueSignaturePad',{ref:"signaturePad_combine",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",attrs:{"type":"button"},on:{"click":_vm.undo}},[_vm._v("\r\n                                    Undo\r\n                                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",attrs:{"type":"submit"},on:{"click":_vm.sign_combine}},[_vm._v("\r\n                                    Sign\r\n                                ")])])],1),_vm._v(" "),_c('div',{staticClass:"col-3"})]):_vm._e(),_vm._v(" "),(!(_vm.live_sign)&&(_vm.signed_combined==false)&&(_vm.scored_counter==_vm.total_counter))?_c('div',{staticClass:"col-8",staticStyle:{"margin-top":"2em"}},[_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[(_vm.signed==false)?_c('div',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em"}},[_vm._v("    \r\n                                        Signature Security Code : \r\n                                    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control",staticStyle:{"width":"10em","margin-right":"1em"},attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control",staticStyle:{"width":"10em"},attrs:{"type":"button"},on:{"click":_vm.sign_combine_pw}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em","margin-top":"2.5em"}},[_vm._v("    \r\n                                    Signature \r\n                                ")]),_vm._v(" "),_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_data[0].signature}})]):_vm._e()])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-bottom":"1em"}},[_c('div',{staticClass:"col-2",staticStyle:{"padding-left":"0"}},[_c('button',{staticClass:"form-control col-10",on:{"click":_vm.open_full}},[_vm._v("View Form")])])]),_vm._v(" "),_c('div',{staticClass:"col-12 framewrapper combine_wrapper"},[_c('div',{staticClass:"scroll_frame combine_scroll_frame",staticStyle:{"height":"100%!important","width":"100%!important","padding-left":"0","padding-right":"0"}},[_c('iframe',{staticClass:"col-12 ios_frame combine_ios_frame",staticStyle:{"height":"100%!important","width":"100%!important","padding-left":"0","padding-right":"0"},attrs:{"src":_vm.iframe}}),_c('br')])])])]):_vm._e(),_vm._v(" "),(_vm.e3)?_c('div',[((_vm.entry==3)&&(_vm.sub_view=='regular'))?_c('div',{staticClass:"inner_card_bd"},[_c('div',{staticClass:"col-12 score",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-2"},[_vm._v("Category")]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_vm._v("%")]),_vm._v(" "),_c('div',{staticClass:"col-8",staticStyle:{"display":"flex","flex-direction":"row"}},_vm._l((_vm.counter_company),function(n){return _c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_stat[n-1]),expression:"company_stat[n-1]"}],staticClass:"form-control select company_name",style:('width:'+(100/_vm.counter_company)+'%;'),on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.company_stat, n-1, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.DQ(n-1)}]}},[_c('option',{attrs:{"value":"active"}},[_vm._v(_vm._s(_vm.company[n-1]))]),_vm._v(" "),_c('option',{attrs:{"value":"DQ"}},[_vm._v("[DQ]"+_vm._s(_vm.company[n-1]))])])}),0)]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"col-12 score",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-2 tag"},[_vm._v(_vm._s(_vm.score_cat[0]))]),_vm._v(" "),_c('div',{staticClass:"col-2 tag"},[_vm._v(_vm._s(_vm.score_percentage[0])+"%")]),_vm._v(" "),_c('div',{staticClass:"col-8",staticStyle:{"display":"flex","flex-direction":"row"}},_vm._l((_vm.counter_company),function(c){return _c('div',{style:('width:'+(95/_vm.counter_company)+'%;text-align:center;margin-left:2.5%;margin-right:2.5%')},[(_vm.company_stat[c-1]=='active')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.score_rank[0][c-1]),expression:"score_rank[0][c-1]"}],class:{'form-control':true, 'unassign':((_vm.score_rank[0][c-1]<1)||(_vm.score_rank[0][c-1]==''))},attrs:{"type":"number","min":"1","max":_vm.counter_company-_vm.DQ_counter,"onfocus":"this.value=''"},domProps:{"value":(_vm.score_rank[0][c-1])},on:{"change":_vm.cal_sum,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.score_rank[0], c-1, $event.target.value)}}}):_vm._e()])}),0)]),_vm._v(" "),_vm._l((_vm.cat_list.length-1),function(n){return _c('div',{staticClass:"col-12 score",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-2 tag"},[_vm._v(_vm._s(_vm.score_cat[n]))]),_vm._v(" "),_c('div',{staticClass:"col-2 tag"},[_vm._v(_vm._s(_vm.score_percentage[n])+"%")]),_vm._v(" "),_c('div',{staticClass:"col-8",staticStyle:{"display":"flex","flex-direction":"row"}},_vm._l((_vm.counter_company),function(c){return _c('div',{style:('width:'+(95/_vm.counter_company)+'%;text-align:center;margin-left:2.5%;margin-right:2.5%')},[(_vm.company_stat[c-1]=='active')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.score_rank[n][c-1]),expression:"score_rank[n][c-1]"}],class:{'form-control':true, 'unassign':(_vm.score_rank[n][c-1]<1)||(_vm.score_rank[n][c-1]=='')},attrs:{"type":"number","min":"1","max":_vm.counter_company-_vm.DQ_counter,"onfocus":"this.value=''"},domProps:{"value":(_vm.score_rank[n][c-1])},on:{"change":_vm.cal_sum,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.score_rank[n], c-1, $event.target.value)}}}):_vm._e()])}),0)])}),_vm._v(" "),_c('div',{staticClass:"col-12 score",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-2 tag"}),_vm._v(" "),_c('div',{staticClass:"col-2 tag"},[_vm._v("Sum")]),_vm._v(" "),_c('div',{staticClass:"col-8",staticStyle:{"display":"flex","flex-direction":"row"}},_vm._l((_vm.counter_company),function(n){return _c('div',{style:('width:'+(95/_vm.counter_company)+'%;text-align:center;margin-left:2.5%;margin-right:2.5%')},[(_vm.company_stat[n-1]=='active')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sum[n-1]),expression:"sum[n-1]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","readonly":""},domProps:{"value":(_vm.sum[n-1])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.sum, n-1, $event.target.value)}}}):_vm._e()])}),0)]),_vm._v(" "),(_vm.live_sign)?_c('div',{staticClass:"col-12",staticStyle:{"display":"flex","flex-direction":"row","margin-top":"2em"}},[_c('div',{staticClass:"col-3"}),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('VueSignaturePad',{ref:"signaturePad",attrs:{"id":"signature","width":"100%","height":"200px"}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"0.5em","margin-left":"30%","margin-right":"30%"}},[_c('button',{staticClass:"btn btn-outline-secondary float-right",attrs:{"type":"button"},on:{"click":_vm.undo}},[_vm._v("\r\n                                    Undo\r\n                                ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary float-left",attrs:{"type":"submit"}},[_vm._v("\r\n                                    Sign\r\n                                ")])])],1),_vm._v(" "),_c('div',{staticClass:"col-3"})]):_vm._e(),_vm._v(" "),(!_vm.live_sign)?_c('div',{staticClass:"col-8",staticStyle:{"margin-top":"2em"}},[_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col col-md-12"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[(_vm.signed==false)?_c('div',[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em"}},[_vm._v("    \r\n                                        Signature Security Code : \r\n                                    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"form-control",staticStyle:{"width":"10em","margin-right":"1em"},attrs:{"type":"password"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{ref:"submitcode",staticClass:"form-control",staticStyle:{"width":"10em"},attrs:{"type":"button"},on:{"click":_vm.post_ssc}},[_vm._v("Sign now !")])])]):_vm._e(),_vm._v(" "),(_vm.signed)?_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('label',{staticClass:"form-control-label",staticStyle:{"margin-right":"1em","padding-top":"0.4em","margin-top":"2.5em"}},[_vm._v("    \r\n                                    Signature \r\n                                ")]),_vm._v(" "),_c('img',{staticStyle:{"width":"auto","height":"5em","border-bottom":"1px solid black","margin-left":"0.5em"},attrs:{"src":_vm.sign_data[0].signature}})]):_vm._e()])])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}},[_vm._v(_vm._s(_vm.message))])]):_vm._e()],2):_vm._e()]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[(_vm.form)?_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\r\n            ")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.previous}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\r\n            ")])])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"250px","top":"250px","box-shadow":"#888888"}},[(_vm.hv_user)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.user_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item)}}},[_c('td',[_c('a',{attrs:{"href":"","id":props.item.username},on:{"click":function($event){$event.preventDefault();return _vm.select_user(props.item.name)}}},[_vm._v("Select")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,2485997670)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b_view_first"}),_vm._v(" "),_c('div',{staticClass:"b_view_first_char",staticStyle:{"top":"-1.2rem"}},[_vm._v("E")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("dit")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Declaration Form")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b2_first"}),_vm._v(" "),_c('div',{staticClass:"b2_first_char",staticStyle:{"left":"2.35rem","top":"-0.5rem"}},[_vm._v("D")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("eclaration")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Sign/View Form")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b_view_first"}),_vm._v(" "),_c('div',{staticClass:"b_view_first_char",staticStyle:{"top":"-1.2rem"}},[_vm._v("E")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("dit")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Score Category")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b3_first"}),_vm._v(" "),_c('div',{staticClass:"b3_first_char",staticStyle:{"left":"2.8rem"}},[_vm._v("S")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("core")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Enter Score")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b4_first"}),_vm._v(" "),_c('div',{staticClass:"b4_first_char",staticStyle:{"left":"2.1rem"}},[_vm._v("C")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ombined")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("View Combined Score Sheet")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b_ssb_first"}),_vm._v(" "),_c('div',{staticClass:"b_ssb_first_char",staticStyle:{"left":"3.85rem"}},[_vm._v("I")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ndividual")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("View score sheet")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner"},[_c('div',{staticClass:"flex",staticStyle:{"position":"relative"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"hexagon b_view_first"}),_vm._v(" "),_c('div',{staticClass:"b_view_first_char",staticStyle:{"top":"-1.25rem","left":"2.5rem"}},[_vm._v("S")])]),_vm._v(" "),_c('div',{staticClass:"hex_subtext"},[_vm._v("ummary")]),_vm._v(" "),_c('div',{staticClass:"hex_legen"},[_vm._v("Summary & approval Record")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4"},[_c('label',{staticClass:"form-control-label"},[_vm._v("IMC Manager")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Principal (Secondary)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Principal (Primany)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4"},[_c('label',{staticClass:"form-control-label"},[_vm._v("Principal (Kindergarden)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4"},[_c('label',{staticClass:"form-control-label"},[_vm._v("PTA Representative")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4"},[_c('label',{staticClass:"form-control-label"},[_vm._v("SGM")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tender_meeting_mat_vue__ = __webpack_require__(1243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tender_meeting_mat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tender_meeting_mat_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tender_meeting_mat_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tender_meeting_mat_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07545e0b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tender_meeting_mat_vue__ = __webpack_require__(1522);
function injectStyle (ssrContext) {
  __webpack_require__(1518)
  __webpack_require__(1520)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07545e0b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tender_meeting_mat_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07545e0b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tender_meeting_mat_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=21.build.js.map