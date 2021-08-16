webpackJsonp([25],{

/***/ 1267:
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

exports.default = {
    data: function data() {
        return {
            exc_f6: true,
            row: 5,
            col: 9,
            leave_reason: 'sick',
            open_sub: false,
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }],
            mode: 'sup',
            hv_user: false,
            key: '',
            hv_record: false,
            record_id: '',
            reply_wrapper: false,
            apply_day: '',
            apply_session: '',
            ava_date_list: [],
            daysess: '',
            inner_teacher: '',
            inner_day: '',
            inner_session: '',
            inner_period: '',
            inner_class: '',
            inner_location: '',
            inner_subject: '',
            x_margin: ['22.5%', '38.2%', '53.9%', '36.5%', '51.2%', '66.9%'],
            inner_margin: '',
            css_cls: [],
            dp_period: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            ready_change: false,
            by_day: ['1', '2', '3', '4', '5', '6'],
            day_list: ['', '', '', '', '', ''],
            order: 'day',
            tmp_date: '',
            message: [],
            swap_loc: [],
            swap_sub: [],
            swap_date: [],
            swap_day: [],
            swap_session: [],
            old_session: '',
            original_date: '',
            cycle_date: [],
            loc_list: [],
            app_type: 'swap',
            subject_list: [],
            subject_code: '',
            type: 'official',
            ava_list: [],
            select_day: '',
            select_session: '',
            open_list: false,
            tdy_date: '',
            style: [],
            tdy_day: '',
            lesson: [], //format : lesson[session][day]
            subject: [],
            location: [],

            class_a: [],
            swap_id: [],
            ready: false,
            uidata: [],
            ui_sub: [],
            curr_username: '',
            curr_userid: ''
        };
    },

    watch: {
        tdy_date: function tdy_date(newDate, oldDate) {
            this.original_date = oldDate;
        },
        tmp_date: function tmp_date(newDate, oldDate) {
            this.original_date = oldDate;
        }
    },
    created: async function created() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.tdy_date = today;
        await this.check_sub_date();
        var i = 0;
        var j = 0;
        for (i = 0; i < this.col; i++) {
            this.message[i] = [];
            this.style[i] = [];
            this.lesson[i] = [];
            this.subject[i] = [];
            this.location[i] = [];
            this.class_a[i] = [];
            this.css_cls[i] = [];
            this.swap_id[i] = [];
            for (j = 0; j < this.col; j++) {
                this.css_cls[i][j] = '';
                this.message[i][j] = '';
                this.style[i][j] = 'pointer-events:none';
                this.lesson[i][j] = '';
                this.subject[i][j] = '';
                this.location[i][j] = '';
                this.class_a[i][j] = '';
                this.swap_id[i][j] = '';
            }
        }
        await this.fetch_cycle();
        await this.fetch_subject();
        await this.fetch_loc();
        //await this.fetch_timetable();
        //await this.check_overlay();
        await this.new_day();
        this.ready_change = true;
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        fetch_exc_f6_data: function fetch_exc_f6_data() {
            this.exc_f6 = !this.exc_f6;
            if (this.curr_userid != '') {
                this.fetch_timetable();
            }
        },
        select_user: async function select_user(username, name) {
            this.curr_username = name;
            this.curr_userid = username;
            this.key = name;
            this.hv_record = false;
            await this.fetch_timetable();
            await this.new_day();
        },
        search_user: async function search_user() {
            var _this = this;

            var formData = new FormData();
            formData.append('key', this.key);
            await axios.post('subsitude/sub/backend/search_user.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this.recep_data = response.data;
                    _this.hv_record = true;
                } else {
                    _this.hv_record = false;
                }
            });
        },
        check_overlay: async function check_overlay() {
            var _this2 = this;

            var i = 0;
            for (i = 0; i < this.row; i++) {
                var formData = new FormData();
                formData.append('cycle_date', this.cycle_date[i]);
                formData.append('sel_user', this.curr_userid);
                await axios.post('subsitude/sub/backend/fetch_leave_sec.php', formData).then(function (response) {
                    if (response.data != 'empty') {
                        var n = 0;
                        var k = 0; //day
                        var s = 0; //session
                        var l = 0;
                        for (l = 0; l < response.data.length; l++) {
                            if (_this2.order == 'day') {
                                k = response.data[l].day;
                                s = response.data[l].session;
                            } else if (_this2.order == 'date') {
                                for (n = 0; n < _this2.row; n++) {
                                    if (response.data[l].date == _this2.cycle_date[n]) {
                                        k = n + 1;
                                    }
                                }
                                s = response.data[l].session;
                            }
                            _this2.subject[k - 1][s] = response.data[l].subject;
                            _this2.class_a[k - 1][s] = response.data[l].class;
                            _this2.location[k - 1][s] = response.data[l].location;
                            _this2.message[k - 1][s] = ''; //'Leave type : '+response.data[l].app_type+' with '+response.data[l].assigned_id;
                            if (response.data[l].app_type == 'sup') {
                                _this2.style[k - 1][s] = 'background-color:rgb(170, 128, 255);color:rgba(255,255,255,0.8);pointer-events:none';
                            } else if (response.data[l].app_type == 'swap') {
                                if (response.data[l].stat == 'pending') {
                                    _this2.style[k - 1][s] = '';
                                    _this2.css_cls[k - 1][s] = 'reply';
                                } else {
                                    _this2.css_cls[k - 1][s] = '';
                                    _this2.style[k - 1][s] = 'background-color:rgba(255,0,0,0.85);color:rgba(255, 255, 255, 0.85);pointer-events:none';
                                }
                            }
                        }
                    }
                });
            }
        },
        fetch_cycle: async function fetch_cycle() {
            var _this3 = this;

            await axios.get('subsitude/sub/backend/fetch_cycle.php').then(function (response) {
                if (response.data != 'empty') {
                    _this3.tdy_day = response.data[0].day;
                    var tmp_day = Number(_this3.tdy_day) - 1;
                    var i = 0;
                    var clr = '';
                    for (i = 0; i < _this3.col; i++) {
                        if (i % 2 == 0) {
                            clr = 'rgba(145, 255, 156, 0.75)';
                        } else {
                            clr = 'rgba(178, 255, 186, 0.75)';
                        }
                        _this3.style[tmp_day][i] = 'cursor:pointer;background-color:' + clr;
                    }
                }
            });
        },
        fetch_subject: async function fetch_subject() {
            var _this4 = this;

            await axios.get('subsitude/sub/backend/fetch_subject.php').then(function (response) {
                _this4.subject_list = response.data;
                _this4.subject_code = _this4.subject_list[0].subject;
            });
        },
        fetch_loc: async function fetch_loc() {
            var _this5 = this;

            await axios.get('subsitude/sub/backend/fetch_loc.php').then(function (response) {
                _this5.loc_list = response.data;
            });
        },
        fetch_timetable: async function fetch_timetable() {
            var _this6 = this;

            var formData = new FormData();
            formData.append('curr_id', this.curr_userid);
            await axios.post('subsitude/sub/backend/fetch_time_table.php', formData).then(function (response) {
                var i = 0;
                var j = 0;
                var counter = 0;
                for (i = 0; i < _this6.row; i++) {
                    for (j = 0; j < _this6.col; j++) {
                        _this6.lesson[i][j] = response.data[counter].subject;
                        if (_this6.lesson[i][j] == '') {
                            _this6.check_sub_record(i, j);
                        } else {
                            _this6.class_a[i][j] = response.data[counter].class;
                            _this6.subject[i][j] = response.data[counter].subject;
                            _this6.location[i][j] = response.data[counter].classroom;
                        }
                        var check_les = _this6.class_a[i][j];
                        if (_this6.exc_f6 && check_les.indexOf("6") > -1) {
                            _this6.lesson[i][j] = '';
                            _this6.class_a[i][j] = '';
                            _this6.subject[i][j] = '';
                            _this6.location[i][j] = '';
                        }
                        counter++;
                    }
                }
                _this6.hv_user = true;
            });
        },
        fetch_day: async function fetch_day(i) {
            var _this7 = this;

            var date = this.swap_date[i];
            var old_date = this.tmp_date;
            var formData = new FormData();
            formData.append('date', this.swap_date[i]);
            await axios.post('subsitude/sub/backend/new_day.php', formData).then(function (response) {
                if (response.data == 'empty') {
                    _this7.$alert('Selected Date is not a cycle Day !');
                    _this7.swap_date[i] = old_date;
                    _this7.$forceUpdate();
                } else {
                    _this7.swap_day[i] = response.data[0].day;
                    _this7.tmp_date = _this7.swap_date[i];
                    _this7.$forceUpdate();
                }
            });
        },
        new_day: async function new_day() {
            var _this8 = this;

            var tmp = '';
            if (this.order == 'day') {
                var formData = new FormData();
                formData.append('date', this.tdy_date);
                await axios.post('subsitude/sub/backend/new_day.php', formData).then(function (response) {
                    if (!(response.data == 'empty')) {
                        tmp = '';
                        _this8.tdy_day = response.data[0].day;
                        var tmp_day = Number(_this8.tdy_day) - 1;
                        var i = 0;
                        var clr = '';
                        var n = 0;
                        var m = 0;
                        var ptevent = '';
                        for (n = 0; n < _this8.row; n++) {
                            for (m = 0; m < _this8.col; m++) {
                                _this8.style[n][m] = 'pointer-events:none';
                                _this8.css_cls[n][m] = '';
                            }
                        }
                        for (i = 0; i < _this8.col; i++) {
                            if (i % 2 == 0) {
                                clr = 'rgba(145, 255, 156, 0.75)';
                            } else {
                                clr = 'rgba(178, 255, 186, 0.75)';
                            }
                            if (_this8.lesson[tmp_day][i] == '') {
                                ptevent = 'pointer-events:none;';
                            } else {
                                ptevent = 'cursor:pointer;';
                            }
                            _this8.style[tmp_day][i] = ptevent + 'background-color:' + clr;
                        }
                    } else {
                        tmp = 'empty';
                        _this8.$alert('Selected Date is not a cycle Day !');
                        _this8.tdy_date = _this8.original_date;
                        /*
                        var k=0;
                        var l=0;
                        for(k=0;k<this.col;k++){
                            for(l=0;l<this.col;l++){
                                this.style[k][l] = 'pointer-events:none';
                            }
                            
                        }*/
                    }
                });
                if (tmp != 'empty') {
                    await this.check_sub_date();
                    await this.reload_timetable();
                    await this.check_overlay();
                }
                this.$forceUpdate();
            }
        },
        reload_timetable: async function reload_timetable() {
            var _this9 = this;

            if (this.order == 'day') {
                var formData = new FormData();
                formData.append('curr_id', this.curr_userid);
                await axios.post('subsitude/sub/backend/fetch_time_table.php', formData) //day
                .then(function (response) {
                    if (response.data != 'empty') {
                        var i = 0;
                        var j = 0;
                        var counter = 0;
                        for (i = 0; i < _this9.row; i++) {
                            for (j = 0; j < _this9.col; j++) {
                                _this9.lesson[i][j] = response.data[counter].subject;
                                if (_this9.lesson[i][j] == '') {
                                    _this9.check_sub_record(i, j);
                                } else {
                                    _this9.message[i][j] = '';
                                    _this9.class_a[i][j] = response.data[counter].class;
                                    _this9.subject[i][j] = response.data[counter].subject;
                                    _this9.location[i][j] = response.data[counter].classroom;
                                }
                                var check_les = _this9.class_a[i][j];
                                if (_this9.exc_f6 && check_les.indexOf("6") > -1) {
                                    _this9.lesson[i][j] = '';
                                    _this9.class_a[i][j] = '';
                                    _this9.subject[i][j] = '';
                                    _this9.location[i][j] = '';
                                }
                                counter++;
                            }
                        }
                    }
                });
            }
        },
        close_overlay: function close_overlay() {
            this.open_list = false;
            this.open_sub = false;
        },
        close_overlay_reply: function close_overlay_reply() {
            this.reply_wrapper = false;
        },
        leave_type: function leave_type() {
            this.old_session = this.select_session;
            if (this.type == 'sick') {
                if (this.select_session != 'Full day') {
                    this.old_session = this.select_session;
                    this.select_session = 'Full Day';
                }
                //this.app_type ='sup';
            } else {
                this.select_session = this.old_session;
                this.app_type = 'swap';
            }
        },
        check_sub_date: async function check_sub_date() {
            var _this10 = this;

            var formData = new FormData();
            formData.append('date', this.tdy_date);
            await axios.post('subsitude/sub/backend/fetch_cycle_date.php', formData).then(function (response) {
                var i = 0;
                for (i = 0; i < response.data.length; i++) {
                    if (!(response.data == 'No cycle day')) {
                        if (!(response.data[i] == undefined) || !(response.data[i] == null)) {
                            var index = response.data[i].day;
                            index = Number(index) - 1;
                            _this10.cycle_date[index] = response.data[i].date;
                        }
                    }
                }
            });
        },
        check_sub_record: async function check_sub_record(i, j) {
            var _this11 = this;

            var formData = new FormData();
            formData.append('curr_teacher', this.curr_userid);
            formData.append('cycle_date', this.cycle_date[i]);
            formData.append('day', i + 1);
            formData.append('session', j);
            await axios.post('subsitude/sub/backend/check_sub_info.php', formData).then(function (response) {
                if (response.data.length > 0) {
                    _this11.message[i][j] = ''; //response.data[0].app_type + ' - ( From : ' + response.data[0].leave_id + ')';
                    _this11.lesson[i][j] = response.data[0].subject;
                    _this11.subject[i][j] = response.data[0].subject;
                    _this11.class_a[i][j] = response.data[0].class;
                    _this11.location[i][j] = response.data[0].location;
                    _this11.css_cls[i][j] = 'request';
                    _this11.style[i][j] = '';
                } else {
                    _this11.css_cls[i][j] = '';
                    _this11.message[i][j] = '';
                    _this11.lesson[i][j] = '';
                    _this11.subject[i][j] = '';
                    _this11.class_a[i][j] = '';
                    _this11.location[i][j] = '';
                }
            });
            this.$forceUpdate();
        },
        sel_mode: function sel_mode(i, j) {
            if (this.mode == 'swap') {
                if (this.css_cls[i][j] == 'ava_lesson') {
                    this.check_swap_date(i, j);
                } else if (this.css_cls[i][j] == 'reply') {
                    this.request_check(i, j);
                } else {
                    this.apply_day = i + 1;
                    this.apply_session = j;
                    this.checkswap(i, j);
                }
            } else {
                this.sub_panel(i, j);
            }
        },
        sub_panel: function sub_panel(i, j) {
            this.leave_reason = 'sick';
            this.inner_day = i + 1;
            this.inner_session = j;
            this.open_sub = true;
        },
        request_check: async function request_check(i, j) {
            var _this12 = this;

            this.inner_margin = "margin-left:" + this.x_margin[i];
            var formData = new FormData();
            formData.append('swap_date', this.cycle_date[i]);
            formData.append('day', i + 1);
            formData.append('session', j);
            await axios.post('subsitude/sub/backend/check_req.php', formData).then(function (response) {
                _this12.record_id = response.data[0].id;
                _this12.inner_day = response.data[0].day;
                _this12.inner_session = response.data[0].session;
                _this12.inner_teacher = response.data[0].name;
                _this12.inner_class = response.data[0].class;
                _this12.inner_subject = response.data[0].old_subject + " → " + response.data[0].subject;
            });
            this.reply_wrapper = true;
        },
        check_swap_date: async function check_swap_date(i, j) {
            var _this13 = this;

            var formData = new FormData();
            var day = this.by_day[i];
            var session = j;
            formData.append('date', this.cycle_date[i]);
            formData.append('day', day);
            formData.append('session', session);
            formData.append('class', this.class_a[i][j]);
            formData.append('teacher', this.swap_id[i][j]);
            await axios.post('subsitude/sub/backend/fetch_ava_day.php', formData).then(function (response) {
                _this13.ava_date_list = response.data;
            });
            this.inner_margin = "margin-left:" + this.x_margin[i];
            this.inner_teacher = this.message[i][j];
            this.inner_class = this.class_a[i][j];
            this.inner_subject = this.subject[i][j];
            this.inner_day = day;
            this.inner_session = session;
            this.open_list = true;
        },
        checkswap: async function checkswap(i, j) {
            var _this14 = this;

            var hasrecord = false;
            if (this.lesson[i][j] != 'Blk2' && this.lesson[i][j] != 'Blk3') {
                await this.new_day();
                var session = j;
                var day = this.by_day[i];
                this.app;
                this.select_day = day;
                this.select_session = session;
                var formData = new FormData();
                formData.append('date', this.cycle_date[i]);
                formData.append('session', session);
                formData.append('day', day);
                formData.append('class', this.class_a[i][j]);
                formData.append('location', this.location[i][j]);
                formData.append('curr_teacher', this.curr_userid);
                formData.append('mode', 1);
                await axios.post('subsitude/sub/backend/swap_info_ui.php', formData).then(function (response) {
                    var x = 0; //day
                    var y = 0; //record
                    var s = 0;
                    var day = '';
                    var period = '';
                    var can_swap = false;
                    for (x = 0; x < _this14.row; x++) {
                        y = 0;
                        _this14.uidata[x] = response.data[x];
                        _this14.ui_sub = _this14.uidata[x];
                        for (y = 0; y < _this14.uidata[x].length; y++) {
                            if (_this14.ui_sub[y].name.length > 0) {
                                s = _this14.ui_sub[y].session;
                                day = _this14.ui_sub[y].day - 1;
                                period = _this14.ui_sub[y].session;
                                _this14.lesson[day][period] = _this14.ui_sub[y].subject;
                                _this14.subject[day][period] = _this14.ui_sub[y].subject;
                                _this14.class_a[day][period] = _this14.ui_sub[y].class;
                                _this14.location[day][period] = _this14.ui_sub[y].classroom;
                                _this14.message[day][period] = _this14.ui_sub[y].name;
                                _this14.swap_id[day][period] = _this14.ui_sub[y].username;
                                _this14.style[day][period] = "";
                                _this14.css_cls[day][period] = 'ava_lesson';
                                can_swap = true;
                            }
                        }
                    }
                    if (can_swap == false) {
                        _this14.$alert('No swap pair available');
                    }
                    _this14.$forceUpdate();
                });
            } else {
                this.$alert('Blk lesson cannot be swapped');
            }
        },
        new_list: async function new_list() {
            var _this15 = this;

            var i = Number(this.select_day) - 1;
            var j = this.select_session;
            var formData = new FormData();
            formData.append('sel_date', this.tdy_date);
            formData.append('session', this.select_session);
            formData.append('day', this.select_day);
            formData.append('app_type', this.app_type);
            formData.append('class', this.class_a[i][j]);
            await axios.post('subsitude/sub/backend/fetch_ava_teacher.php', formData).then(function (response) {
                _this15.ava_list = response.data;
            });
            this.$forceUpdate();
        },
        apply_sub: async function apply_sub() {
            var _this16 = this;

            var formData = new FormData();
            formData.append('exc_f6', this.exc_f6);
            formData.append('date', this.tdy_date);
            formData.append('day', this.inner_day);
            formData.append('session', this.inner_session);
            formData.append('leave_id', this.curr_userid);
            formData.append('leave_name', this.key);
            formData.append('reason', this.leave_reason);
            await axios.post('subsitude/sub/backend/apply_swap_sec_2.php', formData).then(function (response) {
                if (response.data == 'OK') {
                    _this16.$alert('Successfully Applied Leave');
                    location.reload();
                }
            });
        },
        handleSubmit: function handleSubmit() {
            var _this17 = this;

            var formData = new FormData();
            var d = this.inner_day - 1;
            var s = this.inner_session;
            formData.append('exc_f6', this.exc_f6);
            formData.append('curr_id', this.curr_userid);
            formData.append('swap_day', this.inner_day);
            formData.append('swap_session', this.inner_session);
            formData.append('swap_location', this.location[d][s]);
            formData.append('apply_day', this.apply_day);
            formData.append('apply_session', this.apply_session);
            formData.append('class', this.inner_class);
            formData.append('subject', this.inner_subject);
            formData.append('userid', this.swap_id[d][s]);
            formData.append('swap_date', this.swap_date);
            formData.append('apply_date', this.tdy_date);
            axios.post('subsitude/sub/backend/apply_swap_v2.php', formData).then(function (response) {
                if (response.data == "Successfully Submitted Application") {
                    _this17.$alert(response.data);
                    _this17.open_list = false;
                    _this17.new_day();
                } else {
                    _this17.$alert(response.data);
                }
            });
        }
    }
};

/***/ }),

/***/ 1564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1565);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7eb57131", content, true, {});

/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "th[data-v-27ec792c]{width:15.7%;text-align:center;font-size:1.1rem}td[data-v-27ec792c]{padding-left:1.25rem;padding-right:1.25rem;border:2px solid #fff;height:5rem;transition:all .3s ease-in-out}td[data-v-27ec792c]:hover{background-color:rgba(160,237,255,.8)!important}.inner_overlay[data-v-27ec792c]{z-index:5;width:22.5rem;max-height:60%;position:absolute;margin-left:23%;margin-top:10%;top:0;bottom:0;left:0;right:0;background-color:hsla(0,0%,100%,.95);box-shadow:5px 5px 5px 5px hsla(0,0%,83%,.6)}.fa-window-close[data-v-27ec792c]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-27ec792c]:hover{color:#fff}.sub_tr[data-v-27ec792c]{height:5rem!important}.ava_lesson[data-v-27ec792c]{background-color:rgba(255,0,0,.85);color:hsla(0,0%,100%,.85);cursor:pointer}.ava_lesson[data-v-27ec792c]:hover,.darkred[data-v-27ec792c]{background-color:#964142!important}.out_wrapper[data-v-27ec792c]{position:relative}.reply[data-v-27ec792c]{background-color:rgba(255,0,0,.85);color:hsla(0,0%,100%,.85);cursor:pointer}.reply[data-v-27ec792c]:hover{background-color:#964142!important}.request[data-v-27ec792c]{background-color:rgba(255,0,0,.85);color:hsla(0,0%,100%,.85);pointer-events:none}", ""]);

// exports


/***/ }),

/***/ 1566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"position":"relative"}},[_c('form',{attrs:{"id":"form","enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body out_wrapper"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.75rem","padding-right":"0","padding-left":"0"}},[_c('div',{staticClass:"col-3",staticStyle:{"padding-left":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Search User","onfocus":"this.value=''"},domProps:{"value":(_vm.key)},on:{"keyup":_vm.search_user,"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.mode),expression:"mode"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.mode=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_day]}},[_c('option',{attrs:{"value":"swap"}},[_vm._v("Swap")]),_vm._v(" "),_c('option',{attrs:{"value":"sup"}},[_vm._v("Subsititude")])])]),_vm._v(" "),_c('div',{staticClass:"col-3 radio-toolbar"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.exc_f6),expression:"exc_f6"}],attrs:{"type":"checkbox","id":"f6_cb"},domProps:{"checked":Array.isArray(_vm.exc_f6)?_vm._i(_vm.exc_f6,null)>-1:(_vm.exc_f6)},on:{"click":_vm.fetch_exc_f6_data,"change":function($event){var $$a=_vm.exc_f6,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.exc_f6=$$a.concat([$$v]))}else{$$i>-1&&(_vm.exc_f6=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.exc_f6=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"f6_cb"}},[_vm._v("Exclude F6")])]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tdy_date),expression:"tdy_date"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.tdy_date)},on:{"change":_vm.new_day,"input":function($event){if($event.target.composing){ return; }_vm.tdy_date=$event.target.value}}})])]),_vm._v(" "),(_vm.open_list)?_c('div',{staticClass:"inner_overlay",style:(_vm.inner_margin)},[_c('div',{staticClass:"card",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("Swap Info.")]),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})])]),_vm._v(" "),_c('div',{staticClass:"card-body inner_wrapper"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-6 flex"},[_c('label',[_vm._v("Day : ")]),_vm._v(" "+_vm._s(_vm.inner_day))]),_vm._v(" "),_c('div',{staticClass:"col-6 flex"},[_c('label',[_vm._v("Period : ")]),_vm._v(" "+_vm._s(_vm.inner_session))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('label',{staticClass:"col-4"},[_vm._v("Teacher")]),_vm._v(":\n                                "),_c('div',{staticClass:"col-8"},[_vm._v(_vm._s(_vm.inner_teacher))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('label',{staticClass:"col-4"},[_vm._v("Class")]),_vm._v(":\n                                "),_c('div',{staticClass:"col-8"},[_vm._v(_vm._s(_vm.inner_class))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('label',{staticClass:"col-4"},[_vm._v("Subject")]),_vm._v(":\n                                "),_c('div',{staticClass:"col-8"},[_vm._v(_vm._s(_vm.inner_subject))])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('label',{staticClass:"col-4"},[_vm._v("Date")]),_vm._v(":\n                                "),_c('div',{staticClass:"col-8"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.swap_date),expression:"swap_date"}],staticClass:"form-control",attrs:{"size":"4"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.swap_date=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.ava_date_list),function(ava_date){return _c('option',[_vm._v(_vm._s(ava_date.date))])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.handleSubmit}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.close_overlay}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\n                            ")])])])]):_vm._e(),_vm._v(" "),(_vm.open_sub)?_c('div',{staticClass:"inner_overlay",style:(_vm.inner_margin)},[_c('div',{staticClass:"card",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("Leave Application")]),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})])]),_vm._v(" "),_c('div',{staticClass:"card-body inner_wrapper"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12"},[_vm._v("\n                                    "+_vm._s(_vm.key)+"\n                                ")])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.tdy_date}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.inner_day}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.inner_session),expression:"inner_session"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.inner_session=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',[_vm._v("Full Day")]),_vm._v(" "),_c('option',[_vm._v("Morning Session")]),_vm._v(" "),_c('option',[_vm._v("Afternoon Session")]),_vm._v(" "),_vm._l((_vm.col),function(p){return _c('option',{domProps:{"value":(p-1)}},[_vm._v(_vm._s(p))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-7"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.leave_reason),expression:"leave_reason"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.leave_reason=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"sick"}},[_vm._v("Sick Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"sick_waived"}},[_vm._v("Sick Leave (Waived)")]),_vm._v(" "),_c('option',{attrs:{"value":"official"}},[_vm._v("Official Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"maternity"}},[_vm._v("Maternity Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"paternity"}},[_vm._v("Paternity Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"casual"}},[_vm._v("Casual Leave")])])])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":_vm.apply_sub}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                            ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"button"},on:{"click":_vm.close_overlay}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\n                            ")])])])]):_vm._e(),_vm._v(" "),(_vm.hv_user)?_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[(_vm.order=='day'&&this.ready_change)?_c('tr',[_c('th',{staticStyle:{"width":"5.8%"}},[_vm._v("Period")]),_vm._v(" "),_vm._l((_vm.row),function(da){return _c('th',[_vm._v("\n                                Day "+_vm._s((da))+" "),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[da-1]))])])})],2):_vm._e(),_vm._v(" "),(_vm.order=='date'&&this.ready_change)?_c('tr',[_c('th',{staticStyle:{"width":"5.8%"}},[_vm._v("Period")]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[0])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[0]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[1])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[1]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[2])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[2]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[3])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[3]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[4])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[4]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[5])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[5]))])])]):_vm._e()]),_vm._v(" "),_c('tbody',_vm._l((_vm.col),function(i){return _c('tr',{staticClass:"sub_tr"},[_c('td',{staticStyle:{"point-events":"none","width":"5.8%","text-align":"center"}},[_c('b',[_vm._v(_vm._s(_vm.dp_period[i-1]))])]),_vm._v(" "),_vm._l((_vm.row),function(j){return _c('td',{class:_vm.css_cls[j-1][i-1],style:(_vm.style[j-1][i-1]),on:{"click":function($event){_vm.sel_mode((j-1),(i-1))}}},[_c('b',[_vm._v(_vm._s(_vm.subject[j-1][i-1]))]),_c('br'),_vm._v(_vm._s(_vm.message[j-1][i-1])),_c('br'),_vm._v(" "),_c('div',{staticClass:"flex",staticStyle:{"margin-top":"0.55rem"}},[_c('div',{staticStyle:{"float":"left"}},[_vm._v(_vm._s(_vm.class_a[j-1][i-1]))]),_vm._v(" "),_c('div',{staticStyle:{"float":"right","margin-left":"auto"}},[_vm._v(_vm._s(_vm.location[j-1][i-1]))])])])})],2)}),0)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-3 col-md-3",staticStyle:{"position":"fixed","right":"25%","top":"25%","box-shadow":"#888888"}},[(_vm.hv_record)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.recep_data,"search":_vm.search,"rows-per-page-items":[10]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_user(props.item.username,props.item.name)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))])])]}}],null,false,2086653883)}):_vm._e()],1)]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Lesson Swap")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticStyle:{"padding-top":"0.35rem"}},[_vm._v("Date: ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticStyle:{"padding-top":"0.35rem"}},[_vm._v("Day: ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticStyle:{"padding-top":"0.35rem"}},[_vm._v("Period: ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-5"},[_c('label',{staticStyle:{"padding-top":"0.35rem"}},[_vm._v("Reason: ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_sec_2_vue__ = __webpack_require__(1267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_sec_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_sec_2_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_sec_2_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_sec_2_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27ec792c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_sec_2_vue__ = __webpack_require__(1566);
function injectStyle (ssrContext) {
  __webpack_require__(1564)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27ec792c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_sec_2_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27ec792c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_sec_2_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=25.build.js.map